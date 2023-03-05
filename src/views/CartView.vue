<template>
  <div>
    <button class="btn btn-back" @click="$router.go(-1)">Back</button>
    <div class="cart">
      <h2>Your cart:</h2>
      <div class="cart-item" v-for="result in $store.state.cart" :key="result.collectionId">
        <h3>{{ result.collectionName }}</h3>
        <p>{{ result.collectionPrice }}</p>
        <div>
          <img :src="result.artworkUrl100" alt="image">
        </div>
        <div class="cart-qty">
          <p>Quantity: {{ result.quantity }}</p>
          <button class="btn btn-qty" @click="result.quantity++">+</button>
          <button class="btn btn-qty" @click="result.quantity>0 ? result.quantity-- : null">-</button>
        </div>
          <button class="btn btn-remove" @click="removeItem(result)">Remove from cart</button>
    </div>
    <div class="cart-fullprice">To pay: {{ fullPrice.toFixed(2) }} $</div>
  </div>
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