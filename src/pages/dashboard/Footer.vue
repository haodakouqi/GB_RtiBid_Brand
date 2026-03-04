<template>
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
</template>
<script setup>
import { ref } from 'vue'
import logoImg from '@/assets/dashboard/logo.png'

import heroBgImg from '@/assets/dashboard/bg.png'


import footerSocialIcon from '@/assets/dashboard/footerlogo2.png'

</script>

<style lang="less">



/* 页脚样式 */
.footer {
  width: 100%;
  padding: 60px 24px 40px;
  background: #F9FAFB;
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
    background: #155DFC;
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
    color: #155DFC;
  }
  
  .contact-item {
    font-size: 14px;
    color: #6B7280;
    margin-bottom: 12px;
  }
}
</style>