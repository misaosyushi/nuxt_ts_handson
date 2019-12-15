<template>
  <div>
    <h1>{{ contextMessage }}</h1>
    <h1>{{ vueMessage }}</h1>
    <h1>{{ $store.state.storeMessage }}</h1>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component({
    asyncData ({ app }) {
      return { contextMessage: app.$combinedInjectedFunction('misaosyushi') }
    }
  })
  export default class Sample extends Vue {
    vueMessage: string = ''

    created () {
      this.vueMessage = this.$combinedInjectedFunction('misaosyushi')
      this.$store.commit('changeValue', 'misaosyushi')
    }
  }
</script>
