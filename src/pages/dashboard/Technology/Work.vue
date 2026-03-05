<template>
  <section class="Work">
    <div class="container">
      <h2 class="section-title">How does this work?</h2>
      <div class="cards-grid">
        <div class="feature-card" v-for="feature in features" :key="feature.id">
          <div class="card-image">
            <img :src="feature.image" :alt="feature.title" />
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ feature.title }}</h3>
            <p class="card-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import work0 from '@/assets/home/work0.png'
import work1 from '@/assets/home/work1.png'
import work2 from '@/assets/home/work2.png'

const features = [
  {
    id: 1,
    image: work0, // 替换为你的语义智能图片
    title: 'Semantic Intelligence',
    description: 'Leverages deep semantic understanding to go beyond keyword matching and broad category targeting.'
  },
  {
    id: 2,
    image: work1, // 替换为你的精准对齐图片
    title: 'Precision Alignment',
    description: 'Enables product-to-URL alignment, ensuring ads appear on the most relevant pages.'
  },
  {
    id: 3,
    image: work2, // 替换为你的URL级粒度图片
    title: 'URL-level Granularity',
    description: 'Delivers granular targeting at the individual URL level — not just entire domains or sections.'
  }
];
</script>

<style lang="less" scoped>
.Work {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: linear-gradient(135deg, #0f2046 0%, #1a3b7a 100%);
  display: flex;
  align-items: center;
  padding: 4rem 24px;
  // 响应式内边距
  @media (max-width: 768px) {
    padding: 4rem 16px;
  }
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
}

.section-title {
  color: #ffffff;
  margin-bottom: 40px;
  line-height: 56px;
  text-align: left;
}

.cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(4px);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 24px;
}

.card-title {
  margin-bottom: 12px;

  color: #FFF;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: 0.07px;
}

.card-description {
  margin: 0;

  color: #D1D5DC;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.312px;
}
</style>