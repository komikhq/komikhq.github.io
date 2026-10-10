import { resolve } from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { siteMetadataPlugin } from "./vite.site-metadata.js"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), siteMetadataPlugin()],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "./src"),
    },
  },
})
