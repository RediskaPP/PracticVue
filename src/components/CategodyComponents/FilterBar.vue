<template>
  <div class="filter-bar">
    <!-- Filter dropdowns grid -->
    <div class="filters-grid">
      <div
        v-for="filter in filters"
        :key="filter.id"
        class="filter-dropdown"
        :class="{ open: openFilter === filter.id }"
        @click="toggleFilter(filter.id)"
      >
        <span class="filter-label">{{ filter.label }}</span>
        <svg class="chevron" width="14" height="9" viewBox="0 0 14 9" fill="none">
          <path d="M1 1L7 7L13 1" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>
    </div>

    <!-- Price + brands row -->
    <div class="filter-bottom">
      <!-- Price range -->
      <div class="price-section">
        <div class="price-slider-track">
          <div class="price-slider-fill" :style="sliderStyle"></div>
          <input
            type="range"
            class="range-input range-min"
            :min="priceMin"
            :max="priceMax"
            v-model.number="priceFrom"
            @input="clampPrices"
          />
          <input
            type="range"
            class="range-input range-max"
            :min="priceMin"
            :max="priceMax"
            v-model.number="priceTo"
            @input="clampPrices"
          />
        </div>
        <div class="price-inputs">
          <span class="price-lbl">Цена от</span>
          <div class="price-box">
            <input type="number" v-model.number="priceFrom" class="price-input" @change="clampPrices" />
          </div>
          <span class="price-lbl">до</span>
          <div class="price-box">
            <input type="number" v-model.number="priceTo" class="price-input" @change="clampPrices" />
          </div>
          <span class="price-lbl">руб.</span>
        </div>
      </div>

      <!-- Brand logos carousel -->
      <div class="brands-section">
        <button class="brand-nav" @click="prevBrand">
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
            <path d="M7 1L1 6.5L7 12" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
        <div class="brands-track">
          <div
            v-for="(brand, idx) in visibleBrands"
            :key="brand"
            class="brand-item"
            :class="{ selected: selectedBrand === brand }"
            @click="selectedBrand = brand"
          >
            <span class="brand-name">{{ brand }}</span>
            <span v-if="selectedBrand === brand" class="brand-check">✓</span>
          </div>
        </div>
        <button class="brand-nav" @click="nextBrand">
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
            <path d="M1 1L7 6.5L1 12" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <!-- Search button -->
      <button class="search-btn" @click="emitSearch">
        НАЧАТЬ ПОИСК →
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterBar',
  props: {
    filters: { type: Array, default: () => [] },
    brands: { type: Array, default: () => [] },
  },
  emits: ['search'],

  data() {
    return {
      openFilter: null,
      priceMin: 0,
      priceMax: 10000,
      priceFrom: 570,
      priceTo: 5720,
      selectedBrand: null,
      brandOffset: 0,
      brandsPerPage: 4,
    }
  },

  computed: {
    visibleBrands() {
      return this.brands.slice(this.brandOffset, this.brandOffset + this.brandsPerPage)
    },
    sliderStyle() {
      const left = ((this.priceFrom - this.priceMin) / (this.priceMax - this.priceMin)) * 100
      const right = 100 - ((this.priceTo - this.priceMin) / (this.priceMax - this.priceMin)) * 100
      return { left: left + '%', right: right + '%' }
    },
  },

  methods: {
    toggleFilter(id) {
      this.openFilter = this.openFilter === id ? null : id
    },
    clampPrices() {
      if (this.priceFrom > this.priceTo) this.priceFrom = this.priceTo
      if (this.priceTo < this.priceFrom) this.priceTo = this.priceFrom
    },
    prevBrand() {
      if (this.brandOffset > 0) this.brandOffset -= 1
    },
    nextBrand() {
      if (this.brandOffset + this.brandsPerPage < this.brands.length) this.brandOffset += 1
    },
    emitSearch() {
      this.$emit('search', {
        priceFrom: this.priceFrom,
        priceTo: this.priceTo,
        brand: this.selectedBrand,
      })
    },
  },
}
</script>

<style scoped>
.filter-bar {
  background: #f6f6f6;
  padding: 24px 28px 20px;
  margin-bottom: 24px;
}

/* ── Filters grid: 3 rows × 3 cols ── */
.filters-grid {
  display: grid;
  grid-template-columns: repeat(3, 208px);
  gap: 4px;
  margin-bottom: 18px;
}

.filter-dropdown {
  height: 45px;
  background: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px 0 16px;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s;
}
.filter-dropdown:hover,
.filter-dropdown.open { background: #ddd; }

.filter-label {
  font-size: 16px;
  font-weight: 300;
  color: #6a6a6a;
  font-family: 'Inter', sans-serif;
}
.chevron {
  flex-shrink: 0;
  transition: transform 0.2s;
}
.filter-dropdown.open .chevron { transform: rotate(180deg); }

/* ── Bottom row ── */
.filter-bottom {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

/* Price */
.price-section { display: flex; flex-direction: column; gap: 10px; min-width: 300px; }

.price-slider-track {
  position: relative;
  height: 6px;
  background: #e3e3e3;
  border-radius: 3px;
  width: 100%;
}
.price-slider-fill {
  position: absolute;
  top: 0;
  bottom: 0;
  background: #e03226;
  border-radius: 3px;
}
.range-input {
  position: absolute;
  width: 100%;
  top: -4px;
  appearance: none;
  background: none;
  pointer-events: none;
}
.range-input::-webkit-slider-thumb {
  appearance: none;
  width: 14px;
  height: 14px;
  background: #fff;
  border: 2px solid #9e9e9e;
  border-radius: 50%;
  cursor: pointer;
  pointer-events: all;
}

.price-inputs {
  display: flex;
  align-items: center;
  gap: 10px;
}
.price-lbl {
  font-size: 16px;
  font-weight: 300;
  color: #6a6a6a;
  font-family: 'Inter', sans-serif;
  white-space: nowrap;
}
.price-box {
  background: #e9e9e9;
  height: 45px;
  width: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.price-input {
  width: 100%;
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 300;
  color: #000;
  font-family: 'Inter', sans-serif;
  text-align: center;
  outline: none;
  /* hide spinners */
  -moz-appearance: textfield;
}
.price-input::-webkit-outer-spin-button,
.price-input::-webkit-inner-spin-button { -webkit-appearance: none; }

/* Brands */
.brands-section {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 240px;
}
.brand-nav {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  opacity: 0.6;
  transition: opacity 0.15s;
}
.brand-nav:hover { opacity: 1; }

.brands-track {
  display: flex;
  gap: 4px;
  flex: 1;
}
.brand-item {
  flex: 1;
  height: 74px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  border: 2px solid transparent;
  transition: border-color 0.15s;
}
.brand-item:hover { border-color: #e03226; }
.brand-item.selected { border-color: #e03226; }

.brand-name {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #6a6a6a;
  text-align: center;
}
.brand-check {
  position: absolute;
  top: 4px;
  right: 6px;
  color: #e03226;
  font-size: 12px;
  font-weight: 700;
}

/* Search button */
.search-btn {
  height: 54px;
  padding: 0 24px;
  border: 2px solid #e03226;
  background: #fff;
  color: #e03226;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.18s, color 0.18s;
  min-width: 210px;
}
.search-btn:hover {
  background: #e03226;
  color: #fff;
}
</style>
