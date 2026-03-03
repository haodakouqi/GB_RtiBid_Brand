<template>
  <header :class="['header', { 'transparent': isTransparent }]">
    <div class="header-container">
      <div class="header-logo" @click="scrollToSection('home')">
        <img class="logo-img" src="/src/assets/logo-dark.png" alt="">
      </div>

      <!-- Navigation -->
      <nav class="nav">
        <a href="#home" :class="['nav-link', { active: activeNavItem === 'home' }]" @click.prevent="scrollToSection('home')">Home</a>
        <a href="#features" :class="['nav-link', { active: activeNavItem === 'features' }]" @click.prevent="scrollToSection('features')">Features</a>
        <a href="#solutions" :class="['nav-link', { active: activeNavItem === 'solutions' }]" @click.prevent="scrollToSection('solutions')">Solutions</a>
        <a href="#case-studies" :class="['nav-link', { active: activeNavItem === 'case-studies' }]" @click.prevent="scrollToSection('case-studies')">Case Studies</a>
        <a href="#about-us" :class="['nav-link', { active: activeNavItem === 'about-us' }]" @click.prevent="scrollToSection('about-us')">About Us</a>
        <a href="#contact" :class="['nav-link', { active: activeNavItem === 'contact' }]" @click.prevent="scrollToSection('contact')">Contact</a>
      </nav>

      <!-- Contact Button -->
      <a href="#contact" class="contact-btn" @click.prevent="scrollToSection('contact')">Start Free Trial</a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
  startTransparent: {
    type: Boolean,
    default: true
  }
})

const router = useRouter()
const route = useRoute()
const isTransparent = ref(false)
const activeNavItem = ref('home')

const handleScroll = () => {
  isTransparent.value = props.startTransparent && window.scrollY === 0
  const sections = ['home', 'features', 'solutions', 'case-studies', 'about-us', 'contact']
  const scrollPosition = window.scrollY + 100 // Offset for header height
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const sectionId = sections[i]
    const element = document.getElementById(sectionId)
    if (element) {
      const sectionTop = element.offsetTop
      if (scrollPosition >= sectionTop) {
        activeNavItem.value = sectionId
        break
      }
    }
  }
  
  // If at the top, set home as active
  if (window.scrollY < 100) {
    activeNavItem.value = 'home'
  }
}

const scrollToSection = (sectionId) => {
  activeNavItem.value = sectionId
  
  // 如果当前不在首页，先跳转到首页
  if (route.path !== '/') {
    router.push({ path: '/', hash: `#${sectionId}` }).then(() => {
      // 等待页面加载后滚动
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const offset = 70 // Header height
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    })
  } else {
    // 如果已经在首页，直接滚动
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 70 // Header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
  
  // 处理从其他页面跳转过来的 hash
  if (route.hash) {
    const sectionId = route.hash.substring(1) // 移除 # 号
    setTimeout(() => {
      scrollToSection(sectionId)
    }, 300)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>

.header-logo {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.logo-img {
  width: 130px;
  position: relative;
  top: 2px;
}

.header {
  background-color: #ffffff;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
  transition: background-color 0.3s ease, border-bottom-color 0.3s ease;
}

.header.transparent {
  background-color: transparent;
  border-bottom-color: transparent;
}

.header.transparent .nav-link {
  color: #ffffff;
}

.header.transparent .nav-link:hover {
  color: #ffffff;
  opacity: 0.8;
}

.header.transparent .nav-link.active {
  color: #E6580B !important;
  font-weight: 600;
}

.contact-btn {
  font-family: Montserrat-Bold !important;
}

.header.transparent  {
  background-color: transparent;
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

.header.transparent .contact-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  color: #ffffff;
}

.header.transparent .logo-img {
  filter: brightness(0) invert(1);
}

.header-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
}

.logo-rtb {
  color: #E6580B;
}

.logo-house {
  color: #000000;
}

.logo-lines {
  color: #E6580B;
  font-size: 16px;
  margin-left: 2px;
  letter-spacing: -2px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: 1;
  justify-content: center;
  width: 100%;
}

.nav-link {
  color: #000000;
  text-decoration: none;
  font-size: 15px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s, font-weight 0.2s;
  position: relative;
}

.nav-link:hover {
  color: #000000;
  opacity: 0.7;
}

.nav-link.active {
  /* color: #E6580B; */
  font-weight: 600;
  font-family: Montserrat-Bold !important;
}

.caret {
  color: currentColor;
}

.contact-btn {
  background-color: #ffffff;
  border: 1px solid #d0d0d0;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 500;
  color: #f25600;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
  text-decoration: none;
  display: inline-block;
}

.contact-btn:hover {
  border-color: #E6580B;
  background-color: #fff5f2;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }
  
  .header-container {
    padding: 0 1rem;
  }
}
</style>

