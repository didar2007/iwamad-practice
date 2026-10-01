import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import oxlint from "vite-plugin-oxlint";

export default defineConfig({
  base: "/iwamad-practice/",
  plugins: [react(), oxlint()],
});