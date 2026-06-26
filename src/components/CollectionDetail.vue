<template>
  <div class="collection-detail">

    <!-- Breadcrumb + Wishlist -->
    <div class="cd-top-row">
      <nav class="cd-breadcrumb">
        <span>ГЛАВНАЯ</span>
        <span class="sep">—</span>
        <span>КАТАЛОГ</span>
        <span class="sep">—</span>
        <span class="active">КЕРАМИЧЕСКАЯ ПЛИТКА</span>
      </nav>
      <button class="cd-wishlist-btn" @click="wishlisted = !wishlisted" :class="{ active: wishlisted }">
        <svg width="16" height="15" viewBox="0 0 24 22" fill="none">
          <path
              d="M12 21C12 21 2 14 2 7C2 4.23858 4.23858 2 7 2C9.07513 2 10.8539 3.26341 11.6497 5.07946C11.7853 5.38563 12.2147 5.38563 12.3503 5.07946C13.1461 3.26341 14.9249 2 17 2C19.7614 2 22 4.23858 22 7C22 14 12 21 12 21Z"
              :stroke="wishlisted ? '#e03226' : '#3e3e3e'"
              :fill="wishlisted ? '#e03226' : 'none'"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
          />
        </svg>
        {{ wishlisted ? 'В ИЗБРАННОМ' : 'ДОБАВИТЬ В ИЗБРАННОЕ' }}
      </button>
    </div>

    <!-- Title -->
    <div class="cd-title-row">
      <h1 class="cd-title">Коллекция «{{ collection.name }}»</h1>
      <div class="cd-country">
        <img v-if="collection.flag" :src="collection.flag" class="cd-flag" alt="флаг" />
        <span v-else class="cd-flag-emoji">{{ collection.flagEmoji || '🏳️' }}</span>
        <span class="cd-country-name">{{ collection.country || collection.side || '' }}</span>
      </div>
    </div>

    <!-- Body -->
    <div class="cd-body">

      <!-- Gallery -->
      <div class="cd-gallery">
        <div class="cd-main-img-wrap">
          <img
              v-if="mainImage"
              :src="mainImage"
              :alt="collection.name"
              class="cd-main-img"
              @error="e => e.target.style.display = 'none'"
          />
          <div v-else class="cd-img-placeholder" />
        </div>

        <!-- Thumbnails — только если картинок больше одной -->
        <div class="cd-thumbs-row" v-if="images.length > 1">
          <button class="cd-thumb-nav" @click="prev">‹</button>
          <div class="cd-thumbs">
            <button
                v-for="(img, i) in images"
                :key="i"
                class="cd-thumb"
                :class="{ active: activeIndex === i }"
                @click="activeIndex = i"
            >
              <img :src="img" :alt="`фото ${i+1}`" @error="e => e.target.style.display='none'" />
            </button>
          </div>
          <button class="cd-thumb-nav" @click="next">›</button>
        </div>
      </div>

      <!-- Info -->
      <div class="cd-info">

        <!-- Brand -->
        <div class="cd-brand-box">
          <img v-if="collection.brandLogo" :src="collection.brandLogo" class="cd-brand-logo" :alt="collection.brand" />
          <span v-else class="cd-brand-text">{{ collection.brand || '—' }}</span>
        </div>

        <!-- Types -->
        <p v-if="types.length" class="cd-types">
          В коллекции: {{ types.join(', ') }}
        </p>

        <!-- Specs — показываем только те поля которые есть -->
        <div class="cd-specs" v-if="hasSpecs">
          <div v-if="collection.application" class="cd-spec">
            <span class="cd-spec-label">Применение:</span>
            <span class="cd-spec-value">{{ collection.application }}</span>
          </div>
          <div v-if="collection.colors" class="cd-spec">
            <span class="cd-spec-label">Цвета:</span>
            <span class="cd-spec-value">{{ collection.colors }}</span>
          </div>
          <div v-if="collection.style" class="cd-spec">
            <span class="cd-spec-label">Стилистика:</span>
            <span class="cd-spec-value">{{ collection.style }}</span>
          </div>
          <div v-if="collection.pattern" class="cd-spec">
            <span class="cd-spec-label">Рисунок:</span>
            <span class="cd-spec-value">{{ collection.pattern }}</span>
          </div>
          <div v-if="collection.sizes" class="cd-spec">
            <span class="cd-spec-label">Размеры:</span>
            <span class="cd-spec-value">{{ collection.sizes }}</span>
          </div>
          <div v-if="collection.formats" class="cd-spec">
            <span class="cd-spec-label">Форматы:</span>
            <span class="cd-spec-value">{{ collection.formats }}</span>
          </div>
          <div v-if="collection.count" class="cd-spec">
            <span class="cd-spec-label">Товаров:</span>
            <span class="cd-spec-value">{{ collection.count }}</span>
          </div>
        </div>

        <!-- Price -->
        <div class="cd-price-row" v-if="collection.price || collection.priceFrom">
          <div class="cd-price-block">
            <span class="cd-price-label">Цена:</span>
            <span class="cd-price-current">от {{ formatPrice(collection.price || collection.priceFrom) }} руб.</span>
            <span v-if="collection.priceOld" class="cd-price-old">
              от {{ formatPrice(collection.priceOld) }} руб.
            </span>
          </div>
          <div v-if="collection.discount" class="cd-discount-badge">
            <span class="cd-discount-percent">Скидка {{ collection.discount }}%</span>
            <span v-if="collection.discountUntil" class="cd-discount-until">до {{ collection.discountUntil }}</span>
          </div>
        </div>

      </div>
    </div>

    <!-- Description -->
    <div v-if="description.length" class="cd-description">
      <p v-for="(para, i) in description" :key="i" class="cd-desc-para">{{ para }}</p>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  collection: {
    type: Object,
    required: true,
  },
})

const activeIndex = ref(0)
const wishlisted = ref(false)

// Нормализуем картинки — может быть images[], img (строка), или ничего
const images = computed(() => {
  const c = props.collection
  if (Array.isArray(c.images) && c.images.length) return c.images
  if (typeof c.img === 'string' && c.img) return [c.img]
  return []
})

const mainImage = computed(() => images.value[activeIndex.value] ?? null)

// Нормализуем types — может быть массив, строка или отсутствовать
const types = computed(() => {
  const c = props.collection
  if (Array.isArray(c.types)) return c.types
  if (typeof c.types === 'string' && c.types) return [c.types]
  return []
})

// Нормализуем description — может быть массив, строка или отсутствовать
const description = computed(() => {
  const c = props.collection
  if (Array.isArray(c.description)) return c.description
  if (typeof c.description === 'string' && c.description) return [c.description]
  return []
})

// Есть ли хоть одно поле для спеков
const hasSpecs = computed(() => {
  const c = props.collection
  return !!(c.application || c.colors || c.style || c.pattern || c.sizes || c.formats || c.count)
})

function prev() {
  if (activeIndex.value > 0) activeIndex.value--
}
function next() {
  if (activeIndex.value < images.value.length - 1) activeIndex.value++
}
function formatPrice(v) {
  return Number(v || 0).toLocaleString('ru-RU')
}
</script>

<style scoped>
.collection-detail {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 60px;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
}

.cd-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 0 16px;
}

.cd-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #858585;
}
.cd-breadcrumb .sep { color: #bbb; }
.cd-breadcrumb .active { color: #555; }

.cd-wishlist-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #d0d0d0;
  background: #fff;
  padding: 10px 20px;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  color: #3e3e3e;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
  white-space: nowrap;
}
.cd-wishlist-btn:hover,
.cd-wishlist-btn.active { border-color: #e03226; color: #e03226; }

.cd-title-row {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}
.cd-title {
  font-size: 42px;
  font-weight: 400;
  color: #2a2a2a;
  letter-spacing: -1px;
  margin: 0;
  line-height: 1.1;
}
.cd-country { display: flex; align-items: center; gap: 6px; margin-top: 6px; }
.cd-flag { width: 22px; height: 15px; object-fit: cover; }
.cd-flag-emoji { font-size: 20px; }
.cd-country-name { font-size: 14px; color: #858585; }

.cd-body {
  display: flex;
  gap: 48px;
  align-items: flex-start;
  margin-bottom: 40px;
}

.cd-gallery { flex: 0 0 390px; }

.cd-main-img-wrap {
  width: 100%;
  height: 290px;
  background: #f5f5f5;
  overflow: hidden;
  margin-bottom: 16px;
}
.cd-img-placeholder { width: 100%; height: 100%; background: #e9e9e9; }
.cd-main-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s; }
.cd-main-img:hover { transform: scale(1.02); }

.cd-thumbs-row { display: flex; align-items: center; gap: 8px; }
.cd-thumb-nav {
  background: none; border: none; font-size: 24px; color: #9b9b9b;
  cursor: pointer; padding: 0 4px; flex-shrink: 0; line-height: 1; transition: color 0.15s;
}
.cd-thumb-nav:hover { color: #3e3e3e; }
.cd-thumbs { display: flex; gap: 8px; overflow: hidden; flex: 1; }
.cd-thumb {
  flex: 0 0 72px; height: 52px; background: #f0f0f0;
  border: 2px solid transparent; cursor: pointer; overflow: hidden; padding: 0; transition: border-color 0.15s;
}
.cd-thumb.active { border-color: #e03226; }
.cd-thumb:hover:not(.active) { border-color: #ccc; }
.cd-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }

.cd-info { flex: 1; min-width: 0; }

.cd-brand-box {
  border: 1px solid #e0e0e0;
  display: inline-flex; align-items: center; justify-content: center;
  padding: 14px 32px; margin-bottom: 20px; min-width: 180px; min-height: 60px;
}
.cd-brand-logo { max-height: 36px; max-width: 160px; object-fit: contain; }
.cd-brand-text { font-size: 22px; font-weight: 700; color: #2a2a2a; letter-spacing: 3px; text-transform: uppercase; }

.cd-types { font-size: 15px; color: #3e3e3e; margin: 0 0 20px; line-height: 1.5; }

.cd-specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #e9e9e9;
  margin-bottom: 28px;
}
.cd-spec {
  padding: 12px 16px;
  border-bottom: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;
}
.cd-spec:nth-child(even) { border-right: none; }
.cd-spec:last-child { border-bottom: none; }
.cd-spec:nth-last-child(2):nth-child(odd) { border-bottom: none; }
.cd-spec-label { display: block; font-size: 11px; color: #aaa; margin-bottom: 4px; }
.cd-spec-value { display: block; font-size: 14px; color: #3e3e3e; line-height: 1.4; }

.cd-price-row { display: flex; align-items: flex-start; gap: 24px; flex-wrap: wrap; }
.cd-price-block { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }
.cd-price-label { font-size: 16px; color: #3e3e3e; }
.cd-price-current { font-size: 22px; font-weight: 700; color: #1a1a1a; }
.cd-price-old { font-size: 15px; color: #aaa; text-decoration: line-through; }
.cd-discount-badge { display: flex; flex-direction: column; }
.cd-discount-percent { font-size: 13px; font-weight: 600; color: #e03226; }
.cd-discount-until { font-size: 12px; color: #e03226; }

.cd-description { max-width: 780px; }
.cd-desc-para { font-size: 14px; font-weight: 300; color: #4f4f4f; line-height: 1.8; margin: 0 0 16px; }
.cd-desc-para:last-child { margin-bottom: 0; }

@media (max-width: 860px) {
  .cd-body { flex-direction: column; gap: 28px; }
  .cd-gallery { flex: none; width: 100%; }
  .cd-title { font-size: 28px; }
  .cd-top-row { flex-direction: column; align-items: flex-start; gap: 12px; }
}
</style>