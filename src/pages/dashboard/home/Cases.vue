<template>
  <div class="cases-section" id="cases">
    <div class="cases-container">
      <h2 class="section-title">Sharing the Cases</h2>
      <p class="section-desc">Discover how leading brands achieve remarkable results with RtiBid</p>
      <div class="cases-grid">
        <div class="case-card" v-for="(item, index) in casesList" :key="index">
          <div class="case-img_box">
            <img :src="item.img" :alt="item.title" class="case-img" />
          </div>
          <div class="case-content">
            <h3 class="case-title">{{ item.title }}</h3>
            <p class="case-desc">{{ item.desc }}</p>
            <a href="javascript:void(0)" @click="handleScroll(item.id)" class="case-link">View Case Study <span>↗</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- 案例区 -->
<script setup>
import { ref } from 'vue'

import case0 from '@/assets/dashboard/case0.png'
import case1 from '@/assets/dashboard/case1.png'
import case2 from '@/assets/dashboard/case2.png'
import case3 from '@/assets/dashboard/case3.png'
import case4 from '@/assets/dashboard/case4.png'
import case5 from '@/assets/dashboard/case5.png'

import { GlHookuseRouter } from '@/utils/methods'
// import { useRouter as vueUseRouter, useRoute as vueUseRoute } from 'vue-router'
const router = GlHookuseRouter()


// 锚点平滑滚动方法
const handleScroll = (name) => {
  router.push('Detail', {
    name: name
  })
}

// 案例数据
const casesList = ref([
  {
    id: 'Cases1',
    title: 'LOHILO',
    desc: 'How LOHILO Successfully Grew E-Commerce Sales',
    img: case0
  },
  {
    id: 'Cases2',
    title: 'Herbmed',
    desc: "Herbmed – Demanding Challenges. Creative Solutions.",
    img: case1
  },
  {
    id: 'Cases3',
    title: 'Zen Pirlanta',
    desc: "Zen Pırlanta Increases Brand Awareness Through Personalized Streaming Video Ads",
    img: case2
  },
  {
    id: 'Cases4',
    title: 'Tikla Gelsin',
    desc: "Tıkla Gelsin Leverages Deep Learning for Winning In-APP Campaign",
    img: case3
  },
  {
    id: 'Cases5',
    title: 'Holdit',
    desc: 'Holdit – Effective Programmatic For eCommerce',
    img: case4
  },
  {
    id: 'Cases6',
    title: 'Westing',
    desc: "Westwing Grows Retargeting Revenue with RtiBid by 81% over Black Friday",
    img: case5
  }
])

</script>
<style lang="less" scoped>
/* 案例区样式 */
.cases-section {
  width: 100%;
  padding: 80px 24px;
  background: #F9FAFB;
  
  // 响应式内边距
  @media (max-width: 768px) {
    padding: 60px 16px;
  }
  
  .cases-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .section-desc {
    color: #4A5565;
  }
  
  .cases-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    
    // 响应式网格布局
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    
    @media (min-width: 769px) and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  .case-card {
    border-radius: 16px;
    overflow: hidden;
    background: #fff;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    position: relative;
    // .case-card:hover {
    //   transform: translateY(-8px);
    //   box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    // }
    
    .case-img_box {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.40) 50%, rgba(0, 0, 0, 0.00) 100%);
        z-index: 1;
      }
      .case-img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        transition: transform 0.5s ease;
        
        // 响应式图片高度
        @media (max-width: 768px) {
          height: 330px;
        }
      }
    }
    .case-card:hover .case-img {
      transform: scale(1.08);
    }
    .case-content {
      padding: 20px;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 2;
      
      // 响应式内容内边距
      @media (max-width: 768px) {
        padding: 16px;
      }
    }
    
    .case-title {

      margin-bottom: 8px;
      color: #FFF;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px; /* 133.333% */
      letter-spacing: 0.07px;
      
      // 响应式标题大小
      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
    
    .case-desc {
      margin-bottom: 16px;

      color: #E5E7EB;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
      letter-spacing: -0.15px;
      
      // 响应式描述大小
      @media (max-width: 768px) {
        font-size: 13px;
        margin-bottom: 12px;
      }
    }
    
    .case-link {

      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: gap 0.3s ease;

      color: #FFF;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; /* 142.857% */
      letter-spacing: -0.15px;
      
      // 响应式链接大小
      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
    
    .case-link:hover {
      gap: 8px;
    }
  }
  
  
  
}
</style>