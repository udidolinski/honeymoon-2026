import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// GitHub Pages serves this app under /honeymoon-2026/; local dev uses '/'
// so `npm run dev` keeps working at http://localhost:5173/.
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === "serve" ? "/" : "/honeymoon-2026/",
}))
