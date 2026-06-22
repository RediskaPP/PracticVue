<template>
  <section class="categories">
    <div class="container1">
      <CategoryBlock :width="560"
                     :height="400"
                     img="/images/category/6.png"
                     text="67 коллекций, 1 478 товаров"
                     title="Керамогранит"
      />
      <div class="categories-special-products">
          <h1>ИЗГОТОВЛЕНИЕ СПЕЦИЗДЕЛИЙ</h1>
      </div>
    </div>
    <div class="container1 center">
      <div class="categories-wallpaper">
        <div>
          <h1>ОБОИ</h1>
          <p>1 478 товаров</p>
        </div>
      </div>
      <CategoryBlock :width="400"
                     :height="400"
                     img="/images/category/4.png"
                     text="67 коллекций, 1 478 товаров"
                     title="КРУПНЫЕ форматы"
      />
    </div>
    <div class="container1">
      <CategoryBlock :width="320"
                     :height="320"
                     img="/images/category/3.png"
                     text="67 коллекций, 1 478 товаров"
                     title="КЕРАМИЧЕСКАЯ ПЛИТКА"
      />
      <div class="categories-special-products">
        <h1>ИЗГОТОВЛЕНИЕ СПЕЦИЗДЕЛИЙ</h1>
      </div>
    </div>
  </section>
</template>

<script setup>
import CategoryBlock from "./CategoryBlock.vue";
</script>

<style scoped>
.categories {
  padding: 0 0 48px;
  z-index: 1;
  display: flex;
}
h1{
  font-size: 63px;
}
.categories-special-products{
  background-image: url("/images/category/5.png");
  width: 480px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.categories-special-products h1{
  font-size: 24px;
  color: var(--gray-color);
  background: white;
  padding: 45px 30px;
}
.categories-title{
  color: white;
  padding-top: 54px;
  padding-left: 32px;
}
.categories-wallpaper{
  width: 240px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/images/category/2.png");
}
.categories-wallpaper div{
  width: 220px;
  height: 140px;
  background: white;
}
.categories-wallpaper p{
  color: var(--gray-light);
  font-size: 6px;
  margin-left: 20px;
}
.categories-wallpaper h1{
  color: var(--gray-color);
  font-size: 27px;
  margin-left: 20px;
}
.container1{
  display: flex;
  flex-direction: column;
  gap: 80px
}
.center{
  align-items: center;
}


@media (max-width: 768px) {
  .categories__grid {
    grid-template-columns: 1fr 1fr;
  }
  .cat-card--large {
    grid-column: 1 / 3;
    grid-row: auto;
    min-height: 200px;
  }
  .cat-extras {
    grid-column: 1 / 3;
  }
}
</style>
