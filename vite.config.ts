import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    watch: {
      usePolling: true, // Fixes WSL not watching.
    },
    proxy: {
      "/ping": "http://localhost:4000",
    },
  },
});
