<template>
  <section class="hero">
    <div class="hero__slides">
      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="hero__slide"
        :class="{ 'hero__slide--active': currentSlide === i }"
        :style="{ backgroundImage: `url(${slide.image})` }"
      >
        <div class="hero__overlay" />
        <div class="hero__content container">
          <p class="hero__eyebrow">{{ slide.eyebrow }}</p>
          <h1 class="hero__title">{{ slide.title }}</h1>
          <a href="#" class="hero__promo">
            {{ slide.promo }}
            <span class="hero__promo-dot" />
          </a>
        </div>
      </div>
    </div>

    <!-- Dots -->
    <div class="hero__dots container">
      <button
        v-for="(_, i) in slides"
        :key="i"
        class="hero__dot"
        :class="{ 'hero__dot--active': currentSlide === i }"
        @click="currentSlide = i"
        :aria-label="`Слайд ${i + 1}`"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  {
    eyebrow: 'КОЛЛЕКЦИЯ 2020 ГОДА',
    title: 'CASABELLA',
    promo: 'СКИДКА 20% ДО 25 АВГУСТА',
    image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=1400&q=80',
  },
  {
    eyebrow: 'НОВАЯ КОЛЛЕКЦИЯ',
    title: 'MONOFORM',
    promo: 'СКИДКА 15% ДО 1 СЕНТЯБРЯ',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80',
  },
  {
    eyebrow: 'ХИТ СЕЗОНА',
    title: 'STONE GREY',
    promo: 'ОТ 1 290 РУБ/М²',
    image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01a0?w=1400&q=80',
  },
]

const currentSlide = ref(0)
let timer = null

function startAutoplay() {
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 5000)
}

onMounted(startAutoplay)
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.hero {
  position: relative;
  height: 420px;
  overflow: hidden;
}

.hero__slides {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero__slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.hero__slide--active {
  opacity: 1;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, transparent 100%);
}

.hero__content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 40px;
}

.hero__eyebrow {
  font-family: 'inter', sans-serif;
  font-size: 11px;
  letter-spacing: 0.2em;
  color: rgba(255,255,255,0.75);
  text-transform: uppercase;
  margin-bottom: 12px;
}

.hero__title {
  font-family: 'inter', sans-serif;
  font-size: 64px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1;
  margin-bottom: 24px;
}

.hero__promo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'inter', sans-serif;
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  transition: gap 0.2s;
}

.hero__promo:hover {
  gap: 14px;
}

.hero__promo-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #D9342B;
  flex-shrink: 0;
}

.hero__dots {
  position: absolute;
  bottom: 28px;
  left: 0;
  right: 0;
  display: flex;
  gap: 10px;
  z-index: 2;
}

.hero__dot {
  width: 28px;
  height: 3px;
  border: none;
  background: rgba(255,255,255,0.4);
  cursor: pointer;
  transition: background 0.2s;
  padding: 0;
}

.hero__dot--active {
  background: #D9342B;
}

@media (max-width: 768px) {
  .hero { height: 280px; }
  .hero__title { font-size: 36px; }
}
</style>
