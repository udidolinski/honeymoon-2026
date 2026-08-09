import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { execSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'

// https://vite.dev/config/
// GitHub Pages serves this app under /honeymoon-2026/; local dev uses '/'
// so `npm run dev` keeps working at http://localhost:5173/.
//
// BUILD_ID is the current commit sha, embedded in the JS bundle AND written
// to public/version.txt. The client polls version.txt (network, no-store) and
// compares it to its own embedded BUILD_ID to detect a new deploy — GitHub
// Pages' CDN can hold stale responses for several minutes, so this is how
// an already-open tab notices once the new build actually becomes fetchable.
const BUILD_ID = (() => {
  try {
    return execSync('git rev-parse HEAD').toString().trim()
  } catch {
    return String(Date.now())
  }
})()
writeFileSync(new URL('./public/version.txt', import.meta.url), BUILD_ID)

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === "serve" ? "/" : "/honeymoon-2026/",
  define: {
    __BUILD_ID__: JSON.stringify(BUILD_ID),
  },
}))
