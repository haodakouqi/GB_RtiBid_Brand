<template>
  <section class="benefits-section">
    <div class="container">
      <h2 class="section-title">Benifits</h2>
      <div class="benefits-grid">
        <div class="benefit-card" v-for="benefit in benefits" :key="benefit.id">
          <div class="benefit-icon">
            <img :src="benefit.iconSvg" alt="icon" class="icon-inner">
          </div>
          <h3 class="benefit-title">{{ benefit.title }}</h3>
          <p class="benefit-desc">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import BenifitsIcon0 from '@/assets/home/BenifitsIcon0.png'
import BenifitsIcon1 from '@/assets/home/BenifitsIcon1.png'
import BenifitsIcon2 from '@/assets/home/BenifitsIcon2.png'

const benefits = [
  {
    id: 1,
    iconSvg: BenifitsIcon0,
    title: 'Beyond keywords',
    description: 'Engagement-driven performance. Build contextual targeting at a global scale.'
  },
  {
    id: 2,
    iconSvg: BenifitsIcon1,
    title: 'Privacy-first technology',
    description: 'Contextual intelligence, not user tracking. Serving products that truly resonate.'
  },
  {
    id: 3,
    iconSvg: BenifitsIcon2,
    title: 'Unrivaled precision',
    description: 'Turning real-time signals into action with AI.'
  }
];
</script>

<style lang="less" scoped>
.benefits-section {
  padding: 60px 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  // 响应式内边距
  @media (max-width: 768px) {
    padding: 60px 16px;
  }
}

.container {
  max-width: 1280px;
  margin: 0 auto;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #111827;
  text-align: center;
  margin-bottom: 40px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .benefits-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.benefit-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 32px 28px;
  transition: all 0.3s ease;
}

.benefit-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
  transform: translateY(-4px);
}

.benefit-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.icon-inner {
  width: 64px;
  height: 64px;
}

.benefit-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 12px;
}

.benefit-desc {
  font-size: 0.9375rem;
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
}
</style>