import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $vueInjectedFunction(name: string): string
  }
}

Vue.prototype.$vueInjectedFunction = (name: string) => name + 'さん、こんにちは！'
