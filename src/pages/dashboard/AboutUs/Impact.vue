<template>
  <section class="impact-section">
    <div class="impact-section__container">
      <div class="impact-section__header">
        <h2 class="impact-section__title">Our Impact</h2>
        <p class="impact-section__subtitle">Real results delivered to e-commerce brands worldwide</p>
      </div>

      <div class="impact-section__content">
        <div class="impact-section__metrics">
          <div class="metric-item">
            <div class="metric-item__value">Avg 2.9%</div>
            <div class="metric-item__label">Total site GMV uplift for partners</div>
          </div>

          <div class="metric-item">
            <div class="metric-item__value">Optimization</div>
            <div class="metric-item__label">Higher ROAS & lower CAC across channels</div>
          </div>

          <div class="metric-item">
            <div class="metric-item__value">Consistent</div>
            <div class="metric-item__label">Incremental sales validated through clean measurement</div>
          </div>

          <div class="metric-item">
            <div class="metric-item__value">Trusted</div>
            <div class="metric-item__label">By leading global e-commerce brands</div>
          </div>
        </div>

        <div class="impact-section__image-wrapper">
          <img
            class="impact-section__image"
            src="@/assets/AboutUs/impactRight.png"
            alt="Data visualization"
          />
        </div>
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
@title-color: #0f172a;
@text-color: #334155;
@sub-text-color: #475569;
@bg-color: #f8fafc;
@card-radius: 12px;

.impact-section {
  width: 100%;
  box-sizing: border-box;
  background-color: @bg-color;
  padding: 64px @desktop-padding-x;

  &__container {
    max-width: @max-content-width;
    margin: 0 auto;
  }

  &__header {
    text-align: center;
    margin-bottom: 48px;
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
    font-size: 18px;
    color: @sub-text-color;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  &__content {
    display: flex;
    align-items: center;
    gap: 64px;
  }

  &__metrics {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__image-wrapper {
    flex: 1;
    border-radius: @card-radius;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: auto;
    display: block;
  }
}

.metric-item {
  &__value {
    font-size: 28px;
    font-weight: 700;
    color: @title-color;
    margin-bottom: 8px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  &__label {
    font-size: 16px;
    color: @text-color;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
}

// 响应式断点：768px 及以下
@media (max-width: @breakpoint) {
  .impact-section {
    padding: 48px @mobile-padding-x;

    &__title {
      font-size: 32px;
    }

    &__subtitle {
      font-size: 16px;
    }

    &__content {
      flex-direction: column;
      gap: 32px;
    }

    &__metrics {
      width: 100%;
      gap: 32px;
    }

    .metric-item__value {
      font-size: 24px;
    }

    .metric-item__label {
      font-size: 14px;
    }
  }
}
</style>