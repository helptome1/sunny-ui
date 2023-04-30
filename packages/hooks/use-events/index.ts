export const on = <T extends EventTarget, E extends Event>(target: EventTarget, event: string, fn: (this: T, evt: E) => void) => {
  if (target && event && fn) {
    target.addEventListener(event, fn as (evt: Event) => void)
  }
}

export const off = <T extends EventTarget, E extends Event>(target: EventTarget, event: string, fn: (this: T, evt: E) => void) => {
  if (target && event && fn) {
    target.removeEventListener(event, fn as (evt: Event) => void)
  }
}
