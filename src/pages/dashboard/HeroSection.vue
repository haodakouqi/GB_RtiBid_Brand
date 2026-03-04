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
        <button class="hero-btn" @click="handleScroll('features')">
            Get Started <span class="arrow">→</span>
        </button>
        </div>
    </section>
</template>
<script setup>
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
  .hero-container {
    max-width: 900px;
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
    span {
      margin-left: 8px;
    }
  }
  
  .hero-title {
    width: 600px;
    margin: 0 auto; 
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 16px;
  }
  
  .highlight {
    color: #FFCC00;
  }
  
  .hero-desc {
    font-size: 15px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 32px;
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
}

</style>