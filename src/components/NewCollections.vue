<template>
  <section class="newcol">
    <div class="newcol__inner">
      <!-- Section header -->
      <div class="newcol__header">
        <hr class="newcol__line" />
        <div class="newcol__header-row">
          <h2 class="newcol__title">Новинки в каталоге</h2>
          <a href="#" class="geo-all-link">
            <span class="geo-all-link__dot">→</span>
            Все коллекции
          </a>
        </div>
      </div>

      <!-- Cards grid: 760 | (480 stacked) -->
      <div class="newcol__grid">
        <!-- Large: SIMPLE 760×520 -->
        <a href="#" class="nc-card nc-card--large"
           :style="{ backgroundImage: `url(${img[0]}})` }">
          <div class="nc-card__overlay" />
          <div class="nc-card__body">
            <p class="nc-card__eyebrow">Новая эксклюзивная коллекция от Laparet</p>
            <h3 class="nc-card__name nc-card__name--55">SIMPLE</h3>
            <div class="nc-card__country">
              <span class="nc-card__flag">🇷🇺</span>
              <span class="nc-card__country-name">Россия</span>
            </div>
          </div>
        </a>

        <!-- Right column: two stacked 480×240 -->
        <div class="nc-right">
          <a href="#" class="nc-card nc-card--sm"
             :style="{ backgroundImage: `url(${img[1]}})` }">
            <div class="nc-card__overlay" />
            <div class="nc-card__body">
              <p class="nc-card__eyebrow">Новая эксклюзивная коллекция от Laparet</p>
              <h3 class="nc-card__name nc-card__name--40">МоноТиберио</h3>
              <div class="nc-card__country">
                <span class="nc-card__flag">🇮🇹</span>
                <span class="nc-card__country-name">ИТАЛИЯ</span>
              </div>
            </div>
          </a>
          <a href="#" class="nc-card nc-card--sm"
             :style="{ backgroundImage: `url(${img[2]}})` }">
            <div class="nc-card__overlay" />
            <div class="nc-card__body">
              <p class="nc-card__eyebrow">Новая коллекция от Casabella</p>
              <h3 class="nc-card__name nc-card__name--40">MONO</h3>
              <div class="nc-card__country">
                <span class="nc-card__flag">🇮🇹</span>
                <span class="nc-card__country-name">ИТАЛИЯ</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
    const img = [
        "/images/block-new-collection/1.png",
        "/images/block-new-collection/2.png",
        "/images/block-new-collection/3.png",
    ]
</script>

<style scoped>
.newcol {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 0 56px;
  background: #fff;
}

/* 1680px centered */
.newcol__inner {
  width: 1680px;
  max-width: calc(100% - 240px);
}

/* Header */
.newcol__line {
  width: 100%;
  height: 1px;
  background: #E9E9E9;
  border: none;
  margin: 0 0 16px;
}

.newcol__header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

/* Inter 700 25px letter-spacing -2px uppercase */
.newcol__title {
  font-family: 'inter', sans-serif;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -2px;
  text-transform: uppercase;
  color: #000;
  margin: 0;
}

/* Grid: 760 + 480 */
.newcol__grid {
  display: grid;
  grid-template-columns: 760fr 480fr;
  gap: 0;
  height: 520px;
}

/* Base card */
.nc-card {
  display: block;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  background-size: cover;
  background-position: center;
}

.nc-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(58,43,2,0.30);
  transition: background 0.3s;
}
.nc-card:hover .nc-card__overlay { background: rgba(58,43,2,0.45); }

.nc-card__body {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px 32px;
  z-index: 1;
}

/* Inter 700 10px letter-spacing 3px cream — eyebrow */
.nc-card__eyebrow {
  font-family: 'inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #EBE5D2;
  margin: 0 0 6px;
}

.nc-card__name {
  font-family: 'inter', sans-serif;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  margin: 0 0 8px;
  line-height: 1;
}
/* SIMPLE: 55px ls-3px */
.nc-card__name--55 { font-size: 55px; letter-spacing: -3px; }
/* МоноТиберио/MONO: 40px ls-2px */
.nc-card__name--40 { font-size: 40px; letter-spacing: -2px; }

.nc-card__country {
  display: flex;
  align-items: center;
  gap: 8px;
}
.nc-card__flag { font-size: 16px; }
.nc-card__country-name {
  font-family: 'inter', sans-serif;
  font-size: 18px;
  font-weight: 300;
  text-transform: uppercase;
  color: #fff;
}

/* Large card: full height 520px */
.nc-card--large { height: 520px; }

/* Right col: 2 stacked at 240px each = 480px */
.nc-right {
  display: flex;
  flex-direction: column;
}
.nc-card--sm {
  flex: 1;
}
.nc-card--sm + .nc-card--sm {
  border-top: 2px solid #fff;
}

/* "все коллекции" link */
.geo-all-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'inter', sans-serif;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #999;
  text-decoration: none;
  transition: color 0.18s;
}
.geo-all-link:hover { color: #E03226; }
.geo-all-link__dot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #E03226;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
}

@media (max-width: 1024px) {
  .newcol__inner { max-width: calc(100% - 80px); }
  .newcol__grid { height: auto; grid-template-columns: 1fr; }
  .nc-card--large { height: 320px; }
  .nc-right { flex-direction: row; }
  .nc-card--sm { height: 200px; }
  .nc-card--sm + .nc-card--sm { border-top: none; border-left: 2px solid #fff; }
  .nc-card__name--55 { font-size: 36px; }
}
@media (max-width: 640px) {
  .newcol__inner { max-width: calc(100% - 40px); }
  .nc-right { flex-direction: column; }
  .nc-card--sm + .nc-card--sm { border-left: none; border-top: 2px solid #fff; }
}
</style>