import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg",
    }),
  ],
  css: {
    modules: {
      generateScopedName: "[name]__[local]_[hash:base64:5]",
    },
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        additionalData: `
          @import "@styles/variables";
          @import "@styles/functions";
        `,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve("src"),
      "@components": path.resolve("src/components"),
      "@images": path.resolve("src/assets/images"),
      "@styles": path.resolve("src/assets/scss"),
      "@fonts": path.resolve("src/assets/fonts"),
      "@svg": path.resolve("src/assets/svg"),
    },
  },
});
