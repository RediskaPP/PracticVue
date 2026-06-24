<template>
  <section class="useful-tips">
    <div class="useful-tips__inner">
      <!-- Sidebar Navigation -->
      <aside class="useful-tips__sidebar">
        <div
          v-for="(group, gIndex) in navigationGroups"
          :key="gIndex"
          class="useful-tips__nav-group"
        >
          <h3 class="useful-tips__nav-title">{{ group.title }}</h3>
          <ul class="useful-tips__nav-list">
            <li
              v-for="(item, iIndex) in group.items"
              :key="iIndex"
              class="useful-tips__nav-item"
              :class="{ 'useful-tips__nav-item--active': isActive(gIndex, iIndex) }"
              @click="setActive(gIndex, iIndex)"
            >
              <span class="useful-tips__nav-arrow">▶</span>
              {{ item.question }}
            </li>
          </ul>
          <hr v-if="gIndex < navigationGroups.length - 1" class="useful-tips__nav-divider" />
        </div>
      </aside>

      <!-- Content Area -->
      <article class="useful-tips__content">
        <h2 class="useful-tips__content-title">{{ activeItem.question }}</h2>
        <div class="useful-tips__content-body">
          <p
            v-for="(paragraph, pIndex) in activeItem.answer"
            :key="pIndex"
            class="useful-tips__content-paragraph"
            v-html="paragraph"
          ></p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UsefulTips',

  data() {
    return {
      activeGroupIndex: 0,
      activeItemIndex: 0,

      navigationGroups: [
        {
          title: 'Выбор, расчеты и покупка плитки',
          items: [
            {
              question: 'Какую плитку выбрать?',
              answer: [
                'Облицовывают как в реальности (на плиточный клей и с затиркой швов) только в дорогих салонах. Пример такого стенда с итальянской плиткой на последнем фото. Обычную же приклеивают на жидкие гвозди без затирки. И вот такими стендами нельзя обманываться т.к. края и то какие получатся швы по ним непонятно. Выбирая берите в руки 2 отдельные плитки и проверяйте их геометрию прикладывая их друг к другу лицевой частью к тыльной. Должны плотно прилегать без зазоров и дырок.',
                'Первое время просто пройдитесь по нескольким точкам фотографируя с ценником понравившиеся образцы. Диапазон цен очень широкий и никогда не стоит выбирать первую понравившуюся плитку. И ещё:',
                'Не слушайте советы продавцов-консультантов по внешнему виду и вопросам дизайна.',
                'Эти люди и не строители и не дизайнеры, наличие у них вкуса и чувства прекрасного не является требованием при приёме их на работу. Поэтому их мнение и советы будут околослучайного качества, а могут быть смещены желанием втюхать остатки или дорогие и в ~99% случаев отстойные бордюры и декоры.',
                'Самую крутые виды плитки (под бетон и дерево) очень сильно отличаются и выбрать их по фотографиям категорически невозможно.',
              ],
            },
            {
              question: 'Как выполнить замеры помещения?',
              answer: [
                'Перед покупкой плитки необходимо тщательно измерить все поверхности, которые планируется облицовывать. Используйте рулетку и записывайте все размеры в блокнот или телефон.',
                'Для стен измерьте высоту и ширину каждой стены отдельно. Не забудьте вычесть площадь оконных и дверных проёмов — это позволит не переплачивать за лишний материал.',
                'Для пола измерьте длину и ширину комнаты. Если комната не прямоугольная, разбейте её на простые геометрические фигуры и считайте площадь каждой отдельно.',
                'Рекомендуем сделать схему помещения с точными размерами — это пригодится и при выборе плитки, и при работе мастера-укладчика.',
              ],
            },
            {
              question: 'Как рассчитать количество плитки?',
              answer: [
                'Умножьте ширину поверхности на высоту (или длину) — получите площадь в квадратных метрах. Сложите площади всех поверхностей.',
                'К полученной сумме обязательно добавьте запас: 10% при прямой укладке и 15–20% при диагональной или со сложным рисунком. Запас нужен на подрезку и возможный брак.',
                'Если плитка продаётся упаковками, переведите нужную площадь в количество упаковок, округляя в бо́льшую сторону. Лучше купить с запасом — оставшаяся плитка пригодится при замене повреждённых элементов.',
                '<strong>Пример:</strong> ванная 2×2 м = 4 м² пола. С запасом 10% = 4,4 м². Выбираете плитку 0,09 м² (30×30 см) — нужно 49 штук (5 упаковок по 10 шт.).',
              ],
            },
            {
              question: 'Как купить плитку?',
              answer: [
                'После того как вы определились с выбором и сделали расчёт, уточните наличие нужного количества плитки у продавца. Желательно купить всё из одной партии (одного тона/калибра) — это гарантирует однородность оттенка.',
                'Попросите продавца показать несколько плиток из разных упаковок и сравните их между собой при дневном свете. Небольшие перепады в цвете между партиями — нормальное явление для керамики.',
                'Сохраняйте чеки и упаковки до конца ремонта: если потребуется докупить или вернуть плитку, без документов это будет затруднительно.',
              ],
            },
          ],
        },
        {
          title: 'Монтаж плитки',
          items: [
            {
              question: 'Какой клей выбрать?',
              answer: [
                'Выбор клея зависит от типа плитки и основания. Для стандартной керамики в ванной подойдёт универсальный цементный клей класса C1. Для крупноформатной плитки и керамогранита берите C2 с улучшенной адгезией.',
                'Для влажных зон (душевая, бассейн) выбирайте клей с маркировкой «W» (водостойкий). Если основание подвержено небольшим вибрациям или температурным перепадам — ищите клей с маркировкой «F» (быстрый) или «E» (деформируемый).',
                'Обращайте внимание на время открытой выдержки клея: для начинающих лучше брать составы с бо́льшим временем жизни (25–30 минут), чтобы успеть скорректировать положение плитки.',
              ],
            },
            {
              question: 'Где найти мастера?',
              answer: [
                'Лучший способ найти хорошего мастера — рекомендации знакомых, которые уже делали ремонт. Живое «сарафанное радио» надёжнее любых рейтингов.',
                'Если рекомендаций нет, просите мастера показать фотографии выполненных работ и, по возможности, контакты предыдущих заказчиков. Хороший специалист не откажет в таком запросе.',
                'Перед началом работ обязательно составьте смету с перечнем работ и фиксированной ценой. Устные договорённости часто становятся причиной споров по окончании ремонта.',
                'Обратите внимание: наш магазин сотрудничает с проверенными мастерами-укладчиками. Вы можете запросить контакты через раздел «Контакты» или спросить у наших менеджеров.',
              ],
            },
            {
              question: 'Полезные советы по укладке плитки',
              answer: [
                'Начинайте укладку от центра стены или пола, а не от угла — это даёт симметричный результат и скрывает подрезки в незаметных местах.',
                'Используйте крестики или систему выравнивания плитки (СВП) для одинаковых швов. Ширина шва 2–3 мм — стандарт для большинства помещений.',
                'Не наносите клей сразу на большой участок — работайте полосами по 50–60 см, чтобы клей не успевал схватиться до укладки плитки. Наносите клей и на основание, и на тыльную сторону плитки («двойное намазывание»).',
                'После укладки дайте клею полностью высохнуть перед затиркой: минимум 24 часа, а в прохладных и влажных условиях — 48 часов. Затирку выбирайте по цвету плитки или на тон темнее.',
              ],
            },
          ],
        },
      ],
    };
  },

  computed: {
    activeItem() {
      return this.navigationGroups[this.activeGroupIndex].items[this.activeItemIndex];
    },
  },

  methods: {
    isActive(gIndex, iIndex) {
      return this.activeGroupIndex === gIndex && this.activeItemIndex === iIndex;
    },
    setActive(gIndex, iIndex) {
      this.activeGroupIndex = gIndex;
      this.activeItemIndex = iIndex;
    },
  },
};
</script>

<style scoped>
.useful-tips {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  padding-top: 80px;
  padding-bottom: 80px;
}

.useful-tips__inner {
  display: flex;
  gap: 80px;
  align-items: flex-start;
}

/* ── Sidebar ── */
.useful-tips__sidebar {
  flex: 0 0 320px;
  min-width: 0;
}

.useful-tips__nav-group {
  margin-bottom: 0;
}

.useful-tips__nav-title {
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 400;
  color: #777;
  line-height: 1.5;
  margin: 0 0 16px 0;
}

.useful-tips__nav-list {
  list-style: none;
  padding: 0;
  margin: 0 0 8px 0;
}

.useful-tips__nav-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #4f4f4f;
  line-height: 24px;
  margin-bottom: 14px;
  cursor: pointer;
  transition: color 0.2s;
}

.useful-tips__nav-item:last-child {
  margin-bottom: 0;
}

.useful-tips__nav-item:hover {
  color: #e03226;
}

.useful-tips__nav-item--active {
  color: #000;
  font-weight: 600;
}

.useful-tips__nav-arrow {
  flex-shrink: 0;
  font-size: 10px;
  color: #e03226;
  margin-top: 5px;
  transform: scale(0.85);
  display: inline-block;
}

.useful-tips__nav-divider {
  border: none;
  border-top: 1px solid #e9e9e9;
  margin: 24px 0;
}

/* ── Content ── */
.useful-tips__content {
  flex: 1;
  min-width: 0;
}

.useful-tips__content-title {
  font-family: 'Inter', sans-serif;
  font-size: 34px;
  font-weight: 400;
  color: #000;
  line-height: 1.5;
  margin: 0 0 28px 0;
}

.useful-tips__content-body {
  /* no extra wrapper styles needed */
}

.useful-tips__content-paragraph {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #4f4f4f;
  line-height: 27px;
  margin: 0 0 14px 0;
}

.useful-tips__content-paragraph:last-child {
  margin-bottom: 0;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .useful-tips__inner {
    flex-direction: column;
    gap: 40px;
  }

  .useful-tips__sidebar {
    flex: none;
    width: 100%;
  }
}
</style>
