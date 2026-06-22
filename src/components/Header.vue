<template>
  <header class="site-header">
    <!-- Top bar: contacts + social -->
    <div class="top-bar">
      <div class="container top-bar__inner">
        <nav class="top-nav">
          <a href="#" class="top-nav__link">УСЛУГИ <span class="top-nav__arrow">▾</span></a>
          <a href="#" class="top-nav__link top-nav__link--active">ОПЛАТА И ДОСТАВКА</a>
          <a href="#" class="top-nav__link">АКЦИИ</a>
          <a href="#" class="top-nav__link">ПОЛЕЗНЫЕ СОВЕТЫ</a>
          <a href="#" class="top-nav__link">ОБРАТНАЯ СВЯЗЬ</a>
          <a href="#" class="top-nav__link">КОНТАКТЫ</a>
        </nav>

        <div class="top-contacts">
          <a href="tel:+73952482805" class="top-contacts__phone">
            <svg class="top-contacts__phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18a2 2 0 011.99-2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7a16 16 0 006.72 6.72l1.06-1.17a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            +7 (3952) 48-28-05
          </a>
          <a href="#" class="top-contacts__instagram" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Main header: logo + icons + search -->
    <div class="main-header">
      <div class="container main-header__inner">
        <!-- Logo -->
        <a href="/" class="logo">
          <span class="logo__box">G</span><span class="logo__text">EOMETRICA</span>
          <span class="logo__tagline">керамическая плитка и<br>керамогранит в Иркутске</span>
        </a>

        <!-- Address (desktop only) -->
        <address class="header-address">
          г. Иркутск, ул. Старокузьмихинская, 41/3
        </address>

        <!-- Icons: account, wishlist, cart -->
        <div class="header-icons">
          <button class="header-icon" aria-label="Личный кабинет">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </button>
          <button class="header-icon" aria-label="Избранное">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
          </button>
          <button class="header-icon header-icon--cart" aria-label="Корзина">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
            </svg>
            <span class="header-icon__badge">21</span>
          </button>
        </div>

        <!-- Search -->
        <div class="header-search">
          <input
              type="text"
              class="header-search__input"
              placeholder="искать в каталоге"
              v-model="searchQuery"
              @keyup.enter="handleSearch"
          />
          <button class="header-search__btn" @click="handleSearch" aria-label="Поиск">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Catalog button -->
    <div class="catalog-bar">
      <div class="container">
        <button class="catalog-btn" @click="toggleCatalog">
          КАТАЛОГ ПРОДУКЦИИ
          <svg class="catalog-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')

function handleSearch() {
  if (searchQuery.value.trim()) {
    console.log('Search:', searchQuery.value)
    // router.push({ path: '/catalog', query: { q: searchQuery.value } })
  }
}

function toggleCatalog() {
  console.log('Toggle catalog')
  // emit('toggle-catalog') или открыть дропдаун
}
</script>

<style scoped>
/* ─── Reset & Base ─── */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.site-header {
  font-family: 'inter', sans-serif;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ─── Top Bar ─── */
.top-bar {
  background: #F7F7F7;
  border-bottom: 1px solid #E8E8E8;
}

.top-bar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
}

.top-nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.top-nav__link {
  font-family: 'inter', sans-serif;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #4A4A4A;
  text-decoration: none;
  transition: color 0.18s;
  white-space: nowrap;
}

.top-nav__link:hover {
  color: #D9342B;
}

.top-nav__link--active {
  color: #1A1A1A;
  font-weight: 600;
  border-bottom: 2px solid #D9342B;
  padding-bottom: 2px;
}

.top-nav__arrow {
  font-size: 9px;
  vertical-align: middle;
}

.top-contacts {
  display: flex;
  align-items: center;
  gap: 20px;
}

.top-contacts__phone {
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: 'roboto', sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #1A1A1A;
  text-decoration: none;
  transition: color 0.18s;
}

.top-contacts__phone:hover {
  color: #D9342B;
}

.top-contacts__phone-icon {
  width: 16px;
  height: 16px;
  color: #D9342B;
}

.top-contacts__instagram {
  display: flex;
  align-items: center;
  color: #6B6B6B;
  transition: color 0.18s;
}

.top-contacts__instagram:hover {
  color: #D9342B;
}

.top-contacts__instagram svg {
  width: 22px;
  height: 22px;
}

/* ─── Main Header ─── */
.main-header {
  background: #fff;
  padding: 14px 0;
}

.main-header__inner {
  display: flex;
  align-items: center;
  gap: 32px;
}

/* ─── Logo ─── */
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  flex-shrink: 0;
}

.logo__box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #D9342B;
  color: #fff;
  font-family: 'inter', sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.logo__text {
  font-family: 'inter', sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: #1A1A1A;
  text-transform: uppercase;
}

.logo__tagline {
  font-family: 'roboto', sans-serif;
  font-size: 10px;
  line-height: 1.5;
  color: #888;
  letter-spacing: 0.01em;
  text-transform: lowercase;
  border-left: 1px solid #DDD;
  padding-left: 12px;
  margin-left: 4px;
}

/* ─── Address ─── */
.header-address {
  font-family: 'roboto', sans-serif;
  font-size: 12px;
  color: #888;
  font-style: normal;
  line-height: 1.4;
  white-space: nowrap;
  margin-left: auto;
}

/* ─── Icons ─── */
.header-icons {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  color: #3A3A3A;
  border-radius: 4px;
  transition: color 0.18s, background 0.18s;
}

.header-icon:hover {
  color: #D9342B;
  background: #FFF0EF;
}

.header-icon svg {
  width: 22px;
  height: 22px;
}

.header-icon__badge {
  position: absolute;
  top: 4px;
  right: 4px;
  background: #D9342B;
  color: #fff;
  font-family: 'inter', sans-serif;
  font-size: 9px;
  font-weight: 700;
  min-width: 16px;
  height: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
  line-height: 1;
}

/* ─── Search ─── */
.header-search {
  display: flex;
  align-items: center;
  border: 1px solid #DADADA;
  background: #FAFAFA;
  flex-shrink: 0;
  width: 260px;
  transition: border-color 0.18s;
}

.header-search:focus-within {
  border-color: #D9342B;
  background: #fff;
}

.header-search__input {
  flex: 1;
  height: 42px;
  padding: 0 14px;
  border: none;
  background: transparent;
  font-family: 'roboto', sans-serif;
  font-size: 13px;
  color: #1A1A1A;
  outline: none;
}

.header-search__input::placeholder {
  color: #B0B0B0;
}

.header-search__btn {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #D9342B;
  border: none;
  cursor: pointer;
  color: #fff;
  flex-shrink: 0;
  transition: background 0.18s;
}

.header-search__btn:hover {
  background: #BF2A22;
}

.header-search__btn svg {
  width: 18px;
  height: 18px;
}

/* ─── Catalog Bar ─── */
.catalog-bar {
  background: #fff;
  padding-bottom: 0;
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

.catalog-btn:hover {
  background: #BF2A22;
}

.catalog-btn__icon {
  width: 18px;
  height: 18px;
}

/* ─── Responsive ─── */
@media (max-width: 1024px) {
  .header-address {
    display: none;
  }

  .top-nav {
    gap: 18px;
  }

  .header-search {
    width: 200px;
  }
}

@media (max-width: 768px) {
  .top-bar__inner {
    display: none;
  }

  .main-header__inner {
    flex-wrap: wrap;
    gap: 16px;
  }

  .logo__tagline {
    display: none;
  }

  .header-search {
    width: 100%;
    order: 3;
  }

  .header-icons {
    margin-left: auto;
  }
}
</style>