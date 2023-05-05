import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
// elementplus自动导入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// elementplus自动导入
export default defineConfig({
  server: {
    strictPort: true,
    proxy: {
      "/gpt": {
        target: "https://chat.totrygpt.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 自定义的主题色
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        }),
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        }),
      ],
    }),
  ],
});
