<template>
  <section class="projects">
    <div class="projects__inner">
      <div class="projects__header">
        <hr class="projects__line" />
        <div class="projects__header-row">
          <h2 class="projects__title">реализованные проекты</h2>
          <a href="#" class="geo-all-link">
            <span class="geo-all-link__dot">→</span>
            все проекты (34)
          </a>
        </div>
      </div>

      <div class="projects__wrap">
        <button class="projects__arrow projects__arrow--prev" @click="scroll(-1)">
          <svg width="19" height="25" viewBox="0 0 19 25" fill="none">
            <path d="M18 12.5H1M9 1L1 12.5 9 24" stroke="#777" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>

        <div class="projects__track" ref="track">
          <div v-for="proj in projects" :key="proj.title" class="proj-card">
            <!-- Image 400×223 with dark overlay and photo count -->
            <div class="proj-card__img-wrap">
              <img :src="proj.img" :alt="proj.title" class="proj-card__img" />
              <!-- dark overlay from Figma: opacity 0.2 #2E2E2E -->
              <div class="proj-card__img-overlay" />
              <p class="proj-card__photo-count">{{ proj.photos }} фото</p>
            </div>

            <!-- White rect below image for title area (frame-rectangle1735/1736) -->
            <div class="proj-card__body">
              <h3 class="proj-card__title">{{ proj.title }}</h3>
              <div class="proj-card__mats">
                <p class="proj-card__mat-label">Используемые материалы:</p>
                <p v-for="m in proj.materials" :key="m" class="proj-card__mat">{{ m }}</p>
              </div>
            </div>
          </div>
        </div>

        <button class="projects__arrow projects__arrow--next" @click="scroll(1)">
          <svg width="19" height="25" viewBox="0 0 19 25" fill="none">
            <path d="M1 12.5H18M10 1l8 11.5L10 24" stroke="#777" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const track = ref(null)

const projects = [
  {
    title: 'Ванная комната 12 кв.м.',
    photos: 25,
    img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=450&q=80',
    materials: [
      'Керамогранит Creto Forza Calacatta white PG 01 45х45',
      'Керамогранит «Жаклин» 20x80 см 1.6 м² цвет белый',
      'Керамогранит Creto Forza Calacatta white PG 01 45х45',
    ],
  },
  {
    title: 'отделка керамогранитом барной стойки',
    photos: 12,
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=450&q=80',
    materials: [
      'Керамогранит Creto Forza Calacatta white PG 01 45х45',
      'Керамогранит «Жаклин» 20x80 см 1.6 м² цвет белый',
    ],
  },
  {
    title: 'проект и реализация стоматологического кабинета',
    photos: 15,
    img: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=450&q=80',
    materials: [
      'Керамогранит Creto Forza Calacatta white PG 01 45х45',
      'Керамогранит «Жаклин» 20x80 см 1.6 м² цвет белый',
      'Керамогранит Creto Forza Calacatta white PG 01 45х45',
    ],
  },
]

function scroll(dir) {
  if (track.value) track.value.scrollBy({ left: dir * 416, behavior: 'smooth' })
}
</script>

<style scoped>
.projects {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 0 56px;
  background: #fff;
}

.projects__inner {
  width: 1682px;
  max-width: calc(100% - 240px);
}

.projects__line {
  width: 100%;
  height: 1px;
  background: #E9E9E9;
  border: none;
  margin: 0 0 16px;
}

.projects__header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

/* Inter 700 25px ls-2px uppercase */
.projects__title {
  font-family: 'inter', sans-serif;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -2px;
  text-transform: uppercase;
  color: #000;
  margin: 0;
}

.geo-all-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'inter', sans-serif;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #999;
  text-decoration: none;
  transition: color 0.18s;
}
.geo-all-link:hover { color: #E03226; }
.geo-all-link__dot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #E03226;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
}

.projects__wrap {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.projects__arrow {
  flex-shrink: 0;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 100px;
  transition: opacity 0.18s;
}
.projects__arrow:hover { opacity: 0.5; }

.projects__track {
  display: flex;
  gap: 28px;
  overflow-x: auto;
  scrollbar-width: none;
  flex: 1;
}
.projects__track::-webkit-scrollbar { display: none; }

/* Card: Figma frame-group1743u = 400px wide */
.proj-card {
  flex: 0 0 400px;
}

/* Image wrap: 400×223 — Figma frame-mask-group7v */
.proj-card__img-wrap {
  width: 400px;
  height: 223px;
  position: relative;
  overflow: hidden;
  margin-bottom: 0;
}

.proj-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Figma: dark overlay opacity 0.2 #2E2E2E (for projects with text on image) */
.proj-card__img-overlay {
  position: absolute;
  inset: 0;
  background: rgba(46,46,46,0.20);
}

/* Photo count: Inter 300 12px uppercase white — top left */
.proj-card__photo-count {
  position: absolute;
  top: 12px;
  left: 16px;
  font-family: 'inter', sans-serif;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0;
  text-transform: uppercase;
  color: #fff;
  margin: 0;
  z-index: 1;
}

/* Body below image: white bg (frame-rectangle1735/1736 from Figma) */
.proj-card__body {
  background: #fff;
  padding: 16px 0 0;
}

/* Title: Inter 700 24px ls-2px uppercase */
.proj-card__title {
  font-family: 'inter', sans-serif;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -2px;
  text-transform: uppercase;
  color: #fff; /* Figma shows white on dark — here we adapt for light bg */
  color: #3E3E3E;
  line-height: 29px;
  margin: 0 0 12px;
  max-width: 276px;
}

/* Materials: Inter 700/300 14px ls-1px #525252 */
.proj-card__mat-label {
  font-family: 'inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -1px;
  color: #525252;
  margin: 0 0 4px;
  line-height: 21px;
}
.proj-card__mat {
  font-family: 'inter', sans-serif;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: -1px;
  color: #525252;
  margin: 0 0 8px;
  line-height: 21px;
}
.proj-card__mat:last-child { margin-bottom: 0; }

@media (max-width: 1024px) {
  .projects__inner { max-width: calc(100% - 80px); }
  .proj-card { flex: 0 0 320px; }
  .proj-card__img-wrap { width: 100%; }
}
@media (max-width: 640px) {
  .projects__inner { max-width: calc(100% - 40px); }
  .proj-card { flex: 0 0 280px; }
}
</style>