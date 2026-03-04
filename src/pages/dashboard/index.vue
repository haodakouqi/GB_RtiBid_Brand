<template>
  <div class="rtibid-landing">
    <!-- 导航栏 -->
    <nav class="navbar" id="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <img :src="logoImg" alt="RTiBid Logo" class="logo" />
        </div>
        <ul class="nav-menu">
          <li class="nav-item">
            <a @click="handleScroll('features')" class="nav-link">Our Technology</a>
          </li>
          <li class="nav-item">
            <a @click="handleScroll('why')" class="nav-link">About Us</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Blog</a>
          </li>
        </ul>
        <button class="nav-btn" @click="handleScroll('hero')">Get Started</button>
      </div>
    </nav>

    

    <HeroSection></HeroSection>
    <!-- 统计区 -->
    <StatsSection></StatsSection>
    
    <!-- 功能区 features -->
    <Features></Features>
    <Cases></Cases>
    <WhySection></WhySection>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from './HeroSection.vue'
import StatsSection from './StatsSection.vue'
import Features from './Features.vue'
import Cases from './Cases.vue'
import WhySection from './WhySection.vue'
import Footer from './Footer.vue'



import logoImg from '@/assets/dashboard/logo.png'

import heroBgImg from '@/assets/dashboard/bg.png'


import footerSocialIcon from '@/assets/dashboard/footerlogo2.png'


// 锚点平滑滚动方法
const handleScroll = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

</script>

<style lang="less">

.rtibid-landing {
  width: 100%;
  overflow-x: hidden;
}

/* 导航栏样式 */
.navbar {
  width: 100%;
  height: 67px;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  .nav-container {
    max-width: 1280px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    .logo {
      height: 32px;
      object-fit: contain;
    }

    .nav-menu {
      display: flex;
      list-style: none;
      gap: 32px;
    }

    .nav-link {
      text-decoration: none;
      color: #333;
      font-size: 15px;
      line-height: 1.6;
      font-weight: 500;
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .nav-link:hover {
      color: #155DFC;
    }

    .nav-btn {
      padding: 12px 20px;
      background: #155DFC;
      color: #fff;
      border: none;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;

      border-radius: 64px;
      background: var(--brand, #155DFC);
      box-shadow: 1px 1px 1px 0 rgba(255, 255, 255, 0.25) inset;
    }

    .nav-btn:hover {
      background: #0F48CC;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(22, 93, 255, 0.3);
    }
  }
}



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


/* 通用区块标题样式 */
.section-title {
  font-size: 36px;
  font-weight: 700;
  color: #111827;
  text-align: center;
  margin-bottom: 12px;
}

.section-desc {
  font-size: 15px;
  color: #6B7280;
  text-align: center;
  margin-bottom: 48px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* 响应式适配 */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 36px;
  }
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
  }
  .features-grid {
    grid-template-columns: 1fr;
  }
  .cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .why-grid {
    grid-template-columns: 1fr;
  }
  .footer-container {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
  .hero-title {
    font-size: 28px;
  }
  .stats-container {
    grid-template-columns: 1fr;
  }
  .cases-grid {
    grid-template-columns: 1fr;
  }
  .section-title {
    font-size: 28px;
  }
}
</style>