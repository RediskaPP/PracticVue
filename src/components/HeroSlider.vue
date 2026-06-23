<template>
  <section class="hero">
    <div class="hero__slides">
      <div
          v-for="(slide, i) in slides"
          :key="i"
          class="hero__slide"
          :class="{ 'hero__slide--active': current === i }"
          :style="{ backgroundImage: `url(${slide.img})` }"
      >
        <div class="hero__overlay" />
        <div class="hero__inner">
          <p class="hero__eyebrow">{{ slide.eyebrow }}</p>
          <h1 class="hero__title">{{ slide.title }}</h1>
          <div class="hero__promo">
            <div class="hero__promo-dot">→</div>
            <span class="hero__promo-text">{{ slide.promo }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination dots -->
    <div class="hero__dots">
      <button
          v-for="(_, i) in slides"
          :key="i"
          class="hero__dot"
          :class="{ 'hero__dot--active': current === i }"
          @click="goTo(i)"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  {
    eyebrow: 'коллекция 2020 года',
    title: 'Casabella',
    promo: 'СКИДКА 20% до 25 августа',
    img: 'https://images.unsplash.com/photo-1615971677499-5467cbab01a0?w=1920&q=80',
  },
  {
    eyebrow: 'новая коллекция',
    title: 'Monoform',
    promo: 'СКИДКА 15% до 1 сентября',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80',
  },
  {
    eyebrow: 'хит сезона',
    title: 'Stone Grey',
    promo: 'ОТ 1 290 РУБ/М²',
    img: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=1920&q=80',
  },
]

const current = ref(0)
let timer = null

function goTo(i) { current.value = i }

onMounted(() => {
  timer = setInterval(() => {
    current.value = (current.value + 1) % slides.length
  }, 5000)
})
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 680px;
  overflow: hidden;
  background: #c4c4c4;
}

.hero__slides {
  position: absolute;
  inset: 0;
}

.hero__slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.9s ease;
}
.hero__slide--active { opacity: 1; }

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
      to right,
      rgba(0,0,0,0.55) 0%,
      rgba(0,0,0,0.2) 50%,
      rgba(0,0,0,0.05) 100%
  );
}

/* Content positioned like Figma: left-aligned within 1680px centered area */
.hero__inner {
  position: absolute;
  bottom: 180px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1680px;
  padding: 0 120px;
  box-sizing: border-box;
  z-index: 1;
}

/* "коллекция 2020 года" — Inter 700 16px letter-spacing 5px uppercase cream */
.hero__eyebrow {
  font-family: 'inter', sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #EBE5D2;
  margin: 0 0 8px;
}

/* "Casabella" — Inter 700 100px letter-spacing -8px uppercase white */
.hero__title {
  font-family: 'inter', sans-serif;
  font-size: 100px;
  font-weight: 700;
  letter-spacing: -8px;
  text-transform: uppercase;
  color: #fff;
  margin: 0 0 24px;
  line-height: 1;
}

/* "СКИДКА 20% ..." — Inter 400 26px uppercase white */
.hero__promo {
  display: inline-flex;
  align-items: center;
  gap: 14px;
}

.hero__promo-dot {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #E03226;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.hero__promo-text {
  font-family: 'inter', sans-serif;
  font-size: 26px;
  font-weight: 400;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 0;
}

/* Dots */
.hero__dots {
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1680px;
  padding: 0 120px;
  box-sizing: border-box;
  display: flex;
  gap: 12px;
  z-index: 2;
}

.hero__dot {
  width: 40px;
  height: 3px;
  border: none;
  background: rgba(255,255,255,0.35);
  cursor: pointer;
  padding: 0;
  transition: background 0.2s;
}
.hero__dot--active { background: #E03226; }

@media (max-width: 1024px) {
  .hero { height: 480px; }
  .hero__title { font-size: 64px; letter-spacing: -4px; }
  .hero__inner { bottom: 100px; padding: 0 40px; }
  .hero__dots { bottom: 60px; padding: 0 40px; }
}
@media (max-width: 640px) {
  .hero { height: 360px; }
  .hero__title { font-size: 40px; letter-spacing: -2px; }
  .hero__promo-text { font-size: 16px; }
  .hero__inner { bottom: 60px; padding: 0 20px; }
  .hero__dots { bottom: 30px; padding: 0 20px; }
}
</style>