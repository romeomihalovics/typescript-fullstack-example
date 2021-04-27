<template>
  <div class="hello">
    <h1>{{ sample.message }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import { SampleDTO } from '@common/ts/interfaces'

@Component
export default class HelloWorld extends Vue {
  private sample: SampleDTO = {
    message: 'Loading from db in 3 seconds'
  }

  mounted (): void {
    setTimeout(() => {
      axios.get('//localhost:3000/sample').then(response => {
        this.sample = response.data
      })
    }, 3000)
  }
}
</script>
