import type { ReactNode } from "react"

export type Project = {
  name: string
  description: string
  href: string
  label: string
  icon: ReactNode
}

export type ResolvedTheme = "dark" | "light"
