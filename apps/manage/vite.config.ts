import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import UnoCSS from "unocss/vite";
import { presetUno, presetAttributify, presetIcons,presetWind } from "unocss";
import { FileSystemIconLoader } from "@iconify/utils/lib/loader/node-loaders";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({
      dts: "./types/components.d.ts",
    }),
    vue(),
    vueJsx(),
    AutoImport({
      imports: ["vue", "pinia", "@vueuse/core"],
      dts: "./types/auto-import.d.ts",
      dirs: ["src/composables", "src/stores"],
      vueTemplate: true,
    }),

    UnoCSS({
      shortcuts: [],
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          extraProperties: {
            display: "inline-block",
            "vertical-align": "middle",
          },
          collections: {
            custom: FileSystemIconLoader(
              fileURLToPath(new URL("./src/assets/icons", import.meta.url))
            ),
          },
        }),
        presetWind()
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
