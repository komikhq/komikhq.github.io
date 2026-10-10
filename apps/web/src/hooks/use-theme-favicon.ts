import { useEffect } from "react"
import { useResolvedTheme } from "@/hooks/use-resolved-theme"

export function useThemeFavicon() {
  const resolvedTheme = useResolvedTheme()

  useEffect(() => {
    const favicon = document.querySelector<HTMLLinkElement>("#theme-favicon")
    if (!favicon) {
      throw new Error(
        "The theme favicon link is missing from the document head."
      )
    }

    favicon.href =
      resolvedTheme === "dark" ? "/logo-mark-dark.svg" : "/logo-mark-light.svg"
  }, [resolvedTheme])
}
