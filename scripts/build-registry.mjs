import { execFileSync } from "node:child_process"
import { readFile, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const repositoryRoot = path.resolve(scriptDirectory, "..")
const packageDirectory = path.join(repositoryRoot, "packages/ui")
const sourceDirectory = path.join(packageDirectory, "src")
const outputDirectory = path.join(repositoryRoot, "apps/web/public/r")
const packageJson = JSON.parse(
  await readFile(path.join(packageDirectory, "package.json"), "utf8")
)
const packageNames = new Set(Object.keys(packageJson.dependencies))
const internalImportPattern = /^@komikhq\/ui\/(components|hooks)\/([\w-]+)$/
const ignoredDependencies = new Set(["react", "react-dom"])

function getImports(source) {
  return [...source.matchAll(/\b(?:from\s*|import\s*)["']([^"']+)["']/g)].map(
    ([, specifier]) => specifier
  )
}

function getPackageName(specifier) {
  if (specifier.startsWith("@")) {
    return specifier.split("/").slice(0, 2).join("/")
  }
  return specifier.split("/")[0]
}

function getTarget(fileType, name) {
  if (fileType === "registry:hook") {
    return `hooks/${name}.ts`
  }
  return `components/ui/${name}.tsx`
}

async function getSourceFiles(directory) {
  return (await readdir(directory, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && /\.(tsx?|jsx?)$/.test(entry.name))
    .map((entry) => entry.name)
    .sort()
}

const items = []

for (const [directory, registryType] of [
  ["components", "registry:ui"],
  ["hooks", "registry:hook"],
]) {
  const filenames = await getSourceFiles(path.join(sourceDirectory, directory))

  for (const filename of filenames) {
    const name = path.basename(filename, path.extname(filename))
    const sourcePath = `src/${directory}/${filename}`
    const source = await readFile(path.join(packageDirectory, sourcePath), "utf8")
    const registryDependencies = new Set()
    const dependencies = new Set()

    for (const specifier of getImports(source)) {
      const internalImport = specifier.match(internalImportPattern)

      if (internalImport) {
        const [, , internalName] = internalImport
        registryDependencies.add(`@komikhq/${internalName}`)
        continue
      }

      if (
        specifier.startsWith(".") ||
        specifier.startsWith("@/") ||
        specifier.startsWith("node:") ||
        specifier === "cn"
      ) {
        continue
      }

      const dependency = getPackageName(specifier)
      if (ignoredDependencies.has(dependency)) {
        continue
      }
      if (!packageNames.has(dependency)) {
        throw new Error(
          `Import "${specifier}" in ${sourcePath} is not declared in packages/ui/package.json.`
        )
      }
      dependencies.add(dependency)
    }

    items.push({
      name,
      type: registryType,
      title: name
        .split("-")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" "),
      description: `KomikHQ ${registryType === "registry:hook" ? "hook" : "UI component"}: ${name}.`,
      ...(dependencies.size
        ? { dependencies: [...dependencies].sort() }
        : {}),
      ...(registryDependencies.size
        ? { registryDependencies: [...registryDependencies].sort() }
        : {}),
      files: [
        {
          path: `src/${directory}/${filename}`,
          type: registryType,
          target: getTarget(registryType, name),
        },
      ],
    })
  }
}

const itemNames = new Set(items.map(({ name }) => name))
for (const item of items) {
  for (const dependency of item.registryDependencies ?? []) {
    const dependencyName = dependency.replace(/^@komikhq\//, "")
    if (!itemNames.has(dependencyName)) {
      throw new Error(
        `Registry item "${item.name}" references missing item "${dependency}".`
      )
    }
  }
}

const duplicateNames = items
  .map(({ name }) => name)
  .filter((name, index, names) => names.indexOf(name) !== index)

if (duplicateNames.length) {
  throw new Error(`Duplicate registry item names: ${duplicateNames.join(", ")}`)
}

const registry = {
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  name: "komikhq",
  homepage: "https://github.com/komikhq/komikhq.github.io",
  items,
}

await writeFile(
  path.join(packageDirectory, "registry.json"),
  `${JSON.stringify(registry, null, 2)}\n`
)

execFileSync(
  "pnpm",
  [
    "exec",
    "shadcn",
    "build",
    "registry.json",
    "--cwd",
    ".",
    "--output",
    "../../apps/web/public/r",
  ],
  { cwd: packageDirectory, stdio: "inherit" }
)

for (const item of items) {
  const itemPath = path.join(outputDirectory, `${item.name}.json`)
  const builtItem = JSON.parse(await readFile(itemPath, "utf8"))

  for (const file of builtItem.files ?? []) {
    if (typeof file.content !== "string") {
      continue
    }

    file.content = file.content
      .replace(
        /@komikhq\/ui\/components\/([\w-]+)/g,
        "@/components/ui/$1"
      )
      .replace(/@komikhq\/ui\/hooks\/([\w-]+)/g, "@/hooks/$1")
  }

  const unresolved = JSON.stringify(builtItem).match(/@komikhq\/ui\//)
  if (unresolved) {
    throw new Error(
      `Unresolved workspace import remains in registry item "${item.name}".`
    )
  }

  await writeFile(itemPath, `${JSON.stringify(builtItem, null, 2)}\n`)
}

console.log(`Built ${items.length} KomikHQ registry items.`)
