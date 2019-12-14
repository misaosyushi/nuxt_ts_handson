<template>
  <div>
    Name: {{ fullName }}
    Message: {{ message }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Inspire extends Vue {
  fullName: string = 'hoge'
  message: string = 'This is a message'
}
</script>
