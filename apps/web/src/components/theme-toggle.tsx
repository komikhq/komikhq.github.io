import { Moon, Sun } from "@phosphor-icons/react"
import { Button } from "@komikhq/ui/components/button"
import { useTheme } from "@/components/theme-provider"
import { useResolvedTheme } from "@/hooks/use-resolved-theme"

export function ThemeToggle() {
  const { setTheme } = useTheme()
  const resolvedTheme = useResolvedTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <Button
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      size="icon"
      variant="ghost"
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  )
}
