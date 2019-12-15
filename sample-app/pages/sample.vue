<template>
  <div>
    <h1>{{ goodMorning }}</h1>
    <h1>{{ hello }}</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  asyncData({ app }) {
    return { goodMorning: app.context.$contextInjectedFunction('misaosyushi') }
  }
})
export default class Sample extends Vue {
  hello: string = ''

  created() {
    this.hello = this.$vueInjectedFunction('misaosyushi')
  }
}
</script>
