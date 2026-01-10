import { defineConfig } from "vite";

import { baseViteConfig } from "@amp/vite-config";

export default defineConfig(
  baseViteConfig({
    server: {
      port: 5175,
    },
  })
);
