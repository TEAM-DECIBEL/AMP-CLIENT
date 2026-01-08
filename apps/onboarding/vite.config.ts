import { baseViteConfig } from "@amp/vite-config";
import { defineConfig } from "vite";

export default defineConfig(
  baseViteConfig({
    root: __dirname,
    server: {
      port: 5175,
    },
  })
);
