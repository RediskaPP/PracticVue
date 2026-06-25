// composables/useCart.js
import { ref } from 'vue'

const API_URL = 'http://localhost:3000/orders'

export function useCart() {
  const loading = ref(false)
  const error = ref(null)

  async function addToCart({ product, quantity, unit }) {
    loading.value = true
    error.value = null

    const orderItem = {
      productId: product.id,
      title: product.title,
      collection: product.collection,
      side: product.side,
      img: product.img,
      pricePerUnit: product.price,
      quantity: quantity,
      unit: unit,
      total: product.price * quantity,
      createdAt: new Date().toISOString(),
      status: 'новый',
      payment: 'наличными в магазине',
    }

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderItem),
      })
      if (!res.ok) throw new Error('Ошибка сохранения')
      const saved = await res.json()
      return saved
    } catch (e) {
      error.value = e.message
      throw e
    } finally {
      loading.value = false
    }
  }

  return { addToCart, loading, error }
}
