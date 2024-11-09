import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "invoke-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/tintpro/',
  server: {
    host: "::",
    port: 3000,
    base: '/tintpro/',
  },
  plugins: [
    react(),
    componentTagger(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
