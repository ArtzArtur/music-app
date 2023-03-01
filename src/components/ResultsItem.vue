<template>
  <div>
    <div >
      <p>{{result.artistName}}</p>
      <p>{{result.collectionName}}</p>
      <p>{{result.primaryGenreName}}</p>
      <p>{{result.trackName}}</p>
      <img :src="result.artworkUrl100" alt="result image">
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  result:Object
})
</script>

<style lang="scss" scoped>

</style>