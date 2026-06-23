<template>
  <section class="contacts">
    <!-- Map background: Figma image-t4 = 1920×753 -->
    <div class="contacts__map-bg">
      <!-- Map pin label -->
      <div class="contacts__pin-label">
        <svg width="16" height="20" viewBox="0 0 16 20" fill="#E03226">
          <path d="M8 0C3.6 0 0 3.6 0 8c0 5.4 8 12 8 12s8-6.6 8-12c0-4.4-3.6-8-8-8zm0 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
        </svg>
        <span>Старо-Кузьмихинская, 41/3</span>
      </div>

      <!-- Contact card: Figma frame-group162x1 = 480×477 white bg shadow -->
      <div class="contacts__card">
        <!-- Title: Inter 700 25px ls-2px uppercase (Figma text-b92/93) -->
        <h2 class="contacts__title">КОНТАКТНАЯ<br>ИНФОРМАЦИЯ</h2>

        <!-- Address: Inter 300 14px lh30px -->
        <p class="contacts__addr">г. Иркутск, ул. Старо-Кузьмихинская, 41/3</p>
        <!-- Hours: Inter 300 14px -->
        <p class="contacts__hours">Часы работы: 9:00 — 21:00</p>

        <!-- Phone + email -->
        <div class="contacts__contacts">
          <div class="contacts__row">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E03226" stroke-width="1.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18a2 2 0 011.99-2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7a16 16 0 006.72 6.72l1.06-1.17a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <!-- Inter 300 18px -->
            <a href="tel:+73952482805" class="contacts__phone">+7 (3952) 48-28-05</a>
          </div>
          <div class="contacts__row">
            <svg width="20" height="16" viewBox="0 0 24 20" fill="none" stroke="#E03226" stroke-width="1.5">
              <rect x="1" y="1" width="22" height="18" rx="1"/>
              <polyline points="1,1 12,11 23,1"/>
            </svg>
            <!-- Inter 300 18px lh26px -->
            <a href="mailto:geometrika@mail.ru" class="contacts__email">geometrika@mail.ru</a>
          </div>
        </div>

        <!-- CTA button: Figma frame-group165-zd = 213×65, border 1px red -->
        <a href="#" class="contacts__cta">обратная связь</a>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.contacts {
  width: 100%;
}

/* Figma: frame-contact3w = 1920×753 with real map image */
.contacts__map-bg {
  width: 100%;
  height: 753px;
  background:
      linear-gradient(rgba(200,195,180,0.5), rgba(200,195,180,0.5)),
      url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=60') center/cover;
  position: relative;
  display: flex;
  align-items: center;
}

/* Pin label: Figma frame-group1558h = 336×60 white shadow */
.contacts__pin-label {
  position: absolute;
  top: 140px;
  left: 55%;
  background: #fff;
  box-shadow: 4px 4px 0 rgba(0,0,0,0.15);
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  /* Inter 400 16px uppercase #3E3E3E lh30px */
  font-family: 'inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  color: #3E3E3E;
  line-height: 30px;
}

/* Card: Figma frame-rectangle17249n = 480×477 white shadow */
.contacts__card {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-840px, -50%); /* ~120px from left of 1680px content */
  width: 480px;
  min-height: 477px;
  background: #fff;
  box-shadow: 4px 4px 0 rgba(0,0,0,0.15);
  padding: 48px 44px;
  box-sizing: border-box;
}

/* Title: Inter 700 25px ls-2px uppercase */
.contacts__title {
  font-family: 'inter', sans-serif;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -2px;
  text-transform: uppercase;
  color: #000;
  line-height: normal;
  margin: 0 0 24px;
}

/* Address: Inter 300 14px lh30px */
.contacts__addr {
  font-family: 'inter', sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 30px;
  color: #000;
  margin: 0;
  max-width: 389px;
}

/* Hours: Inter 300 14px */
.contacts__hours {
  font-family: 'inter', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #000;
  margin: 0 0 24px;
}

.contacts__contacts {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 32px;
}

.contacts__row {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Phone/email: Inter 300 18px */
.contacts__phone,
.contacts__email {
  font-family: 'inter', sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #000;
  text-decoration: none;
  transition: color 0.18s;
}
.contacts__phone:hover,
.contacts__email:hover { color: #E03226; }

/* CTA: Figma frame-rectangle1610-oc = 213×65 border 1px red */
.contacts__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 213px;
  height: 65px;
  border: 1px solid #E03226;
  font-family: 'inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: uppercase;
  color: red;
  text-decoration: none;
  transition: background 0.18s, color 0.18s;
}
.contacts__cta:hover {
  background: #E03226;
  color: #fff;
}

@media (max-width: 1400px) {
  .contacts__card {
    transform: translate(-50%, -50%);
    left: 15%;
    top: 50%;
  }
}
@media (max-width: 768px) {
  .contacts__map-bg { height: auto; padding: 40px 20px; flex-direction: column; align-items: center; }
  .contacts__card { position: static; transform: none; width: 100%; max-width: 480px; }
  .contacts__pin-label { display: none; }
}
</style>