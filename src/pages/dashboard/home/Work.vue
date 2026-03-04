<template>
  <section class="how-it-works-section">
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
const features = [
  {
    id: 1,
    image: 'https://picsum.photos/id/237/600/300', // 替换为你的语义智能图片
    title: 'Semantic intelligence',
    description: 'Leverages deep semantic understanding to go beyond keyword matching and broad category targeting.'
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/111/600/300', // 替换为你的精准对齐图片
    title: 'Precision alignment',
    description: 'Enables product-to-URL alignment, ensuring ads appear on the most relevant pages.'
  },
  {
    id: 3,
    image: 'https://picsum.photos/id/180/600/300', // 替换为你的URL级粒度图片
    title: 'URL-level granularity',
    description: 'Delivers granular targeting at the individual URL level — not just entire domains or sections.'
  }
];
</script>

<style scoped>
.how-it-works-section {
  padding: 60px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: linear-gradient(135deg, #0f2046 0%, #1a3b7a 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.section-title {
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 40px;
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
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 12px;
}

.card-description {
  font-size: 0.9375rem;
  color: #d1d5db;
  line-height: 1.6;
  margin: 0;
}
</style>