import type { App, Plugin } from 'vue'
export type SFCWithInstall<T> = T & Plugin
export default <T, E extends Record<string, any>>(main: T, extra: E) => {
  ;(main as SFCWithInstall<T>).install = (app: App) => {
    console.log('components', main)
    // 当组件是 script setup 的形式时，会自动以为文件名注册，会挂载到组件的__name 属性上
    // 所以要加上这个条件
    //注册组件
    for (const comp of [main, ...Object.values(extra)]) {
      // const name = (main as any).name || (main as any).__name;
      app.component(comp.name, comp)
    }

    if (extra) {
      for (const [key, comp] of Object.entries(extra)) {
        ;(main as any)[key] = comp
      }
    }
  }
  return main as SFCWithInstall<T> & E
}
