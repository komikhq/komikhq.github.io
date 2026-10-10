import { useEffect, useState } from "react"
import { useTheme } from "@/components/theme-provider"
import type { ResolvedTheme } from "@/types/project"

const DARK_MODE_QUERY = "(prefers-color-scheme: dark)"

export function useResolvedTheme(): ResolvedTheme {
  const { theme } = useTheme()
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(() =>
    window.matchMedia(DARK_MODE_QUERY).matches ? "dark" : "light"
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(DARK_MODE_QUERY)
    const updateSystemTheme = () =>
      setSystemTheme(mediaQuery.matches ? "dark" : "light")

    updateSystemTheme()
    mediaQuery.addEventListener("change", updateSystemTheme)
    return () => mediaQuery.removeEventListener("change", updateSystemTheme)
  }, [])

  return theme === "system" ? systemTheme : theme
}
