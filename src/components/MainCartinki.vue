<script setup>
import img from '/images/main/img1.png'
</script>

<template>
    <div class="cartinka-container">
      <img :src="img" alt="">
    </div>
</template>

<style scoped>
    .cartinka-container{
      height: 800px;
      top: -100px;
      position: relative;
    }
</style>