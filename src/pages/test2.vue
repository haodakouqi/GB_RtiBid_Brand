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

    <!-- 英雄区 -->
    <section class="hero-section" id="hero">
      <div class="hero-container">
        <div class="hero-badge">AI-Powered Performance Advertising</div>
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

    <!-- 统计区 -->
    <section class="stats-section" id="stats">
      <div class="stats-container">
        <div class="stats-item" v-for="(item, index) in statsList" :key="index">
          <div class="stats-number">{{ item.number }}</div>
          <div class="stats-label">{{ item.label }}</div>
        </div>
      </div>
    </section>

    <!-- 功能区 -->
    <section class="features-section" id="features">
      <div class="features-container">
        <h2 class="section-title">Powerful Features for Every Role</h2>
        <p class="section-desc">Reach targeted customers with measurable impact across the entire ecosystem</p>
        <div class="features-grid">
          <div class="feature-card" v-for="(item, index) in featuresList" :key="index">
            <img :src="featureIcon" alt="feature icon" class="feature-icon" />
            <h3 class="feature-title">{{ item.title }}</h3>
            <p class="feature-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 案例区 -->
    <section class="cases-section" id="cases">
      <div class="cases-container">
        <h2 class="section-title">Sharing the Cases</h2>
        <p class="section-desc">Discover how leading brands achieve remarkable results with RTiBid</p>
        <div class="cases-grid">
          <div class="case-card" v-for="(item, index) in casesList" :key="index">
            <img :src="getCaseImg(index)" :alt="item.title" class="case-img" />
            <div class="case-content">
              <h3 class="case-title">{{ item.title }}</h3>
              <p class="case-desc">{{ item.desc }}</p>
              <a href="#" class="case-link">View Case Study <span>↗</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 优势区 -->
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

    <!-- 页脚 -->
    <footer class="footer" id="footer">
      <div class="footer-container">
        <div class="footer-col footer-brand">
          <img :src="logoImg" alt="RTiBid Logo" class="footer-logo" />
          <p class="footer-desc">Connect, track, and grow At Rtibid, you only pay for real results.</p>
          <div class="social-group">
            <a href="#" class="social-item">
              <img :src="footerSocialIcon" alt="social icon" class="social-icon" />
            </a>
            <a href="#" class="social-item">
              <img :src="footerSocialIcon" alt="social icon" class="social-icon" />
            </a>
            <a href="#" class="social-item">
              <img :src="footerSocialIcon" alt="social icon" class="social-icon" />
            </a>
          </div>
        </div>
        <div class="footer-col footer-pages">
          <h4 class="footer-title">Pages</h4>
          <ul class="footer-menu">
            <li><a @click="handleScroll('hero')" class="footer-link">Home</a></li>
            <li><a @click="handleScroll('features')" class="footer-link">Our Technology</a></li>
            <li><a @click="handleScroll('why')" class="footer-link">About Us</a></li>
            <li><a href="#" class="footer-link">Blog</a></li>
            <li><a @click="handleScroll('footer')" class="footer-link">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col footer-contact">
          <h4 class="footer-title">Get In Touch</h4>
          <p class="contact-item">Email: contact@rtibid.com</p>
          <p class="contact-item">Phone: 613-295-6459</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import logoImg from '@/assets/dashboard/logo.png'

import heroBgImg from '@/assets/dashboard/bg.png'
import featureIcon from '@/assets/dashboard/features0.png'
import whyIcon from '@/assets/dashboard/why0.png'
import footerSocialIcon from '@/assets/dashboard/footerlogo2.png'

// 图片资源路径配置（webpack环境用require，vite环境请替换为new URL方式）

// 统计数据
const statsList = ref([
  { number: '1,500+', label: 'Advertisers' },
  { number: '2Bn+', label: 'Impressions Served' },
  { number: '170B', label: 'Daily Ad Requests' },
  { number: '85%', label: 'APAC Mobile App Coverage' }
])

// 功能模块数据
const featuresList = ref([
  {
    title: 'Advertisers',
    desc: 'Increase brand visibility and sales with precision targeting and dynamic creative optimization.'
  },
  {
    title: 'Retailers',
    desc: 'Control, scale, and maximize monetization with real-time performance insights.'
  },
  {
    title: 'Media Owners',
    desc: 'Connect to commerce demand & data with our global network of premium publishers.'
  },
  {
    title: 'Agencies',
    desc: 'Gain efficiencies and maximize ROI for your clients with automated optimization.'
  }
])

// 案例数据
const casesList = ref([
  {
    title: 'LOHILO',
    desc: 'Fashion retailer increases conversion by 45%'
  },
  {
    title: 'Herbmed',
    desc: 'E-commerce growth with AI-powered recommendations'
  },
  {
    title: 'Zen Pirlanta',
    desc: 'Health tech scales user acquisition by 200%'
  },
  {
    title: 'Tikla Gelsin',
    desc: 'Service app doubles engagement rates'
  },
  {
    title: 'Holdit',
    desc: 'Travel brand achieves 3x ROI with targeted campaigns'
  },
  {
    title: 'Westing',
    desc: 'Apparel brand optimizes ad spend efficiency'
  }
])

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

// 锚点平滑滚动方法
const handleScroll = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// 案例图片路径处理
const getCaseImg = (index) => {
  // 6个案例对应case1.png - case6.png，如需统一用case1.png，直接返回require('@/assets/dashboard/case1.png')
  return `@/assets/dashboard/case${index + 1}.png`
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

.rtibid-landing {
  width: 100%;
  overflow-x: hidden;
}

/* 导航栏样式 */
.navbar {
  width: 100%;
  height: 72px;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.nav-container {
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}

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
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #165DFF;
}

.nav-btn {
  padding: 8px 20px;
  background: #165DFF;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background: #0F48CC;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(22, 93, 255, 0.3);
}

/* 英雄区样式 */
.hero-section {
  width: 100%;
  padding: 80px 24px 100px;
  background: linear-gradient(135deg, #165DFF 0%, #6366F1 50%, #7C3AED 100%);
  background-image: url('@/assets/dashboard/bg.png'), linear-gradient(135deg, #165DFF 0%, #6366F1 50%, #7C3AED 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  color: #fff;
}

.hero-container {
  max-width: 900px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-block;
  padding: 6px 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 24px;
  backdrop-filter: blur(10px);
}

.hero-title {
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
  color: #165DFF;
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

/* 统计区样式 */
.stats-section {
  width: 100%;
  padding: 48px 24px;
  background: #fff;
}

.stats-container {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.stats-item {
  text-align: center;
  padding: 24px 16px;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: default;
}

.stats-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(22, 93, 255, 0.1);
  background: #F8FAFF;
}

.stats-number {
  font-size: 32px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 8px;
}

.stats-item:nth-child(1) .stats-number {
  color: #165DFF;
}

.stats-item:nth-child(2) .stats-number {
  color: #DC2626;
}

.stats-item:nth-child(3) .stats-number {
  color: #EA580C;
}

.stats-item:nth-child(4) .stats-number {
  color: #059669;
}

.stats-label {
  font-size: 14px;
  color: #6B7280;
  font-weight: 500;
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

/* 功能区样式 */
.features-section {
  width: 100%;
  padding: 80px 24px;
  background: #0F172A;
  color: #fff;
}

.features-section .section-title {
  color: #fff;
}

.features-section .section-desc {
  color: rgba(255, 255, 255, 0.7);
}

.features-container {
  max-width: 1280px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.feature-card {
  padding: 32px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
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
}

.feature-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.feature-desc {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
}

/* 案例区样式 */
.cases-section {
  width: 100%;
  padding: 80px 24px;
  background: #F9FAFB;
}

.cases-container {
  max-width: 1280px;
  margin: 0 auto;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.case-card {
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  transition: all 0.3s ease;
  cursor: pointer;
}

.case-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.case-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.case-card:hover .case-img {
  transform: scale(1.08);
}

.case-content {
  padding: 20px;
}

.case-title {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
}

.case-desc {
  font-size: 14px;
  color: #6B7280;
  margin-bottom: 16px;
  line-height: 1.5;
}

.case-link {
  font-size: 13px;
  font-weight: 600;
  color: #165DFF;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: gap 0.3s ease;
}

.case-link:hover {
  gap: 8px;
}

/* 优势区样式 */
.why-section {
  width: 100%;
  padding: 80px 24px;
  background: linear-gradient(135deg, #165DFF 0%, #6366F1 100%);
  color: #fff;
}

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

/* 页脚样式 */
.footer {
  width: 100%;
  padding: 60px 24px 40px;
  background: #F9FAFB;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;
}

.footer-logo {
  height: 32px;
  object-fit: contain;
  margin-bottom: 16px;
}

.footer-desc {
  font-size: 14px;
  color: #6B7280;
  line-height: 1.6;
  margin-bottom: 24px;
  max-width: 300px;
}

.social-group {
  display: flex;
  gap: 16px;
}

.social-item {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.social-item:hover {
  background: #165DFF;
  transform: translateY(-3px);
}

.social-icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.footer-title {
  font-size: 15px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 16px;
}

.footer-menu {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  text-decoration: none;
  font-size: 14px;
  color: #6B7280;
  cursor: pointer;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #165DFF;
}

.contact-item {
  font-size: 14px;
  color: #6B7280;
  margin-bottom: 12px;
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