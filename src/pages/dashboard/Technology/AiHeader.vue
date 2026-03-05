<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="gradient-text">Smarter AI.</span><br>
          <span class="gradient-text">Precision Targeting.</span><br>
          <span class="gradient-text">Higher Engagement.</span>
        </h1>
        <p class="hero-subtitle">
          Our AI contextual engine understands webpage context to connect you with truly interested users—maximizing precision while prioritizing privacy.
        </p>
      </div>

      <!-- <div class="divider"></div>

      <div class="trusted-section">
        <p class="trusted-text">Trusted by leading brands worldwide</p>
        <div class="brands-grid">
          <span class="brand" v-for="brand in brands" :key="brand">
            {{ brand }}
          </span>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
const brands = ['LOHILO', 'Herbmed', 'Holdit', 'Westing'];
</script>

<style lang="less" scoped>
.hero-section {
  padding: 75px 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: linear-gradient(135deg, #f0f4ff 0%, #f8f0ff 100%);
  display: flex;
  align-items: center;
  // 响应式内边距
  @media (max-width: 768px) {
    padding: 75px 16px;
  }
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
}

.hero-content {
  text-align: center;
  margin-bottom: 40px;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
}

.gradient-text {
  background: linear-gradient(90deg, #111827, #1e40af, #5b21b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.125rem);
  color: #4b5563;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

.divider {
  height: 1px;
  background-color: #e5e7eb;
  margin: 40px 0;
}

.trusted-section {
  text-align: center;
}

.trusted-text {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 24px;
}

.brands-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;
}

.brand {
  font-size: 1.25rem;
  font-weight: 500;
  color: #9ca3af;
  text-transform: capitalize;
}

@media (min-width: 768px) {
  .brands-grid {
    flex-wrap: nowrap;
    justify-content: space-between;
    max-width: 600px;
    margin: 0 auto;
  }
}
</style>