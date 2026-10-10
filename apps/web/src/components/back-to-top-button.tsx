import { useEffect, useState } from "react"
import { ArrowUp } from "@phosphor-icons/react"
import { Button } from "@komikhq/ui/components/button"

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 400)

    updateVisibility()
    window.addEventListener("scroll", updateVisibility, { passive: true })
    return () => window.removeEventListener("scroll", updateVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <Button
      aria-label="Back to top"
      className="fixed right-5 bottom-5 z-30 size-11 rounded-full shadow-lg sm:right-8 sm:bottom-8"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      size="icon"
    >
      <ArrowUp weight="bold" />
    </Button>
  )
}
