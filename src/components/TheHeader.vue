<template>
  <div>
    <router-link :to="{name:'CartView'}">
      <i class="fas fa-shopping-cart"></i>
    </router-link>

    <span>{{ cartCount }}</span>
  </div>
  <div>
    <h1>Simple Music Store</h1>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import {computed} from 'vue'

const store = useStore()
const cartCount = computed(()=> {
  return store.state.cart.reduce((acc,item)=>{
    return item.quantity+acc
  },0)
})
</script>

<style lang="scss" scoped>

</style>