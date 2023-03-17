<template>
    <TheHeader />
    <TopBtn v-if="topBtn"/>
    <RouterView v-slot="{Component}">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"/>
      </Transition>
    </RouterView>
  </template>

<script setup>
import { onMounted,ref } from 'vue';
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import TopBtn from './components/TopBtn.vue';
const topBtn = ref(false)
onMounted(()=>{
  window.addEventListener('scroll',()=>{
    if(document.body.scrollTop > 380 || document.documentElement.scrollTop > 380){
      topBtn.value=true
    }
    else{
      topBtn.value = false
    }
  })
})
</script>

<style lang="scss">

:root{
  --color-light:hsl(218, 70%, 60%);
  --color-medium:hsl(218, 63%, 38%);
  --color-dark:hsl(217, 28%, 30%);
  
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  scroll-behavior: smooth;
}
body {
  max-width: 1250px;
  margin: 0 auto;
}

.btn {
  max-width: 95px;
  padding:0.5rem;
  outline: none;
  border: none;
  box-shadow: 0px 0px 1px #000;
  background-color:var(--color-light);
  color:#fff;
  cursor: pointer;
  margin-inline: auto;
  &:hover{
    background: var(--color-dark);
  }
}

.fade-leave-to,
.fade-enter-from{
  opacity:0;
}
.fade-leave-active,
.fade-enter-active{
  transition: opacity .3s linear;
}
</style>