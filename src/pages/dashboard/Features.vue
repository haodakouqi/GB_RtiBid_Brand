<template>
  <div class="features-section">
    <div class="features-container">
      <h2 class="section-title">Features</h2>
      <p class="section-desc">
        Control, scale, and maximize monetization with real-time performance insights.
      </p>
      <div class="features-grid">
        <div class="feature-card" v-for="(item, index) in featuresList" :key="index">
          <img :src="item.icon" alt="feature icon" class="feature-icon" />
          <h3 class="feature-title">{{ item.title }}</h3>
          <p class="feature-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 功能模块数据
import featureIcon0 from '@/assets/dashboard/features0.png'
import featureIcon1 from '@/assets/dashboard/features1.png'
import featureIcon2 from '@/assets/dashboard/features2.png'
import featureIcon3 from '@/assets/dashboard/features3.png'

const featuresList = ref([
  {
    title: 'Advertisers',
    desc: 'Increase brand visibility and sales with precision targeting and dynamic creative optimization.',
    icon: featureIcon0
  },
  {
    title: 'Retailers',
    desc: 'Control, scale, and maximize monetization with real-time performance insights.',
    icon: featureIcon1
  },
  {
    title: 'Media Owners',
    desc: 'Connect to commerce demand & data with our global network of premium publishers.',
    icon: featureIcon2
  },
  {
    title: 'Agencies',
    desc: 'Gain efficiencies and maximize ROI for your clients with automated optimization.',
    icon: featureIcon3
  }
])
</script>
<style lang="less" scoped>
/* 功能区样式 */
.features-section {
  width: 100%;
  padding: 80px 24px;
  background: #0F172A;
  color: #fff;
  
  // 响应式内边距
  @media (max-width: 768px) {
    padding: 60px 16px;
  }
  
  .features-container {
    max-width: 1280px;
    margin: 0 auto;
    
    .section-title {
      color: #fff;
    }
    
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
      
      // 响应式网格布局
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      
      @media (min-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    .feature-card {
      padding: 32px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
      
      // 响应式卡片内边距
      @media (max-width: 768px) {
        padding: 24px;
      }
    }
    
    .feature-card:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(22, 93, 255, 0.6);
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
    }
    
    .feature-icon {
      width: 40px;
      height: 40px;
      object-fit: contain;
      margin-bottom: 16px;
      border-radius: 8px;
      
      // 响应式图标大小
      @media (max-width: 768px) {
        width: 32px;
        height: 32px;
        margin-bottom: 12px;
      }
    }
    
    .feature-title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
      
      // 响应式标题大小
      @media (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 8px;
      }
    }
    
    .feature-desc {
      font-size: 14px;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.7);
      
      // 响应式描述大小
      @media (max-width: 768px) {
        font-size: 13px;
      }
    }
  }
}
</style>