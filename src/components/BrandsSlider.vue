<template>
  <section class="brands">
    <div class="container">
      <h2 class="section-title">КАТАЛОГ БРЕНДОВ</h2>
      <div class="brands__wrap">
        <button class="brands__arrow brands__arrow--prev" @click="scroll(-1)" aria-label="Назад">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div class="brands__track" ref="track">
          <a v-for="brand in brands" :key="brand.name" href="#" class="brand-item" :title="brand.name">
            <img :src="brand.logo" :alt="brand.name" class="brand-item__logo" />
          </a>
        </div>
        <button class="brands__arrow brands__arrow--next" @click="scroll(1)" aria-label="Вперёд">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const track = ref(null)

const brands = [
  { name: 'Cezares', logo: 'https://via.placeholder.com/120x40/ffffff/999999?text=CEZARES' },
  { name: 'Italon', logo: 'https://via.placeholder.com/120x40/ffffff/999999?text=ITALON' },
  { name: 'Керамин', logo: 'https://via.placeholder.com/120x40/ffffff/999999?text=КЕРАМИН' },
  { name: 'Grasaro', logo: 'https://via.placeholder.com/120x40/ffffff/999999?text=GRASARO' },
  { name: 'Laparet', logo: 'https://via.placeholder.com/120x40/ffffff/999999?text=LAPARET' },
  { name: 'Casabella', logo: 'https://via.placeholder.com/120x40/ffffff/999999?text=CASABELLA' },
]

function scroll(dir) {
  if (track.value) {
    track.value.scrollBy({ left: dir * 200, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.brands {
  padding: 48px 0;
  background: #F7F7F7;
}

.section-title {
  font-family: 'inter', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #C8C8C8;
  margin-bottom: 28px;
}

.brands__wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.brands__arrow {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
  transition: color 0.18s;
}

.brands__arrow:hover {
  color: #D9342B;
}

.brands__arrow svg {
  width: 20px;
  height: 20px;
}

.brands__track {
  display: flex;
  align-items: center;
  gap: 0;
  overflow-x: auto;
  scrollbar-width: none;
  flex: 1;
}

.brands__track::-webkit-scrollbar {
  display: none;
}

.brand-item {
  flex: 0 0 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  border-right: 1px solid #E0E0E0;
  transition: opacity 0.2s;
  text-decoration: none;
}

.brand-item:last-child {
  border-right: none;
}

.brand-item:hover {
  opacity: 0.7;
}

.brand-item__logo {
  max-width: 120px;
  height: 36px;
  object-fit: contain;
  filter: grayscale(1);
  transition: filter 0.2s;
}

.brand-item:hover .brand-item__logo {
  filter: grayscale(0);
}
</style>
