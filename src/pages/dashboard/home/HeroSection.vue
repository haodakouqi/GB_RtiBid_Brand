<template>
    <!-- 英雄区 -->
    <section class="hero-section" id="hero">
        <div class="hero-container">
        <div class="hero-badge">
            <SvgIcon iconClass="aim" width="16" height="16"/>
            
            <span>AI-Powered Performance Advertising</span>
        </div>
        <h1 class="hero-title">
            Maximize Incremental <span class="highlight">GMV</span> with AI
        </h1>
        <p class="hero-desc">
            ROI-driven bidding, dynamic personalization, and premium global media access.
            <br />Transform your advertising with intelligent automation.
        </p>
        <button class="hero-btn" @click="handleScroll('GetStarted')">
            Contact Us <span class="arrow">→</span>
        </button>
        </div>
    </section>
</template>
<script setup>

import { GlHookuseRouter } from '@/utils/methods'
const router = GlHookuseRouter()

// 锚点平滑滚动方法
const handleScroll = (id) => {
  router.push(id)
}

</script>
<style lang="less">

/* 英雄区样式 */
.hero-section {
  width: 100%;
  padding: 80px 24px 100px;
  background-image: url('@/assets/dashboard/bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  color: #fff;
  
  // 响应式内边距
  @media (max-width: 768px) {
    padding: 60px 16px 80px;
  }
  
  .hero-container {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .hero-badge {
    display: inline-flex;
    align-items: center;
    padding: 6px 16px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 24px;
    backdrop-filter: blur(10px);
    
    // 响应式徽章
    @media (max-width: 768px) {
      font-size: 12px;
      padding: 4px 12px;
      margin-bottom: 20px;
    }
    
    span {
      margin-left: 8px;
      
      @media (max-width: 768px) {
        margin-left: 6px;
      }
    }
  }
  
  .hero-title {
    width: 100%;
    max-width: 600px;
    margin: 0 auto; 
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 16px;
    
    // 响应式标题
    @media (max-width: 768px) {
      font-size: 32px;
      margin-bottom: 12px;
    }
    
    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 40px;
    }
  }
  
  .highlight {
    color: #FFCC00;
  }
  
  .hero-desc {
    font-size: 15px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 32px;
    
    // 响应式描述
    @media (max-width: 768px) {
      font-size: 14px;
      margin-bottom: 24px;
    }
  }
  
  .hero-btn {
    padding: 12px 32px;
    background: #fff;
    color: #155DFC;
    border: none;
    border-radius: 24px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: all 0.3s ease;
    
    // 响应式按钮
    @media (max-width: 768px) {
      padding: 10px 24px;
      font-size: 14px;
      gap: 4px;
    }
  }
  
  .hero-btn:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
  .arrow {
    transition: transform 0.3s ease;
  }

  .hero-btn:hover .arrow {
    transform: translateX(3px);
  }
  
  // 响应式背景图片
  @media (max-width: 768px) {
    background-size: cover;
    background-position: center;
  }
}

</style>