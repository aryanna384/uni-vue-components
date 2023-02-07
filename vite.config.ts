import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import VueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(),VueJsx()],
  base:'./',
  resolve: {
    dedupe: ['vue']
  },
  build:{
    chunkSizeWarningLimit:1500,
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'ynCom',
      // 输出的文件名，默认是package.json里的 name
      fileName: 'yn-com',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
