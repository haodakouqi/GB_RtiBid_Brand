<template>
  <section class="we-section">
    <div class="we-section__container">
      <h2 class="we-section__title">Who We Are</h2>
      <div class="we-section__content">
        <p class="we-section__paragraph">
          RtiBid is an <strong>AI-powered</strong> performance DSP built for high-growth e-commerce brands. We combine advanced machine learning, deep user understanding, and global media reach to help advertisers achieve measurable revenue growth — efficiently, transparently, and at scale.
        </p>
        <p class="we-section__paragraph">
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
@title-color: #fff;
@text-color: rgba(255, 255, 255, 0.60);;
@strong-color: #fff;

.we-section {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 0 @desktop-padding-x; // 桌面端内边距
  background: url('@/assets/AboutUs/Webg.png') no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  // display: flex;
  // align-items: center;
  .we-section__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &__container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 96px 0; // 桌面端内边距
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
      font-weight: 700;
    }
  }
}

// 响应式断点：768px 及以下
@media (max-width: @breakpoint) {
  .we-section {
    padding: 0 @mobile-padding-x; // 移动端内边距

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