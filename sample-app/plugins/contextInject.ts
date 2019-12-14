import { Plugin } from '@nuxt/types'

declare module '@nuxt/types' {
  interface Context {
    $myInjectedFunction(name: string): string
  }
}

const myPlugin: Plugin = (context) => {
  context.$myInjectedFunction = (name: string) => name + 'さん、こんにちは！'
}

export default myPlugin
