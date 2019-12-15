<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="gymLeaders"
      :items-per-page="5"
      class="elevation-1"
    />
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { GymLeaders } from "~/types/GymLeaders";

@Component({
  asyncData({ $axios }) {
    return $axios.get<GymLeaders>('/gym-leader').then((res) => ({ gymLeaders: res.data }))
  }
})
export default class GymLeaderList extends Vue {
  headers: any[] = [
    {
      text: 'なまえ',
      align: 'left',
      sortable: false,
      value: 'name'
    },
    {
      text: 'タイプ',
      value: 'type'
    },
    {
      text: 'ポケモン',
      value: 'pokemon'
    }
  ]
}
</script>
