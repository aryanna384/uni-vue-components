import type { App } from 'vue'

import  ynButton from './components/yn-button/index'
const allComponents=[
  ynButton
]
export const createUI = (components: Record<string, any> = allComponents) => {
  const install = (app: App) => {
    for (const key in components) {
      const component = components[key]
      app.component(key, component)
    }
  }
  return { install }
}
export {ynButton}