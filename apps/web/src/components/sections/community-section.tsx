import {
  ArrowUpRight,
  GithubLogo,
  GlobeHemisphereWest,
} from "@phosphor-icons/react"
import { Badge } from "@komikhq/ui/components/badge"
import { Button } from "@komikhq/ui/components/button"

export function CommunitySection() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:pb-24">
      <div
        className="overflow-hidden rounded-3xl border border-border/70 bg-secondary/45 p-7 sm:p-10 lg:p-12"
        id="community"
      >
        <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <Badge className="rounded-full" variant="outline">
              Open to explore
            </Badge>
            <h2 className="mt-4 max-w-xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Follow what KomikHQ is building.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Visit the website to read, or explore GitHub to discover the
              projects and community behind it.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:min-w-48">
            <Button asChild>
              <a href="https://komikhq.com" rel="noreferrer" target="_blank">
                <GlobeHemisphereWest />
                komikhq.com
                <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://github.com/komikhq"
                rel="noreferrer"
                target="_blank"
              >
                <GithubLogo weight="fill" />
                GitHub organization
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
