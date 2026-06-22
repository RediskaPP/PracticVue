<template>
  <footer class="footer">
    <div class="container footer__inner">
      <!-- Brand -->
      <div class="footer__brand">
        <a href="/" class="footer__logo">
          <span class="footer__logo-box">G</span><span class="footer__logo-text">EOMETRICA</span>
        </a>
        <p class="footer__tagline">керамическая плитка и<br>керамогранит в Иркутске</p>
        <a href="#" class="footer__social">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="18" height="18">
            <rect x="2" y="2" width="20" height="20" rx="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
          </svg>
          GEOMETRICA38
        </a>
      </div>

      <!-- Links: Shop -->
      <div class="footer__col">
        <h4 class="footer__col-title">ИНТЕРНЕТ-МАГАЗИН</h4>
        <a href="#" class="footer__link">Каталог</a>
        <a href="#" class="footer__link">Оплата и доставка</a>
        <a href="#" class="footer__link">Акции</a>
        <a href="#" class="footer__link">Полезные советы</a>
        <a href="#" class="footer__link">Контакты</a>
      </div>

      <!-- Links: Services -->
      <div class="footer__col">
        <h4 class="footer__col-title">УСЛУГИ КОМПАНИИ</h4>
        <a href="#" class="footer__link">Выезд на замер</a>
        <a href="#" class="footer__link">Расчёт материалов</a>
        <a href="#" class="footer__link">Резка</a>
        <a href="#" class="footer__link">Изготовление специзделий</a>
        <a href="#" class="footer__link">3D-проект (дизайн)</a>
      </div>

      <!-- Contacts + payments -->
      <div class="footer__col">
        <a href="tel:+73952482805" class="footer__phone">
          <svg viewBox="0 0 24 24" fill="none" stroke="#D9342B" stroke-width="1.8" width="16" height="16">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18a2 2 0 011.99-2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7a16 16 0 006.72 6.72l1.06-1.17a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
          </svg>
          +7 (3952) 48-28-05
        </a>
        <div class="footer__payments">
          <span class="payment-badge payment-badge--visa">VISA</span>
          <span class="payment-badge payment-badge--mc">MC</span>
          <span class="payment-badge payment-badge--mir">МИР</span>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p class="footer__copy">© 2021 GEOMETRICA — керамическая плитка и керамогранит в Иркутске</p>
        <button class="footer__top-btn" @click="scrollTop">
          НАВЕРХ СТРАНИЦЫ
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
            <line x1="12" y1="19" x2="12" y2="5"/>
            <polyline points="5 12 12 5 19 12"/>
          </svg>
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.footer {
  background: #fff;
  border-top: 1px solid #EFEFEF;
}

.footer__inner {
  display: grid;
  grid-template-columns: 220px 1fr 1fr 180px;
  gap: 40px;
  padding-top: 48px;
  padding-bottom: 48px;
}

.footer__logo {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 10px;
}

.footer__logo-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: #D9342B;
  color: #fff;
  font-family: 'inter', sans-serif;
  font-size: 17px;
  font-weight: 700;
  margin-right: 2px;
}

.footer__logo-text {
  font-family: 'inter', sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #1A1A1A;
}

.footer__tagline {
  font-family: 'roboto', sans-serif;
  font-size: 11px;
  color: #999;
  line-height: 1.6;
  margin-bottom: 16px;
}

.footer__social {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'inter', sans-serif;
  font-size: 11px;
  letter-spacing: 0.08em;
  color: #555;
  text-decoration: none;
  transition: color 0.18s;
}

.footer__social:hover { color: #D9342B; }

.footer__col-title {
  font-family: 'inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #1A1A1A;
  margin-bottom: 14px;
}

.footer__link {
  display: block;
  font-family: 'roboto', sans-serif;
  font-size: 12px;
  color: #666;
  text-decoration: none;
  padding: 4px 0;
  transition: color 0.18s;
}

.footer__link:hover { color: #D9342B; }

.footer__phone {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #1A1A1A;
  text-decoration: none;
  margin-bottom: 20px;
  transition: color 0.18s;
}

.footer__phone:hover { color: #D9342B; }

.footer__payments {
  display: flex;
  gap: 8px;
  align-items: center;
}

.payment-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  border: 1px solid #E0E0E0;
  font-family: 'inter', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.payment-badge--visa { color: #1A1F71; }
.payment-badge--mc { color: #EB001B; }
.payment-badge--mir { color: #00A0E3; }

.footer__bottom {
  border-top: 1px solid #EFEFEF;
}

.footer__bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
}

.footer__copy {
  font-family: 'roboto', sans-serif;
  font-size: 11px;
  color: #BDBDBD;
}

.footer__top-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #F5F5F5;
  border: none;
  padding: 10px 16px;
  font-family: 'inter', sans-serif;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #888;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
}

.footer__top-btn:hover {
  background: #1A1A1A;
  color: #fff;
}

@media (max-width: 900px) {
  .footer__inner {
    grid-template-columns: 1fr 1fr;
    gap: 28px;
  }
}

@media (max-width: 540px) {
  .footer__inner { grid-template-columns: 1fr; }
  .footer__bottom-inner { flex-direction: column; gap: 12px; text-align: center; }
}
</style>
