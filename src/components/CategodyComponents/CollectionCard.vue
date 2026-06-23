<template>
  <div class="collection-card" @mouseenter="hovered = true" @mouseleave="hovered = false">
    <!-- Border frame -->
    <div class="card-border"></div>

    <!-- Image area -->
    <div class="card-img-wrap">
      <img
        :src="item.img"
        :alt="item.name"
        class="card-img"
        @error="onImgError"
      />
      <!-- Hover overlay image slot -->
      <div class="card-img-overlay" :class="{ visible: hovered }"></div>
    </div>

    <!-- Country badge -->
    <div class="country-badge">
      <span class="flag" v-if="item.flag">{{ item.flag }}</span>
      <span class="country-name">{{ item.side }}</span>
    </div>

    <!-- Wishlist + compare -->
    <div class="card-actions">
      <button class="action-btn wishlist" @click.stop="toggleWishlist" :class="{ active: wishlisted }">
        <HeartIcon :filled="wishlisted" />
      </button>
      <button class="action-btn compare" @click.stop="toggleCompare" :class="{ active: compared }">
        <CompareIcon />
      </button>
    </div>

    <!-- Bottom info bar -->
    <div class="card-info">
      <div class="card-info-inner">
        <span class="element-count">{{ item.countelement }} элемента</span>
        <h3 class="card-name">{{ item.name }}</h3>
        <span class="card-company">{{ item.company }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import HeartIcon from './HeartIcon.vue'
import CompareIcon from './CompareIcon.vue'

export default {
  name: 'CollectionCard',
  components: { HeartIcon, CompareIcon },
  props: {
    item: { type: Object, required: true },
  },
  data() {
    return {
      hovered: false,
      wishlisted: false,
      compared: false,
    }
  },
  methods: {
    toggleWishlist() { this.wishlisted = !this.wishlisted },
    toggleCompare() { this.compared = !this.compared },
    onImgError(e) {
      // fallback placeholder
      e.target.style.background = '#e9e9e9'
      e.target.src = ''
    },
  },
}
</script>

<style scoped>
.collection-card {
  position: relative;
  width: 100%;
  border: 1px solid #e9e9e9;
  background: #fff;
  cursor: pointer;
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}
.collection-card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  z-index: 1;
}

.card-border {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

/* Image */
.card-img-wrap {
  position: relative;
  width: 100%;
  height: 270px;
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
.collection-card:hover .card-img { transform: scale(1.04); }

.card-img-overlay {
  position: absolute;
  inset: 0;
  background: rgba(58, 43, 2, 0.12);
  opacity: 0;
  transition: opacity 0.3s;
}
.card-img-overlay.visible { opacity: 1; }

/* Country badge */
.country-badge {
  position: absolute;
  top: 8px;
  left: 8px;
  background: #fff;
  padding: 4px 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 80px;
}
.flag { font-size: 14px; }
.country-name {
  font-size: 12px;
  font-weight: 400;
  color: #a3a3a3;
  font-family: 'Inter', sans-serif;
}

/* Action buttons row */
.card-actions {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 6px;
}
.action-btn {
  width: 34px;
  height: 34px;
  background: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
}
.action-btn:hover { background: #f5f5f5; }
.action-btn.active svg path { stroke: #e03226; }
.action-btn.wishlist.active svg path { fill: #e03226; stroke: #e03226; }

/* Bottom info */
.card-info {
  background: #f5f5f5;
  height: 70px;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
.card-info-inner { width: 100%; }

.element-count {
  display: block;
  font-size: 22px;
  font-weight: 400;
  color: #a3a3a3;
  font-family: 'Inter', sans-serif;
  line-height: 1;
  margin-bottom: 2px;
}
.card-name {
  font-size: 40px;
  font-weight: 700;
  color: #525252;
  font-family: 'Inter', sans-serif;
  letter-spacing: -2px;
  margin: 0;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-company {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #9b9b9b;
  font-family: 'Inter', sans-serif;
}
</style>
