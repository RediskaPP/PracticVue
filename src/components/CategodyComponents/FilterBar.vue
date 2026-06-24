<template>
  <div class="filter-bar">
    <!-- Filter dropdowns grid -->
    <div class="filters-grid">
      <div
          v-for="filter in filters"
          :key="filter.id"
          class="filter-dropdown"
          :class="{ open: openFilter === filter.id, selected: selectedFilters[filter.id] }"
          @click="toggleFilter(filter.id)"
          v-click-outside="closeFilter"
      >
        <span class="filter-label">
          {{ selectedFilters[filter.id] || filter.label }}
        </span>
        <svg class="chevron" width="14" height="9" viewBox="0 0 14 9" fill="none">
          <path d="M1 1L7 7L13 1" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round"/>
        </svg>

        <!-- Dropdown list -->
        <div class="dropdown-list" v-if="openFilter === filter.id" @click.stop>
          <div
              v-for="opt in filter.options"
              :key="opt"
              class="dropdown-option"
              :class="{ active: selectedFilters[filter.id] === opt }"
              @click="selectOption(filter.id, opt)"
          >
            <span class="option-check" v-if="selectedFilters[filter.id] === opt">✓</span>
            {{ opt }}
          </div>
          <button
              v-if="selectedFilters[filter.id]"
              class="clear-option"
              @click="clearOption(filter.id)"
          >
            Очистить
          </button>
        </div>
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
        <button class="brand-nav" @click="prevBrand" :disabled="brandOffset === 0">
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
            <path d="M7 1L1 6.5L7 12" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
        <div class="brands-track">
          <div
              v-for="brand in visibleBrands"
              :key="brand"
              class="brand-item"
              :class="{ selected: selectedBrand === brand }"
              @click="toggleBrand(brand)"
          >
            <span class="brand-name">{{ brand }}</span>
            <span v-if="selectedBrand === brand" class="brand-check">✓</span>
          </div>
        </div>
        <button class="brand-nav" @click="nextBrand" :disabled="brandOffset + brandsPerPage >= brands.length">
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
            <path d="M1 1L7 6.5L1 12" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <!-- Buttons -->
      <div class="action-btns">
        <button class="reset-btn" @click="resetAll">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1L11 11M11 1L1 11" stroke="#9e9e9e" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          СБРОСИТЬ
        </button>
        <button class="search-btn" @click="emitSearch">
          НАЧАТЬ ПОИСК →
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterBar',
  props: {
    filters: { type: Array, default: () => [] },
    brands: { type: Array, default: () => [] },
    activeFilters: { type: Object, default: () => ({}) },
  },
  emits: ['search', 'reset'],

  // Simple click-outside directive
  directives: {
    'click-outside': {
      mounted(el, binding) {
        el._clickOutside = (e) => {
          if (!el.contains(e.target)) binding.value()
        }
        document.addEventListener('click', el._clickOutside)
      },
      unmounted(el) {
        document.removeEventListener('click', el._clickOutside)
      },
    },
  },

  data() {
    return {
      openFilter: null,
      priceMin: 0,
      priceMax: 10000,
      priceFrom: 0,
      priceTo: 10000,
      selectedBrand: null,
      brandOffset: 0,
      brandsPerPage: 4,
      selectedFilters: {},
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

  watch: {
    // Sync external reset back into local state
    activeFilters: {
      deep: true,
      handler(val) {
        if (!val.brand && !val.country && !val.priceChanged) {
          this.syncReset()
        }
      },
    },
  },

  methods: {
    toggleFilter(id) {
      this.openFilter = this.openFilter === id ? null : id
    },
    closeFilter() {
      this.openFilter = null
    },
    selectOption(filterId, value) {
      this.selectedFilters = { ...this.selectedFilters, [filterId]: value }
      this.openFilter = null
    },
    clearOption(filterId) {
      const updated = { ...this.selectedFilters }
      delete updated[filterId]
      this.selectedFilters = updated
      this.openFilter = null
    },
    clampPrices() {
      if (this.priceFrom < this.priceMin) this.priceFrom = this.priceMin
      if (this.priceTo > this.priceMax) this.priceTo = this.priceMax
      if (this.priceFrom > this.priceTo) this.priceFrom = this.priceTo
    },
    prevBrand() {
      if (this.brandOffset > 0) this.brandOffset -= 1
    },
    nextBrand() {
      if (this.brandOffset + this.brandsPerPage < this.brands.length) this.brandOffset += 1
    },
    toggleBrand(brand) {
      this.selectedBrand = this.selectedBrand === brand ? null : brand
    },
    emitSearch() {
      this.$emit('search', {
        priceFrom: this.priceFrom,
        priceTo: this.priceTo,
        brand: this.selectedBrand,
        country: this.selectedFilters['country'] || null,
        filters: { ...this.selectedFilters },
      })
    },
    resetAll() {
      this.priceFrom = this.priceMin
      this.priceTo = this.priceMax
      this.selectedBrand = null
      this.selectedFilters = {}
      this.openFilter = null
      this.$emit('reset')
    },
    syncReset() {
      this.priceFrom = this.priceMin
      this.priceTo = this.priceMax
      this.selectedBrand = null
      this.selectedFilters = {}
    },
  },
}
</script>

<style scoped>
.filter-bar {
  background: #f6f6f6;
  padding: 24px 28px 20px;
  margin-bottom: 8px;
}

/* ── Filters grid ── */
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
  position: relative;
  transition: background 0.15s;
}
.filter-dropdown:hover,
.filter-dropdown.open { background: #ddd; }
.filter-dropdown.selected { background: #fff0f0; }
.filter-dropdown.selected .filter-label { color: #e03226; }

.filter-label {
  font-size: 16px;
  font-weight: 300;
  color: #6a6a6a;
  font-family: 'Inter', sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 140px;
}
.chevron {
  flex-shrink: 0;
  transition: transform 0.2s;
}
.filter-dropdown.open .chevron { transform: rotate(180deg); }

/* Dropdown list */
.dropdown-list {
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  width: 100%;
  min-width: 208px;
  background: #fff;
  border: 1px solid #e9e9e9;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  z-index: 100;
  max-height: 240px;
  overflow-y: auto;
}
.dropdown-option {
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 300;
  color: #3e3e3e;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.12s;
}
.dropdown-option:hover { background: #f5f5f5; }
.dropdown-option.active { color: #e03226; font-weight: 500; background: #fff5f5; }
.option-check { color: #e03226; font-weight: 700; font-size: 12px; }

.clear-option {
  display: block;
  width: 100%;
  padding: 8px 16px;
  background: none;
  border: none;
  border-top: 1px solid #e9e9e9;
  color: #9e9e9e;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
  text-align: left;
  cursor: pointer;
  transition: color 0.15s;
}
.clear-option:hover { color: #e03226; }

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
  top: 0; bottom: 0;
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
  width: 14px; height: 14px;
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
.brand-nav:hover:not(:disabled) { opacity: 1; }
.brand-nav:disabled { opacity: 0.25; cursor: default; }
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
.brand-item.selected { border-color: #e03226; background: #fff5f5; }
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

/* Action buttons */
.action-btns {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.reset-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 18px;
  border: 1px solid #cbcbcb;
  background: #fff;
  color: #6a6a6a;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: border-color 0.18s, color 0.18s;
  white-space: nowrap;
}
.reset-btn:hover { border-color: #e03226; color: #e03226; }

.search-btn {
  height: 54px;
  padding: 0 24px;
  border: 2px solid #e03226;
  background: #fff;
  color: #e03226;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.18s, color 0.18s;
  min-width: 210px;
}
.search-btn:hover { background: #e03226; color: #fff; }
</style>