<template>
  <section class="popular">
    <div class="popular__inner">
      <!-- Header -->
      <div class="popular__header">
        <hr class="popular__line" />
        <div class="popular__header-row">
          <div class="popular__tabs">
            <button
                v-for="tab in tabs"
                :key="tab"
                class="popular__tab"
                :class="{ 'popular__tab--active': activeTab === tab }"
                @click="activeTab = tab"
            >{{ tab }}</button>
            <!-- Figma: dashed underline under inactive tab -->
          </div>
          <a href="#" class="geo-all-link">
            <span class="geo-all-link__dot">→</span>
            все коллекции
          </a>
        </div>
      </div>

      <!-- Cards row with arrows -->
      <div class="popular__wrap">
        <button class="popular__arrow popular__arrow--prev" @click="scroll(-1)">
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
            <path d="M15 7H1M7 1L1 7l6 6" stroke="#aaa" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>

        <div class="popular__track" ref="track">
          <div v-for="item in items" :key="item.name" class="pop-card">
            <!-- Card border: 400×485 from Figma -->
            <div class="pop-card__frame">
              <!-- Country tag: white rect over image -->
              <div class="pop-card__country-wrap">
                <div class="pop-card__country-bg" />
                <span class="pop-card__flag">{{ item.flag }}</span>
                <span class="pop-card__country">{{ item.country }}</span>
              </div>

              <!-- Wish button -->
              <button class="pop-card__wish" :class="{ 'pop-card__wish--active': item.wished }">
                <svg width="22" height="20" viewBox="0 0 24 22" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
              </button>

              <!-- Image 398×270 -->
              <img :src="item.img" :alt="item.name" class="pop-card__img" />

              <!-- Brand meta: Inter 700 10px ls3px uppercase grey #9B9B9B -->
              <p class="pop-card__brand">{{ item.brand }}</p>

              <!-- Name: Inter 700 40px ls-2px #525252 -->
              <h3 class="pop-card__name">{{ item.name }}</h3>

              <!-- Footer: grey bg #F5F5F5 396×70 -->
              <div class="pop-card__footer">
                <span class="pop-card__count">{{ item.count }} элемента</span>
                <button class="pop-card__more">
                  <svg width="22" height="24" viewBox="0 0 22 24" fill="none" stroke="#555" stroke-width="1.5">
                    <path d="M4 12h14M11 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <button class="popular__arrow popular__arrow--next" @click="scroll(1)">
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
            <path d="M1 7h14M9 1l6 6-6 6" stroke="#aaa" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {getPopulars} from "../api/api.js";

const tabs = ['Популярные коллеции', 'Популярные ТОВАРЫ']
const activeTab = ref(tabs[0])
const track = ref(null)

const items = ref([]);

onMounted(async () => {
  items.value = await getPopulars()
})

function scroll(dir) {
  if (track.value) track.value.scrollBy({ left: dir * 416, behavior: 'smooth' })
}
</script>

<style scoped>
.popular {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 0 56px;
  background: #fff;
}

/* 1682px centered */
.popular__inner {
  width: 1682px;
  max-width: calc(100% - 240px);
}

.popular__line {
  width: 100%;
  height: 1px;
  background: #E9E9E9;
  border: none;
  margin: 0 0 16px;
}

.popular__header-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 24px;
}

/* Tabs: Inter 700 25px ls-2px uppercase */
.popular__tabs {
  display: flex;
  align-items: flex-end;
  gap: 0;
}

.popular__tab {
  font-family: 'inter', sans-serif;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -2px;
  text-transform: uppercase;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 28px 8px 0;
  color: #6F6F6F;
  position: relative;
  transition: color 0.18s;
}

.popular__tab--active {
  color: #000;
}

/* Figma: dashed underline vector141 for inactive tab */
.popular__tab:not(.popular__tab--active)::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 273px;
  height: 2px;
  border-bottom: 2px dashed #6E6E6E;
}

/* geo-all-link */
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

/* Wrap + arrows */
.popular__wrap {
  display: flex;
  align-items: flex-start;
  gap: 0;
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
  margin-top: 220px;
  transition: opacity 0.18s;
}
.popular__arrow:hover { opacity: 0.5; }

.popular__track {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scrollbar-width: none;
  flex: 1;
}
.popular__track::-webkit-scrollbar { display: none; }

/* Card: Figma frame-group140-kv = 401px wide, 514px tall */
.pop-card {
  flex: 0 0 401px;
}

/* Inner frame with border — Figma frame-rectangle138-vx = 400×485 border #E9E9E9 */
.pop-card__frame {
  width: 400px;
  min-height: 485px;
  border: 1px solid #E9E9E9;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Country tag row */
.pop-card__country-wrap {
  position: relative;
  height: 34px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  gap: 6px;
  flex-shrink: 0;
}
.pop-card__country-bg {
  position: absolute;
  inset: 0;
  background: #fff;
}
.pop-card__flag { font-size: 16px; position: relative; z-index: 1; }
/* Country text: Inter 400 12px #A3A3A3 */
.pop-card__country {
  font-family: 'inter', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #A3A3A3;
  position: relative;
  z-index: 1;
}

/* Wish button: absolute top-right */
.pop-card__wish {
  position: absolute;
  top: 6px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #C4C4C4;
  z-index: 2;
  transition: color 0.18s;
}
.pop-card__wish:hover,
.pop-card__wish--active { color: #E03226; }
.pop-card__wish--active svg { fill: #E03226; }

/* Image: 398×270 */
.pop-card__img {
  width: 100%;
  height: 270px;
  object-fit: cover;
  display: block;
  flex-shrink: 0;
}

/* Brand: Inter 700 10px ls3px uppercase #9B9B9B */
.pop-card__brand {
  font-family: 'inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #9B9B9B;
  margin: 12px 12px 4px;
}

/* Name: Inter 700 40px ls-2px #525252 */
.pop-card__name {
  font-family: 'inter', sans-serif;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -2px;
  color: #525252;
  margin: 0 12px 12px;
  line-height: 1.1;
  flex: 1;
}

/* Footer: bg #F5F5F5 height 70px — Figma frame-rectangle190 = 396×70 */
.pop-card__footer {
  height: 70px;
  background: #F5F5F5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  flex-shrink: 0;
}

/* Count: Inter 400 22px #A3A3A3 */
.pop-card__count {
  font-family: 'inter', sans-serif;
  font-size: 22px;
  font-weight: 400;
  color: #A3A3A3;
}

.pop-card__more {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: opacity 0.18s;
}
.pop-card__more:hover { opacity: 0.6; }

@media (max-width: 1024px) {
  .popular__inner { max-width: calc(100% - 80px); }
  .pop-card { flex: 0 0 320px; }
  .pop-card__frame { width: 100%; }
  .pop-card__name { font-size: 28px; }
}
@media (max-width: 640px) {
  .popular__inner { max-width: calc(100% - 40px); }
  .popular__tab { font-size: 16px; }
}
</style>