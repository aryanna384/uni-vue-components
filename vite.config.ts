import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import VueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(),VueJsx()],
  base:'./',
  build:{
    chunkSizeWarningLimit:1500,
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'yn-com',
      // the proper extensions will be added
      fileName: 'yn-com',
    },
  },
});
