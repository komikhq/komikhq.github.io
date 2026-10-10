import { ArrowUpRight } from "@phosphor-icons/react"
import { Badge } from "@komikhq/ui/components/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@komikhq/ui/components/card"
import { projects } from "@/lib/projects"

export function ProjectsSection() {
  return (
    <section
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24"
      id="projects"
    >
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium tracking-[0.14em] text-primary uppercase">
            Open ecosystem
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            One organization, many parts.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-muted-foreground">
          Explore the public repositories that make up KomikHQ's products and
          infrastructure.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Card
            className="group rounded-2xl border-border/75 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-foreground/5"
            key={project.name}
          >
            <CardHeader className="p-6 sm:p-7">
              <div className="mb-4 flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary [&_svg]:size-5">
                  {project.icon}
                </span>
                <Badge className="rounded-full" variant="secondary">
                  {project.label}
                </Badge>
              </div>
              <CardTitle className="flex items-center justify-between text-lg">
                {project.name}
                <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </CardTitle>
              <CardDescription className="min-h-12 text-sm leading-6">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="px-6 pb-6 sm:px-7 sm:pb-7">
              <a
                className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                href={project.href}
                rel="noreferrer"
                target="_blank"
              >
                View repository
                <span className="sr-only"> {project.name}</span>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
