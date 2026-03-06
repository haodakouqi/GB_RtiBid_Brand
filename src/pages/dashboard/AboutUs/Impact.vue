<template>
  <section class="impact-section">
    <div class="impact-container">
      <h1 class="impact-title">Our Impact</h1>
      <p class="impact-subtitle">Real results delivered to e-commerce brands worldwide</p>
      
      <div class="impact-content">
        <div class="impact-left">
          <div 
            v-for="(card, index) in impactCards" 
            :key="index" 
            class="impact-card"
          >
            <div class="card-icon">
              <img :src="card.icon" :alt="card.title">
            </div>
            <div class="card-content">
              <h2 class="card-title" v-html="card.title"></h2>
              <p class="card-desc">{{ card.description }}</p>
            </div>
          </div>
        </div>
        
        <div class="impact-right">
          <img 
            src="@/assets/AboutUs/impactRight.png" 
            alt="Business growth analytics" 
            class="impact-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import impact0 from '@/assets/AboutUs/impact0.png'
import impact1 from '@/assets/AboutUs/impact1.png'
import impact2 from '@/assets/AboutUs/impact2.png'
import impact3 from '@/assets/AboutUs/impact3.png'

const impactCards = [
  {
    icon: impact0,
    title: 'Avg <span class="highlight">2.9%</span>',
    description: 'Total site GMV uplift for partners'
  },
  {
    icon: impact1,
    title: 'Optimization',
    description: 'Higher ROAS & lower CAC across channels'
  },
  {
    icon: impact2,
    title: 'Consistent',
    description: 'Incremental sales validated through clean measurement'
  },
  {
    icon: impact3,
    title: 'Trusted',
    description: 'By leading global e-commerce brands'
  }
];
</script>

<style lang="less">
.impact-section {
  background: linear-gradient(135deg, #1C398E 0%, #59168B 50%, #0F172B 100%);
  padding: 96px 24px;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  @media (max-width: 768px) {
    padding: 96px 16px;
  }
}

.impact-container {
  max-width: 1280px;
  margin: 0 auto;
}

.impact-title {
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 20px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 32px;
  }
}

.impact-subtitle {
  font-size: 18px;
  text-align: center;
  color: rgba(255, 255, 255, 0.60);
  margin: 0 0 60px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 40px;
  }
}

.impact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

.impact-left {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.impact-card {
  display: flex;
  // align-items: center;
  gap: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
}

.card-icon {
  width: 48px;
  height: 48px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.card-content {
  flex: 1;
}

.card-title {
  margin: 0 0 7px;

  color: #FFF;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 142.857% */
  letter-spacing: 0.369px;


  .highlight {
    color: #FC0;;
  }
}

.card-desc {
  margin: 0;
  color: rgba(255, 255, 255, 0.60);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: -0.312px;
}

.impact-right {
  display: flex;
  align-items: center;
}

.impact-image {
  width: 100%;
  height: auto;
  border-radius: 16px;
  object-fit: cover;
}
</style>