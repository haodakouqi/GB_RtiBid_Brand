<template>
  <div class="blog-hero">
    <div class="blog-hero__container">
      <div class="blog-hero__content">
        <h1 class="blog-hero__title">The RtiBid Blog</h1>
        <p class="blog-hero__subtitle">
          Find inspiration and expert advice on how to get the most out of your digital advertising
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑可在此扩展
</script>

<style lang="less" scoped>
.blog-hero {
  width: 100%;
  background: linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #FAF5FF 100%);
  padding: 96px 0;

  &__container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
    text-align: center;
  }

  &__content {
    max-width: 900px;
    margin: 0 auto;
  }

  &__title {
    font-size: 48px;
    font-weight: 700;
    color: #101828;
    margin: 0 0 32px;
    line-height: 1.1;
  }

  &__subtitle {
    font-size: 20px;
    color: #101828;
    margin: 0;
    line-height: 1.4;
  }

  // 响应式断点：768px 以下
  @media (max-width: 768px) {
    padding: 48px 0;

    .blog-hero__container {
      padding: 0 16px;
    }

    .blog-hero__title {
      font-size: 40px;
      margin-bottom: 20px;
    }

    .blog-hero__subtitle {
      font-size: 18px;
    }
  }

  // 响应式断点：769px - 1024px
  @media (min-width: 769px) and (max-width: 1024px) {
    .blog-hero__title {
      font-size: 56px;
    }

    .blog-hero__subtitle {
      font-size: 22px;
    }
  }
}
</style>