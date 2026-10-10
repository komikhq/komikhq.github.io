import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react"
import { Separator } from "@komikhq/ui/components/separator"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-7 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <a
          aria-label="KomikHQ home"
          className="inline-flex w-fit items-center"
          href="#top"
        >
          <img
            alt="KomikHQ"
            className="h-5 w-auto dark:hidden"
            src="/logo-wordmark-light.svg"
            />
          <img
            alt="KomikHQ"
            className="hidden h-5 w-auto dark:block"
            src="/logo-wordmark-dark.svg"
          />
        </a>
        <Separator className="sm:hidden" />
        <p>© {new Date().getFullYear()} KomikHQ. Built for comic readers.</p>
        <a
          className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          href="https://github.com/komikhq"
          rel="noreferrer"
          target="_blank"
        >
          <GithubLogo size={16} weight="fill" />
          GitHub
          <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  )
}
