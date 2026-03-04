<template>
    <!-- why优势区 -->
    <section class="why-section" id="why">
      <div class="why-container">
        <h2 class="section-title white-title">Why Choose RtiBid?</h2>
        <div class="why-grid">
          <div class="why-card" v-for="(item, index) in whyList" :key="index">
            <img :src="whyIcon" alt="advantage icon" class="why-icon" />
            <h3 class="why-title">{{ item.title }}</h3>
            <p class="why-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'

import whyIcon from '@/assets/dashboard/why0.png'

// 优势模块数据
const whyList = ref([
  {
    title: 'Recover Lost Sales',
    desc: 'On average, 7 out of 10 shopping carts are abandoned. Our retargeting reminds shoppers of products they left behind, giving you a second chance to close the sale.'
  },
  {
    title: 'Build Brand Trust',
    desc: 'The average consumer needs 5-7 brand touchpoints before purchasing. We keep your brand visible during decision-making, building familiarity and trust.'
  },
  {
    title: 'Optimize Efficiency',
    desc: 'Instead of chasing new audiences, we focus on users who\'ve already shown intent. This targeted approach reduces wasted ad spend and maximizes ROI.'
  }
])
</script>
<style lang="less">
/* why优势区样式 */
.why-section {
  width: 100%;
  padding: 80px 24px;
  // background: linear-gradient(135deg, #155DFC 0%, #6366F1 100%);
  background: linear-gradient(135deg, #0F172B 0%, #1C398E 50%, #0F172B 100%);
  color: #fff;
  .white-title {
    color: #fff;
  }
  
  .why-container {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .why-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-top: 48px;
  }
  
  .why-card {
    text-align: center;
    padding: 24px;
    border-radius: 16px;
    transition: all 0.3s ease;
  }
  
  .why-card:hover {
    transform: translateY(-6px);
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
  }
  
  .why-icon {
    width: 48px;
    height: 48px;
    object-fit: contain;
    margin: 0 auto 20px;
  }
  
  .why-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
  }
  
  .why-desc {
    font-size: 14px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
  }
}

</style>
