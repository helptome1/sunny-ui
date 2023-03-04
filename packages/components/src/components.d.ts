import * as components from './index'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SunButton: typeof components.Button
  }
}
export {}
