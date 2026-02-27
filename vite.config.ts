import { defineConfig } from "vite";
import vinext from "vinext";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@mdx-js/rollup";
import { resolve } from "path";

export default defineConfig({
  plugins: [vinext(), tailwindcss(), mdx()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "."),
    },
  },
});
