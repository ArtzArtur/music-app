<template>
  <div>
    <div class="result-item">
      <h1>{{ result.artistName }}</h1>
      <div class="middle-col">
        <p class="result-info">{{ result.collectionName }}</p>
        <p class="result-info">{{ result.primaryGenreName }}</p>
        <img :src="result.artworkUrl100" alt="result image">
      </div>
      <div class="bottom-col">
        <p class="result-price">{{ result.collectionPrice }} $</p>
        <button class="btn btn-success" @click="$store.commit('addToCart', result)">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  result: Object
})
</script>

<style lang="scss" scoped>
.result-item {
  display: grid;
  grid-template-rows: 100px 1fr 100px;
  padding: 0.5rem;
  margin: 0.75rem;
  text-align: center;
  box-shadow: 0px 0px 1px hsl(218, 70%, 60%);

  & h1 {
    justify-self: center;
    align-self: center;
    font-size: 1.25rem;
    padding: 1rem;
  }
}

.middle-col {
  display: grid;
  place-content: center;
  & img {
    margin: 0 auto;
  }
}
.result-info{
  padding:0.25rem 0;
}
.result-price{
  font-size:1.25rem;
}
.bottom-col {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 0.25rem;
}
</style>