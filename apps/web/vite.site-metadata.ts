import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"
import type { Plugin, ResolvedConfig } from "vite"

const DEFAULT_SITE_URL = "https://komikhq.github.io"

function normalizeSiteUrl(value: string): string {
  const url = new URL(value)

  if (url.protocol !== "https:" && url.protocol !== "http:") {
    throw new Error(`Unsupported site URL protocol: ${url.protocol}`)
  }

  return `${url.origin}${url.pathname.replace(/\/+$/, "")}`
}

function getGitHubPagesUrl(): string {
  const repository = process.env.GITHUB_REPOSITORY
  if (!repository) {
    return DEFAULT_SITE_URL
  }

  const [owner, name] = repository.split("/")
  if (!owner || !name) {
    throw new Error(`Invalid GITHUB_REPOSITORY value: ${repository}`)
  }

  const host = `${owner.toLowerCase()}.github.io`
  const pathPrefix =
    name.toLowerCase() === host ? "" : `/${encodeURIComponent(name)}`

  return `https://${host}${pathPrefix}`
}

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
}

export function siteMetadataPlugin(): Plugin {
  let config: ResolvedConfig
  let siteUrl = DEFAULT_SITE_URL

  return {
    name: "komikhq-site-metadata",
    configResolved(resolvedConfig) {
      config = resolvedConfig
      const configuredUrl =
        resolvedConfig.env.VITE_SITE_URL ?? process.env.VITE_SITE_URL
      siteUrl = normalizeSiteUrl(configuredUrl || getGitHubPagesUrl())
    },
    transformIndexHtml(html) {
      return html.replaceAll("__SITE_URL__", siteUrl)
    },
    async closeBundle() {
      if (config.command !== "build") {
        return
      }

      const outputDirectory = path.resolve(
        config.root,
        config.build.outDir
      )
      const sitemapUrl = `${siteUrl}/`
      const sitemap = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        "  <url>",
        `    <loc>${escapeXml(sitemapUrl)}</loc>`,
        `    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>`,
        "  </url>",
        "</urlset>",
        "",
      ].join("\n")
      const robots = [
        "User-agent: *",
        "Allow: /",
        "",
        `Sitemap: ${siteUrl}/sitemap.xml`,
        "",
      ].join("\n")

      await mkdir(outputDirectory, { recursive: true })
      await Promise.all([
        writeFile(path.join(outputDirectory, "sitemap.xml"), sitemap),
        writeFile(path.join(outputDirectory, "robots.txt"), robots),
      ])
    },
  }
}
