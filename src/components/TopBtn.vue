<template>
  <div>
    <i class="fas fa-arrow-up btn btn-top" @click="goUp"></i>
  </div>
</template>

<script setup>
const goUp = () =>{
  document.documentElement.scrollTop = 0
}
</script>

<style lang="scss" scoped>
.btn-top{
  position: fixed;
  top:50%;
  right:2%;
}
</style>