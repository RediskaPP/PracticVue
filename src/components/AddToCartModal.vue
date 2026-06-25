<template>
  <!-- Overlay -->
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="visible" class="modal-overlay" @click.self="close">
        <div class="modal" role="dialog" aria-modal="true">

          <!-- Close -->
          <button class="modal-close" @click="close" aria-label="Закрыть">×</button>

          <!-- Title -->
          <h2 class="modal-title">ДОБАВЛЕНИЕ В КОРЗИНУ</h2>

          <!-- Product name -->
          <p class="modal-product-name">{{ item.title }}</p>

          <!-- Controls row -->
          <div class="modal-controls">
            <!-- Quantity stepper -->
            <div class="stepper">
              <button
                class="stepper-btn"
                @click="decrement"
                :disabled="quantity <= 1"
              >−</button>
              <span class="stepper-value">{{ quantity }}</span>
              <button class="stepper-btn" @click="increment">+</button>
            </div>

            <!-- Unit selector -->
            <div class="unit-select-wrap">
              <select class="unit-select" v-model="selectedUnit">
                <option v-for="u in units" :key="u" :value="u">{{ u }}</option>
              </select>
              <span class="unit-arrow">∨</span>
            </div>
          </div>

          <!-- Total -->
          <div class="modal-total">
            Итого: <strong>{{ totalPrice }} руб.</strong>
          </div>

          <!-- CTA -->
          <button
            class="modal-cta"
            @click="handleAddToCart"
            :disabled="cartLoading"
          >
            <span v-if="cartLoading">СОХРАНЕНИЕ...</span>
            <span v-else-if="success">✓ ДОБАВЛЕНО</span>
            <span v-else>В КОРЗИНУ</span>
          </button>

          <!-- Error -->
          <p v-if="cartError" class="modal-error">{{ cartError }}</p>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import { useCart } from '../composables/useCart.js'

export default {
  name: 'AddToCartModal',

  props: {
    visible: { type: Boolean, default: false },
    item:    { type: Object, required: true },
  },

  emits: ['close', 'added'],

  setup() {
    const { addToCart, loading: cartLoading, error: cartError } = useCart()
    return { addToCart, cartLoading, cartError }
  },

  data() {
    return {
      quantity: 1,
      selectedUnit: 'шт',
      units: ['шт', 'м²', 'уп'],
      success: false,
    }
  },

  computed: {
    totalPrice() {
      return (this.item.price * this.quantity).toLocaleString('ru-RU')
    },
  },

  watch: {
    visible(val) {
      if (val) {
        // reset state on open
        this.quantity = 1
        this.selectedUnit = 'шт'
        this.success = false
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
  },

  methods: {
    close() {
      this.$emit('close')
    },

    increment() {
      this.quantity++
    },

    decrement() {
      if (this.quantity > 1) this.quantity--
    },

    async handleAddToCart() {
      try {
        await this.addToCart({
          product: this.item,
          quantity: this.quantity,
          unit: this.selectedUnit,
        })
        this.success = true
        this.$emit('added', { item: this.item, quantity: this.quantity, unit: this.selectedUnit })
        setTimeout(() => {
          this.close()
          this.success = false
        }, 1200)
      } catch {
        // error shown via cartError
      }
    },
  },
}
</script>

<style scoped>
/* Overlay */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

/* Modal box */
.modal {
  position: relative;
  background: #fff;
  width: 380px;
  padding: 36px 32px 32px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18);
  font-family: 'Inter', sans-serif;
}

/* Close */
.modal-close {
  position: absolute;
  top: 16px;
  right: 20px;
  background: none;
  border: none;
  font-size: 22px;
  color: #6e6e6e;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  transition: color 0.15s;
}
.modal-close:hover { color: #000; }

/* Title */
.modal-title {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin: 0 0 20px;
}

/* Product name */
.modal-product-name {
  font-size: 15px;
  font-weight: 400;
  color: #5a5a5a;
  line-height: 1.5;
  margin: 0 0 24px;
}

/* Controls */
.modal-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

/* Stepper */
.stepper {
  display: flex;
  align-items: center;
  border: 1px solid #d0d0d0;
  height: 44px;
}

.stepper-btn {
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  font-size: 20px;
  color: #3e3e3e;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
  flex-shrink: 0;
}
.stepper-btn:hover:not(:disabled) { background: #f5f5f5; }
.stepper-btn:disabled { color: #c8c8c8; cursor: not-allowed; }

.stepper-value {
  min-width: 48px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #1a1a1a;
  border-left: 1px solid #d0d0d0;
  border-right: 1px solid #d0d0d0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Unit selector */
.unit-select-wrap {
  position: relative;
  border: 1px solid #d0d0d0;
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0 12px 0 14px;
  gap: 8px;
  cursor: pointer;
}

.unit-select {
  appearance: none;
  -webkit-appearance: none;
  background: none;
  border: none;
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  color: #3e3e3e;
  cursor: pointer;
  outline: none;
  padding-right: 4px;
}

.unit-arrow {
  font-size: 11px;
  color: #8a8a8a;
  pointer-events: none;
}

/* Total */
.modal-total {
  font-size: 16px;
  font-weight: 400;
  color: #3e3e3e;
  margin-bottom: 20px;
}
.modal-total strong {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
}

/* CTA */
.modal-cta {
  width: 100%;
  height: 52px;
  background: #e03226;
  color: #fff;
  border: none;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: background 0.18s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-cta:hover:not(:disabled) { background: #c0281f; }
.modal-cta:disabled {
  background: #c8c8c8;
  cursor: not-allowed;
}

/* Error */
.modal-error {
  margin-top: 10px;
  font-size: 13px;
  color: #e03226;
  text-align: center;
}

/* Transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active .modal,
.modal-fade-leave-active .modal {
  transition: transform 0.2s ease;
}
.modal-fade-enter-from .modal { transform: scale(0.95); }
.modal-fade-leave-to .modal   { transform: scale(0.95); }
</style>
