<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  asyncData ({ app }) {
    return { message: app.context.$myInjectedFunction('misaosyushi') }
  }
})
export default class Sample extends Vue {
}
</script>
