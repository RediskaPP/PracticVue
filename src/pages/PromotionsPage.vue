<template>
  <section class="promotions">
    <!-- Page Header -->
    <div class="promotions__header">
      <nav class="promotions__breadcrumb">Главная → акции и спецпредложения</nav>
      <h1 class="promotions__title">Акции и спецпредложения</h1>
    </div>

    <!-- Cards Grid -->
    <div class="promotions__grid">
      <PromoCard
        v-for="(card, index) in promoCards"
        :key="index"
        :image="card.image"
        :badge="card.badge"
        :title="card.title"
        :paragraphs="card.paragraphs"
      />
    </div>

    <!-- Pagination -->
    <div class="promotions__pagination-wrapper">
      <hr class="promotions__pagination-line" />
      <div class="promotions__pagination">
        <span class="promotions__pagination-label">Страницы:</span>
        <span class="promotions__page promotions__page--active">1</span>
        <span class="promotions__page">2</span>
        <span class="promotions__page">3</span>
        <span class="promotions__page">4</span>
      </div>
    </div>
  </section>
</template>

<script>
import PromoCard from '../components/PromoCard.vue'

export default {
  name: 'PromotionsPage',
  components: { PromoCard },

  data() {
    return {
      promoCards: [
        {
          image: "/images/promos/1.png",
          badge: { type: 'date', text: 'с 15 апреля по 20 мая' },
          title: 'РАСПРОДАЖА КЕРАМИКИ ITALON',
          paragraphs: [
            'Облицовывают как в реальности(на плиточный клей и с затиркой швов) только в дорогих салонах. Пример такого стенда с итальянской плиткой на последнем фото. Обычную же приклеивают на жидкие гвозди без затирки. И вот такими стендами нельзя обманываться т.к. края и то какие получатся швы по ним непонятно.',
            'Выбирая берите в руки 2 отдельные плитки и проверяйте их геометрию прикладывая их друг к другу лицевой частью к тыльной. Должны плотно прилегать без зазоров и дырок.',
          ],
        },
        {
          image: "/images/promos/2.png",
          badge: { type: 'label', text: 'обновление каталога' },
          title: 'Новые поступления GRASARO 2021',
          paragraphs: [
            'И вот такими стендами нельзя обманываться т.к. края и то какие получатся швы по ним непонятно.',
            'Выбирая берите в руки 2 отдельные плитки и проверяйте их геометрию прикладывая их друг к другу лицевой частью к тыльной. Должны плотно прилегать без зазоров и дырок.',
          ],
        },
        {
          image: "/images/promos/3.png",
          badge: { type: 'date', text: 'с 15 апреля по 20 мая' },
          title: 'СКИДКА НА ОСТАТКИ ДО 70%',
          paragraphs: [
            'Пример такого стенда с итальянской плиткой на последнем фото. Обычную же приклеивают на жидкие гвозди без затирки. И вот такими стендами нельзя обманываться т.к. края и то какие получатся швы по ним непонятно.',
            'Выбирая берите в руки 2 отдельные плитки и проверяйте их геометрию прикладывая их друг к другу лицевой частью к тыльной.',
          ],
        },
        {
          image: "/images/promos/3.png",
          badge: { type: 'date', text: 'с 15 апреля по 20 мая' },
          title: 'СКИДКА НА ОСТАТКИ ДО 70%',
          paragraphs: [
            'Пример такого стенда с итальянской плиткой на последнем фото. Обычную же приклеивают на жидкие гвозди без затирки. И вот такими стендами нельзя обманываться т.к. края и то какие получатся швы по ним непонятно.',
            'Выбирая берите в руки 2 отдельные плитки и проверяйте их геометрию прикладывая их друг к другу лицевой частью к тыльной.',
          ],
        },
        {
          image: "/images/promos/2.png",
          badge: { type: 'date', text: 'с 15 апреля по 20 мая' },
          title: 'РАСПРОДАЖА КЕРАМИКИ ITALON',
          paragraphs: [
            'Облицовывают как в реальности(на плиточный клей и с затиркой швов) только в дорогих салонах. Пример такого стенда с итальянской плиткой на последнем фото. Обычную же приклеивают на жидкие гвозди без затирки. И вот такими стендами нельзя обманываться т.к. края и то какие получатся швы по ним непонятно.',
            'Выбирая берите в руки 2 отдельные плитки и проверяйте их геометрию прикладывая их друг к другу лицевой частью к тыльной. Должны плотно прилегать без зазоров и дырок.',
          ],
        },
        {
          image: "/images/promos/1.png",
          badge: { type: 'label', text: 'обновление каталога' },
          title: 'Новые поступления GRASARO 2021',
          paragraphs: [
            'И вот такими стендами нельзя обманываться т.к. края и то какие получатся швы по ним непонятно.',
            'Выбирая берите в руки 2 отдельные плитки и проверяйте их геометрию прикладывая их друг к другу лицевой частью к тыльной. Должны плотно прилегать без зазоров и дырок.',
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.promotions {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
}

/* Header */
.promotions__breadcrumb {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #858585;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 12px;
  margin-top: 60px;
}

.promotions__title {
  font-family: 'Inter', sans-serif;
  font-size: 50px;
  font-weight: 500;
  color: #444;
  letter-spacing: -3px;
  line-height: 1.1;
  margin: 0 0 48px 0;
}

/* Grid */
.promotions__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px 40px;
  margin-bottom: 60px;
}

/* Pagination */
.promotions__pagination-wrapper {
  margin-top: 8px;
}

.promotions__pagination-line {
  border: none;
  border-top: 1px solid #e9e9e9;
  margin: 0 0 20px 0;
}

.promotions__pagination {
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.promotions__pagination-label {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #adadad;
  margin-right: 4px;
}

.promotions__page {
  font-family: 'Inter', sans-serif;
  font-size: 25px;
  font-weight: 700;
  color: #a7a7a7;
  letter-spacing: -2px;
  cursor: pointer;
  padding: 0 4px;
  transition: color 0.2s;
}

.promotions__page:hover {
  color: #444;
}

.promotions__page--active {
  color: #000;
}

/* Responsive */
@media (max-width: 900px) {
  .promotions__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .promotions__title {
    font-size: 36px;
  }
}

@media (max-width: 600px) {
  .promotions__grid {
    grid-template-columns: 1fr;
  }

  .promotions__title {
    font-size: 28px;
    letter-spacing: -1px;
  }
}
</style>
