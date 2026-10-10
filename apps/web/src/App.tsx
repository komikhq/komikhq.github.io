import { AboutSection } from "@/components/sections/about-section"
import { CommunitySection } from "@/components/sections/community-section"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { useThemeFavicon } from "@/hooks/use-theme-favicon"

export function App() {
  useThemeFavicon()

  return (
    <div className="min-h-svh overflow-hidden">
      <SiteHeader />
      <main id="top">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CommunitySection />
      </main>
      <SiteFooter />
    </div>
  )
}
