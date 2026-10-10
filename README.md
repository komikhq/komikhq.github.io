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
