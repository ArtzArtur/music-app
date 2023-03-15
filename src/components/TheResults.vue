<template>
  <div class="results-container">
    <div v-if="$store.state.loading">
      <TheLoader />
    </div>
    <ResultsItem v-for="result in $store.state.results" :key="result.artistId" :result="result" />
  </div>
</template>

<script setup>
import TheLoader from './TheLoader.vue'
import ResultsItem from './ResultsItem.vue'
</script>

<style lang="scss" scoped>
.results-container{
  display:grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,0.75fr));
  grid-auto-rows: 1fr;
  place-content: center;
}
</style>