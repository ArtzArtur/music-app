<template>
  <div>
    <form class="search-form" @submit.prevent="fetchData(searchVal)">
      <input type="text" v-model="searchVal"
      placeholder="Album title">
      <button class="btn btn-search">Search</button>
      
    </form>
    <TheResults />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import TheResults from './TheResults.vue'
const searchVal = ref()
const store = useStore()

const fetchData = (payload) => {
  store.dispatch('fetchData', payload)
}

</script>

<style lang="scss" scoped>
.search-form{
  display: grid;
  padding: 4rem;
  place-content: center;
  & input{
    padding:0.5rem;
    &:focus{
      outline: none;
    }
  }
  & button{
    margin-block:0.5rem;
    }
}
</style>