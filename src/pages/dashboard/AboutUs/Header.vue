<template>
  <div class="quote-card">
    <div class="quote-card__content">
      <!-- 为文字区域增加独立容器，用于单独加边框 -->
      <div class="quote-card__text-wrapper">
        <p class="quote-card__text">
          "At the most advanced companies, AI and generative technologies aren't just tools — they're embedded in daily operations, powering content personalization, media automation, and predictive intelligence. This is how we unlock real, measurable marketing impact."
        </p>
      </div>
      <div class="quote-card__author">
        <img
          class="quote-card__avatar"
          src="@/assets/AboutUs/avatar.png"
          alt="Jeff"
        />
        <div class="quote-card__info">
          <div class="quote-card__name">Jeff</div>
          <div class="quote-card__title">Chief Technology Officer Of RtiBid</div>
        </div>
      </div>
    </div>
    </div>
</template>

<script setup>
// 响应式逻辑可在此扩展
</script>

<style lang="less" scoped>
// 定义通用变量，便于统一维护
@breakpoint: 768px;
@border-color: #e2e8f0;
@text-color: #101828;
@sub-text-color: #4A5565;
@desktop-padding-x: 24px;
@mobile-padding-x: 16px;

// 核心卡片样式
.quote-card {
  background: #F6F9FE;
  border-radius: 12px;
  width: 100%;
  box-sizing: border-box;
  padding: 32px @desktop-padding-x; // 桌面端内边距

  &__content {
    max-width: 1280px;
    margin: 0 auto;
  }

  // 引用文字外层容器（单独加左、右、上边框）
  &__text-wrapper {
    border-top: 1px solid @border-color;
    border-left: 1px solid @border-color;
    border-right: 1px solid @border-color;
    border-radius: 8px 8px 0 0; // 上边框圆角匹配视觉
    padding: 24px;
    margin-bottom: 32px;

    // 引用文本样式
    .quote-card__text {
      font-size: 24px;
      line-height: 1.6;
      color: @text-color;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }
  }

  // 作者信息区域
  &__author {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid @border-color;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__name {
    font-size: 18px;
    font-weight: 600;
    color: @text-color;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  &__title {
    font-size: 14px;
    color: @sub-text-color;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
}

// 响应式断点：768px 及以下
@media (max-width: @breakpoint) {
  .quote-card {
    padding: 24px @mobile-padding-x; // 移动端内边距

    &__text-wrapper {
      padding: 20px;
      margin-bottom: 24px;

      .quote-card__text {
        font-size: 20px;
      }
    }

    &__avatar {
      width: 56px;
      height: 56px;
    }

    &__name {
      font-size: 16px;
    }

    &__title {
      font-size: 13px;
    }
  }
}
</style>