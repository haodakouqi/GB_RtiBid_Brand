<template>
  <section class="ai-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-gradient">AI-Powered Precision.</span><br>
          <span class="title-gradient">Data-Driven Growth.</span>
        </h2>
        <p class="section-subtitle">
          Harnesses massive data and real-time AI optimization to target high-value users with unparalleled accuracy.
        </p>
      </div>

      <div class="features-grid">
        <div class="feature-card" v-for="feature in features" :key="feature.id">
          <div class="feature-icon">
            <!-- 使用 CSS 类名实现图标，替代 lucide 组件 -->
            <div :class="['icon', `icon-${feature.icon}`]"></div>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 移除 lucide-vue-next 导入，改用图标名称字符串
const features = [
  {
    id: 1,
    icon: 'lightning', // 闪电图标
    title: 'Real-Time Optimization',
    description: 'End-to-end intelligent ad management. Automate the entire workflow — from one-click campaign setup and smart budget allocation to real-time bidding optimization and audience targeting — for maximum performance.'
  },
  {
    id: 2,
    icon: 'palette', // 调色板图标
    title: 'Smarter Creatives',
    description: 'With highly customizable, scalable creative templates, brands can achieve personalization at scale — creating stunning ad experiences that resonate.'
  },
  {
    id: 3,
    icon: 'user-check', // 用户验证图标
    title: 'Personalized Ad Recommendations',
    description: 'Personalized ad experiences, powered by deep analysis of user preferences from massive datasets, deliver measurable conversion lifts.'
  },
  {
    id: 4,
    icon: 'bar-chart', // 柱状图图标
    title: 'Intelligent Channel Management',
    description: 'Our platform unites premium global media with smart budget allocation — continuously directing spend toward highest-ROI channels for peak efficiency.'
  }
];
</script>

<style lang="less" scoped>
.ai-section {
  padding: 4rem 1.24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  // 响应式内边距
  @media (max-width: 768px) {
    padding: 4rem 16px;
  }
}

.container {
  max-width: 1280px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.2;
  margin-bottom: 1rem;
}

.title-gradient {
  text-align: center;
  font-family: Alliance;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 56px; /* 116.667% */
  letter-spacing: 0.369px;

  background: linear-gradient(90deg, #155DFC 0%, #492FEE 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


.section-subtitle {
  margin: 0 auto;
  width: 709px;
  color: #4A5565;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
  letter-spacing: -0.449px;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.feature-card {
  padding: 2rem;
  transition: all 0.3s ease;

  border-radius: 14px;
  background: #F6F8FF;
}

.feature-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
  transform: translateY(-2px);
}

.feature-icon {
  width: 36px;
  height: 36px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1D2939;
}

/* 核心：纯 CSS 实现的图标样式，替代第三方图标库 */
.icon {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

/* 闪电图标 */
.icon-lightning {
  background-image: url("@/assets/home/AiPrecisionIcon0.png");
}

/* 调色板图标 */
.icon-palette {
  background-image: url("@/assets/home/AiPrecisionIcon1.png");
}

/* 用户验证图标 */
.icon-user-check {
  background-image: url("@/assets/home/AiPrecisionIcon2.png");
}

/* 柱状图图标 */
.icon-bar-chart {
  background-image: url("@/assets/home/AiPrecisionIcon3.png");
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1D2939;
  margin-bottom: 0.75rem;
}

.feature-description {
  font-size: 0.9375rem;
  color: #475467;
  line-height: 1.6;
}
</style>