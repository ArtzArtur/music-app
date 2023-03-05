<template>
  <TheHeader />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';

</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
body{
  max-width:1250px;
  margin:0 auto;
}
</style>