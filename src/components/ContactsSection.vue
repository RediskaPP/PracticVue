<template>
  <section class="contacts">
    <div class="contacts__map-wrap">
      <!-- Map placeholder — replace with real Yandex/Google Maps embed -->
      <div class="contacts__map">
        <div class="contacts__map-pin">
          <svg viewBox="0 0 24 24" fill="#D9342B" stroke="#fff" stroke-width="1"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        </div>
        <div class="contacts__map-label">
          <svg viewBox="0 0 24 24" fill="#D9342B" width="12" height="12"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
          СТАРО-КУЗЬМИХИНСКАЯ, 41/3
        </div>
      </div>

      <!-- Info card -->
      <div class="contacts__card">
        <h2 class="contacts__title">КОНТАКТНАЯ<br>ИНФОРМАЦИЯ</h2>
        <div class="contacts__details">
          <p class="contacts__address">г. Иркутск, ул. Старо-Кузьминская, 41/3</p>
          <p class="contacts__hours">Часы работы: 9:00 — 21:00</p>
          <a href="tel:+73952482805" class="contacts__phone">
            <svg viewBox="0 0 24 24" fill="none" stroke="#D9342B" stroke-width="1.8" width="16" height="16">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18a2 2 0 011.99-2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7a16 16 0 006.72 6.72l1.06-1.17a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            +7 (3952) 48-28-05
          </a>
          <a href="mailto:geometrika@mail.ru" class="contacts__email">
            <svg viewBox="0 0 24 24" fill="none" stroke="#D9342B" stroke-width="1.8" width="16" height="16">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            geometrika@mail.ru
          </a>
        </div>
        <a href="#" class="contacts__btn">ОБРАТНАЯ СВЯЗЬ</a>
      </div>
    </div>

    <!-- Catalog bar -->
    <div class="contacts__catalog-bar">
      <div class="container">
        <button class="catalog-btn">
          КАТАЛОГ ПРОДУКЦИИ
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.contacts {
  position: relative;
}

.contacts__map-wrap {
  position: relative;
  height: 420px;
  background: #E8E4D9;
  overflow: hidden;
}

/* Placeholder map — replace with real embed */
.contacts__map {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #e8e0d0 0%, #d5cfc0 50%, #c8c2b0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.contacts__map-pin {
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -100%);
}

.contacts__map-pin svg {
  width: 40px;
  height: 40px;
}

.contacts__map-label {
  position: absolute;
  top: 42%;
  left: 58%;
  background: #fff;
  padding: 8px 14px;
  font-family: 'inter', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #1A1A1A;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}

.contacts__card {
  position: absolute;
  top: 50%;
  left: 24px;
  transform: translateY(-50%);
  background: #fff;
  padding: 36px 32px;
  width: 300px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
}

@media (max-width: 1024px) {
  .contacts__card { left: 50%; transform: translate(-50%, -50%); }
}

.contacts__title {
  font-family: 'inter', sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #1A1A1A;
  line-height: 1.3;
  margin-bottom: 20px;
}

.contacts__details {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.contacts__address,
.contacts__hours {
  font-family: 'roboto', sans-serif;
  font-size: 12px;
  color: #555;
  line-height: 1.5;
}

.contacts__phone,
.contacts__email {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'roboto', sans-serif;
  font-size: 13px;
  color: #1A1A1A;
  text-decoration: none;
  transition: color 0.18s;
}

.contacts__phone:hover,
.contacts__email:hover { color: #D9342B; }

.contacts__btn {
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #D9342B;
  font-family: 'inter', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #D9342B;
  text-decoration: none;
  transition: background 0.18s, color 0.18s;
}

.contacts__btn:hover {
  background: #D9342B;
  color: #fff;
}

.contacts__catalog-bar {
  background: #fff;
  padding: 0;
}

.catalog-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 0 28px;
  height: 52px;
  background: #D9342B;
  color: #fff;
  border: none;
  cursor: pointer;
  font-family: 'inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: background 0.18s;
}

.catalog-btn:hover { background: #BF2A22; }
</style>
