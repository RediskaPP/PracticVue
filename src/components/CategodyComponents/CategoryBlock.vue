<script setup>
    defineProps({
      width: Number,
      height: Number,
      img: String,
      title: String,
      text: String,
    })
</script>

<template>
  <div class="categories-cer" :style="{
    width: width + 'px',
    height: height + 'px',
    backgroundImage: 'url(' + img + ')',
  }">
    <p class="categories-title">{{text}}</p>
    <h1>{{title}}</h1>
  </div>
</template>

<style scoped>
.categories-title{
  color: white;
  padding-top: 54px;
  padding-left: 32px;
}
h1{
  font-size: 63px;
}
</style>