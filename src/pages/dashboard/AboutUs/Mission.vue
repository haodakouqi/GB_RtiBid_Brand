<template>
  <section class="mission-section">
    <div class="mission-section__container">
      <div class="mission-section__image-wrapper">
        <img
          class="mission-section__image"
          src="@/assets/AboutUs/missionImg.png"
          alt="Office space"
        />
      </div>
      <div class="mission-section__content">
        <h2 class="mission-section__title">Our Mission</h2>
        <div class="mission-section__text">
          <p class="mission-section__paragraph">
            To empower every e-commerce business — from emerging DTC brands to enterprise retailers — with AI-driven advertising technology that maximizes every dollar spent.
          </p>
          <p class="mission-section__paragraph">
            We believe performance advertising should be predictable, transparent, and growth-oriented.
          </p>
          <p class="mission-section__paragraph">
            Rtibid exists to make that possible.
          </p>
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
@bg-color: #f8fafc;

.mission-section {
  width: 100%;
  box-sizing: border-box;
  background-color: @bg-color;
  padding: 64px @desktop-padding-x;

  &__container {
    max-width: @max-content-width;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 64px;
  }

  &__image-wrapper {
    flex: 1;
    border-radius: 12px;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: auto;
    display: block;
  }

  &__content {
    flex: 1;
  }

  &__title {
    font-size: 42px;
    font-weight: 700;
    color: @title-color;
    margin: 0 0 24px 0;
    line-height: 1.2;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  &__text {
    max-width: 100%;
  }

  &__paragraph {
    font-size: 18px;
    line-height: 1.7;
    color: @text-color;
    margin: 0 0 20px 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

// 响应式断点：768px 及以下
@media (max-width: @breakpoint) {
  .mission-section {
    padding: 48px @mobile-padding-x;

    &__container {
      flex-direction: column;
      gap: 32px;
    }

    &__title {
      font-size: 32px;
      margin-bottom: 20px;
    }

    &__paragraph {
      font-size: 16px;
      margin-bottom: 16px;
    }
  }
}
</style>