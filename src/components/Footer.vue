<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-left">
        <div class="logo">
          <img src="/src/assets/logo-light.png" alt="">
        </div>
      </div>

      <div class="footer-nav">
        <div class="nav-column">
          <h3 class="nav-title" @click="scrollToSection('home')" style="cursor: pointer;">
            Home
          </h3>
          <ul class="nav-links">
            <li><a href="#features" @click.prevent="scrollToSection('features')">Features</a></li>
            <li><a href="#solutions" @click.prevent="scrollToSection('solutions')">Solutions</a></li>
            <li><a href="#case-studies" @click.prevent="scrollToSection('case-studies')">Case Studies</a></li>
            <li><a href="#about-us" @click.prevent="scrollToSection('about-us')">About Us</a></li>
            <li><a href="#contact" @click.prevent="scrollToSection('contact')">Contact</a></li>
          </ul>
        </div>

        <div class="nav-column">
          <h3 class="nav-title">
            Learn more
          </h3>
          <ul class="nav-links">
            <li><a href="/privacy-center" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><a href="mailto:contact@shopera.com">contact@shoperatech.com</a></li>
          </ul>
        </div>
      </div>

      <div class="newsletter-section">
        <h3 class="newsletter-title">Newsletter</h3>
        <p class="newsletter-desc">Stay on top of the latest in digital ads. Sign up to our newsletter.</p>
        
        <form class="newsletter-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="email">Your work e-mail address</label>
            <div class="input-with-button">
              <input 
                type="email" 
                id="email" 
                v-model="form.email"
                class="form-input"
              />
              <button type="submit" class="submit-btn" aria-label="Submit newsletter form">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const form = ref({
  firstName: '',
  email: '',
  consent: false
})

const scrollToSection = (sectionId) => {
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

const errors = ref({
  firstName: ''
})

const validateFirstName = () => {
  if (!form.value.firstName.trim()) {
    errors.value.firstName = 'Please complete this required field.'
  } else {
    errors.value.firstName = ''
  }
}

const handleSubmit = () => {
  validateFirstName()
  if (!errors.value.firstName) {
    // Handle form submission
    console.log('Form submitted', form.value)
  }
}
</script>

<style scoped>
.footer {
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 4rem 2rem;
  margin-top: auto;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 2fr 1.5fr;
  gap: 4rem;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 24px;
  font-weight: 600;
  img {
    width: 130px;
  }
}

.logo-rtb {
  color: #fff;
}

.logo-house {
  color: #ffffff;
}

.logo-lines {
  color: #ffffff;
  font-size: 20px;
  margin-left: 2px;
  letter-spacing: -2px;
}

.tagline {
  color: #c77dff;
  font-size: 14px;
  margin: 0.5rem 0;
}

.social-media {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-icon {
  color: #ffffff;
  transition: color 0.2s;
}

.social-icon:hover {
  color: #ff6b35;
}

.footer-nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.nav-column {
  display: flex;
  flex-direction: column;
}

.nav-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
  transition: color 0.2s;
}

.nav-title:hover {
  color: #f25600;
}

.nav-dot {
  width: 8px;
  height: 8px;
  background-color: #4F3CEA;
  border-radius: 50%;
  display: inline-block;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.nav-links a {
  color: #cccccc;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.nav-links a:hover {
  color: #ffffff;
}

.cookie-link {
  color: #ff6b35 !important;
}

.external-icon {
  color: currentColor;
}

.newsletter-section {
  display: flex;
  flex-direction: column;
}

.newsletter-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.newsletter-desc {
  font-size: 14px;
  color: #cccccc;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.newsletter-form {
  position: relative;
}

.input-with-button {
  position: relative;
  display: flex;
  align-items: center;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  font-size: 14px;
  color: #cccccc;
  margin-bottom: 0.5rem;
}

.form-input {
  width: calc(100% - 70px);
  padding: 12px;
  background-color: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  color: #ffffff;
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.2s;
  padding-right: 88px;
}

.form-input:focus {
  outline: none;
  border-color: #ff6b35;
}

.form-input.error {
  border-color: #ff6b35;
}

.error-message {
  display: block;
  color: #ff6b35;
  font-size: 12px;
  margin-top: 0.25rem;
}

.privacy-text {
  margin: 1rem 0;
  font-size: 12px;
  color: #999999;
  line-height: 1.6;
}

.privacy-link {
  color: #ff6b35;
  text-decoration: none;
}

.privacy-link:hover {
  text-decoration: underline;
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin: 1rem 0;
}

.checkbox {
  margin-top: 2px;
  cursor: pointer;
}

.checkbox-group label {
  font-size: 12px;
  color: #cccccc;
  cursor: pointer;
  line-height: 1.5;
}

.recaptcha {
  margin: 1rem 0;
}

.recaptcha-text {
  font-size: 11px;
  color: #666666;
  line-height: 1.5;
}

.recaptcha-link {
  color: #999999;
  text-decoration: none;
}

.recaptcha-link:hover {
  text-decoration: underline;
}

.submit-btn {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 999px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ff4d3d;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s, transform 0.2s, color 0.2s, background-color 0.2s;
}

.submit-btn:hover {
  border-color: #ff4d3d;
  background-color: rgba(255, 77, 61, 0.08);
  transform: translateY(-50%) translateY(-2px);
}

@media (max-width: 1024px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .footer-nav {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 1.5rem 2rem;
  }

  .footer-nav {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .submit-btn {
    width: 48px;
    height: 48px;
    right: 6px;
  }
}
</style>
