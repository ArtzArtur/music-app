<template>
  <div>
    <button class="btn btn-back" @click="$router.go(-1)">Back</button>
    <h2>Your cart:</h2>
    <div class="cart">
      <div class="cart-item" v-for="result in $store.state.cart" :key="result.collectionId">
        <h3>{{ result.collectionName }}</h3>
        <p>Price: {{ result.collectionPrice }} $</p>
        <div>
          <img :src="result.artworkUrl100" alt="image">
        </div>
        <div class="cart-qty">
          <p>Quantity: {{ result.quantity }}</p>
          <button class="btn btn-qty" @click="result.quantity++">+</button>
          <button class="btn btn-qty" @click="result.quantity > 0 ? result.quantity-- : null">-</button>
        </div>
        <button class="btn btn-remove" @click="removeItem(result)">Remove from cart</button>
      </div>
    </div>
    <div class="cart-fullprice">
      <p>
        To pay: {{ fullPrice.toFixed(2) }} $
      </p>
        <button class="btn btn-pay">Proceed to dummy payment</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';


const store = useStore()
const fullPrice = computed(() => { return store.state.cart.reduce((acc, item) => { return acc + item.collectionPrice * item.quantity }, 0) })
const removeItem = (item) => {
  item.quantity = 1
  let removeMe = item.collectionId
  store.state.cart = store.state.cart.filter(cartItem => cartItem.collectionId !== removeMe)
}
</script>

<style lang="scss" scoped>
.btn-back {
  margin: 0.5rem;
}
h2 {
  text-align: center;
}
.btn-pay{
  background: var(--color-dark);
  margin:0.5rem;
  min-width:250px;
  &:hover{
    background:#fff;
    color:#000;
  }
}
.cart {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &-qty{
    & .btn{
      margin:0.25rem;
    }
    & p{
      padding:0.5rem;
      font-size: 1.05rem;
    }
  }
  &-item {
    display:grid;
    grid-template-rows:100px 50px 100px;
    margin: .5rem;
    padding: 1rem;
    text-align: center;
    width: 250px;
    box-shadow: 0px 0px 2px var(--color-light);
    & h3{
      place-self: center;
    }
  }

  &-fullprice {
    text-align: center;
    font-size: 1.25rem;
    padding: 1rem;
  }
}
</style>