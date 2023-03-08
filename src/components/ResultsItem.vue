<template>
  <div>
    <div class="result-item">
      <h1>{{ result.artistName }}</h1>
      <div class="result-info">
        <p class="result-info-item">{{ result.collectionName }}</p>
        <p class="result-info-item">{{ result.primaryGenreName }}</p>
        <p class="result-info-item">{{ result.trackName }}</p>
      </div>
      <div class="result-image">
        <img :src="result.artworkUrl100" alt="result image">
      </div>
      <div class="result-price">
        <p>{{ result.collectionPrice }} $</p>
      </div>
        <button class="btn btn-success" @click="$store.commit('addToCart',result)">Add to cart</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  result: Object
})
</script>

<style lang="scss" scoped>
.result-item{
  padding: 1rem;
  margin:0.25rem;
  box-shadow: 0px 0px 1px #000;
  display: grid;
  place-content: center;
  text-align: center;
}
</style>