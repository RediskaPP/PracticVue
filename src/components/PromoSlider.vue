<template>
  <section class="promo-slider">
    <div class="container">
      <div class="promo-slider__track" ref="track">
        <a
          v-for="item in promos"
          :key="item.title"
          href="#"
          class="promo-card"
          :style="{ backgroundImage: `url(${item.image})` }"
        >
          <div class="promo-card__overlay" />
          <div class="promo-card__body">
            <span class="promo-card__tag">{{ item.tag }}</span>
            <h3 class="promo-card__title">{{ item.title }}</h3>
          </div>
        </a>
      </div>

      <button class="promo-slider__arrow promo-slider__arrow--prev" @click="scroll(-1)" aria-label="Назад">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button class="promo-slider__arrow promo-slider__arrow--next" @click="scroll(1)" aria-label="Вперёд">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const track = ref(null)

const promos = [
  {
    tag: 'С 15 АПРЕЛЯ ПО 20 МАЯ',
    title: 'РАСПРОДАЖА КЕРАМИКИ ITALON',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&q=80',
  },
  {
    tag: 'ОБНОВЛЕНИЕ КАТАЛОГА',
    title: 'НОВЫЕ ПОСТУПЛЕНИЯ GRASARO 2021',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80',
  },
  {
    tag: 'С 15 АПРЕЛЯ ПО 20 МАЯ',
    title: 'СКИДКА НА ОСТАТКИ ДО 70%',
    image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=400&q=80',
  },
  {
    tag: 'АКЦИЯ',
    title: 'БЕСПЛАТНЫЙ ЗАМЕР ПРИ ЗАКАЗЕ',
    image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01a0?w=400&q=80',
  },
]

function scroll(dir) {
  if (track.value) {
    track.value.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.promo-slider {
  padding: 48px 0;
}

.promo-slider .container {
  position: relative;
}

.promo-slider__track {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  padding-bottom: 4px;
}

.promo-slider__track::-webkit-scrollbar {
  display: none;
}

.promo-card {
  flex: 0 0 300px;
  height: 200px;
  position: relative;
  display: block;
  overflow: hidden;
  scroll-snap-align: start;
  text-decoration: none;
  border: 1px solid #E8E8E8;
}

.promo-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%);
  background-size: cover;
  background-position: center;
}

.promo-card > :not(.promo-card__overlay) {
  background-size: cover;
  background-position: center;
}

.promo-card {
  background-size: cover;
  background-position: center;
}

.promo-card__body {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  z-index: 1;
}

.promo-card__tag {
  display: block;
  font-family: 'inter', sans-serif;
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #D9342B;
  margin-bottom: 6px;
}

.promo-card__title {
  font-family: 'inter', sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  line-height: 1.25;
}

.promo-slider__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid #E0E0E0;
  cursor: pointer;
  color: #444;
  z-index: 2;
  transition: background 0.18s, color 0.18s;
}

.promo-slider__arrow:hover {
  background: #D9342B;
  color: #fff;
  border-color: #D9342B;
}

.promo-slider__arrow svg {
  width: 18px;
  height: 18px;
}

.promo-slider__arrow--prev { left: -18px; }
.promo-slider__arrow--next { right: -18px; }
</style>
