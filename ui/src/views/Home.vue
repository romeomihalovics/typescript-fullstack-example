<template>
  <div class="home">
    <Sample/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Sample from '@/components/Sample.vue' // @ is an alias to /src

@Component({
  components: {
    Sample
  }
})
export default class Home extends Vue {}
</script>
