import { useEffect } from "react"
import { AboutSection } from "@/components/sections/about-section"
import { CommunitySection } from "@/components/sections/community-section"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { BackToTopButton } from "@/components/back-to-top-button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { useThemeFavicon } from "@/hooks/use-theme-favicon"

export function App() {
  useThemeFavicon()

  useEffect(() => {
    const scrollToHash = (hash: string) => {
      const id = decodeURIComponent(hash.slice(1))
      const target = document.getElementById(id)

      if (!target) return false

      target.scrollIntoView({ behavior: "smooth", block: "start" })
      return true
    }

    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      const link = (event.target as Element).closest<HTMLAnchorElement>(
        'a[href^="#"]'
      )
      if (!link || !scrollToHash(link.hash)) return

      event.preventDefault()
    }

    document.addEventListener("click", handleClick)

    if (window.location.hash) {
      const hash = window.location.hash
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`
      )
      requestAnimationFrame(() => scrollToHash(hash))
    }

    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <div className="min-h-svh overflow-x-clip">
      <SiteHeader />
      <main id="top">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CommunitySection />
      </main>
      <SiteFooter />
      <BackToTopButton />
    </div>
  )
}
