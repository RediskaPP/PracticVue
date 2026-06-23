<script setup>
import Main from "./pages/Main.vue";
import './style.css'
import Header from "./components/Header.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <Header/>
  <router-view />
  <AppFooter/>
</template>
