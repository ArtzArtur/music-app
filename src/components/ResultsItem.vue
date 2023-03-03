<template>
  <div>
    <div>
      <h1>{{ result.artistName }}</h1>
      <div>
        <p>{{ result.collectionName }}</p>
        <p>{{ result.primaryGenreName }}</p>
        <p>{{ result.trackName }}</p>
      </div>
      <div>
        <img :src="result.artworkUrl100" alt="result image">
      </div>
      <div>
        <p>{{ result.collectionPrice }} $</p>
      </div>
      <div>
        <button @click="$store.commit('addToCart',result)">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  result: Object
})
</script>

<style lang="scss" scoped></style>