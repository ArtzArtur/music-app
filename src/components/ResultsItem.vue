<template>
  <div v-if="result.collectionPrice>0">
    <div class="result-item">
      <h1>{{ result.artistName }}</h1>
      <div class="middle-col">
        <p class="result-info">Album: {{ result.collectionName }}</p>
        <p class="result-info">Genre: {{ result.primaryGenreName }}</p>
        <img :src="result.artworkUrl100" alt="result image">
      </div>
      <div class="bottom-col">
        <p class="result-price">{{ result.collectionPrice }} $</p>
        <button v-if="!addAnim" class="btn btn-add" @click="addToCart(result)">Add to cart</button>
        <button v-if="addAnim" class="btn btn-add" @click="addToCart(result)">Adding...</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
  result: Object
})

const store = useStore()
const addAnim = ref(false)

const addToCart = (result) => {
  addAnim.value = true
  store.commit('addToCart', result)
  setTimeout(() => {
  addAnim.value = false
  }, 1000);
}
</script>

<style lang="scss" scoped>

.btn-add{
  width:150px;
}
.result-item {
  display: grid;
  grid-template-rows: 100px 1fr 100px;
  padding: 0.5rem;
  margin: 0.75rem;
  text-align: center;
  box-shadow: 0px 0px 1px var(--color-light);
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
  min-height:7.5ch;
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