<script setup>
import CollectionDetail from "../components/CollectionDetail.vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {getCollection, getProducts} from "../api/api.js";
import AdvantagesBar from "../components/AdvantagesBar.vue";
import ProductCard from "../components/ProductCard.vue";
import PromoSlider from "../components/PromoSlider.vue";

const route = useRoute();
const collection = ref(null)
const products = ref([])

onMounted(async () => {
  const id = route.params.id;

  const collections = await getCollection();
  collection.value = collections.find(item => item.id === id);

  products.value = await getProducts();

  console.log(collection.value);
})
</script>

<template>
  <div v-if="!collection" class="page-loading">Загрузка...</div>
  <CollectionDetail v-else :collection="collection" />
  <AdvantagesBar />
  <div class="all-elements">
    <h1 class="title-element">ВСЕ ЭЛЕМЕНТЫ</h1>
    <div class="grid-elements">
      <ProductCard
          v-for="item in products"
          :key="item.id"
          :item="item"
      />
    </div>
  </div>
  <div class="market">
    <div>
      <img src="/images/svg/layers.svg" alt="">
      <p>Образцы плитки можно посмотреть в нашем магазине по адресу: г. Иркутск, ул. Старо-Кузьмихинская, 41/3</p>
    </div>
  </div>
  <PromoSlider/>
</template>

<style scoped>
.page-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #aaa;
}
.grid-elements{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1240px;
}
.title-element{
  font-family: 'Inter', sans-serif;
  font-size: 25px;
  font-weight: bold;
  color: black;
  margin-bottom: 40px;
  margin-top: 50px;
  border-bottom: 2px solid var(--accent-color);
  padding: 5px 10px;
}
.all-elements{
  display: flex;
  flex-direction: column;
  align-items: center;
}
p{
  font-family: 'Inter', sans-serif;
}
.market{
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--light-color);
  max-width: 1240px;
  width: 100%;
  max-height: 80px;
  height: 100%;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 80px;
}
.market div{
  display: flex;
  gap: 20px
}
.market img{
  max-width: 19px;
}
@media (max-width: 860px) {
  .grid-elements{
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>