# KomikHQ

The KomikHQ organization homepage is a responsive, single-page React and Vite
site. It introduces the organization, its digital comic platform, and its
public projects.

## Development

Requirements: Node.js 20.19 or newer and pnpm 11.25.0.

```bash
pnpm install
pnpm dev
```

The website runs from `apps/web`. Shared shadcn UI components and theme tokens
live in `packages/ui`.

## UI registry prototype

The registry includes all 61 shared UI components and the shared mobile hook
from `packages/ui`.
Components use the consuming project's existing `cn` helper at `@/lib/utils`,
avoiding overwriting its standard shadcn utility file. Build registry JSON into
the website's Pages output:

```bash
pnpm --filter @komikhq/ui registry:build
```

After deployment, install an item in a shadcn project with:

```bash
pnpm dlx shadcn@latest add @komikhq/button
```

Install other components by replacing `button` with the item name from
`packages/ui/registry.json`. The registry URL is configured in
`apps/web/components.json`. A consuming project must have shadcn configured
with `components` and `utils` aliases and the normal shadcn global stylesheet.

## Checks

```bash
pnpm --filter web lint
pnpm --filter web typecheck
pnpm --filter web build
```

## Deployment

The `Deploy GitHub Pages` workflow builds `apps/web` and deploys its `dist`
directory when changes are pushed to `main`, or when manually dispatched.
Enable GitHub Pages with **GitHub Actions** as the build and deployment source
in the repository settings. Vite reads the Pages `base_url` during the build
to generate `sitemap.xml`, `robots.txt`, canonical URLs, and social preview
image URLs for the active GitHub Pages or custom domain. For a local production
build, set `VITE_SITE_URL` to the site's absolute URL.

## KomikHQ links

- [KomikHQ website](https://komikhq.com)
- [GitHub organization](https://github.com/komikhq)
- [KomikHQ web reader](https://github.com/komikhq/komikhq)
- [KomikHQ Media](https://github.com/komikhq/media)
- [Organization profile and community files](https://github.com/komikhq/.github)
- [KomikHQ Clipper](https://github.com/komikhq/komikhq-clipper)
