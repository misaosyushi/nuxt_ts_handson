import { Plugin } from '@nuxt/types'

declare module '@nuxt/types' {
  interface Context {
    $contextInjectedFunction(name: string): string
  }
}

const myPlugin: Plugin = (context) => {
  context.$contextInjectedFunction = (name: string) => name + 'さん、おはよう！'
}

export default myPlugin
