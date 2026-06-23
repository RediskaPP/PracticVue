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
              @click="activeQuery = tag"
          >
            {{ tag }}
          </button>
        </div>
      </div>
    </header>

    <!-- Filter Bar -->
    <FilterBar :filters="filters" :brands="brands" @search="handleSearch" />

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

    <!-- Products / Collections Grid -->
    <div class="grid-wrapper">
      <div v-if="viewMode === 'collections'" class="items-grid">
        <Collection
            v-for="item in collection"
            :key="item.id"
            :item="item"
        />
      </div>
      <div v-else class="items-grid products-grid">
        <ProductCard
            v-for="item in products"
            :key="item.id"
            :item="item"
        />
      </div>
    </div>

    <!-- Pagination -->
    <div class="pagination-bar">
      <div class="divider"></div>
      <div class="pagination-row">
        <span class="pages-label">Страницы:</span>
        <div class="page-numbers">
          <span class="page current">1</span>
          <span class="page">2</span>
          <span class="page">3</span>
          <span class="page">4</span>
          <span class="page">5</span>
          <span class="page">6</span>
          <span class="page">7</span>
          <span class="page">8</span>
          <span class="page">9</span>
          <span class="page dots">...</span>
          <span class="page">26</span>
        </div>
        <div class="load-more">
          <div class="load-circle">
            <span class="arrow-down">→</span>
          </div>
          <span class="load-text">ПОКАЗАТЬ ЕЩЁ</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterBar from '../components/CategodyComponents/FilterBar.vue'
import CollectionCard from '../components/CategodyComponents/CollectionCard.vue'
import ProductCard from '../components/CategodyComponents/ProductCard.vue'
import SortIcon from '../components/CategodyComponents/SortIcon.vue'
import ChevronDown from '../components/CategodyComponents/ChevronDown.vue'
import CategoryBlock from "../components/CategodyComponents/CategoryBlock.vue";
import Collection from "../components/ProductBlock/Collection.vue";

export default {
  name: 'CatalogPage',
  components: {Collection, CategoryBlock, FilterBar, CollectionCard, ProductCard, SortIcon, ChevronDown },

  data() {
    return {
      viewMode: 'collections',
      activeQuery: null,
      popularQueries: ['Крупные форматы плитки', 'Плитка для пола', 'Плитка для стен'],

      filters: [
        { id: 'application', label: 'Применение' },
        { id: 'surface', label: 'Поверхность' },
        { id: 'pattern', label: 'Рисунок' },
        { id: 'style', label: 'Стилистика' },
        { id: 'color', label: 'Цвет' },
        { id: 'size', label: 'Размеры элемент..' },
        { id: 'type', label: 'Тип плитки' },
        { id: 'format', label: 'Формат' },
        { id: 'country', label: 'Страна' },
      ],

      brands: ['CEZARES', 'ITALON', 'LAPARET', 'KERAMA MARAZZI'],

      products: [
        {
          id: 0,
          collection: 'МоноТиберия',
          side: 'РОССИЯ',
          img: '/images/products/1.png',
          price: 3564,
          title: 'Керамогранит Creto Forza Calacatta white PG 01 45х45',
        },
        {
          id: 1,
          collection: 'МоноТиберия',
          side: 'РОССИЯ',
          img: '/images/products/1.png',
          price: 3564,
          title: 'Керамогранит «Жаклин» 20x80 см 1.6 м² цвет белый',
        },
      ],

      collection: [
        {
          id: 0,
          flag: '🇷🇺',
          side: 'Россия',
          company: 'Laparet',
          name: 'МоноТиберио',
          countelement: 4,
          img: '/images/populars/1.png',
        },
        {
          id: 1,
          flag: '🇪🇸',
          side: 'Испания',
          company: 'Чупакабро',
          name: 'Альтус',
          countelement: 12,
          img: '/images/populars/2.png',
        },
        {
          id: 2,
          flag: '🇮🇹',
          side: 'Италия',
          company: 'casabella',
          name: 'Бизарро',
          countelement: 4,
          img: '/images/populars/3.png',
        },
      ],
    }
  },

  methods: {
    handleSearch(params) {
      console.log('Search with params:', params)
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
.tag-btn.active { border-color: #e03226; color: #e03226; }

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
  border-radius: 0;
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

/* ── Grid ── */
.grid-wrapper { padding-bottom: 40px; }
.items-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
}
.products-grid { grid-template-columns: repeat(4, 1fr); }

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