<template>
  <section class="advantages">
    <div class="container advantages__grid">
      <div v-for="item in items" :key="item.title" class="adv-item">
        <div class="adv-item__icon" v-html="item.icon" />
        <div class="adv-item__text">
          <p class="adv-item__title">{{ item.title }}</p>
          <p class="adv-item__sub">{{ item.sub }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    title: 'удобная доставка по Иркутску',
    sub: 'в день покупки',
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="#D9342B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="16" width="30" height="20" rx="2"/>
      <path d="M32 20h8l6 8v8h-14V20z"/>
      <circle cx="12" cy="38" r="4"/><circle cx="38" cy="38" r="4"/>
    </svg>`,
  },
  {
    title: 'резка плитки и керамогранита',
    sub: 'под ваш проект',
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="#D9342B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="6" y="6" width="16" height="16" rx="1"/><rect x="26" y="6" width="16" height="16" rx="1"/>
      <rect x="6" y="26" width="16" height="16" rx="1"/><rect x="26" y="26" width="16" height="16" rx="1"/>
    </svg>`,
  },
  {
    title: 'монтаж плитки на вашем объекте',
    sub: 'под ключ',
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="#D9342B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="24,4 44,16 44,32 24,44 4,32 4,16"/>
      <polygon points="24,14 34,20 34,28 24,34 14,28 14,20"/>
    </svg>`,
  },
  {
    title: '3D дизайн-проект в подарок',
    sub: 'при покупке плитки',
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="#D9342B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M24 4L44 14v20L24 44 4 34V14L24 4z"/>
      <path d="M24 4v40M4 14l20 10 20-10"/>
    </svg>`,
  },
]
</script>

<style scoped>
.advantages {
  padding: 40px 0;
  border-top: 1px solid #EFEFEF;
  border-bottom: 1px solid #EFEFEF;
}

.advantages__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.adv-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.adv-item__icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
}

.adv-item__icon svg {
  width: 100%;
  height: 100%;
}

.adv-item__title {
  font-family: 'inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #1A1A1A;
  line-height: 1.4;
}

.adv-item__sub {
  font-family: 'roboto', sans-serif;
  font-size: 11px;
  color: #999;
  margin-top: 3px;
}

@media (max-width: 768px) {
  .advantages__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .advantages__grid { grid-template-columns: 1fr; }
}
</style>
