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
      "/crud": "http://localhost:4000",
      "/userCrud": "http://localhost:4000",
      "/crudReviews": "http://localhost:4000",
      "/loneReview": "http://localhost:4000",
    },
  },
});
