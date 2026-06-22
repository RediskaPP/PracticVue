<template>
  <section class="projects">
    <div class="container">
      <div class="section-header">
        <h2 class="section-heading">РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</h2>
        <a href="#" class="section-link">ВСЕ ПРОЕКТЫ (34) <span class="section-link__dot" /></a>
      </div>

      <div class="projects__wrap">
        <button class="projects__arrow" @click="scroll(-1)" aria-label="Назад">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        </button>

        <div class="projects__track" ref="track">
          <div v-for="project in projects" :key="project.title" class="proj-card">
            <a href="#" class="proj-card__img-wrap">
              <img :src="project.image" :alt="project.title" class="proj-card__img" />
              <div class="proj-card__badge">{{ project.photos }} ФОТО</div>
            </a>
            <div class="proj-card__body">
              <h3 class="proj-card__title">{{ project.title }}</h3>
              <div class="proj-card__materials">
                <p class="proj-card__mat-label">Используемые материалы:</p>
                <p v-for="mat in project.materials" :key="mat" class="proj-card__mat">{{ mat }}</p>
              </div>
            </div>
          </div>
        </div>

        <button class="projects__arrow" @click="scroll(1)" aria-label="Вперёд">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>
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
    title: 'ВАННАЯ КОМНАТА 12 КВ.М.',
    photos: 22,
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80',
    materials: ['Керамогранит Creto Forza Calacatta white PG 01 45×45', 'Керамогранит «Жасмин» 20×80 см 16 м² цвет белый'],
  },
  {
    title: 'ОТДЕЛКА КЕРАМОГРАНИТОМ БАРНОЙ СТОЙКИ',
    photos: 18,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80',
    materials: ['Керамогранит Creto Forza Calacatta white PG 01 45×45', 'Керамогранит «Жасмин» 20×80 см 16 м² цвет белый'],
  },
  {
    title: 'ПРОЕКТ И РЕАЛИЗАЦИЯ СТОМАТОЛОГИЧЕСКОГО КАБИНЕТА',
    photos: 10,
    image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=400&q=80',
    materials: ['Керамогранит Creto Forza Calacatta white PG 01 45×45', 'Керамогранит «Жасмин» 20×80 см 16 м² цвет белый'],
  },
]

function scroll(dir) {
  if (track.value) {
    track.value.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.projects {
  padding: 56px 0;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.section-heading {
  font-family: 'inter', sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #1A1A1A;
}

.section-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'inter', sans-serif;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #888;
  text-decoration: none;
  transition: color 0.18s;
}

.section-link:hover { color: #D9342B; }

.section-link__dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #D9342B;
}

.projects__wrap {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.projects__arrow {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: #BDBDBD;
  margin-top: 80px;
  transition: color 0.18s;
}

.projects__arrow:hover { color: #D9342B; }
.projects__arrow svg { width: 20px; height: 20px; }

.projects__track {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scrollbar-width: none;
  flex: 1;
}

.projects__track::-webkit-scrollbar { display: none; }

.proj-card {
  flex: 0 0 260px;
}

.proj-card__img-wrap {
  display: block;
  position: relative;
  overflow: hidden;
  margin-bottom: 14px;
}

.proj-card__img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}

.proj-card__img-wrap:hover .proj-card__img {
  transform: scale(1.04);
}

.proj-card__badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(0,0,0,0.55);
  color: #fff;
  font-family: 'inter', sans-serif;
  font-size: 9px;
  letter-spacing: 0.1em;
  padding: 4px 8px;
}

.proj-card__title {
  font-family: 'inter', sans-serif;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  color: #1A1A1A;
  letter-spacing: 0.02em;
  margin-bottom: 12px;
  line-height: 1.3;
}

.proj-card__mat-label {
  font-family: 'roboto', sans-serif;
  font-size: 11px;
  color: #888;
  margin-bottom: 4px;
}

.proj-card__mat {
  font-family: 'roboto', sans-serif;
  font-size: 11px;
  color: #555;
  line-height: 1.5;
}
</style>
