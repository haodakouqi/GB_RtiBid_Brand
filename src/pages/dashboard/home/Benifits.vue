<template>
  <section class="benefits-section">
    <div class="container">
      <h2 class="section-title">Benifits</h2>
      <div class="benefits-grid">
        <div class="benefit-card" v-for="benefit in benefits" :key="benefit.id">
          <div class="benefit-icon" :style="{ background: benefit.iconBg }">
            <div class="icon-inner" v-html="benefit.iconSvg"></div>
          </div>
          <h3 class="benefit-title">{{ benefit.title }}</h3>
          <p class="benefit-desc">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const benefits = [
  {
    id: 1,
    iconBg: 'linear-gradient(135deg, #168cff 0%, #00d4ff 100%)',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path><path d="M12 2v10"></path><path d="M12 12l8 4"></path></svg>`,
    title: 'Beyond keywords',
    description: 'Engagement-driven performance. Build contextual targeting at a global scale.'
  },
  {
    id: 2,
    iconBg: 'linear-gradient(135deg, #b224ef 0%, #ff5caa 100%)',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    title: 'Privacy-first technology',
    description: 'Contextual intelligence, not user tracking. Serving products that truly resonate.'
  },
  {
    id: 3,
    iconBg: 'linear-gradient(135deg, #ff5e3a 0%, #ff2a68 100%)',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
    title: 'Unrivaled precision',
    description: 'Turning real-time signals into action with AI.'
  }
];
</script>

<style scoped>
.benefits-section {
  padding: 60px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.container {
  max-width: 1200px;
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
  width: 24px;
  height: 24px;
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