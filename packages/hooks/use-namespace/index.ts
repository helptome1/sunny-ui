import { InjectionKey, Ref, computed, inject, ref, unref } from 'vue'

export const defaultNamespace = 'sun'

function _bem(namespace: string, block: string, blockSuffix = '', element?: string, modifier = '') {
  let cls = `${namespace}-${block}`
  if (element) {
    cls += `__${element}`
  }
  return cls
}

export const namespaceContextKey: InjectionKey<Ref<string | undefined>> = Symbol('namespaceContextKey')

function useGetDerivedNamespace(namespaceOverrides?: Ref<string | undefined>) {
  const derivedNamespace = namespaceOverrides || inject(namespaceContextKey, ref(defaultNamespace))
  const namespace = computed(() => {
    return unref(derivedNamespace) || defaultNamespace
  })
  return namespace
}

export function useNamespace(block: string, namespaceOverrides?: Ref<string | undefined>) {
  const namespace = useGetDerivedNamespace(namespaceOverrides)
  const e = (element?: string) => (element ? _bem(namespace.value, block, '', element, '') : '')
  return {
    namespace,
    e
  }
}
