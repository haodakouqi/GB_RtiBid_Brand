<template>
  <div class="stats-container">
    <div 
      v-for="(stat, index) in statsData" 
      :key="index"
      class="stat-item"
      @mouseenter="handleMouseEnter(index)"
      @mouseleave="handleMouseLeave"
    >
      <div class="stat-content">
        <div 
          :class="['stat-number', stat.color, hoveredIndex === index ? 'highlight' : '']" 
        >
          {{ stat.number }}
          <!-- 条件渲染：仅当 isUpArrow 为 true 时显示箭头 -->
          <span v-if="stat.isUpArrow" class="arrow-up">↗</span>
        </div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 定义数据源
const statsData = [
  {
    number: "1,500+",
    label: "Advertisers",
    color: "blue", // 对应 CSS 类名
  },
  {
    number: "2Bn+",
    label: "Unique Devices",
    color: "red",
    isUpArrow: true, // 显示向上箭头
  },
  {
    number: "170B",
    label: "Daily Ad Requests",
    color: "orange",
  },
  {
    number: "85%",
    label: "APAC Mobile App Coverage",
    color: "green",
  }
];

// 响应式状态：记录当前悬停的项目索引
const hoveredIndex = ref(-1);

// 鼠标进入事件处理器
const handleMouseEnter = (index) => {
  hoveredIndex.value = index;
};

// 鼠标离开事件处理器
const handleMouseLeave = () => {
  hoveredIndex.value = -1;
};
</script>

<style lang="less" scoped>
.stats-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  // padding: 40px 0;
  padding: 80px 24px;
  gap: 60px;
  max-width: 1280px;
  margin: 0 auto;
  

  /* 响应式 */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px; /* 移动端垂直间距加大 */

    .stat-number {
      font-size: 2rem;
    }
  }

  
  .stat-item {
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease;
    /* 为整个卡片预留箭头的空间，避免布局跳动 */
    padding-top: 10px;
  }
  
  .stat-item:hover {
    transform: scale(1.05);
  }
  
  .stat-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .stat-number {
    font-size: 36px;
    font-weight: bold;
    color: #1a1a1a;
    margin-bottom: 8px;
    position: relative;
    transition: all 0.3s ease;
    padding-bottom: 12px;
  }
  .blue { border-bottom: 4px solid #007bff; }
  .red { border-bottom: 4px solid #dc3545; }
  .orange { border-bottom: 4px solid #fd7e14; }
  .green { border-bottom: 4px solid #28a745; }
  
  /* .stat-number.highlight {
    color: #000;
    font-size: 2.8rem;
    transform: scale(1.05);
  } */
  
  
  .stat-label {
    margin-bottom: 4px; /* 调整标签与箭头间距 */
    color: #4A5565;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: -0.312px;
  }
  
  .arrow-up {
   color: #dc3545;
  }
}


</style>