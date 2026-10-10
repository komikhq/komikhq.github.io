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

The first registry release includes `button`, `card`, and `badge`. Components
use the consuming project's existing `cn` helper at `@/lib/utils`, avoiding
overwriting its standard shadcn utility file. Build registry JSON into the
website's Pages output:

```bash
pnpm --filter @komikhq/ui registry:build
```

After deployment, install an item in a shadcn project with:

```bash
pnpm dlx shadcn@latest add @komikhq/button
```

The registry URL is configured in `apps/web/components.json`. Components
install into the consuming project's configured aliases, so its `components`
and `utils` aliases must be set. This initial compatibility pilot is not yet
the full component catalog.

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
in the repository settings.

## KomikHQ links

- [KomikHQ website](https://komikhq.com)
- [GitHub organization](https://github.com/komikhq)
- [KomikHQ web reader](https://github.com/komikhq/komikhq)
- [KomikHQ Media](https://github.com/komikhq/media)
- [Organization profile and community files](https://github.com/komikhq/.github)
- [KomikHQ Clipper](https://github.com/komikhq/komikhq-clipper)
