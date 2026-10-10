import {
  ArrowDown,
  ArrowUpRight,
  BookOpenText,
  Code,
  GlobeHemisphereWest,
  Moon,
} from "@phosphor-icons/react"
import { Badge } from "@komikhq/ui/components/badge"
import { Button } from "@komikhq/ui/components/button"
import { Card, CardContent, CardHeader } from "@komikhq/ui/components/card"

export function HeroSection() {
  return (
    <section className="relative mx-auto grid min-h-[640px] max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
      <div className="relative z-10">
        <Badge className="mb-7 gap-2 rounded-full px-3 py-1" variant="outline">
          <span className="size-1.5 rounded-full bg-primary" />
          Digital comics engineering
        </Badge>
        <h1 className="max-w-2xl font-heading text-5xl leading-[1.06] font-semibold tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl">
          Stories, closer.{" "}
          <span className="text-primary">Technology, more open.</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          KomikHQ builds digital comic reading experiences and modern web
          infrastructure with care for both readers and creators.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href="https://komikhq.com" rel="noreferrer" target="_blank">
              Visit KomikHQ
              <ArrowUpRight />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#projects">
              Explore projects
              <ArrowDown />
            </a>
          </Button>
        </div>
        <div className="mt-12 flex items-center gap-3 text-sm text-muted-foreground">
          <div aria-hidden="true" className="flex -space-x-2">
            <span className="grid size-9 place-items-center rounded-full border-2 border-background bg-secondary text-foreground">
              <BookOpenText size={16} />
            </span>
            <span className="grid size-9 place-items-center rounded-full border-2 border-background bg-secondary text-foreground">
              <Code size={16} />
            </span>
            <span className="grid size-9 place-items-center rounded-full border-2 border-background bg-secondary text-foreground">
              <GlobeHemisphereWest size={16} />
            </span>
          </div>
          <span>Products, platforms, and community in one ecosystem.</span>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
        <div className="absolute -inset-8 rounded-[3rem] bg-primary/10 blur-3xl" />
        <Card className="relative overflow-hidden rounded-3xl border-border/80 bg-card/90 shadow-2xl shadow-foreground/5">
          <CardHeader className="border-b border-border/70 p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div aria-hidden="true" className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-primary/80" />
                <span className="size-2.5 rounded-full bg-muted-foreground/25" />
                <span className="size-2.5 rounded-full bg-muted-foreground/25" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                komikhq.com
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 p-6 sm:p-8">
            <div className="rounded-2xl bg-secondary/70 p-5 sm:p-6">
              <span className="text-xs font-medium tracking-[0.15em] text-primary uppercase">
                Digital comics, made comfortable
              </span>
              <h2 className="mt-3 max-w-sm font-heading text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
                Stories that flow, without distractions.
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                Find a series, explore the catalog, and keep reading in an
                experience focused on the story.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border/70 p-4">
                <BookOpenText
                  className="text-primary"
                  size={20}
                  weight="duotone"
                />
                <p className="mt-4 text-sm font-medium">Reader-first</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Designed around a comfortable reading experience.
                </p>
              </div>
              <div className="rounded-2xl border border-border/70 p-4">
                <GlobeHemisphereWest
                  className="text-primary"
                  size={20}
                  weight="duotone"
                />
                <p className="mt-4 text-sm font-medium">Edge-powered</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Modern web services with global delivery.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="absolute -right-4 -bottom-5 hidden rounded-2xl border border-border/70 bg-background/90 px-4 py-3 shadow-lg sm:block">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-xl bg-primary/10 text-primary">
              <Moon size={17} weight="duotone" />
            </span>
            <div>
              <p className="text-xs font-medium">Built in the open</p>
              <p className="text-[11px] text-muted-foreground">
                github.com/komikhq
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
