<template>
  <div class="product-card" @mouseenter="hovered = true" @mouseleave="hovered = false">
    <div class="card-img-wrap">
      <img
        :src="item.img"
        :alt="item.title"
        class="card-img"
        @error="onImgError"
      />
    </div>

    <div class="card-actions">
      <button class="action-btn" @click.stop="toggleWishlist" :class="{ active: wishlisted }">
        <HeartIcon :filled="wishlisted" />
      </button>
      <button class="action-btn" @click.stop="toggleCompare">
        <CompareIcon />
      </button>
    </div>

    <div class="card-body">
      <span class="card-collection">{{ item.collection }}</span>
      <span class="card-country">/ {{ item.side }}</span>
      <p class="card-title">{{ item.title }}</p>
      <div class="card-footer">
        <span class="card-price">{{ formatPrice(item.price) }} ₽/м²</span>
        <button class="cart-btn">В корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeartIcon from './HeartIcon.vue'
import CompareIcon from './CompareIcon.vue'

export default {
  name: 'ProductCard',
  components: { HeartIcon, CompareIcon },
  props: {
    item: { type: Object, required: true },
  },
  data() {
    return {
      hovered: false,
      wishlisted: false,
    }
  },
  methods: {
    toggleWishlist() { this.wishlisted = !this.wishlisted },
    toggleCompare() {},
    formatPrice(v) { return v.toLocaleString('ru-RU') },
    onImgError(e) { e.target.style.background = '#e9e9e9'; e.target.src = '' },
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
  flex-direction: column;
  transition: box-shadow 0.2s;
}
.product-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.08); z-index: 1; }

.card-img-wrap {
  width: 100%;
  height: 200px;
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
}
.action-btn:hover { background: #f5f5f5; }
.action-btn.active svg path { stroke: #e03226; fill: #e03226; }

.card-body {
  padding: 12px 14px 14px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
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
  font-size: 14px;
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
}
.card-price {
  font-size: 18px;
  font-weight: 600;
  color: #3e3e3e;
  font-family: 'Inter', sans-serif;
}
.cart-btn {
  background: #e03226;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background 0.18s;
}
.cart-btn:hover { background: #c0281f; }
</style>
