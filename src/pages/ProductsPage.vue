<template>
  <div class="catalog-page">
    <!-- Breadcrumb + Header -->
    <header class="catalog-header">
      <nav class="breadcrumb">
        <span>ГЛАВНАЯ</span>
        <span class="sep">→</span>
        <span>КАТАЛОГ</span>
        <span class="sep">→</span>
        <span class="active">КЕРАМИЧЕСКАЯ ПЛИТКА</span>
      </nav>
      <h1 class="catalog-title">Керамическая плитка</h1>
      <div class="popular-queries">
        <span class="queries-label">Популярные<br />запросы:</span>
        <div class="queries-tags">
          <button
              v-for="tag in popularQueries"
              :key="tag"
              class="tag-btn"
              :class="{ active: activeQuery === tag }"
              @click="applyQueryTag(tag)"
          >
            {{ tag }}
          </button>
        </div>
      </div>
    </header>

    <!-- Filter Bar -->
    <FilterBar
        :filters="filters"
        :brands="brands"
        :active-filters="activeFilters"
        @search="handleSearch"
        @reset="handleReset"
    />

    <!-- Active filter chips -->
    <div v-if="hasActiveFilters" class="active-chips">
      <span class="chips-label">Применено:</span>
      <div class="chips-list">
        <span v-if="activeFilters.brand" class="chip">
          {{ activeFilters.brand }}
          <button class="chip-remove" @click="removeFilter('brand')">×</button>
        </span>
        <span v-if="activeFilters.priceChanged" class="chip">
          {{ activeFilters.priceFrom }} – {{ activeFilters.priceTo }} ₽
          <button class="chip-remove" @click="removeFilter('price')">×</button>
        </span>
        <span v-if="activeFilters.country" class="chip">
          {{ activeFilters.country }}
          <button class="chip-remove" @click="removeFilter('country')">×</button>
        </span>
        <span v-if="activeQuery" class="chip">
          {{ activeQuery }}
          <button class="chip-remove" @click="removeFilter('query')">×</button>
        </span>
      </div>
      <button class="reset-all-btn" @click="handleReset">
        <span class="reset-icon">✕</span> Сбросить все
      </button>
    </div>

    <!-- View Switcher -->
    <div class="view-switcher">
      <span class="show-label">Показать:</span>
      <div class="view-tabs">
        <button
            class="view-tab"
            :class="{ active: viewMode === 'collections' }"
            @click="viewMode = 'collections'"
        >
          <span class="tab-text">КОЛЛЕКЦИИ</span>
          <span class="tab-underline" v-if="viewMode === 'collections'"></span>
        </button>
        <button
            class="view-tab"
            :class="{ active: viewMode === 'products' }"
            @click="viewMode = 'products'"
        >
          <span class="tab-text tab-dashed">ТОВАРЫ</span>
        </button>
      </div>
      <div class="sort-control">
        <SortIcon />
        <span class="sort-label">СНАЧАЛА ПОПУЛЯРНЫЕ</span>
        <button class="sort-btn"><ChevronDown /></button>
      </div>
    </div>

    <!-- Results count -->
    <div class="results-meta" v-if="viewMode === 'collections'">
      Найдено коллекций: <strong>{{ filteredCollections.length }}</strong>
    </div>
    <div class="results-meta" v-else>
      Найдено товаров: <strong>{{ filteredProducts.length }}</strong>
    </div>

    <!-- Products / Collections Grid -->
    <div class="grid-wrapper">
      <!-- Collections -->
      <template v-if="viewMode === 'collections'">
        <div v-if="filteredCollections.length" class="items-grid">
          <RouterLink
              v-for="item in filteredCollections"
              :key="item.id"
              :to="{ name: 'collection', params: { id: item.id } }"
          >
            <Collection :item="item" />
          </RouterLink>
        </div>
        <div v-else class="empty-state">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="22" stroke="#e9e9e9" stroke-width="2"/>
            <path d="M16 24h16M24 16v16" stroke="#cbcbcb" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <p>Коллекции не найдены</p>
          <button class="empty-reset-btn" @click="handleReset">Сбросить фильтры</button>
        </div>
      </template>

      <!-- Products -->
      <template v-else>
        <div v-if="filteredProducts.length" class="items-grid products-grid">
          <ProductCard
              v-for="item in filteredProducts"
              :key="item.id"
              :item="item"
          />
        </div>
        <div v-else class="empty-state">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="22" stroke="#e9e9e9" stroke-width="2"/>
            <path d="M16 24h16M24 16v16" stroke="#cbcbcb" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <p>Товары не найдены</p>
          <button class="empty-reset-btn" @click="handleReset">Сбросить фильтры</button>
        </div>
      </template>
    </div>

    <!-- Pagination -->
    <div class="pagination-bar" v-if="totalVisible > 0">
      <div class="divider"></div>
      <div class="pagination-row">
        <span class="pages-label">Страницы:</span>
        <div class="page-numbers">
          <span
              v-for="p in totalPages"
              :key="p"
              class="page"
              :class="{ current: currentPage === p }"
              @click="currentPage = p"
          >{{ p }}</span>
          <span v-if="totalPages > 9" class="page dots">...</span>
        </div>
        <div class="load-more" @click="loadMore">
          <div class="load-circle">
            <span class="arrow-down">→</span>
          </div>
          <span class="load-text">ПОКАЗАТЬ ЕЩЁ</span>
        </div>
      </div>
    </div>
  </div>
  <AdvantagesBar/>
  <PromoSlider/>
  <ReviewsSection/>
  <ContactsSection/>
</template>

<script>
import FilterBar from '../components/CategodyComponents/FilterBar.vue'
import CollectionCard from '../components/ProductBlock/Collection.vue'
import ProductCard from '../components/ProductCard.vue'
import SortIcon from '../components/CategodyComponents/SortIcon.vue'
import ChevronDown from '../components/CategodyComponents/ChevronDown.vue'
import Collection from "../components/ProductBlock/Collection.vue";
import {onMounted, ref} from 'vue';
import {getCollection, getPopulars, getProducts} from "../api/api.js";
import AdvantagesBar from "../components/AdvantagesBar.vue";
import PromoSlider from "../components/PromoSlider.vue";
import ReviewsSection from "../components/ReviewsSection.vue";
import ContactsSection from "../components/ContactsSection.vue";

const DEFAULT_PRICE_FROM = 0
const DEFAULT_PRICE_TO = 10000
const PAGE_SIZE = 9

export default {
  name: 'CatalogPage',
  components: {
    ContactsSection,
    ReviewsSection,
    PromoSlider, AdvantagesBar, Collection, FilterBar, CollectionCard, ProductCard, SortIcon, ChevronDown },

  data() {
    return {
      viewMode: 'collections',
      activeQuery: null,
      currentPage: 1,

      // Applied filter state
      activeFilters: {
        priceFrom: DEFAULT_PRICE_FROM,
        priceTo: DEFAULT_PRICE_TO,
        brand: null,
        country: null,
        priceChanged: false,
      },

      popularQueries: ['Крупные форматы плитки', 'Плитка для пола', 'Плитка для стен'],

      filters: [
        { id: 'application', label: 'Применение', options: ['Для пола', 'Для стен', 'Универсальная'] },
        { id: 'surface', label: 'Поверхность', options: ['Глянцевая', 'Матовая', 'Полированная', 'Структурная'] },
        { id: 'pattern', label: 'Рисунок', options: ['Однотонная', 'Под мрамор', 'Под дерево', 'Геометрия'] },
        { id: 'style', label: 'Стилистика', options: ['Классика', 'Модерн', 'Лофт', 'Прованс'] },
        { id: 'color', label: 'Цвет', options: ['Белый', 'Бежевый', 'Серый', 'Чёрный', 'Коричневый'] },
        { id: 'size', label: 'Размеры элемент..', options: ['20x40', '30x60', '45x45', '60x60', '80x80'] },
        { id: 'type', label: 'Тип плитки', options: ['Керамогранит', 'Керамика', 'Клинкер', 'Мозаика'] },
        { id: 'format', label: 'Формат', options: ['Малый (до 30см)', 'Средний (30-60см)', 'Крупный (60см+)'] },
        { id: 'country', label: 'Страна', options: ['Россия', 'Испания', 'Италия', 'Германия', 'Португалия'] },
      ],

      brands: ['CEZARES', 'ITALON', 'LAPARET', 'KERAMA MARAZZI', 'GRASARO', 'ESTIMA'],
    }
  },
  setup(){
    const allProducts = ref([]);

    const allCollections = ref([]);

    onMounted(async () => {
      allProducts.value = await getProducts()
      allCollections.value = await getCollection()
    })

    return{
      allProducts,
      allCollections,
    }
  },

  computed: {
    filteredCollections() {
      const { priceFrom, priceTo, brand, country, priceChanged } = this.activeFilters
      return this.allCollections.filter(item => {
        if (priceChanged && (item.priceTo < priceFrom || item.priceFrom > priceTo)) return false
        if (brand && item.brand.toLowerCase() !== brand.toLowerCase()) return false
        if (country && item.side?.toLowerCase() !== country.toLowerCase()) return false
        if (this.activeQuery && !item.name.toLowerCase().includes(this.activeQuery.toLowerCase()) &&
            !item.side.toLowerCase().includes(this.activeQuery.toLowerCase())) {
          // query tag just filters by country/keyword — skip filtering for collections by query tag
        }
        return true
      })
    },

    filteredProducts() {
      const { priceFrom, priceTo, brand, country, priceChanged } = this.activeFilters
      return this.allProducts.filter(item => {
        if (priceChanged && (item.price < priceFrom || item.price > priceTo)) return false
        if (brand && item.brand !== brand) return false
        if (country && item.country !== country) return false
        if (this.activeQuery && item.query !== this.activeQuery) return false
        return true
      })
    },

    hasActiveFilters() {
      return this.activeFilters.brand ||
          this.activeFilters.country ||
          this.activeFilters.priceChanged ||
          this.activeQuery
    },

    totalVisible() {
      return this.viewMode === 'collections'
          ? this.filteredCollections.length
          : this.filteredProducts.length
    },

    totalPages() {
      return Math.max(1, Math.ceil(this.totalVisible / PAGE_SIZE))
    },
  },

  methods: {
    handleSearch(params) {
      const priceChanged = params.priceFrom !== DEFAULT_PRICE_FROM || params.priceTo !== DEFAULT_PRICE_TO
      this.activeFilters = {
        priceFrom: params.priceFrom,
        priceTo: params.priceTo,
        brand: params.brand || null,
        country: params.country || null,
        priceChanged,
      }
      this.currentPage = 1
    },

    handleReset() {
      this.activeFilters = {
        priceFrom: DEFAULT_PRICE_FROM,
        priceTo: DEFAULT_PRICE_TO,
        brand: null,
        country: null,
        priceChanged: false,
      }
      this.activeQuery = null
      this.currentPage = 1
    },

    removeFilter(type) {
      if (type === 'brand') this.activeFilters.brand = null
      if (type === 'country') this.activeFilters.country = null
      if (type === 'price') {
        this.activeFilters.priceFrom = DEFAULT_PRICE_FROM
        this.activeFilters.priceTo = DEFAULT_PRICE_TO
        this.activeFilters.priceChanged = false
      }
      if (type === 'query') this.activeQuery = null
      this.currentPage = 1
    },

    applyQueryTag(tag) {
      this.activeQuery = this.activeQuery === tag ? null : tag
      this.viewMode = 'products'
      this.currentPage = 1
    },

    loadMore() {
      if (this.currentPage < this.totalPages) this.currentPage++
    },
  },
}
</script>

<style scoped>
.catalog-page {
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 120px;
  font-family: 'Inter', sans-serif;
  background: #fff;
}

/* ── Header ── */
.catalog-header {
  padding-top: 32px;
  padding-bottom: 28px;
}

.breadcrumb {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #858585;
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 12px;
}
.breadcrumb .sep { color: #858585; }
.breadcrumb .active { color: #444; }

.catalog-title {
  font-size: 50px;
  font-weight: 500;
  letter-spacing: -3px;
  color: #444;
  margin: 0 0 24px;
  line-height: 1;
}

.popular-queries {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}
.queries-label {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #525252;
  line-height: 17px;
  white-space: nowrap;
  padding-top: 4px;
}
.queries-tags { display: flex; gap: 10px; flex-wrap: wrap; }

.tag-btn {
  border: 1px solid #cbcbcb;
  background: #fff;
  padding: 6px 20px;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  color: #000;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
  white-space: nowrap;
}
.tag-btn:hover { border-color: #e03226; }
.tag-btn.active { border-color: #e03226; color: #e03226; background: #fff5f5; }

/* ── Active chips ── */
.active-chips {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 12px 0 8px;
  border-top: 1px solid #f0f0f0;
  margin-bottom: 4px;
}
.chips-label {
  font-size: 13px;
  font-weight: 400;
  color: #9e9e9e;
  white-space: nowrap;
}
.chips-list {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  flex: 1;
}
.chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #fff5f5;
  border: 1px solid #e03226;
  color: #e03226;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 2px;
}
.chip-remove {
  background: none;
  border: none;
  color: #e03226;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  padding: 0;
  margin-left: 2px;
  font-weight: 700;
}
.chip-remove:hover { color: #b01c14; }

.reset-all-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: 1px solid #cbcbcb;
  color: #6a6a6a;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  padding: 6px 14px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: border-color 0.15s, color 0.15s;
  white-space: nowrap;
  margin-left: auto;
}
.reset-all-btn:hover { border-color: #e03226; color: #e03226; }
.reset-icon { font-size: 10px; }

/* ── View Switcher ── */
.view-switcher {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 20px 0 16px;
}
.show-label {
  font-size: 18px;
  font-weight: 300;
  color: #adadad;
}
.view-tabs { display: flex; gap: 24px; }
.view-tab {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}
.tab-text {
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -2px;
  text-transform: uppercase;
  color: #000;
  line-height: 1;
}
.view-tab:not(.active) .tab-text { color: #6e6e6e; }
.tab-dashed {
  border-bottom: 2px dashed #6e6e6e;
  padding-bottom: 2px;
}
.tab-underline {
  display: block;
  width: 100%;
  height: 2px;
  background: #e03226;
}
.sort-control {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;
}
.sort-label {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #6e6e6e;
}
.sort-btn {
  width: 30px;
  height: 30px;
  background: #e03226;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  border-radius: 50%;
}

/* ── Results meta ── */
.results-meta {
  font-size: 13px;
  color: #9e9e9e;
  margin-bottom: 12px;
  font-family: 'Roboto', sans-serif;
}
.results-meta strong { color: #444; }

/* ── Grid ── */
.grid-wrapper { padding-bottom: 40px; min-height: 200px; }
.items-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.products-grid { grid-template-columns: repeat(4, 1fr); }

/* ── Empty state ── */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 80px 0;
  color: #cbcbcb;
}
.empty-state p {
  font-size: 18px;
  font-weight: 300;
  color: #9e9e9e;
  margin: 0;
}
.empty-reset-btn {
  border: 1px solid #e03226;
  background: none;
  color: #e03226;
  font-size: 13px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  padding: 10px 24px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background 0.18s, color 0.18s;
}
.empty-reset-btn:hover { background: #e03226; color: #fff; }

/* ── Pagination ── */
.pagination-bar { padding: 16px 0 40px; }
.divider {
  width: 100%;
  height: 1px;
  background: #e9e9e9;
  margin-bottom: 16px;
}
.pagination-row {
  display: flex;
  align-items: center;
  gap: 20px;
}
.pages-label {
  font-size: 18px;
  font-weight: 300;
  color: #adadad;
  white-space: nowrap;
}
.page-numbers { display: flex; gap: 4px; align-items: baseline; }
.page {
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -2px;
  text-transform: uppercase;
  color: #a7a7a7;
  cursor: pointer;
  transition: color 0.15s;
  padding: 0 2px;
}
.page.current { color: #000; }
.page:hover:not(.current):not(.dots) { color: #6e6e6e; }
.page.dots { cursor: default; }
.load-more {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}
.load-circle {
  width: 26px;
  height: 26px;
  background: #e03226;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.arrow-down {
  color: #fff;
  font-size: 12px;
  transform: rotate(90deg);
  display: block;
}
.load-text {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #000;
}
</style>