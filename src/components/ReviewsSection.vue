<template>
  <section class="reviews">
    <div class="container">
      <div class="section-header">
        <h2 class="section-heading">ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h2>
        <div class="reviews__actions">
          <a href="#" class="reviews__action-link">ОСТАВИТЬ СВОЙ ОТЗЫВ</a>
          <a href="#" class="reviews__action-link reviews__action-link--accent">
            СМОТРЕТЬ ВСЕ ОТЗЫВЫ (34) <span class="section-link__dot" />
          </a>
        </div>
      </div>

      <div class="reviews__wrap">
        <button class="reviews__arrow" @click="scroll(-1)" aria-label="Назад">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        </button>

        <div class="reviews__track" ref="track">
          <div v-for="review in reviews" :key="review.author" class="review-card">
            <div class="review-card__head">
              <img :src="review.avatar" :alt="review.author" class="review-card__avatar" />
              <div>
                <p class="review-card__author">{{ review.author }}</p>
                <p class="review-card__date">{{ review.date }}</p>
                <div class="review-card__stars">
                  <span v-for="s in 5" :key="s" class="star" :class="{ 'star--active': s <= review.rating }">★</span>
                </div>
              </div>
            </div>
            <blockquote class="review-card__text">
              <span class="review-card__quote">"</span>
              {{ review.text }}
            </blockquote>
            <div class="review-card__source">
              <span class="review-card__source-label">ИСТОЧНИК ОТЗЫВА:</span>
              <span class="review-card__source-name">2ГИС</span>
            </div>
          </div>
        </div>

        <button class="reviews__arrow" @click="scroll(1)" aria-label="Вперёд">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>
        </button>
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
    avatar: 'https://i.pravatar.cc/60?img=1',
    text: 'Очень интересное место. Ассортимент богатый и разнообразный, чем в других местах! Нашла для себя плитку, которую не видела нигде больше!',
  },
  {
    author: 'Григорий Кривиков',
    date: '23 ОКТЯБРЯ 2020',
    rating: 4,
    avatar: 'https://i.pravatar.cc/60?img=3',
    text: 'В каталоге нашего интернет-магазина более 570 коллекций керамической плитки и керамогранита от лучших производителей России и Европы. В наличии имеются эксклюзивные бренды.',
  },
  {
    author: 'Анжелика Петрова',
    date: '23 ОКТЯБРЯ 2020',
    rating: 4,
    avatar: 'https://i.pravatar.cc/60?img=5',
    text: 'Очень интересное место. Ассортимент богатый и разнообразный, чем в других местах! Нашли для себя плитку, которую не видели нигде больше!',
  },
]

function scroll(dir) {
  if (track.value) {
    track.value.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.reviews {
  padding: 56px 0;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}

.section-heading {
  font-family: 'inter', sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #C8C8C8;
}

.reviews__actions {
  display: flex;
  align-items: center;
  gap: 28px;
}

.reviews__action-link {
  font-family: 'inter', sans-serif;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #888;
  text-decoration: none;
  transition: color 0.18s;
}

.reviews__action-link:hover { color: #D9342B; }

.reviews__action-link--accent {
  color: #D9342B;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.section-link__dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #D9342B;
}

.reviews__wrap {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.reviews__arrow {
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
  margin-top: 60px;
  transition: color 0.18s;
}

.reviews__arrow:hover { color: #D9342B; }
.reviews__arrow svg { width: 20px; height: 20px; }

.reviews__track {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scrollbar-width: none;
  flex: 1;
}

.reviews__track::-webkit-scrollbar { display: none; }

.review-card {
  flex: 0 0 300px;
  border: 1px solid #EFEFEF;
  padding: 24px;
  background: #fff;
}

.review-card__head {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 16px;
}

.review-card__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.review-card__author {
  font-family: 'inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #1A1A1A;
  margin-bottom: 2px;
}

.review-card__date {
  font-family: 'roboto', sans-serif;
  font-size: 10px;
  color: #BDBDBD;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
}

.review-card__stars { display: flex; gap: 2px; }

.star {
  font-size: 14px;
  color: #E0E0E0;
}

.star--active { color: #D9342B; }

.review-card__text {
  font-family: 'roboto', sans-serif;
  font-size: 12px;
  line-height: 1.7;
  color: #555;
  margin: 0 0 20px;
  font-style: normal;
  position: relative;
}

.review-card__quote {
  font-size: 32px;
  color: #E8E8E8;
  line-height: 0.5;
  vertical-align: middle;
  margin-right: 4px;
  font-family: Georgia, serif;
}

.review-card__source {
  border-top: 1px solid #F0F0F0;
  padding-top: 12px;
}

.review-card__source-label {
  font-family: 'inter', sans-serif;
  font-size: 9px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #BDBDBD;
  margin-right: 6px;
}

.review-card__source-name {
  font-family: 'inter', sans-serif;
  font-size: 11px;
  font-weight: 700;
  color: #4CAF50;
}
</style>
