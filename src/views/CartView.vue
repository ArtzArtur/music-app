<template>
  <div>
    <button @click="$router.go(-1)">Back</button>
    <h2>Your cart:</h2>
    <div v-for="result in $store.state.cart" :key="result.artistId">
        <p>{{ result.collectionName }}</p>
        <p>Quantity: {{ result.quantity }}</p>
        <img :src="result.artworkUrl100" alt="image">
    </div>
    <div>To pay: {{ fullPrice }} $</div>
  </div>
</template>

<script setup>
import { computed} from 'vue';
import { useStore } from 'vuex';


  const store = useStore()
  const fullPrice = computed(()=> {return store.state.cart.reduce((acc,item)=> {return acc+item.collectionPrice*item.quantity},0)})

</script>

<style lang="scss" scoped></style>