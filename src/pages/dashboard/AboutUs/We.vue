<template>
  <section class="about-section">
    <div class="about-section__container">
      <h2 class="about-section__title">Who We Are</h2>
      <div class="about-section__content">
        <p class="about-section__paragraph">
          RtiBid is an <strong>AI-powered</strong> performance DSP built for high-growth e-commerce brands. We combine advanced machine learning, deep user understanding, and global media reach to help advertisers achieve measurable revenue growth — efficiently, transparently, and at scale.
        </p>
        <p class="about-section__paragraph">
          Our team <strong>brings years of experience</strong> working with top e-commerce players across the US, Europe, and APAC, delivering consistent ROAS lift and incremental sales through intelligent retargeting.
        </p>
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
@title-color: #0f172a;
@text-color: #475569;
@strong-color: #0f172a;

.about-section {
  width: 100%;
  box-sizing: border-box;
  padding: 64px @desktop-padding-x; // 桌面端内边距

  &__container {
    max-width: 1280px;
    margin: 0 auto;
  }

  &__title {
    font-size: 48px;
    font-weight: 700;
    color: @title-color;
    margin: 0 0 32px 0;
    line-height: 1.2;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  &__content {
    max-width: 100%;
  }

  &__paragraph {
    font-size: 18px;
    line-height: 1.7;
    color: @text-color;
    margin: 0 0 24px 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

    &:last-child {
      margin-bottom: 0;
    }

    strong {
      color: @strong-color;
      font-weight: 600;
    }
  }
}

// 响应式断点：768px 及以下
@media (max-width: @breakpoint) {
  .about-section {
    padding: 48px @mobile-padding-x; // 移动端内边距

    &__title {
      font-size: 36px;
      margin-bottom: 24px;
    }

    &__paragraph {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
}
</style>