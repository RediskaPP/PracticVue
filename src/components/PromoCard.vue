<template>
  <article class="promo-card">
    <!-- Image -->
    <div class="promo-card__image-wrap">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="promo-card__image"
      />
      <div v-else class="promo-card__image-placeholder" />
    </div>

    <!-- Badge -->
    <div class="promo-card__badge">
      {{ badge.text }}
    </div>

    <!-- Title -->
    <h2 class="promo-card__title">{{ title }}</h2>

    <!-- Description -->
    <p
      v-for="(para, i) in paragraphs"
      :key="i"
      class="promo-card__paragraph"
    >
      {{ para }}
    </p>
  </article>
</template>

<script>
export default {
  name: 'PromoCard',

  props: {
    image: {
      type: String,
      default: null,
    },
    badge: {
      type: Object,
      required: true,
      // { type: 'date' | 'label', text: String }
    },
    title: {
      type: String,
      required: true,
    },
    paragraphs: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.promo-card {
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
}

/* Image */
.promo-card__image-wrap {
  width: 100%;
  aspect-ratio: 360 / 223;
  overflow: hidden;
  margin-bottom: 0;
  flex-shrink: 0;
}

.promo-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.promo-card__image-placeholder {
  width: 100%;
  height: 100%;
  background-color: #a3a3a3;
}

/* Badge */
.promo-card__badge {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 300;
  color: #e03226;
  text-transform: uppercase;
  letter-spacing: 0;
  line-height: 14px;
  margin-top: 16px;
  margin-bottom: 10px;
}

/* Title */
.promo-card__title {
  font-family: 'Inter', sans-serif;
  font-size: 25px;
  font-weight: 700;
  color: #3e3e3e;
  letter-spacing: -2px;
  line-height: 30px;
  text-transform: uppercase;
  margin: 0 0 14px 0;
}

/* Description */
.promo-card__paragraph {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #4f4f4f;
  line-height: 24px;
  margin: 0 0 14px 0;
}

.promo-card__paragraph:last-child {
  margin-bottom: 0;
}
</style>
