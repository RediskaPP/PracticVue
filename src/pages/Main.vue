Homepage · VUE
<template>
  <main>
    <div class="wrapper">
      <HeroSlider/>
      <CategoryGrid />
      <AdvantagesBar />
      <PromoSlider />
      <BrandsSlider />
      <NewCollections />
      <PopularCollections />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ReviewsSection />
      <ContactsSection />
    </div>
  </main>
</template>

<script setup>
import HeroSlider from '../components/HeroSlider.vue'
import CategoryGrid from '../components/CategodyComponents/CategoryGrid.vue'
import AdvantagesBar from '../components/AdvantagesBar.vue'
import PromoSlider from '../components/PromoSlider.vue'
import BrandsSlider from '../components/BrandsSlider.vue'
import NewCollections from '../components/NewCollections.vue'
import PopularCollections from '../components/PopularCollections.vue'
import ServicesSection from '../components/ServicesSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ReviewsSection from '../components/ReviewsSection.vue'
import ContactsSection from '../components/ContactsSection.vue'
import AppFooter from '../components/AppFooter.vue'
import Header from "../components/Header.vue";
import MainCartinki from "../components/MainCartinki.vue";
</script>

<style scoped>
    .wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
</style>