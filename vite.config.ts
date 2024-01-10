/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
  ],
  test: {
    environment: "jsdom",
    globals: true,
  },
  resolve: {
    alias: [
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@routes", replacement: "/src/routes" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@models", replacement: "/src/models" },
      { find: "@services", replacement: "/src/services" },
      { find: "@zustands", replacement: "/src/zustands" },
      { find: "@context", replacement: "/src/context" },
      { find: "@config", replacement: "/src/config" },
      { find: "@layout", replacement: "/src/layout" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@lang", replacement: "/src/lang" },
      { find: "@mocks", replacement: "/src/mocks" },
    ],
  },
});
