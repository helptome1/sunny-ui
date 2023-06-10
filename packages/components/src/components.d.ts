import * as components from './index'
// 使用组件时支持提示
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SunButton: typeof components.Button;
    SunSlider: typeof components.Slider;
    SunIcon: typeof components.Icon;
    SunNumber: typeof components.Number;
    // SunMessage: typeof components.Message;
  }
}
export {}
