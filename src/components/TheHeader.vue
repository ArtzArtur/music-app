<template>
  <header class="header">

    <div class="cart-icon-container">
      <router-link :to="{ name: 'CartView' }">
        <i class="cart-icon fas fa-shopping-cart">
          <span class="cart-count">{{ cartCount }}</span>
        </i>
      </router-link>
    </div>


    <div class="header-text-container">
      <h1>Simple Music Store</h1>
      <i class="fas fa-music"></i>
    </div>
  </header>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue'

const store = useStore()
const cartCount = computed(() => {
  return store.state.cart.reduce((acc, item) => {
    return item.quantity + acc
  }, 0)
})
</script>

<style lang="scss" scoped>
header {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0.85)),url('../assets/—Pngtree—note\ music\ logo\ watercolor\ background_1589075.jpg');
  background-size: cover;
  background-position:top right;
}

.cart-icon-container {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
}

.cart-icon {
  font-size: 2.5rem;
  position: relative;
  color:var(--color-light);
  &:hover{
    color:var(--color-medium);
  }
}

.cart-count {
  height: 1.1rem;
  width: 1.1rem;
  text-align: center;
  border-radius: 10px;
  background: var(--color-dark);
  color: #fff;
  position: absolute;
  font-size: 1rem;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
}

.header-text-container {
  text-align: center;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & h1 {
    font-size: clamp(2.5rem,10vw,4rem);
    font-weight: 300;
    padding: 1rem;
  }

  & i {
    font-size: 1.75rem;
  }
}</style>