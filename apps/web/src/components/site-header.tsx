import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react"
import { Button } from "@komikhq/ui/components/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Community", href: "#community" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          aria-label="KomikHQ home"
          className="inline-flex items-center"
          href="#top"
        >
          <img
            alt="KomikHQ"
            className="h-7 w-auto dark:hidden"
            src="/logo-wordmark-light.svg"
            />
          <img
            alt="KomikHQ"
            className="hidden h-7 w-auto dark:block"
            src="/logo-wordmark-dark.svg"
          />
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-sm text-muted-foreground md:flex"
        >
          {navigation.map((item) => (
            <a
              className="transition-colors hover:text-foreground"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            className="hidden sm:inline-flex"
            size="sm"
            variant="outline"
          >
            <a
              href="https://github.com/komikhq"
              rel="noreferrer"
              target="_blank"
            >
              <GithubLogo weight="fill" />
              GitHub
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
