import {
  BookOpenText,
  Browser,
  Code,
  GlobeHemisphereWest,
} from "@phosphor-icons/react"
import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    name: "KomikHQ",
    description:
      "A web platform for discovering and reading manga, manhwa, manhua, and other comics in Indonesian.",
    href: "https://github.com/komikhq/komikhq",
    label: "Web reader",
    icon: <BookOpenText weight="duotone" />,
  },
  {
    name: "KomikHQ Media",
    description:
      "An edge-powered media delivery service for assets stored in Cloudflare R2, with shared cache policies.",
    href: "https://github.com/komikhq/media",
    label: "Media delivery",
    icon: <GlobeHemisphereWest weight="duotone" />,
  },
  {
    name: "KomikHQ Clipper",
    description:
      "A browser extension that archives supported comic chapter images into an ordered ZIP file.",
    href: "https://github.com/komikhq/komikhq-clipper",
    label: "Browser extension",
    icon: <Browser weight="duotone" />,
  },
  {
    name: "KomikHQ .github",
    description:
      "The home for the organization's public profile and shared community health files.",
    href: "https://github.com/komikhq/.github",
    label: "Organization",
    icon: <Code weight="duotone" />,
  },
]
