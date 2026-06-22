<template>
  <section class="new-collections">
    <div class="container">
      <div class="section-header">
        <h2 class="section-heading">НОВИНКИ В КАТАЛОГЕ</h2>
        <a href="#" class="section-link">ВСЕ КОЛЛЕКЦИИ <span class="section-link__dot" /></a>
      </div>

      <div class="new-collections__grid">
        <a
          v-for="item in collections"
          :key="item.name"
          href="#"
          class="nc-card"
          :class="{ 'nc-card--tall': item.tall }"
          :style="{ backgroundImage: `url(${item.image})` }"
        >
          <div class="nc-card__overlay" />
          <div class="nc-card__body">
            <p class="nc-card__eyebrow">{{ item.eyebrow }}</p>
            <h3 class="nc-card__name">{{ item.name }}</h3>
            <div class="nc-card__country">
              <span class="nc-card__flag">{{ item.flag }}</span>
              <span class="nc-card__country-name">{{ item.country }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const collections = [
  {
    eyebrow: 'НОВАЯ ЭКСКЛЮЗИВНАЯ КОЛЛЕКЦИЯ ОТ LAPARET',
    name: 'МоноТиберио',
    flag: '🇮🇹',
    country: 'ИТАЛИЯ',
    image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01a0?w=400&q=80',
  },
  {
    eyebrow: 'НОВАЯ ЭКСКЛЮЗИВНАЯ КОЛЛЕКЦИЯ ОТ LAPARET',
    name: 'SIMPLE',
    flag: '🇷🇺',
    country: 'РОССИЯ',
    image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&q=80',
    tall: true,
  },
  {
    eyebrow: 'НОВАЯ КОЛЛЕКЦИЯ ОТ CASABELLA',
    name: 'MONO',
    flag: '🇮🇹',
    country: 'ИТАЛИЯ',
    image: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=400&q=80',
  },
]
</script>

<style scoped>
.new-collections {
  padding: 56px 0;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.section-heading {
  font-family: 'inter', sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #1A1A1A;
}

.section-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'inter', sans-serif;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #888;
  text-decoration: none;
  transition: color 0.18s;
}

.section-link:hover { color: #D9342B; }

.section-link__dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #D9342B;
}

.new-collections__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 6px;
  height: 420px;
}

.nc-card {
  position: relative;
  display: block;
  overflow: hidden;
  text-decoration: none;
  background-size: cover;
  background-position: center;
}

.nc-card--tall {
  grid-row: 1 / 3;
  grid-column: 2;
}

.nc-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.05) 60%);
  transition: background 0.3s;
}

.nc-card:hover .nc-card__overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.15) 60%);
}

.nc-card__body {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  z-index: 1;
}

.nc-card__eyebrow {
  font-family: 'inter', sans-serif;
  font-size: 8px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
  margin-bottom: 4px;
}

.nc-card__name {
  font-family: 'inter', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 8px;
}

.nc-card--tall .nc-card__name {
  font-size: 28px;
}

.nc-card__country {
  display: flex;
  align-items: center;
  gap: 6px;
}

.nc-card__flag {
  font-size: 14px;
}

.nc-card__country-name {
  font-family: 'inter', sans-serif;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
}

@media (max-width: 768px) {
  .new-collections__grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    height: auto;
  }
  .nc-card { min-height: 200px; }
  .nc-card--tall { grid-row: auto; grid-column: auto; }
}
</style>
