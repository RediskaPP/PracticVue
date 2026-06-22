<template>
  <section class="popular">
    <div class="container">
      <div class="section-header">
        <div class="popular__tabs">
          <button
            v-for="tab in tabs"
            :key="tab"
            class="popular__tab"
            :class="{ 'popular__tab--active': activeTab === tab }"
            @click="activeTab = tab"
          >
            {{ tab }}
          </button>
        </div>
        <a href="#" class="section-link">ВСЕ КОЛЛЕКЦИИ <span class="section-link__dot" /></a>
      </div>

      <div class="popular__wrap">
        <button class="popular__arrow popular__arrow--prev" @click="scroll(-1)" aria-label="Назад">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        </button>

        <div class="popular__track" ref="track">
          <a
            v-for="item in items"
            :key="item.name"
            href="#"
            class="col-card"
          >
            <div class="col-card__head">
              <span class="col-card__flag">{{ item.flag }}</span>
              <span class="col-card__country">{{ item.country }}</span>
              <button class="col-card__wish" :class="{ 'col-card__wish--active': item.wished }" aria-label="В избранное">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
              </button>
            </div>
            <img :src="item.image" :alt="item.name" class="col-card__img" />
            <div class="col-card__body">
              <p class="col-card__brand">{{ item.brand }}</p>
              <h3 class="col-card__name">{{ item.name }}</h3>
              <div class="col-card__footer">
                <span class="col-card__count">{{ item.count }} элемента</span>
                <a href="#" class="col-card__more">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </div>
          </a>
        </div>

        <button class="popular__arrow popular__arrow--next" @click="scroll(1)" aria-label="Вперёд">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const tabs = ['ПОПУЛЯРНЫЕ КОЛЛЕКЦИИ', 'ПОПУЛЯРНЫЕ ТОВАРЫ']
const activeTab = ref(tabs[0])
const track = ref(null)

const items = [
  {
    flag: '🇷🇺', country: 'Россия', brand: 'LAPARET',
    name: 'МоноТиберио', count: 4, wished: false,
    image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01a0?w=300&q=80',
  },
  {
    flag: '🇪🇸', country: 'Испания', brand: 'ЧУРАДАРРО',
    name: 'Альтус', count: 12, wished: false,
    image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=300&q=80',
  },
  {
    flag: '🇮🇹', country: 'Италия', brand: 'CASABELLA',
    name: 'Бизарро', count: 4, wished: true,
    image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=300&q=80',
  },
  {
    flag: '🇷🇺', country: 'Россия', brand: 'ITALON',
    name: 'Charme Evo', count: 8, wished: false,
    image: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=300&q=80',
  },
]

function scroll(dir) {
  if (track.value) {
    track.value.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.popular {
  padding: 0 0 56px;
}

.section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 28px;
  border-bottom: 1px solid #EFEFEF;
}

.popular__tabs {
  display: flex;
  gap: 0;
}

.popular__tab {
  font-family: 'inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #BDBDBD;
  background: none;
  border: none;
  padding: 0 0 14px;
  margin-right: 32px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  transition: color 0.18s;
}

.popular__tab--active {
  color: #1A1A1A;
  border-bottom-color: #D9342B;
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
  padding-bottom: 14px;
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

.popular__wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.popular__arrow {
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
  transition: color 0.18s;
}

.popular__arrow:hover { color: #D9342B; }
.popular__arrow svg { width: 20px; height: 20px; }

.popular__track {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scrollbar-width: none;
  flex: 1;
  padding-bottom: 4px;
}

.popular__track::-webkit-scrollbar { display: none; }

.col-card {
  flex: 0 0 240px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border: 1px solid #EFEFEF;
  background: #fff;
  transition: box-shadow 0.2s;
}

.col-card:hover {
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.col-card__head {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
}

.col-card__flag { font-size: 14px; }

.col-card__country {
  font-family: 'inter', sans-serif;
  font-size: 10px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  flex: 1;
}

.col-card__wish {
  background: none;
  border: none;
  cursor: pointer;
  color: #CCC;
  padding: 0;
  display: flex;
  transition: color 0.18s;
}

.col-card__wish:hover,
.col-card__wish--active {
  color: #D9342B;
}

.col-card__wish svg {
  width: 18px;
  height: 18px;
}

.col-card__wish--active svg {
  fill: #D9342B;
  stroke: #D9342B;
}

.col-card__img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.col-card__body {
  padding: 14px;
}

.col-card__brand {
  font-family: 'inter', sans-serif;
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #BDBDBD;
  margin-bottom: 4px;
}

.col-card__name {
  font-family: 'inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #1A1A1A;
  margin-bottom: 12px;
}

.col-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #F0F0F0;
  padding-top: 10px;
}

.col-card__count {
  font-family: 'roboto', sans-serif;
  font-size: 11px;
  color: #999;
}

.col-card__more {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 1px solid #E0E0E0;
  color: #888;
  text-decoration: none;
  transition: background 0.18s, color 0.18s;
}

.col-card__more:hover {
  background: #D9342B;
  border-color: #D9342B;
  color: #fff;
}

.col-card__more svg { width: 14px; height: 14px; }
</style>
