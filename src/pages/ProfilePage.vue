<script setup>
import {defineComponent, onMounted, ref} from "vue";
    import {getOrder} from "../api/api.js";
    import OrderBlock from "../components/OrderBlock.vue";
    import ChevronDown from "../components/CategodyComponents/ChevronDown.vue";
    import SortIcon from "../components/CategodyComponents/SortIcon.vue";

    const orders = ref([]);
    const viewMode = ref('orders');

    onMounted(async () => {
      orders.value = await getOrder();
    })
</script>

<template>
  <div class="prodile-page">
    <header class="page-header">
      <nav class="breadcrumb">
        <span>ГЛАВНАЯ</span>
        <span class="sep">→</span>
        <span class="active">КОРЗИНА ЗАКАЗА</span>
      </nav>
      <h1 class="catalog-title">Личный кабинет </h1>
    </header>
    <div class="view-switcher">
      <span class="show-label">Показать:</span>
      <div class="view-tabs">
        <button
            class="view-tab"
            :class="{ active: viewMode === 'orders' }"
            @click="viewMode = 'orders'"
        >
          <span class="tab-text">ЗАКАЗЫ</span>
          <span class="tab-underline" v-if="viewMode === 'favorites'"></span>
        </button>
        <button
            class="view-tab"
            :class="{ active: viewMode === 'favorites' }"
            @click="viewMode = 'favorites'"
        >
          <span class="tab-text tab-dashed">ИЗБРАННОЕ</span>
        </button>
      </div>
    </div>
    <div class="profile-page">
      <div v-if="viewMode === 'orders'" class="order-blocks" v-for="item in orders" :key="item.id">
        <OrderBlock :item="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .prodile-page{
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 120px;
    font-family: 'Inter', sans-serif;
    background: #fff;
  }
  .order-blocks{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .page-header {
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
</style>