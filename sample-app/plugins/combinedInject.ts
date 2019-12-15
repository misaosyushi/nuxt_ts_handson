import { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  interface Vue {
    $combinedInjectedFunction(name: string): string
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $combinedInjectedFunction(name: string): string
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $combinedInjectedFunction(name: string): string
  }
}

const myPlugin: Plugin = (context, inject) => {
  inject('combinedInjectedFunction', (name: string) => name + 'さん、おはこんばんにちは！')
}

export default myPlugin
