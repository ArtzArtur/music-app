<template>
  <div>
    <button @click="$router.go(-1)">Back</button>
    <h2>Your cart:</h2>
    <div v-for="result in $store.state.cart" :key="result.collectionId">
        <p>{{ result.collectionName }}</p>
        <div>
          <img :src="result.artworkUrl100" alt="image">
        </div>
        <div>
          <p>Quantity: {{ result.quantity }}</p>
          <button @click="result.quantity++">+</button>
          <button @click="result.quantity>0 ? result.quantity-- : null">-</button>
        </div>
          <button @click="removeItem(result)">Remove from cart</button>
    </div>
    <div>To pay: {{ fullPrice.toFixed(2) }} $</div>
  </div>
</template>

<script setup>
import { computed} from 'vue';
import { useStore } from 'vuex';


  const store = useStore()
  const fullPrice = computed(()=> {return store.state.cart.reduce((acc,item)=> {return acc+item.collectionPrice*item.quantity},0)})
  const removeItem = (item) =>{
    item.quantity=1
    let removeMe = item.collectionId
    store.state.cart = store.state.cart.filter(cartItem=>cartItem.collectionId!==removeMe)
  }
</script>

<style lang="scss" scoped></style>