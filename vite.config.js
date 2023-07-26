import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: "**/*.js,jsx",
  })],
  define: {
    "process.env": process.env,
    API_KEY: process.env.API_KEY,
  },
})
