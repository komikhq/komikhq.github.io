import { ArrowRight } from "@phosphor-icons/react"
import { Button } from "@komikhq/ui/components/button"

export function AboutSection() {
  return (
    <section className="border-y border-border/70 bg-secondary/35" id="about">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-24">
        <div>
          <p className="text-sm font-medium tracking-[0.14em] text-primary uppercase">
            About KomikHQ
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            The organization behind the reading experience.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-7 text-muted-foreground">
          <p>
            KomikHQ is an engineering-driven organization building a digital
            comics reading platform and the technology around it. The goal is to
            pair a welcoming experience for readers with efficient, dependable
            web infrastructure.
          </p>
          <p>
            From the reader and media delivery to community tools, each project
            contributes to an ecosystem designed to work together. Public
            repositories also make it easier to see how these products are
            built.
          </p>
          <Button asChild className="mt-2" variant="link">
            <a
              href="https://github.com/komikhq"
              rel="noreferrer"
              target="_blank"
            >
              Explore the GitHub organization
              <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
