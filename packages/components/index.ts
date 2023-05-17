// export all components
export * from './src/index';
import * as components from './src/index';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
// 写一个install方法，接收Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
import { App } from 'vue';
export default {
  install: (app: App) => {
    console.log('components', components);
    // 遍历注册全局组件
    for (let c in components) {
      // @ts-ignore
      app.use(components[c]);
    }
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  }
};
