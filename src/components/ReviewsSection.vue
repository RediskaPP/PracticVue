<template>
  <section class="reviews">
    <!-- Figma: frame-rectangle1721-te = 1920×560 gradient bg -->
    <div class="reviews__bg">
      <div class="reviews__inner">
        <!-- Header -->
        <div class="reviews__header">
          <div class="reviews__header-left">
            <!-- Title: Inter 700 46px ls-3px uppercase #EEE (watermark style) -->
            <h2 class="reviews__title">Отзывы наших клиентов</h2>
          </div>
          <div class="reviews__header-right">
            <!-- Inter 400 16px uppercase red -->
            <a href="#" class="reviews__action">Оставить свой отзыв</a>
            <a href="#" class="reviews__action reviews__action--count">
              смотреть все отзывы <span class="reviews__count">(34)</span>
            </a>
          </div>
        </div>

        <!-- Cards row with arrows -->
        <div class="reviews__wrap">
          <button class="reviews__arrow" @click="scroll(-1)">
            <svg width="30" height="27" viewBox="0 0 30 27" fill="none">
              <path d="M28 13.5H2M14 2L2 13.5 14 25" stroke="#ccc" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>

          <div class="reviews__track" ref="track">
            <div v-for="r in reviews" :key="r.author" class="rev-card">
              <!-- Figma: frame-group150/152/154 = 360-403px wide -->
              <div class="rev-card__head">
                <img :src="r.avatar" :alt="r.author" class="rev-card__avatar" />
                <div class="rev-card__meta">
                  <!-- Inter 500 22px ls-2px -->
                  <p class="rev-card__author">{{ r.author }}</p>
                  <!-- Inter 700 10px ls3px uppercase #A3A3A3 -->
                  <p class="rev-card__date">{{ r.date }}</p>
                  <!-- Stars SVG from Figma group151 -->
                  <div class="rev-card__stars">
                    <span v-for="s in 5" :key="s" :class="['rev-card__star', s <= r.rating ? 'rev-card__star--on' : '']">★</span>
                  </div>
                </div>
              </div>
              <!-- Quote icon + text: Inter 300 14px lh21px #3A2B02 -->
              <div class="rev-card__text-wrap">
                <svg class="rev-card__quote-icon" width="12" height="10" viewBox="0 0 12 10" fill="none">
                  <path d="M0 10V6.4C0 2.8 2 .8 6 0v2C4 2.6 3 3.6 3 5h3v5H0zm7 0V6.4C7 2.8 9 .8 13 0v2c-2 .6-3 1.6-3 3h3v5H7z" fill="#C4C4C4"/>
                </svg>
                <p class="rev-card__text" v-for="line in r.lines" :key="line">{{ line }}</p>
              </div>
              <!-- Source -->
              <div class="rev-card__source">
                <!-- Inter 300 14px uppercase #A3A3A3 -->
                <span class="rev-card__source-label">Источник отзыва:</span>
                <span class="rev-card__source-name">2ГИС</span>
              </div>
            </div>
          </div>

          <button class="reviews__arrow" @click="scroll(1)">
            <svg width="30" height="27" viewBox="0 0 30 27" fill="none">
              <path d="M2 13.5H28M16 2l12 11.5L16 25" stroke="#ccc" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const track = ref(null)

const reviews = [
  {
    author: 'Екатерина Петрова',
    date: '23 ОКТЯБРЯ 2020',
    rating: 4,
    avatar: 'https://i.pravatar.cc/80?img=1',
    lines: ['Очень интересное место. Ассортимент богаче и разнообразнее, чем в других местах!!!', 'Нашли для себя плитку, которую не видели нигде больше!'],
  },
  {
    author: 'Григорий Кривиков',
    date: '23 ОКТЯБРЯ 2020',
    rating: 4,
    avatar: 'https://i.pravatar.cc/80?img=3',
    lines: ['В каталоге нашего интернет-магазина более 570 коллекций керамической плитки и керамогранита от лучших производителей России и Европы.', 'В наличии имеются эксклюзивные бренды, которые вы не найдете в других магазинах Иркутска.'],
  },
  {
    author: 'Анжелика Петрова',
    date: '23 ОКТЯБРЯ 2020',
    rating: 4,
    avatar: 'https://i.pravatar.cc/80?img=5',
    lines: ['Очень интересное место. Ассортимент богаче и разнообразнее, чем в других местах!!!', 'Нашли для себя плитку, которую не видели нигде больше!'],
  },
]

function scroll(dir) {
  if (track.value) track.value.scrollBy({ left: dir * 420, behavior: 'smooth' })
}
</script>

<style scoped>
.reviews {
  width: 100%;
}

/* Figma: frame-rectangle1721-te = gradient from #EEE to transparent */
.reviews__bg {
  width: 100%;
  background: linear-gradient(180deg, #EEEEEE 0%, rgba(238,238,238,0) 49%);
  padding: 48px 0 56px;
  display: flex;
  justify-content: center;
}

/* 1441px centered from Figma frame-group18227 */
.reviews__inner {
  width: 1920px;
  max-width: calc(100% - 240px);
}

/* Header */
.reviews__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 32px;
}

/* Title: Inter 700 46px ls-3px uppercase #EEE (faded watermark) */
.reviews__title {
  font-family: 'inter', sans-serif;
  font-size: 46px;
  font-weight: 700;
  letter-spacing: -3px;
  text-transform: uppercase;
  color: #EEEEEE;
  margin: 0;
}

.reviews__header-right {
  display: flex;
  align-items: center;
  gap: 32px;
}

/* Inter 400 16px uppercase red */
.reviews__action {
  font-family: 'inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  color: red;
  text-decoration: none;
  transition: opacity 0.18s;
}
.reviews__action:hover { opacity: 0.7; }

.reviews__count {
  font-family: 'inter', sans-serif;
  font-weight: 300;
  color: #9B9B9B;
}

/* Wrap + arrows */
.reviews__wrap {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.reviews__arrow {
  flex-shrink: 0;
  width: 40px;
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 120px;
  transition: opacity 0.18s;
}
.reviews__arrow:hover { opacity: 0.5; }

.reviews__track {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scrollbar-width: none;
  flex: 1;
}
.reviews__track::-webkit-scrollbar { display: none; }

/* Card: Figma frame-group152/153/154 = 360-403px */
.rev-card {
  flex: 0 0 360px;
  background: #fff;
  padding: 24px;
  box-sizing: border-box;
}

.rev-card__head {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 20px;
}

/* avatar: 80×80 from Figma */
.rev-card__avatar {
  width: 80px;
  height: 80px;
  border-radius: 0;
  object-fit: cover;
  flex-shrink: 0;
}

.rev-card__meta { flex: 1; }

/* Author: Inter 500 22px ls-2px */
.rev-card__author {
  font-family: 'inter', sans-serif;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -2px;
  color: #000;
  margin: 0 0 4px;
  line-height: 26px;
}

/* Date: Inter 700 10px ls3px uppercase #A3A3A3 */
.rev-card__date {
  font-family: 'inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #A3A3A3;
  margin: 0 0 6px;
}

.rev-card__stars { display: flex; gap: 2px; }
.rev-card__star { font-size: 14px; color: #E0E0E0; }
.rev-card__star--on { color: #E03226; }

.rev-card__text-wrap {
  margin-bottom: 20px;
}

.rev-card__quote-icon {
  margin-bottom: 8px;
}

/* Text: Inter 300 14px lh21px #3A2B02 */
.rev-card__text {
  font-family: 'inter', sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
  color: #3A2B02;
  margin: 0 0 12px;
}
.rev-card__text:last-child { margin-bottom: 0; }

.rev-card__source {
  border-top: 1px solid #F0F0F0;
  padding-top: 12px;
}

/* Source label: Inter 300 14px uppercase #A3A3A3 */
.rev-card__source-label {
  font-family: 'inter', sans-serif;
  font-size: 14px;
  font-weight: 300;
  text-transform: uppercase;
  color: #A3A3A3;
  margin-right: 8px;
}

/* 2ГИС green */
.rev-card__source-name {
  font-family: 'inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #4CAF50;
}

@media (max-width: 1024px) {
  .reviews__inner { max-width: calc(100% - 80px); }
  .reviews__title { font-size: 32px; }
}
@media (max-width: 640px) {
  .reviews__inner { max-width: calc(100% - 40px); }
  .reviews__header { flex-direction: column; gap: 16px; }
  .rev-card { flex: 0 0 280px; }
}
</style>