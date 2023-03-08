<template>
  <div class="results-container">
    <div v-if="$store.state.loading">loading</div>
    <ResultsItem v-for="result in $store.state.results" :key="result.artistId" :result="result" />
  </div>
</template>

<script setup>
import ResultsItem from './ResultsItem.vue'
</script>

<style lang="scss" scoped>
.results-container{
  display:grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
}
</style>