import SvgIcon from './SvgIcon/index.vue'
import type { App, Component } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const components: { [name: string]: Component } = { SvgIcon }
export default {
  install(Vue: App) {
    Object.keys(components).forEach((key: string) => {
      Vue.component(key, components[key])
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      Vue.component(key, component)
    }
  },
}
