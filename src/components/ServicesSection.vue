<template>
  <section class="services">
    <div class="container">
      <h2 class="section-heading">УСЛУГИ КОМПАНИИ</h2>
      <div class="services__grid">
        <!-- Large card -->
        <a href="#" class="srv-card srv-card--large"
           style="background-image: url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80')">
          <div class="srv-card__overlay" />
          <div class="srv-card__body">
            <h3 class="srv-card__title">ПРОФЕССИОНАЛЬНАЯ РЕЗКА ПЛИТКИ И КЕРАМОГРАНИТА</h3>
            <p class="srv-card__sub">НА ПРОФЕССИОНАЛЬНОМ ОБОРУДОВАНИИ</p>
          </div>
        </a>

        <!-- Right cards -->
        <div class="services__right">
          <a href="#" class="srv-card"
             style="background-image: url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80')">
            <div class="srv-card__overlay" />
            <div class="srv-card__body">
              <h3 class="srv-card__title srv-card__title--sm">ИЗГОТОВЛЕНИЕ НЕСТАНДАРТНЫХ ИЗДЕЛИЙ</h3>
              <p class="srv-card__sub">СТОЛИ, СТОЛЕШНИЦЫ, РАКОВИНЫ</p>
            </div>
          </a>
          <a href="#" class="srv-card"
             style="background-image: url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&q=80')">
            <div class="srv-card__overlay" />
            <div class="srv-card__body">
              <h3 class="srv-card__title srv-card__title--sm">РАЗРАБОТКА ИНДИВИДУАЛЬНОГО 3D-ДИЗАЙНА</h3>
              <p class="srv-card__sub">ИНТЕРЬЕРА ВАШЕЙ МЕЧТЫ ИЗ НАШЕЙ КЕРАМИКИ</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.services {
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
  margin-bottom: 24px;
}

.services__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
  height: 340px;
}

.services__right {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.srv-card {
  position: relative;
  display: block;
  overflow: hidden;
  text-decoration: none;
  background-size: cover;
  background-position: center;
  flex: 1;
}

.srv-card--large {
  height: 100%;
}

.srv-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%);
  transition: background 0.3s;
}

.srv-card:hover .srv-card__overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%);
}

.srv-card__body {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
  z-index: 1;
}

.srv-card__title {
  font-family: 'inter', sans-serif;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  line-height: 1.25;
  margin-bottom: 6px;
}

.srv-card__title--sm {
  font-size: 15px;
}

.srv-card__sub {
  font-family: 'roboto', sans-serif;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
}

@media (max-width: 768px) {
  .services__grid {
    grid-template-columns: 1fr;
    height: auto;
  }
  .srv-card--large { min-height: 240px; }
  .srv-card { min-height: 160px; }
}
</style>
