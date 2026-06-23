<template>
  <section class="adv">
    <div class="adv__inner">
      <div v-for="item in items" :key="item.title" class="adv__item">
        <img class="adv__icon" :src="item.svg" alt="">
        <div class="adv__text">
          <p class="adv__title">{{ item.line1 }}<br>{{ item.line2 }}</p>
          <p class="adv__sub">{{ item.sub }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAdvantages } from '../api/api.js'

const items = ref([])

onMounted(async () => {
  items.value = await getAdvantages()
})
</script>

<style scoped>
/* Figma: frame-advantage-au = 1216px wide, 67px min-height */
.adv {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 48px 0;
  border-top: 1px solid #E9E9E9;
  border-bottom: 1px solid #E9E9E9;
  background: #fff;
}

.adv__inner {
  width: 1216px;
  max-width: calc(100% - 240px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}

.adv__item {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  padding: 0 24px 0 0;
}
.adv__item:last-child { padding-right: 0; }

.adv__icon {
  flex-shrink: 0;
  width: 56px;
  height: 58px;
  display: flex;
  align-items: center;
}

/* Roboto 300 16px line-height 21px — from Figma */
.adv__title {
  font-family: 'roboto', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 21px;
  color: #000;
  margin: 0 0 4px;
}

/* Roboto 400 12px letter-spacing 1px grey #A4A4A4 */
.adv__sub {
  font-family: 'roboto', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #A4A4A4;
  margin: 0;
}

@media (max-width: 1024px) {
  .adv__inner {
    max-width: calc(100% - 80px);
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 0;
  }
}
@media (max-width: 560px) {
  .adv__inner {
    max-width: calc(100% - 40px);
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>