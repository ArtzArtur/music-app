<template>
  <div class="results-container">
    <div v-if="$store.state.loading">loading</div>
    <ResultsItem v-for="result in $store.state.results" :key="result.artistId" :result="result" />
  </div>
</template>

<script setup>
import ResultsItem from './ResultsItem.vue'
</script>

<style lang="scss" scoped></style>