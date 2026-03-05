<template>
  <div class="dashboard_main">
    <!-- 导航栏 -->
    <nav class="navbar" id="navbar">
      <div class="nav-container">
        <div class="nav-logo">
           <SvgIcon iconClass="loginLogo" width="88" height="40"/>
        </div>
        <ul class="nav-menu">
          <li class="nav-item" v-for="item in navList" :key="item.id">
            <a @click="handleScroll(item.id)" class="nav-link" :class="{'active': routeName === item.id}">{{ item.name }}</a>
          </li>
        </ul>
        <button class="nav-btn" @click="handleScroll('GetStarted')">Get Started</button>
        <!-- 移动端菜单按钮 -->
        <button class="menu-toggle" @click="toggleMenu">
          <span class="menu-icon"></span>
          <span class="menu-icon"></span>
          <span class="menu-icon"></span>
        </button>
      </div>
      <!-- 移动端菜单 -->
      <div class="mobile-menu" v-if="isMenuOpen">
        <ul class="mobile-nav-menu">
          <li class="mobile-nav-item" v-for="item in navList" :key="item.id">
            <a @click="handleScroll(item.id); toggleMenu()" class="mobile-nav-link" :class="{'active': routeName === item.id}">{{ item.name }}</a>
          </li>
          <li class="mobile-nav-item">
            <button class="mobile-nav-btn" @click="handleScroll('GetStarted'); toggleMenu()">Get Started</button>
          </li>
        </ul>
      </div>
    </nav>
    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route.fullPath" />
    </router-view>
    <Footer :navList="navList"></Footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

import Footer from './Footer.vue'

import { GlHookuseRouter, GlHookvueUseRoute } from '@/utils/methods'
// import { useRouter as vueUseRouter, useRoute as vueUseRoute } from 'vue-router'
const router = GlHookuseRouter()


// 锚点平滑滚动方法
const handleScroll = (id) => {
  router.push(id)
}

const routeName = computed(() => {
  const route = GlHookvueUseRoute();
  return route.name;
})

const navList = ref([
  {
    name: 'Home',
    id: 'home'
  },
  {
    name: 'Our Technology',
    id: 'technology'
  },
  {
    name: 'About Us',
    id: 'AboutUs'
  },
  {
    name: 'Blog',
    id: 'Blog'
  }
])

// 移动端菜单状态
const isMenuOpen = ref(false)

// 切换菜单
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// 监听窗口宽度变化
const handleResize = () => {
  const width = window.innerWidth
  // isMenuOpen.value = width <= 768
  if (width > 768) {
    isMenuOpen.value = false
  }
}

// 挂载时添加监听
onMounted(() => {
  // 初始化时设置菜单状态
  handleResize()
  // 添加窗口大小变化监听
  window.addEventListener('resize', handleResize)
})

// 卸载时移除监听
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})


</script>

<style lang="less">

.dashboard_main {
  width: 100%;
  overflow-x: hidden;
}

/* 导航栏样式 */
.navbar {
  width: 100%;
  height: 67px;
  background: #fff;
  // position: sticky;
  // top: 0;
  // // left: 0;
  // // right: 0;
  z-index: 999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  
  // 响应式导航栏高度
  @media (max-width: 768px) {
    height: 60px;
  }
  
  .nav-container {
    max-width: 1280px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    
    // 响应式内边距
    @media (max-width: 768px) {
      padding: 0 16px;
    }
    
    .logo {
      height: 32px;
      object-fit: contain;
      
      // 响应式Logo大小
      @media (max-width: 768px) {
        height: 28px;
      }
    }

    .nav-menu {
      display: flex;
      list-style: none;
      gap: 32px;
      
      // 响应式菜单
      @media (max-width: 768px) {
        display: none;
      }
    }

    .nav-link {
      text-decoration: none;
      color: #101828;
      font-size: 15px;
      line-height: 1.4;
      font-weight: 500;
      cursor: pointer;
      transition: color 0.3s ease;
      
      // 响应式链接
      @media (min-width: 769px) and (max-width: 1024px) {
        font-size: 14px;
      }

      &.active {
        color: #155DFC;
        font-weight: 700;
      }
    }

    // .nav-link:hover {
    //   color: #155DFC;
    // }

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
      
      // 响应式按钮
      @media (max-width: 768px) {
        display: none;
      }
      
      @media (min-width: 769px) and (max-width: 1024px) {
        padding: 10px 16px;
        font-size: 13px;
      }
    }

    .nav-btn:hover {
      background: #0F48CC;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(22, 93, 255, 0.3);
    }
    
    // 移动端菜单按钮
    .menu-toggle {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 24px;
      height: 20px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      z-index: 1001;
      
      @media (max-width: 768px) {
        display: flex;
      }
      
      .menu-icon {
        display: block;
        width: 100%;
        height: 2px;
        background: #333;
        transition: all 0.3s ease;
      }
    }
  }
  
  // 移动端菜单
  .mobile-menu {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    padding: 20px 0;
    animation: slideDown 0.3s ease;
    
    .mobile-nav-menu {
      list-style: none;
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    
    .mobile-nav-item {
      cursor: pointer;
      .mobile-nav-link {
        display: block;
        padding: 12px 0;
        text-decoration: none;
        color: #333;
        font-size: 15px;
        font-weight: 500;
        transition: color 0.3s ease;

        &.active {
          color: #155DFC;
          font-weight: 700;
        }
      }
      
      .mobile-nav-btn {
        width: 100%;
        padding: 12px;
        background: #155DFC;
        color: #fff;
        border: none;
        border-radius: 64px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-top: 8px;
        
        &:hover {
          background: #0F48CC;
        }
      }
    }
  }
  
  // 动画
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

/* 通用区块标题样式 */
.section-title {
  font-size: 48px;
  font-weight: 700;
  color: #101828;
  text-align: center;
  margin-bottom: 16px;
  font-family: Alliance;
}

.section-desc {
  margin-bottom: 48px;
  margin-left: auto;
  margin-right: auto;

  color: #D1D5DC;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
  letter-spacing: -0.449px;
}

</style>