<template>
  <div>
    <form @submit.prevent="fetchData(searchVal)">
      <input type="text" v-model="searchVal">
      <button>Search</button>
      
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

<style lang="scss" scoped></style>