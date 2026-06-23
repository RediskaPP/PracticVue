<template>
  <section class="promo">
    <div class="promo__inner">
      <div class="promo__track" ref="track">
        <div v-for="item in promos" :key="item.title" class="promo-card">
          <!-- Image area 400×223 -->
          <div class="promo-card__img-wrap">
            <img :src="item.img" alt="" class="promo-card__img" />
            <!-- white rect overlay from Figma (frame-rectangle1735) -->
            <div class="promo-card__overlay" />
            <!-- Red tag -->
            <p class="promo-card__tag">{{ item.tag }}</p>
          </div>
          <!-- Title below image -->
          <h3 class="promo-card__title">{{ item.title }}</h3>
        </div>
      </div>

      <button class="promo__arrow promo__arrow--prev" @click="scroll(-1)">
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
          <path d="M15 7H1M7 1L1 7l6 6" stroke="#777" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
      <button class="promo__arrow promo__arrow--next" @click="scroll(1)">
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
          <path d="M1 7h14M9 1l6 6-6 6" stroke="#777" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
const track = ref(null)

import { ref, onMounted } from 'vue'
import {getPromos} from '../api/api.js'

const promos = ref([])

onMounted(async () => {
  promos.value = await getPromos()
})

function scroll(dir) {
  if (track.value) track.value.scrollBy({ left: dir * 416, behavior: 'smooth' })
}
</script>

<style scoped>
.promo {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 56px 0;
  background: #fff;
}

.promo__inner {
  width: 1372px;
  max-width: calc(100% - 240px);
  position: relative;
}

.promo__track {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
}
.promo__track::-webkit-scrollbar { display: none; }

/* Card: Figma frame-group174-vs = 400px wide */
.promo-card {
  flex: 0 0 400px;
  scroll-snap-align: start;
}

/* Image wrap: 400×223 */
.promo-card__img-wrap {
  width: 400px;
  height: 223px;
  position: relative;
  overflow: hidden;
  margin-bottom: 0;
}

.promo-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}
.promo-card:hover .promo-card__img { transform: scale(1.04); }

/* White semi-transparent overlay (frame-rectangle1735 from Figma) */
.promo-card__overlay {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 0;
  height: 183px;
  width: 360px;
  background: white;
  pointer-events: none;
}

/* Red tag: Inter 300 12px uppercase red, inside image */
.promo-card__tag {
  position: absolute;
  top: 54px;
  left: 36px;
  font-family: 'inter', sans-serif;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0;
  text-transform: uppercase;
  color: red;
  margin: 0;
  z-index: 1;
}

/* Title: Inter 700 25px letter-spacing -2px uppercase #3E3E3E */
.promo-card__title {
  font-family: 'inter', sans-serif;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -2px;
  text-transform: uppercase;
  position: relative;
  bottom: 100px;
  left: 30px;
  color: #3E3E3E;
  line-height: 30px;
  margin: 16px 0 0;
  max-width: 276px;
}

/* Arrows */
.promo__arrow {
  position: absolute;
  top: 111px; /* half of 223px */
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.18s;
}
.promo__arrow:hover { opacity: 0.5; }
.promo__arrow--prev { left: -40px; }
.promo__arrow--next { right: -40px; }

@media (max-width: 1024px) {
  .promo__inner { max-width: calc(100% - 80px); }
  .promo-card { flex: 0 0 320px; }
  .promo-card__img-wrap { width: 320px; }
}
@media (max-width: 640px) {
  .promo__inner { max-width: calc(100% - 40px); }
  .promo-card { flex: 0 0 280px; }
  .promo-card__img-wrap { width: 280px; }
  .promo-card__title { font-size: 18px; }
}
</style>