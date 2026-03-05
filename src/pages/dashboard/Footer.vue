<template>
     <!-- 页脚 -->
    <footer class="footer" id="footer">
      <div class="footer-container">
        <div class="footer-col footer-brand">
          <SvgIcon iconClass="loginLogo" width="88" height="40"/>
          <p class="footer-desc">Connect, track, and grow At Rtibid, you only pay for real results.</p>
          <div class="social-group">
            <a href="javascript:void(0);" class="social-item">
              <img :src="footerlogo0" alt="social icon" class="social-icon" />
            </a>
            <a href="javascript:void(0);" class="social-item">
              <img :src="footerlogo1" alt="social icon" class="social-icon" />
            </a>
            <a href="javascript:void(0);" class="social-item">
              <img :src="footerlogo2" alt="social icon" class="social-icon" />
            </a>
          </div>
        </div>
        <div class="footer-col footer-pages">
          <h4 class="footer-title">Pages</h4>
          <ul class="footer-menu">
            <!-- 动态生成导航链接 -->
            <li v-for="item in props.navList" :key="item.id">
              <a @click="handleScroll(item.id)" class="footer-link">{{ item.name }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-col footer-contact">
          <h4 class="footer-title">Get In Touch</h4>
          <p class="contact-item">Email: support@rtibid.com</p>
          <p class="contact-item">Phone: 613-295-6459</p>
        </div>
      </div>
    </footer>
</template>
<script setup>
import { ref } from 'vue'
import footerlogo0 from '@/assets/dashboard/footerlogo0.png'
import footerlogo1 from '@/assets/dashboard/footerlogo1.png'
import footerlogo2 from '@/assets/dashboard/footerlogo2.png'

// 接收父组件传递的导航列表
const props = defineProps({
  navList: {
    type: Array,
    default: () => []
  }
})

import { GlHookuseRouter } from '@/utils/methods'
const router = GlHookuseRouter()

// 锚点平滑滚动方法
const handleScroll = (id) => {
  router.push(id)
}

</script>

<style lang="less">



/* 页脚样式 */
.footer {
  width: 100%;
  padding: 60px 24px 40px;
  background: #fff;
  
  // 响应式内边距
  @media (max-width: 768px) {
    padding: 40px 16px 30px;
  }
  
  .footer-container {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 48px;
    
    // 响应式网格布局
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    
    @media (min-width: 769px) and (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      gap: 36px;
    }
  }
  
  .footer-logo {
    height: 32px;
    object-fit: contain;
    margin-bottom: 16px;
    
    // 响应式Logo大小
    @media (max-width: 768px) {
      height: 28px;
      margin-bottom: 12px;
    }
  }
  
  .footer-desc {
    font-size: 14px;
    color: #6B7280;
    line-height: 1.6;
    margin-bottom: 24px;
    max-width: 300px;
    
    // 响应式描述
    @media (max-width: 768px) {
      font-size: 13px;
      margin-bottom: 20px;
      max-width: 100%;
    }
  }
  
  .social-group {
    display: flex;
    gap: 16px;
    
    // 响应式社交媒体间距
    @media (max-width: 768px) {
      gap: 12px;
    }
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
    
    // 响应式社交媒体图标容器
    @media (max-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }
  
  // .social-item:hover {
  //   background: #155DFC;
  //   transform: translateY(-3px);
  // }
  
  .social-icon {
    width: 18px;
    height: 18px;
    object-fit: contain;
    
    // 响应式社交媒体图标
    @media (max-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }
  
  .footer-title {
    font-size: 15px;
    font-weight: 600;
    color: #111827;
    margin-bottom: 16px;
    
    // 响应式标题
    @media (max-width: 768px) {
      font-size: 14px;
      margin-bottom: 12px;
    }
  }
  
  .footer-menu {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
    
    // 响应式菜单间距
    @media (max-width: 768px) {
      gap: 10px;
    }
  }
  
  .footer-link {
    text-decoration: none;
    font-size: 14px;
    color: #6B7280;
    cursor: pointer;
    transition: color 0.3s ease;
    
    // 响应式链接
    @media (max-width: 768px) {
      font-size: 13px;
    }
  }
  
  .footer-link:hover {
    color: #155DFC;
  }
  
  .contact-item {
    font-size: 14px;
    color: #6B7280;
    margin-bottom: 12px;
    
    // 响应式联系信息
    @media (max-width: 768px) {
      font-size: 13px;
      margin-bottom: 10px;
    }
  }
}
</style>