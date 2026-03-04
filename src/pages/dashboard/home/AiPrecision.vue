<template>
  <section class="ai-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-gradient">AI-Powered Precision.</span><br>
          <span class="title-dark">Data-Driven Growth.</span>
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
    title: 'Personalized ad recommendations',
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

<style scoped>
.ai-section {
  padding: 4rem 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.container {
  max-width: 1200px;
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
  background: linear-gradient(90deg, #165DFF, #7B61FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-dark {
  color: #1D2939;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #475467;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
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
  background: #FFFFFF;
  border: 1px solid #EAECF0;
  border-radius: 0.75rem;
  padding: 2rem;
  transition: all 0.3s ease;
}

.feature-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
  transform: translateY(-2px);
}

.feature-icon {
  width: 2.5rem;
  height: 2.5rem;
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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%231D2939' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m13 2-3 7h8l-4 9 3-7h-8l4-9z'/%3E%3C/svg%3E");
}

/* 调色板图标 */
.icon-palette {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%231D2939' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 20V10M12 20V4M6 20v-6M2 20h20'/%3E%3C/svg%3E");
}

/* 用户验证图标 */
.icon-user-check {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%231D2939' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3Cpath d='m16 16 2 2 4-4'/%3E%3C/svg%3E");
}

/* 柱状图图标 */
.icon-bar-chart {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%231D2939' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 12V2H3v10'/%3E%3Cpath d='M6 22v-4'/%3E%3Cpath d='M10 22v-8'/%3E%3Cpath d='M14 22v-6'/%3E%3Cpath d='M18 22v-9'/%3E%3C/svg%3E");
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1D2939;
  margin-bottom: 0.75rem;
}

.feature-description {
  font-size: 0.9375rem;
  color: #475467;
  line-height: 1.6;
}
</style>