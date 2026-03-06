<template>
  <div class="case-detail-page">
    <!-- 内容容器：控制最大宽度和响应式内边距 -->
    <div class="content-wrapper">
      <div class="stats-content" v-if="caseData.numList && caseData.numList.length > 0">
        <!-- 视频数据指标卡片 -->
        <div class="stat-card" v-for="(value, index) in caseData.numList" :key="value.id" :class="{ 'last': index === caseData.numList.length - 1 }">
          <div class="stat-value">{{ value.value }}</div>
          <div class="stat-label">{{ value.name }}</div>
        </div>
      </div>

      <!-- 案例标题 -->
      <h1 class="case-title">{{ caseData.metaTitle }}</h1>
      
      <!-- 案例描述 -->
      <p class="case-desc">{{ caseData.metaDescription }}</p>
      
      <div class="case_img">
        <img :src="caseData.image" alt="案例图片">
      </div>
      
      
      <!-- 文章内容区块（动态渲染） -->
      <div 
        v-for="(section, index) in caseData.articleContent.sections" 
        :key="index" 
        class="content-section"
      >
        <h2 class="section-title">{{ section.title }}</h2>
        <div class="section-content" v-if="section.content">{{ section.content }}</div>
        <ul class="section-list" v-if="section.list && section.list.length > 0">
          <li v-for="(item, index) in section.list" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import detailOptions from './detailOptions.js';

const caseData = computed(() => {
  const route = useRoute();
  const id = route.query.name;
  const data = detailOptions.find(item => item.id === id);
  return data || {
    articleContent: {
      sections: []
    }
  };
})
</script>

<style lang="less" scoped>
// 核心变量定义
@mobile-breakpoint: 768px;
@mobile-padding: 16px;
@desktop-padding: 24px;
@max-content-width: 960px;

// 设计图风格变量
@primary-color: #2D5AF1;    // 主色（设计图蓝色）
@text-dark: #1A1A1A;        // 深色文本
@text-gray: #666666;        // 灰色文本
@card-bg: #FFFFFF;          // 卡片背景
@border-radius: 12px;       // 圆角
@shadow: 0 4px 12px rgba(0, 0, 0, 0.08); // 阴影



.case-detail-page {
  width: 100%;
  background-color: #F9FAFB;
  
  
  // 核心容器
  .content-wrapper {
    box-sizing: border-box;
    width: 100%;
    max-width: @max-content-width;
    margin: 0 auto;
    padding: 32px @mobile-padding;

    @media (min-width: @mobile-breakpoint) {
      padding: 48px @desktop-padding;
    }
  }

  // 视频数据指标卡片
  .stats-content {
    padding: 16px 0;
    margin: 0 auto 64px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0;
    
    .stat-card {
      text-align: center;
      padding: 0 32px;
      position: relative;
      min-height: 120px;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      
      &:not(.last)::after {
        content: '';
        position: absolute;
        right: 0;
        top: 20%;
        bottom: 20%;
        width: 1px;
        background-color: #e5e7eb;
      }
      
      .stat-value {
        text-align: center;
        font-family: D-DIN-PRO;
        font-size: 36px;
        font-style: normal;
        font-weight: 500;
        line-height: 44px; /* 122.222% */
        letter-spacing: 0.369px;
        background: linear-gradient(90deg, #19BBF8 0%, #8C35C7 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 8px;
      }
      
      .stat-label {
        color: var(--text2, #4A5565);
        text-align: center;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        letter-spacing: -0.312px;
      }
    }
    
    // 响应式设计
    @media (max-width: @mobile-breakpoint) {
      grid-template-columns: 1fr;
      gap: 24px;
      
      .stat-card {
        padding: 0 16px;
        
        &:not(.last)::after {
          display: none;
        }
        
        .stat-value {
          font-size: 32px;
          line-height: 40px;
        }
        
        .stat-label {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
  // 案例标题
  .case-title {
    font-size: 28px;
    font-weight: 700;
    color: @text-dark;
    line-height: 1.3;
    margin: 0 0 20px 0;
    text-align: left;

    @media (min-width: @mobile-breakpoint) {
      font-size: 36px;
      margin-bottom: 24px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  // 案例描述
  .case-desc {
    font-size: 16px;
    color: @text-gray;
    line-height: 1.6;
    margin-bottom: 32px;
    max-width: 800px;
    text-align: left;

    @media (min-width: @mobile-breakpoint) {
      font-size: 18px;
      margin-bottom: 40px;
    }
  }

  .case_img {
    // width: 100%;
    height: auto;
    padding: 18px;
    margin-bottom: 64px;
    img {
      width: 100%;
    }
  }

  // ========== 设计图风格的numList样式 ==========
  .metrics-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin: 0 0 48px 0;

    // 移动端适配
    @media (max-width: @mobile-breakpoint) {
      gap: 16px;
      margin-bottom: 32px;
    }

    // 单个指标卡片（设计图核心样式）
    .metric-card {
      flex: 1;
      min-width: 280px;
      background: @card-bg;
      border-radius: @border-radius;
      box-shadow: @shadow;
      padding: 32px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      @media (min-width: @mobile-breakpoint) {
        padding: 40px 32px;
        min-width: 320px;
      }

      @media (max-width: 480px) {
        min-width: 100%;
        padding: 24px 20px;
      }

      // 数值容器
      .metric-value-wrapper {
        margin-bottom: 12px;

        .metric-value {
          font-size: 48px;
          font-weight: 800;
          color: @primary-color;
          line-height: 1;

          @media (min-width: @mobile-breakpoint) {
            font-size: 64px;
          }

          @media (max-width: 480px) {
            font-size: 40px;
          }
        }
      }

      // 指标标签
      .metric-label {
        font-size: 16px;
        color: @text-dark;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.5px;

        @media (min-width: @mobile-breakpoint) {
          font-size: 18px;
        }
      }
    }
  }

  // ========== 文章内容样式 ==========
  .content-section {
    margin-bottom: 40px;

    @media (min-width: @mobile-breakpoint) {
      margin-bottom: 56px;
    }

    .section-title {
      font-size: 22px;
      font-weight: 600;
      color: @text-dark;
      margin: 0 0 16px 0;
      text-align: left;

      @media (min-width: @mobile-breakpoint) {
        font-size: 26px;
        margin-bottom: 20px;
      }
    }

    .section-content {
      font-size: 16px;
      color: @text-gray;
      line-height: 1.8;
      margin: 0;

      @media (min-width: @mobile-breakpoint) {
        font-size: 17px;
        line-height: 1.9;
      }
    }

    // 列表样式
    .section-list {
      list-style: none;
      padding: 0;
      margin: 16px 0 0 0;

      @media (min-width: @mobile-breakpoint) {
        margin-top: 20px;
      }

      li {
        position: relative;
        font-size: 16px;
        color: @text-gray;
        line-height: 1.8;
        padding-left: 20px;


        &:before {
          content: "•";
          position: absolute;
          left: 0;
          top: 0;
          color: @primary-color;
          font-size: 20px;
          font-weight: bold;
          line-height: 26px;

          // @media (min-width: @mobile-breakpoint) {
          //   font-size: 24px;
          //   line-height: 1.7;
          // }
        }
      }
    }
  }
}
</style>