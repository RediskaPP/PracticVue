<script setup>
  import '../style.css'

  defineProps({
    item: { type: Object },
  })
</script>

<template>
    <div class="order-block">
      <div class="order-block__orders">
        <p class="order-block__order-title">Заказ №52345231</p>
        <div v-for="n in item.quantity">
          <p>{{item.title}} - {{item.pricePerUnit}}руб.</p>
        </div>
      </div>
      <div class="order-block__other">
        <p class="price-title">Итоговая цена: <span class="black">{{item.total}}руб.</span></p>
        <div>
          <p>Оплата: <span class="red">{{item.payment}}</span></p>
          <p>Статус заказа: <span class="red">{{item.status}}</span></p>
        </div>
      </div>
    </div>
</template>

<style scoped>
    .order-block {
      max-width: 1280px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      background: var(--light-color);
      padding: 0 40px;
      padding-bottom: 60px;
      margin: 30px 0;
    }
    p{
      font-weight: 300;
      color: #8B8B8B;
      font-size: 16px;
      font-family: 'Inter', sans-serif;
    }
    .order-block__order-title{
      color: black;
      padding-bottom: 2px;
      font-size: 18px;
    }
    .black{
      color: black;
    }
    .red{
      color: var(--accent-color);
    }
    .order-block__other{
      padding-top: 50px;
      padding-right: 60px;
    }
    .price-title{
      margin-bottom: 24px;
      font-size: 18px;
    }
    .order-block__other div{
      margin-top: 24px;
      border-top: 1px solid var(--gray-color);
    }
</style>