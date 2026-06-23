<template>
  <section class="brands">
    <div class="brands__inner">
      <div class="brands__header">
        <h2 class="brands__title">КАТАЛОГ БРЕНДОВ</h2>
      </div>
      <div class="brands__stage">
        <button class="brands__arrow brands__arrow--prev" @click="scroll(-1)">
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
            <path d="M15 7H1M7 1L1 7l6 6" stroke="#aaa" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
        <div class="brands__track" ref="track">
          <a v-for="b in brands" :key="b.name" href="#" class="brand-item" :title="b.name">
            <span class="brand-item__name">{{ b.name }}</span>
          </a>
        </div>
        <button class="brands__arrow brands__arrow--next" @click="scroll(1)">
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
            <path d="M1 7h14M9 1l6 6-6 6" stroke="#aaa" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const track = ref(null)

const brands = [
  { name: 'CEZARES' },
  { name: 'ITALON' },
  { name: 'КЕРАМИН' },
  { name: 'GRASARO' },
  { name: 'LAPARET' },
  { name: 'CASABELLA' },
  { name: 'ATLAS CONCORDE' },
]

function scroll(dir) {
  if (track.value) track.value.scrollBy({ left: dir * 250, behavior: 'smooth' })
}
</script>

<style scoped>
/* Figma: frame-brands-zt = 1602px, background #EEE */
.brands {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0;
  background: #fff;
}

.brands__inner {
  width: 1602px;
  max-width: calc(100% - 240px);
  position: relative;
  padding: 0;
}

/* Title: Inter 700 46px letter-spacing -3px uppercase #EEE (light grey watermark style) */
.brands__header {
  padding: 32px 0 0;
}
.brands__title {
  font-family: 'inter', sans-serif;
  font-size: 46px;
  font-weight: 700;
  letter-spacing: -3px;
  text-transform: uppercase;
  color: #EEEEEE;
  margin: 0 0 0;
  line-height: 1;
}

/* Grey stage: Figma frame-rectangle17211v = 1600×240 background #EEE */
.brands__stage {
  background: #EEEEEE;
  height: 240px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.brands__arrow {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  transition: opacity 0.18s;
}
.brands__arrow:hover { opacity: 0.5; }

.brands__track {
  display: flex;
  align-items: center;
  gap: 0;
  overflow-x: auto;
  scrollbar-width: none;
  flex: 1;
  height: 100%;
}
.brands__track::-webkit-scrollbar { display: none; }

/* Brand item: Figma logos are mix-blend-mode: multiply, greyscale */
.brand-item {
  flex: 0 0 220px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-right: 1px solid rgba(0,0,0,0.08);
  transition: background 0.18s;
}
.brand-item:last-child { border-right: none; }
.brand-item:hover { background: rgba(255,255,255,0.5); }

.brand-item__name {
  font-family: 'inter', sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
  color: rgba(0,0,0,0.35);
  text-transform: uppercase;
  transition: color 0.18s;
}
.brand-item:hover .brand-item__name { color: rgba(0,0,0,0.6); }

@media (max-width: 1024px) {
  .brands__inner { max-width: calc(100% - 80px); }
}
@media (max-width: 640px) {
  .brands__inner { max-width: calc(100% - 40px); }
  .brands__title { font-size: 30px; }
  .brands__stage { height: 160px; }
  .brand-item { flex: 0 0 160px; }
}
</style>