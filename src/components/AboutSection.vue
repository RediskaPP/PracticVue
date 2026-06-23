<template>
  <section class="about">
    <div class="about__inner">
      <div class="about__header">
        <hr class="about__line" />
        <h2 class="about__title">О НАШЕМ МАГАЗИНЕ</h2>
      </div>

      <!-- Figma: frame-group88x6 = 480px text + photos right -->
      <div class="about__grid">
        <!-- Text: max-width 480px, Inter 300 18px lh29px #6B6B6B -->
        <div class="about__text">
          <p>В каталоге нашего интернет-магазина более 570 коллекций керамической плитки и керамогранита от лучших производителей России и Европы.</p>
          <p>В наличии имеются эксклюзивные бренды, которые вы не найдете в других магазинах Иркутска. Вся продукция оригинальная от производителей по установленной заводом цене.</p>
          <p>Услуги для вашего удобства: резка плитки, выезд на замер и расчет материалов. При покупке плитки дарим дизайн-проект вашего помещения в подарок.</p>
          <p>Возможна доставка плитки в день заказа.</p>
        </div>

        <!-- Photos: 320×400 + stacked 360×190×2 -->
        <div class="about__photos">
          <!-- Figma image7k: 320×400 -->
          <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=360&q=80"
              alt="Магазин"
              class="about__photo about__photo--tall"
          />
          <!-- Right stack: image-nk + image-cj = 360×190 each -->
          <div class="about__photo-stack">
            <img
                src="https://images.unsplash.com/photo-1615971677499-5467cbab01a0?w=400&q=80"
                alt="Зал"
                class="about__photo about__photo--sm"
            />
            <img
                src="https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=400&q=80"
                alt="Образцы"
                class="about__photo about__photo--sm"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.about {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 0 56px;
  background: #fff;
}

/* 1681px centered */
.about__inner {
  width: 1681px;
  max-width: calc(100% - 240px);
}

.about__line {
  width: 100%;
  height: 1px;
  background: #E9E9E9;
  border: none;
  margin: 0 0 16px;
}

/* Inter 700 25px ls-2px uppercase */
.about__title {
  font-family: 'inter', sans-serif;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -2px;
  text-transform: uppercase;
  color: #000;
  margin: 0 0 32px;
}

.about__grid {
  display: grid;
  grid-template-columns: 480px 1fr;
  gap: 80px;
  align-items: start;
}

/* Text: Inter 300 18px line-height 29px #6B6B6B */
.about__text p {
  font-family: 'inter', sans-serif;
  font-size: 18px;
  font-weight: 300;
  line-height: 29px;
  color: #6B6B6B;
  margin: 0 0 29px;
}
.about__text p:last-child { margin-bottom: 0; }

/* Photos layout: 320×400 | stack of 360×190 */
.about__photos {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

/* Figma image7k: 320×400 */
.about__photo--tall {
  width: 320px;
  height: 400px;
  object-fit: cover;
  flex-shrink: 0;
}

.about__photo-stack {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
}

/* Figma image-nk + image-cj: 360×190 each */
.about__photo--sm {
  width: 360px;
  height: 190px;
  object-fit: cover;
}

@media (max-width: 1200px) {
  .about__grid { grid-template-columns: 1fr; gap: 40px; }
  .about__photos { justify-content: center; }
  .about__inner { max-width: calc(100% - 80px); }
}
@media (max-width: 640px) {
  .about__inner { max-width: calc(100% - 40px); }
  .about__photos { flex-direction: column; align-items: center; }
  .about__photo--tall { width: 100%; height: 240px; }
  .about__photo-stack { flex-direction: row; width: 100%; }
  .about__photo--sm { width: 50%; height: 140px; }
}
</style>