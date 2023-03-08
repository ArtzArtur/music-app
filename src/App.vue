<template>
  <TheHeader />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  max-width: 1250px;
  margin: 0 auto;
}

.btn {
  max-width: 75px;
  padding:0.5rem;
  outline: none;
  border: none;
  box-shadow: 0px 0px 1px #000;
  background-color: hsl(218, 70%, 60%);
  color:#fff;
  cursor: pointer;
  margin-inline: auto;
  &:hover{
    background: hsl(218, 63%, 38%);
  }
}
</style>