<template>
  <div
    class="product-card"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <div class="card-img-wrap">
      <img
        :src="item.img"
        :alt="item.title"
        class="card-img"
        @error="onImgError"
      />
    </div>

    <div class="card-actions">
      <!-- Сердечко (избранное) -->
      <button class="action-btn" @click.stop="toggleWishlist" :class="{ active: wishlisted }">
        <svg width="20" height="18" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 21C12 21 2 14 2 7C2 4.23858 4.23858 2 7 2C9.07513 2 10.8539 3.26341 11.6497 5.07946C11.7853 5.38563 12.2147 5.38563 12.3503 5.07946C13.1461 3.26341 14.9249 2 17 2C19.7614 2 22 4.23858 22 7C22 14 12 21 12 21Z"
            :stroke="wishlisted ? '#e03226' : '#9b9b9b'"
            :fill="wishlisted ? '#e03226' : 'none'"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <!-- Сравнение -->
      <button class="action-btn" @click.stop="toggleCompare" :class="{ active: compared }">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18 20V10M12 20V4M6 20V14"
            :stroke="compared ? '#e03226' : '#9b9b9b'"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <div class="card-body">
      <span class="card-collection">{{ item.collection }}</span>
      <span class="card-country">/ {{ item.side }}</span>
      <p class="card-title">{{ item.title }}</p>
      <div class="card-footer">
        <span class="card-price">{{ formatPrice(item.price) }} ₽/м²</span>
        <button class="cart-btn" @click.stop="openModal">
          <img src="/images/svg/shopping-cart.svg" alt="">
        </button>
      </div>
    </div>

    <!-- Модальное окно -->
    <AddToCartModal
      :visible="modalOpen"
      :item="item"
      @close="modalOpen = false"
      @added="onAdded"
    />
  </div>
</template>

<script>
import AddToCartModal from './AddToCartModal.vue'

export default {
  name: 'ProductCard',
  components: { AddToCartModal },

  props: {
    item: { type: Object, required: true },
  },

  data() {
    return {
      hovered: false,
      wishlisted: false,
      compared: false,
      modalOpen: false,
    }
  },

  methods: {
    openModal() {
      this.modalOpen = true
    },

    onAdded({ item, quantity, unit }) {
      console.log('Добавлено в корзину:', item.title, quantity, unit)
    },

    toggleWishlist() {
      this.wishlisted = !this.wishlisted
    },

    toggleCompare() {
      this.compared = !this.compared
    },

    formatPrice(v) {
      return v.toLocaleString('ru-RU')
    },

    onImgError(e) {
      e.target.style.background = '#e9e9e9'
      e.target.src = ''
    },
  },
}
</script>

<style scoped>
.product-card {
  position: relative;
  border: 1px solid #e9e9e9;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: box-shadow 0.2s;
  width: 281px;
  height: 539px;
}
.product-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.08); z-index: 1; }

.card-img-wrap {
  margin-top: 20px;
  width: 80%;
  height: 220px;
  overflow: hidden;
  background: #f5f5f5;
}
.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}
.product-card:hover .card-img { transform: scale(1.04); }

.card-actions {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 6px;
}
.action-btn {
  width: 32px;
  height: 32px;
  background: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
}
.action-btn:hover { background: #f5f5f5; }

.card-body {
  padding: 12px 14px 14px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  box-sizing: border-box;
}
.card-collection {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #9b9b9b;
}
.card-country {
  font-size: 11px;
  color: #a3a3a3;
  margin-left: 4px;
}
.card-title {
  font-size: 16px;
  font-weight: 400;
  color: #3e3e3e;
  line-height: 1.4;
  margin: 4px 0 8px;
  flex: 1;
}
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  background: #f5f5f5;
  padding: 8px 10px;
}
.card-price {
  font-size: 16px;
  font-weight: 600;
  color: #3e3e3e;
  font-family: 'Inter', sans-serif;
}
.cart-btn {
  color: #fff;
  border: none;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.18s;
  flex-shrink: 0;
}
.cart-btn:hover { background: var(--gray-color); }
</style>
