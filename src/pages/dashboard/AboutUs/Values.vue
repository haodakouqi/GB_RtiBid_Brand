<template>
  <section class="values-section">
    <div class="values-section__container">
      <div class="values-section__header">
        <h2 class="values-section__title">Our Values</h2>
        <p class="values-section__subtitle">The principles that guide everything we do</p>
      </div>

      <div class="values-section__grid">
        <div class="value-card">
          <img class="value-card__icon" src="@/assets/AboutUs/values0.png" alt="AI icon" />
          <div class="value-card__content">
            <h3 class="value-card__title">AI-Driven Efficiency</h3>
            <p class="value-card__text">
              Let data decide, not guesswork.<br>
              We automate decisions for peak performance.
            </p>
          </div>
        </div>

        <div class="value-card">
          <img class="value-card__icon" src="@/assets/AboutUs/values1.png" alt="Performance icon" />
          <div class="value-card__content">
            <h3 class="value-card__title">Performance Obsession</h3>
            <p class="value-card__text">
              Your sales growth is our benchmark.<br>
              Every feature we build exists to improve ROAS.
            </p>
          </div>
        </div>

        <div class="value-card">
          <img class="value-card__icon" src="@/assets/AboutUs/values2.png" alt="Trust icon" />
          <div class="value-card__content">
            <h3 class="value-card__title">Transparency & Trust</h3>
            <p class="value-card__text">
              Clear reporting, clean data, and honest measurement — always.
            </p>
          </div>
        </div>

        <div class="value-card">
          <img class="value-card__icon" src="@/assets/AboutUs/values3.png" alt="Innovation icon" />
          <div class="value-card__content">
            <h3 class="value-card__title">Innovation First</h3>
            <p class="value-card__text">
              We constantly evolve with the industry, ensuring our partners stay ahead of competition.
            </p>
          </div>
        </div>
      </div>

      <div class="values-section__image-wrapper">
        <img
          class="values-section__image"
          src="@/assets/AboutUs/valuesRight.png"
          alt="Team collaboration"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// 可在此处添加业务逻辑
</script>

<style lang="less" scoped>
// 定义全局变量
@breakpoint: 768px;
@desktop-padding-x: 24px;
@mobile-padding-x: 16px;
@max-content-width: 1280px;
@title-color: #101828;
@text-color: #4A5565;
@sub-text-color: #4A5565;
@border-color: #E5E5E5;
@card-radius: 12px;

.values-section {
  width: 100%;
  box-sizing: border-box;
  padding: 64px @desktop-padding-x;

  &__container {
    max-width: @max-content-width;
    margin: 0 auto;
  }

  &__header {
    text-align: center;
    margin-bottom: 40px;
  }

  &__title {
    font-size: 42px;
    font-weight: 700;
    color: @title-color;
    margin: 0 0 16px 0;
    line-height: 1.2;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  &__subtitle {
    font-size: 16px;
    color: @sub-text-color;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 32px;
  }

  &__image-wrapper {
    border-radius: @card-radius;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: auto;
    display: block;
  }
}

.value-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 32px;
  border: 1px solid @border-color;
  border-radius: @card-radius;
  background-color: #fff;

  &__icon {
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    border-radius: 10px;
    object-fit: contain;
  }

  &__content {
    flex: 1;
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
    color: @title-color;
    margin: 0 0 8px 0;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    letter-spacing: 0.07px;
  }

  &__text {
    font-size: 14px;
    line-height: 1.6;
    color: @text-color;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
}

// 响应式断点：768px 及以下
@media (max-width: @breakpoint) {
  .values-section {
    padding: 48px @mobile-padding-x;

    &__title {
      font-size: 32px;
    }

    &__grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }

  .value-card {
    padding: 20px;
  }
}
</style>