<template>
  <section class="services">
    <div class="services__inner">
      <div class="services__header">
        <hr class="services__line" />
        <h2 class="services__title">УСЛУГИ КОМПАНИИ</h2>
      </div>

      <!-- Figma: frame-news-pu layout -->
      <div class="services__grid">
        <!-- Large card: 760×520 -->
        <a href="#" class="srv srv--large"
           :style="{ backgroundImage: `url(${img[0]}})` }">>
          <div class="srv__overlay" />
          <div class="srv__body">
            <p class="srv__sub">на профессиональном оборудовании</p>
            <!-- Inter 700 55px ls-3px line-height 61px -->
            <h3 class="srv__title srv__title--55">профессиональная резка плитки и керамогранита</h3>
          </div>
        </a>

        <!-- Right: two stacked 480×240 -->
        <div class="services__right">
          <a href="#" class="srv srv--sm"
             :style="{ backgroundImage: `url(${img[1]}})` }">>
            <div class="srv__overlay" />
            <div class="srv__body">
              <p class="srv__sub">Столы, столешницы, раковины</p>
              <!-- Inter 700 30px ls-2px line-height 33px -->
              <h3 class="srv__title srv__title--30">Изготовление нестандартных изделий</h3>
            </div>
          </a>
          <a href="#" class="srv srv--sm"
             :style="{ backgroundImage: `url(${img[2]}})` }">>
            <div class="srv__overlay" />
            <div class="srv__body">
              <p class="srv__sub">интерьера вашей мечты из нашей керамики</p>
              <h3 class="srv__title srv__title--30">РАЗРАБОТКА ИНДИВИДУАЛЬНОГО 3D-ДИЗАЙНА</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
    const img = [
        "/images/services/1.png",
        "/images/services/2.png",
        "/images/services/3.png",
    ]
</script>

<style scoped>
.services {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 0 56px;
  background: #fff;
}

.services__inner {
  width: 1680px;
  max-width: calc(100% - 240px);
}

.services__line {
  width: 100%;
  height: 1px;
  background: #E9E9E9;
  border: none;
  margin: 0 0 16px;
}

/* Inter 700 25px ls-2px uppercase */
.services__title {
  font-family: 'inter', sans-serif;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -2px;
  text-transform: uppercase;
  color: #000;
  margin: 0 0 20px;
}

/* Grid: 760 | 480, total ~1240 (proportional in 1680) */
.services__grid {
  display: grid;
  grid-template-columns: 760fr 480fr;
  gap: 0;
  height: 520px;
}

.srv {
  display: block;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  background-size: cover;
  background-position: center;
}

.srv__overlay {
  position: absolute;
  inset: 0;
  background: rgba(58,43,2,0.30);
  transition: background 0.3s;
}
.srv:hover .srv__overlay { background: rgba(58,43,2,0.45); }

.srv__body {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 28px 32px;
  z-index: 1;
}

/* Sub: Inter 700 10px ls3px cream */
.srv__sub {
  font-family: 'inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #EBE5D2;
  margin: 0 0 8px;
}

.srv__title {
  font-family: 'inter', sans-serif;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  margin: 0;
}

/* Large: 55px ls-3px line-height 61px */
.srv__title--55 {
  font-size: 55px;
  letter-spacing: -3px;
  line-height: 61px;
  max-width: 644px;
}

/* Small: 30px ls-2px line-height 33px */
.srv__title--30 {
  font-size: 30px;
  letter-spacing: -2px;
  line-height: 33px;
  max-width: 392px;
}

.srv--large { height: 520px; }

.services__right {
  display: flex;
  flex-direction: column;
}
.srv--sm {
  flex: 1;
}
.srv--sm + .srv--sm {
  border-top: 2px solid #fff;
}

@media (max-width: 1024px) {
  .services__inner { max-width: calc(100% - 80px); }
  .services__grid { grid-template-columns: 1fr; height: auto; }
  .srv--large { height: 320px; }
  .services__right { flex-direction: row; }
  .srv--sm { height: 200px; }
  .srv--sm + .srv--sm { border-top: none; border-left: 2px solid #fff; }
  .srv__title--55 { font-size: 32px; line-height: 38px; }
}
@media (max-width: 640px) {
  .services__inner { max-width: calc(100% - 40px); }
  .services__right { flex-direction: column; }
  .srv--sm + .srv--sm { border-left: none; border-top: 2px solid #fff; }
}
</style>