<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div :key="item.name" class="pop-card">
    <!-- Card border: 400×485 from Figma -->
    <div class="pop-card__frame">
      <!-- Country tag: white rect over image -->
      <div class="pop-card__country-wrap">
        <div class="pop-card__country-bg" />
        <img class="pop-card__flag" :src="item.flag">
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
</template>

<style scoped>
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
</style>