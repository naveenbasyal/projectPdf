import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "build",
    command: "CI='' npm run build",
    publish: "/build",
  },
  server: {
    // disableHostCheck: true, // uncomment if needed
  },
  optimizeDeps: {
    include: ["@babel/polyfill"], // uncomment if needed
  },
  proxy: {
    "/": {
      target: "/index.html",
      changeOrigin: true,
      rewrite: (path) => (path === "/" ? "/index.html" : path),
    },
  },
});
