import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import oxlint from "vite-plugin-oxlint";

export default defineConfig({
  base: "/iwamad-practice/",
  plugins: [react(), oxlint()],
  build: {
    outDir: "docs",
  },
  test: {
    environment: "jsdom",
    globals: true,
  },
});