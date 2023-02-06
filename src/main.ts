import { createSSRApp } from "vue";
import App from "./App.vue";
import {createUI} from '../packages/index'
export function createApp() {
  const app = createSSRApp(App);
  app.use(createUI);
  return {
    app,
  };
}
