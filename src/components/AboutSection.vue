<template>
  <section class="about">
    <div class="container">
      <h2 class="section-heading">О НАШЕМ МАГАЗИНЕ</h2>
      <div class="about__grid">
        <div class="about__text">
          <p>В каталоге нашего интернет-магазина более 570 коллекций керамической плитки и керамогранита от лучших производителей России и Европы.</p>
          <p>В наличии имеются эксклюзивные бренды, которые вы не найдёте в других магазинах Иркутска. Вся продукция оригинальная от производителей по установленной заводом цене.</p>
          <p>Услуги для вашего удобства: резка плитки, выезд на замер и расчёт материалов. При покупке плитки дарим дизайн-проект вашего помещения в подарок.</p>
          <p>Возможна доставка плитки в день заказа.</p>
        </div>
        <div class="about__photos">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80"
            alt="Магазин Geometrica"
            class="about__photo about__photo--main"
          />
          <div class="about__photo-side">
            <img
              src="https://images.unsplash.com/photo-1615971677499-5467cbab01a0?w=300&q=80"
              alt="Зал магазина"
              class="about__photo about__photo--sm"
            />
            <img
              src="https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=300&q=80"
              alt="Образцы плитки"
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
  padding: 56px 0;
  background: #F7F7F7;
}

.section-heading {
  font-family: 'inter', sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #1A1A1A;
  margin-bottom: 28px;
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.about__text p {
  font-family: 'roboto', sans-serif;
  font-size: 13px;
  line-height: 1.75;
  color: #444;
  margin-bottom: 16px;
}

.about__text p:last-child {
  margin-bottom: 0;
}

.about__photos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
}

.about__photo--main {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  width: 100%;
  height: 100%;
  min-height: 220px;
  object-fit: cover;
}

.about__photo-side {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.about__photo--sm {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .about__grid { grid-template-columns: 1fr; gap: 28px; }
  .about__photos { grid-template-columns: 1fr; }
  .about__photo--main { grid-column: auto; grid-row: auto; min-height: 200px; }
  .about__photo-side { flex-direction: row; }
}
</style>
