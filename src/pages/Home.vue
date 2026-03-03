<template>
    <div class="home2">
      <Header :startTransparent="false"/>
  
      <!-- Hero Section -->
      <section id="home" class="hero-section">
        <div class="hero-section-container">
          <div class="hero-content">
            <div class="hero-title">
              <h1 class="hero-title-line1">We are not just an ad provider</h1>
              <h1 class="hero-title-line2">we are your growth partner.</h1>
            </div>
            <p class="hero-description">
              Shopera's programmatic platform maximizes your ROAS by spanning global mainstream media channels and integrating machine learning with vast data.
            </p>

            <div class="hero-cta-wrapper">
              <a href="#contact" class="hero-cta-link" @click.prevent="scrollToContact">
                Start Free Trial
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>

            <div class="hero-logos">
              <div class="hero-logos-wrapper">
                <div class="hero-logos-track">
                  <div
                    class="hero-logo-item"
                    v-for="(logo, index) in heroLogos"
                    :key="`logo-${index}`"
                  >
                    <img :src="logo.src" :alt="logo.alt" />
                  </div>
                  <div
                    class="hero-logo-item"
                    v-for="(logo, index) in heroLogos"
                    :key="`logo-dup-${index}`"
                  >
                    <img :src="logo.src" :alt="logo.alt" />
                  </div>
                </div>
              </div>
            </div>
            <div class="hero-principles">
            </div>
          </div>
        </div>
      </section>
  
      <section id="features" class="first-party-section">
        <div class="first-party-container">
          <div class="first-party-header" :class="{ 'fade-in-up': isVisible.features }">
            <h2 class="first-party-title">
              Data-Driven. Intelligent Targeting. <br/>Accelerate Your Growth.
            </h2>
            <p class="first-party-description">
              Powered by AI and massive data, our intelligent advertising engine precisely targets high-value users and optimizes delivery strategies in real-time.
            </p>
          </div>

          <div class="built-success__grid">
            <div class="success-card" :class="{ 'fade-in-up': isVisible.features }" style="animation-delay: 0.1s;">
              <div class="success-card__icon">
                 <img src="/src/assets/data-driven/01.png" alt="Accessible" />
              </div>
              <h3 class="success-card__title">Intelligent Ad Management</h3>
              <p class="success-card__desc">
                Our platform automates the entire process — from one-click setup and smart budget allocation to real-time bidding — to optimize your ad performance.
              </p>
            </div>
            <div class="success-card" :class="{ 'fade-in-up': isVisible.features }" style="animation-delay: 0.2s;">
              <div class="success-card__icon">
                 <img src="/src/assets/data-driven/03.png" alt="Intelligent" />
              </div>
              <h3 class="success-card__title">Personalized recommendations</h3>
              <p class="success-card__desc">
                We analyze user preferences from vast datasets to deliver personalized ad experiences that drive conversions.
              </p>
            </div>
            <div class="success-card" :class="{ 'fade-in-up': isVisible.features }" style="animation-delay: 0.3s;">
              <div class="success-card__icon">
                 <img src="/src/assets/data-driven/02.png" alt="Scalable" />
              </div>
              <h3 class="success-card__title">Analytics & Insights</h3>
              <p class="success-card__desc">
                Access all your data in real-time with a customizable dashboard, designed to pinpoint your key optimization opportunities.
              </p>
            </div>
            <div class="success-card" :class="{ 'fade-in-up': isVisible.features }" style="animation-delay: 0.4s;">
              <div class="success-card__icon">
                 <img src="/src/assets/data-driven/04.png" alt="Modular" />
              </div>
              <h3 class="success-card__title">Performance Tracking & Attribution</h3>
              <p class="success-card__desc">
                Support multiple attribution models to optimize your decisions with insights.
              </p>
            </div>
          </div>
  
        </div>
      </section>



      <section id="solutions" class="solution-section">
        <div class="solution-container">
          <div class="solution-header" :class="{ 'fade-in-up': isVisible.solutions }">
            <h2 class="solution-title"><span>Optimize the Full Funnel: Target Precisely, <br/>Attribute Accurately</span></h2>
            <p class="solution-description">
              Closing the Audience-Creative-Channel Loop: The engine that fuels scalable, personalized campaigns and drives business growth.
            </p>
          </div>
  
          <div class="solution-grid">
            <article
              class="solution-card"
              v-for="(card, index) in videoCards"
              :key="index"
              :class="{ 'fade-in-up': isVisible.solutions }"
              :style="{ 'animation-delay': `${(index + 1) * 0.1}s` }"
            >
              <div class="solution-card-inner">
                <div class="solution-card-icon-placeholder">
                  <img :src="card.img" alt="">
                </div>
                <div class="solution-card-body">
                  <h3 class="solution-card-title">{{ card.title }}</h3>
                  <p class="solution-card-text">{{ card.text }}</p>
                  <a href="#contact" class="solution-card-link">
                    <span class="solution-card-link-label">{{ card.linkLabel }}</span>
                    <span class="solution-card-link-arrow">↗</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
  
  
  
      <!-- How We Work Section -->
      <section id="case-studies" class="how-we-work-section">
        <div class="how-we-work-container">
          <h3 class="how-we-work-title" :class="{ 'fade-in-up': isVisible.caseStudies }">Sharing Our Success——Learn from customers who succeeded with Shopera</h3>
          
          <div class="how-we-work-carousel" :class="{ 'fade-in-up': isVisible.caseStudies }" style="animation-delay: 0.2s;">
            <div class="how-we-work-progress">
              <div class="how-we-work-progress-bar">
                <div 
                  class="how-we-work-progress-fill" 
                  :style="{ width: `${((currentPage + 1) / totalPages) * 100}%` }"
                ></div>
              </div>
              <div class="how-we-work-nav">
                <button 
                  class="how-we-work-nav-button" 
                  @click="prevTestimonial"
                  aria-label="Previous testimonial"
                >
                  <svg width="12" height="13" viewBox="0 0 12 13" fill="none">
                    <path fill="currentColor" d="m6 0 1.4 1.4-4 4H12v2H3.4l4 4L6 12.8.3 7.1c-.4-.4-.4-1 0-1.4z"></path>
                  </svg>
                </button>
                <span class="how-we-work-counter">{{ currentPage + 1 }} / {{ totalPages }}</span>
                <button 
                  class="how-we-work-nav-button" 
                  @click="nextTestimonial"
                  aria-label="Next testimonial"
                >
                  <svg width="12" height="13" viewBox="0 0 12 13" fill="none">
                    <path fill="currentColor" d="M6 0 4.6 1.4l4 4H0v2h8.6l-4 4L6 12.8l5.7-5.7c.4-.4.4-1 0-1.4z"></path>
                  </svg>
                </button>
              </div>
            </div>
  
            <div 
              class="how-we-work-cards"
              @mouseenter="stopAutoPlay"
              @mouseleave="startAutoPlay"
            >
            <div 
              v-for="(testimonial, index) in visibleTestimonials" 
              :key="`${currentPage}-${index}-${testimonial.link}`"
              :class="['how-we-work-card', { 'active': index === 0, 'inactive': index !== 0 }]"
            >
              <a
                :href="testimonial.link"
                class="how-we-work-card-link-wrapper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="how-we-work-card-logo">
                  <img :src="testimonial.logo" :alt="testimonial.company" />
                </div>

                <div class="how-we-work-card-img">
                  <img :src="testimonial.img" alt="">
                </div>

                <div class="how-we-work-card-text-wrapper">
                  <p class="how-we-work-card-text">{{ testimonial.title }}</p>
                </div>
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>
  
      <section id="about-us" class="join-team-section">
        <div class="join-team-content" :class="{ 'fade-in-up': isVisible.aboutUs }">
          <div class="about-row about-row--mission">
            <div class="about-row-text">
              <h2 class="about-title">Our Mission</h2>
              <p class="about-text">
                At Shopera, we believe every brand deserves smart, simple, and effective advertising.
                <span class="about-text-gradient">
                  Our mission is to pioneer smart growth for brands by leveraging cutting-edge data science and programmatic advertising.
                </span>
              </p>
            </div>
            <div class="about-row-image">
              <img :src="StoryPic" alt="Shopera mission" />
            </div>
          </div>

          <!-- Bottom: Our Story -->
          <div class="about-row about-row--story">
            <div class="about-row-image">
              <img :src="OurMissionPic" alt="Shopera team story" />
            </div>
            <div class="about-row-text">
              <h2 class="about-title">Our Story</h2>
              <p class="about-text">
                Shopera was founded in 2011 by James Edward Harrington. He firmly believed that advertising technology should not
                be complex and expensive, but rather a growth tool that every brand can easily use. So he built a smarter,
                more efficient solution for all businesses—especially small and mid-sized advertisers who had long been
                overlooked. Today, we serve thousands of brands in 80+ countries, continuously innovating to help our
                partners seize opportunities in programmatic advertising. Join us in our mission.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <section id="contact" class="contact-form-section">

        <h2 class="first-party-title contact-form-title" :class="{ 'fade-in-up': isVisible.contact }">
            See Shopera in Action. <br/> Start Your <span class="gradient-text">Free Trial</span> Today.
        </h2>

        <div class="contact-form-container" :class="{ 'fade-in-up': isVisible.contact }" style="animation-delay: 0.2s;">
          <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
            <div class="form-row">
              <div class="form-group">
                <label for="firstName">First name*</label>
                <input
                  type="text"
                  id="firstName"
                  v-model="contactForm.firstName"
                  class="form-input"
                  :class="{ 'has-error': formErrors.firstName }"
                />
                <p v-if="formErrors.firstName" class="form-error">{{ formErrors.firstName }}</p>
              </div>
              <div class="form-group">
                <label for="lastName">Last name*</label>
                <input
                  type="text"
                  id="lastName"
                  v-model="contactForm.lastName"
                  class="form-input"
                  :class="{ 'has-error': formErrors.lastName }"
                />
                <p v-if="formErrors.lastName" class="form-error">{{ formErrors.lastName }}</p>
              </div>
            </div>

            <div class="form-group">
              <label for="email">Your business email*</label>
              <input
                type="email"
                id="email"
                v-model="contactForm.email"
                class="form-input"
                :class="{ 'has-error': formErrors.email }"
              />
              <p v-if="formErrors.email" class="form-error">{{ formErrors.email }}</p>
            </div>

            <div class="form-group">
              <label for="companyName">Company name*</label>
              <input
                type="text"
                id="companyName"
                v-model="contactForm.companyName"
                class="form-input"
                :class="{ 'has-error': formErrors.companyName }"
              />
              <p v-if="formErrors.companyName" class="form-error">{{ formErrors.companyName }}</p>
            </div>

            <div class="form-group">
              <label for="website">Company website URL</label>
              <input
                type="url"
                id="website"
                v-model="contactForm.website"
                class="form-input"
                placeholder="https://"
              />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="country">Country*</label>
                <select
                  id="country"
                  v-model="contactForm.country"
                  class="form-input form-select"
                  :class="{ 'has-error': formErrors.country }"
                >
                  <option value="">Select country</option>
                  <option
                    v-for="country in countryOptions"
                    :key="country.value"
                    :value="country.value"
                  >
                    {{ country.label }}
                  </option>
                </select>
                <svg class="select-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="form-group">
                <label for="inquiryType">Type of inquiry</label>
                <select
                  id="inquiryType"
                  v-model="contactForm.inquiryType"
                  class="form-input form-select"
                >
                  <option value="">Select type</option>
                  <option value="advertising">Advertising</option>
                  <option value="partnership">Partnership</option>
                  <option value="careers">Careers</option>
                  <option value="media">Media Inquiry</option>
                  <option value="other">Other</option>
                </select>
                <svg class="select-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="contactForm.message"
                rows="6"
                class="form-input form-textarea"
                :class="{ 'has-error': formErrors.message }"
                placeholder="Tell us about your project..."
              ></textarea>
              <p v-if="formErrors.message" class="form-error">{{ formErrors.message }}</p>
            </div>

            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              {{ isSubmitting ? 'Submitting...' : 'Start Free Trial' }}
            </button>
          </form>
        </div>

        <transition name="toast-fade">
          <div v-if="showToast" class="toast">{{ toastMessage }}</div>
        </transition>
      </section>

      <Footer />
    </div>
</template>

<script setup>
  import {ref, onMounted, onUnmounted, computed} from 'vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import YarnImage from '/src/assets/brands/yarn.webp'
  import OnCourtImage from '/src/assets/brands/oncourt.webp'
  import Herbmed from '/src/assets/brands/herbmed.webp'
  import Vuxen from '/src/assets/brands/vuxen.png'
  import Westwing from '/src/assets/brands/westwing.jpg'
  import LeroyMerlin from '/src/assets/brands/leroymerlin.png'
  import StoryPic from '/src/assets/story-pic.jpg'
  import OurMissionPic from '/src/assets/story.jpg'

  import YarnLogo from '/src/assets/brand-logos/01.png'
  import HerbmedLogo from '/src/assets/brand-logos/02.png'
  import OnCourtLogo from '/src/assets/brand-logos/03.png'
  import WestwingLogo from '/src/assets/brand-logos/04.png'
  import VuxenLogo from '/src/assets/brand-logos/05.png'
  import LeroyMerlinLogo from '/src/assets/brand-logos/06.png'

const heroLogos = [
  { src: YarnLogo, alt: 'Yarn' },
  { src: HerbmedLogo, alt: 'Herbmed' },
  { src: OnCourtLogo, alt: 'OnCourt' },
  { src: WestwingLogo, alt: 'Westwing' },
  { src: VuxenLogo, alt: 'Vuxen' },
  { src: LeroyMerlinLogo, alt: 'Leroy Merlin' }
]

  import AudienceImg from '/src/assets/icon03.svg'
  import CreativeImg from '/src/assets/icon01.svg'
  import ChannelImg from '/src/assets/icon02.svg'

  const isVisible = ref({
    features: false,
    solutions: false,
    caseStudies: false,
    aboutUs: false,
    contact: false
  })
  
  const hasAnimated = ref({
    features: false,
    solutions: false,
    caseStudies: false,
    aboutUs: false,
    contact: false
  })
  
  const setupIntersectionObserver = () => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -100px 0px', // Start animation when element is 100px from viewport
      threshold: 0.1
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          if (sectionId === 'features' && !hasAnimated.value.features) {
            hasAnimated.value.features = true
            isVisible.value.features = true
            observer.unobserve(entry.target)
          } else if (sectionId === 'solutions' && !hasAnimated.value.solutions) {
            hasAnimated.value.solutions = true
            isVisible.value.solutions = true
            observer.unobserve(entry.target)
          } else if (sectionId === 'case-studies' && !hasAnimated.value.caseStudies) {
            hasAnimated.value.caseStudies = true
            isVisible.value.caseStudies = true
            observer.unobserve(entry.target)
          } else if (sectionId === 'about-us' && !hasAnimated.value.aboutUs) {
            hasAnimated.value.aboutUs = true
            isVisible.value.aboutUs = true
            observer.unobserve(entry.target)
          } else if (sectionId === 'contact' && !hasAnimated.value.contact) {
            hasAnimated.value.contact = true
            isVisible.value.contact = true
            observer.unobserve(entry.target)
          }
        }
      })
    }, observerOptions)
    
    setTimeout(() => {
      const sections = ['features', 'solutions', 'case-studies', 'about-us', 'contact']
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId)
        if (element) {
          observer.observe(element)
        }
      })
    }, 200)
    return observer
  }
  
  const contactForm = ref({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    website: '',
    country: '',
    inquiryType: '',
    message: '',
    privacyConsent: false
  })
  
const countryOptions = [
  { value: 'US', label: 'United States' },
  { value: 'UK', label: 'United Kingdom' },
  { value: 'PL', label: 'Poland' },
  { value: 'DE', label: 'Germany' },
  { value: 'FR', label: 'France' },
  { value: 'IT', label: 'Italy' },
  { value: 'ES', label: 'Spain' },
  { value: 'NL', label: 'Netherlands' },
  { value: 'BR', label: 'Brazil' },
  { value: 'JP', label: 'Japan' },
  { value: 'CN', label: 'China' },
  { value: 'IN', label: 'India' },
  { value: 'AU', label: 'Australia' },
  { value: 'CA', label: 'Canada' },
  { value: 'MX', label: 'Mexico' },
  { value: 'SG', label: 'Singapore' },
  { value: 'KR', label: 'South Korea' },
  { value: 'TW', label: 'Taiwan' },
  { value: 'AE', label: 'United Arab Emirates' },
  { value: 'TR', label: 'Turkey' },
  { value: 'SE', label: 'Sweden' },
  { value: 'NO', label: 'Norway' },
  { value: 'DK', label: 'Denmark' },
  { value: 'FI', label: 'Finland' },
  { value: 'CH', label: 'Switzerland' },
  { value: 'AT', label: 'Austria' },
  { value: 'BE', label: 'Belgium' },
  { value: 'CZ', label: 'Czech Republic' },
  { value: 'GR', label: 'Greece' },
  { value: 'PT', label: 'Portugal' },
  { value: 'IE', label: 'Ireland' },
  { value: 'NZ', label: 'New Zealand' },
  { value: 'ZA', label: 'South Africa' },
  { value: 'AR', label: 'Argentina' },
  { value: 'CL', label: 'Chile' },
  { value: 'CO', label: 'Colombia' },
  { value: 'PE', label: 'Peru' },
  { value: 'PH', label: 'Philippines' },
  { value: 'TH', label: 'Thailand' },
  { value: 'VN', label: 'Vietnam' },
  { value: 'ID', label: 'Indonesia' },
  { value: 'MY', label: 'Malaysia' },
  { value: 'HK', label: 'Hong Kong' },
  { value: 'IL', label: 'Israel' },
  { value: 'SA', label: 'Saudi Arabia' },
  { value: 'EG', label: 'Egypt' },
  { value: 'NG', label: 'Nigeria' },
  { value: 'KE', label: 'Kenya' },
  { value: 'Other', label: 'Other' }
]

  const formErrors = ref({
    firstName: '',
    lastName: '',
    email: ''
  })
  
  const isSubmitting = ref(false)
  const showToast = ref(false)
  const toastMessage = ref('')

  const triggerToast = (message) => {
    toastMessage.value = message
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 2500)
  }

  const validateForm = () => {
    const values = contactForm.value
    const errors = {
      firstName: '',
      lastName: '',
      email: ''
    }
    let isValid = true

    if (!values.firstName.trim()) {
      errors.firstName = 'Please enter your first name.'
      isValid = false
    }
    if (!values.lastName.trim()) {
      errors.lastName = 'Please enter your last name.'
      isValid = false
    }
    if (!values.email.trim()) {
      errors.email = 'Please enter your business email.'
      isValid = false
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailPattern.test(values.email)) {
        errors.email = 'Please enter a valid email address.'
        isValid = false
      }
    }

    formErrors.value = errors
    return isValid
  }

  const handleSubmit = () => {
    if (isSubmitting.value) return

    const isValid = validateForm()
    if (!isValid) {
      triggerToast('Please correct the errors in the form.')
      return
    }

    isSubmitting.value = true
    showToast.value = false

    setTimeout(() => {
      isSubmitting.value = false
      triggerToast('Submit success!')
      console.log('Form submitted', contactForm.value)
    }, 2000)
  }
  const testimonials = [
    {
      company: '',
      img: YarnImage,
      logo: YarnLogo,
      title: 'Yarn-Telling Stories, Weaving Communities Together',
      link: '/case/yarn',
      buttonText: 'Learn more',
      metrics: [
        { value: '520%', label: 'Return on ad spend' },
      ],
    },
    {
      company: '',
      img: OnCourtImage,
      logo: OnCourtLogo,
      title: 'Oncourt-Efficient Retargeting for Ecommerce',
      link: '/case/oncourt',
      buttonText: 'Learn more',
    },
    {
      company: 'DHGate',
      logo: WestwingLogo,
      img: Westwing,
      title: 'Westwing Grows Retargeting Revenue with Shopera by 81% over Black Friday',
      link: '/case/westwing',
      buttonText: 'Read more'
    },
    {
      company: 'DHGate',
      logo: LeroyMerlinLogo,
      img: LeroyMerlin,
      title: 'Home & Garden Giant Grows Conversion Value with Retargeting Ads',
      link: '/case/leroyMerlin',
      buttonText: 'Read more'
    },
    {
      company: 'DHGate',
      logo: HerbmedLogo,
      img: Herbmed,
      title: 'Herbmed-Demanding Challenges. CreativeSolutions.',
      link: '/case/herbmed',
      buttonText: 'Read more'
    },
    {
      company: 'DHGate',
      logo: VuxenLogo,
      img: Vuxen,
      title: 'Programmatic Advertising Led to Sustainable ROAS for Vuxen',
      link: '/case/vuxen',
      buttonText: 'Read more'
    },

  ]
  
  const itemsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)
  const currentPage = ref(0)
  
  const visibleTestimonials = computed(() => {
    const result = []
    const startIndex = currentPage.value * itemsPerPage
    for (let i = 0; i < itemsPerPage; i++) {
      const index = startIndex + i
      if (index < testimonials.length) {
        result.push(testimonials[index])
      }
    }
    return result
  })
  
  let autoPlayInterval = null
  
  const prevTestimonial = () => {
    currentPage.value = (currentPage.value - 1 + totalPages) % totalPages
    resetAutoPlay()
  }
  
  const nextTestimonial = () => {
    currentPage.value = (currentPage.value + 1) % totalPages
    resetAutoPlay()
  }
  
  const startAutoPlay = () => {
    autoPlayInterval = setInterval(() => {
      currentPage.value = (currentPage.value + 1) % totalPages
    }, 60000)
  }
  
  const stopAutoPlay = () => {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval)
      autoPlayInterval = null
    }
  }
  
  const resetAutoPlay = () => {
    stopAutoPlay()
    startAutoPlay()
  }
  
  const scrollToContact = () => {
    const element = document.getElementById('contact')
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
  
  let intersectionObserver = null
  
  onMounted(() => {
    startAutoPlay()
    intersectionObserver = setupIntersectionObserver()
  })
  
  onUnmounted(() => {
    stopAutoPlay()
    if (intersectionObserver) {
      intersectionObserver.disconnect()
    }
  })

  const videoCards = [
    {
      img: AudienceImg,
      title: 'Audience',
      text: 'Based on real-time user behavior signalsr, we intelligently identify and scale high-value target audiences for precise reach and efficient conversions',
      linkLabel: 'Learn More'
    },
    {
      img: CreativeImg,
      title: 'Creatives',
      text: 'Leveraging audience insights and product attributes, our platform rapidly produces high-quality, customized ad creatives at scale, enabling personalized marketing on a massive level.n',
      linkLabel: 'Learn More'
    },
    {
      img: ChannelImg,
      title: 'Channels',
      text: 'Our platform orchestrates top-tier global media and directs budgets to the best-performing channels, guaranteeing maximum efficiency for every ad dollar.',
      linkLabel: 'Learn More'
    }
  ]

</script>
  
  <style scoped lang="less">
  .home2 {
    min-height: 100vh;
    background-color: #fff;
    color: #ffffff;
  }
  
  .first-party-header,
  .built-success__grid .success-card,
  .solution-header,
  .solution-grid .solution-card,
  .how-we-work-title,
  .how-we-work-carousel,
  .join-team-content,
  .join-team-section img,
  .contact-form-title,
  .contact-form-container {
    opacity: 0;
    transform: translateY(50px);
  }
  
  /* Fade in up animation */
  .fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .hero-section {
    position: relative;
    padding: 200px 2rem 0 100px;
    overflow: hidden;
    background: linear-gradient(to bottom, #ffffff 0%, #E6EDF8 100%);
    scroll-margin-top: 70px;
  }
  
  .hero-section-container {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    z-index: 1;
  }
  
  .hero-content {
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
  }
  
  .hero-title {
    margin-bottom: 2rem;
  }
  
  .hero-title-line1 {
    font-size: 3.5rem;
    font-weight: 700;
    color: #000;
    // margin: 0 0 0.5rem 0;
    line-height: 1.2;
    font-family: Montserrat-Bold;
  }
  
  .hero-title-line2 {
    font-size: 3.8rem;
    font-weight: 700;
    margin: 0;
    line-height: 1.2;
    font-family: Montserrat-Bold;
    background: linear-gradient(135deg, #3B31E5 0%, #8B5CF6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .hero-description {
    font-size: 1.125rem;
    line-height: 1.6;
    color: #000;
    margin: 0 0 2rem 0;
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-cta-wrapper {
    display: flex;
    justify-content: center;
    margin: 0 0 2rem 0;
  }
  
  .hero-cta-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #000;
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
    font-family: Montserrat-Bold;
    background-color: #ffffff;
    padding: 12px 24px;
    border-radius: 8px;
    transition: opacity 0.2s ease, background-color 0.2s ease;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.05)
  }
  
  .hero-cta-link:hover {
    opacity: 0.9;
    background-color: #f5f5f5;
  }
  
  .hero-cta-link svg {
    width: 16px;
    height: 16px;
    stroke: currentColor;
  }
  
  .hero-logos {
    width: 100%;
    margin: 3rem 0;
  }
  
  .hero-logos-separator {
    width: 100%;
    height: 2px;
    background-color: #dc2626;
    margin-bottom: 2rem;
  }
  
  .hero-logos-wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
    mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
    margin-top: 80px;
    border-top: 1px solid #d4dbe8;
    padding-top: 20px;
  }
  
  .hero-logos-track {
    display: flex;
    align-items: center;
    gap: 4rem;
    animation: slide-left 30s linear infinite;
    will-change: transform;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
  
  @keyframes slide-left {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-50%, 0, 0);
    }
  }
  
  .hero-logo-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    min-width: 120px;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
  
  .hero-logo-item img {
    height: 100%;
    width: auto;
    max-width: 150px;
    object-fit: contain;
    filter: brightness(0);
    opacity: 0.8;
    transition: opacity 0.3s ease;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
  
  .hero-logo-item:hover img {
    opacity: 1;
  }
  
  .hero-principles {
    margin-top: 3rem;
  }
  
  .hero-principles-title {
    font-size: 0.875rem;
    font-weight: 400;
    color: #9ca3af;
    margin: 0 0 1.5rem 0;
    text-transform: none;
    letter-spacing: 0;
  }
  
  .hero-principles-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0 1.25rem;
    font-size: 1rem;
    color: #4b5563;
    font-weight: 400;
  }
  
  .hero-principles-list li {
    position: relative;
    padding: 0;
  }
  
  .hero-principles-list li:not(:last-child)::after {
    content: "·";
    position: absolute;
    right: -0.75rem;
    color: #d1d5db;
    font-weight: 300;
    font-size: 1.2rem;
  }
  
  .hero-publisher-logos {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 2rem;
    margin-bottom: 2.5rem;
  }
  
  .hero-logo-container {
    min-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
  
  .hero-logo-container img {
    width: 100%;
    max-width: 160px;
    min-width: 0;
    height: auto;
    display: block;
    filter: brightness(0) invert(1);
  }
  
  .hero-cta {
    display: flex;
  }
  
  .hero-cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 12px 24px;
    background-color: #ffffff;
    color: #000000;
    border-radius: 6px;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    font-family: Montserrat-Bold;
    transition: background-color 0.2s ease, color 0.2s ease;
  }
  
  .hero-cta-button:hover {
    background-color: #f5f5f5;
  }
  
  .hero-cta-button svg {
    width: 16px;
    height: 16px;
  }
  
  .hero-section-image {
    flex: 0 0 50%;
    max-width: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-left: 1rem;
    padding-top: 20px;
  }
  
  .hero-section-image img {
    width: 100%;
    height: auto;
  }
  .first-party-section {
    padding: 100px 2rem;
    background-color: #fdfeff;
    color: #000000;
    position: relative;
    margin-top: -1px;
    scroll-margin-top: 70px;
  }
  
  .first-party-container {
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 1300px;
  }
  
  .first-party-header {
    text-align: center;
  }
  
  .first-party-title {
    font-size: 3rem;
    line-height: 3.5rem;
    margin: 0 0 1rem 0;
  }
  
  .gradient-text {
    background: #f25600;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .first-party-description {
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin: 0 auto;
    max-width: 720px;
    color: #333333;
    margin-bottom: 20px;
  }
  
  .first-party-tabs {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .first-party-tab-button {
    padding: 12px 28px;
    border-radius: 32px;
    border: 1px solid #333333;
    background-color: transparent;
    color: #333333;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .first-party-tab-button.active {
    background-color: #000;
    border-color: #000;
    color: #ffffff;
  }
  
  .first-party-card {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 2rem;
    background-color: #ffffff;
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    overflow: hidden;
  }
  
  .first-party-card-image {
    position: relative;
    min-height: 400px;
  }
  
  .first-party-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .first-party-card-content {
    padding: 3rem 2.5rem 3rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    justify-content: space-between;
  }
  
  .first-party-card-title {
    font-size: 2rem;
    margin: 0;
  }
  
  .first-party-card-text {
    margin: 0;
    font-size: 1rem;
    line-height: 1.7rem;
    color: #666;
    margin-top: 20px;
  }
  
  .first-party-learn-more {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: 1rem;
    align-self: flex-start;
    font-weight: 600;
    color: #000000;
    text-decoration: none;
    padding: 0.6rem 1.2rem;
    border: 1px solid #000000;
    border-radius: 999px;
    transition: background-color 0.2s ease, color 0.2s ease;
  }
  
  .first-party-learn-more:hover {
    background-color: #000000;
    color: #ffffff;
  }
  
  .first-party-learn-more-icon {
    width: 14px;
    height: 14px;
  }
  
  /* Built for Your Success Section */
  .built-success__header {
    max-width: 780px;
    margin: 0 auto 48px;
    text-align: center;
  }
  
  .built-success__title {
    color: #000000;
    font-size: 36px;
    font-weight: 800;
    line-height: 1.2;
    margin: 0;
    margin-bottom: 16px;
  }
  
  .built-success__subtitle {
    color: #333333;
    font-size: 18px;
    line-height: 1.6;
    margin: 0;
  }
  
  .built-success__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-top: 48px;
  }
  
  .success-card {
    background: #ffffff;
    border-radius: 18px;
    padding: 0px 12px 36px 12px;
    text-align: center;
     //border: 1px solid #e5e5e5;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
//   .success-card:hover {
//     transform: translateY(-4px);
//     box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
//   }
  
  .success-card__icon {
    //width: 80px;
    //height: 80px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    // background: #f8f8f8;
  }
  
  .success-card__icon img {
    width: 180px;
    height: auto;
    object-fit: contain;
  }
  
  .success-card__title {
    color: #000000;
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 12px 0;
    font-family: Montserrat-Medium;
  }
  
  .success-card__desc {
    color: #666666;
    font-size: 15px;
    line-height: 1.6;
    margin: 0;
    //font-family: system-ui !important;
  }
  
  @media (max-width: 1024px) {
    .built-success__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .built-success__grid {
      grid-template-columns: 1fr;
    }
    
    .built-success__title {
      font-size: 28px;
    }
    
    .built-success__subtitle {
      font-size: 16px;
    }
  }
  
  .solution-section {
    padding: 100px 0 68px 0;
    //background: rgba(0, 0, 0, 0.02);
    background: #F8F9FC;
    scroll-margin-top: 70px;
  }
  
  .how-we-work-section {
    padding: 120px 2rem 120px 2rem;
    // background-color: #ffffff;
    scroll-margin-top: 70px;
  }
  
  .how-we-work-container {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  .how-we-work-title {
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #000;
    margin: 0 0 2.5rem 0;
  }
  
  .how-we-work-carousel {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .how-we-work-progress {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .how-we-work-progress-bar {
    flex: 1;
    height: 2px;
    background: repeating-linear-gradient(
      to right,
      #e6e6e6 0,
      #e6e6e6 8px,
      transparent 8px,
      transparent 16px
    );
    position: relative;
    overflow: hidden;
  }
  
  .how-we-work-progress-fill {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: linear-gradient(90deg, #f25600 0%, #3B32E5 100%);
    transition: width 0.3s ease;
  }
  
  .how-we-work-nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .how-we-work-nav-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #e6e6e6;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    color: #333333;
  }
  
  .how-we-work-nav-button:hover {
    border-color: #f25600;
    color: #f25600;
  }
  
  .how-we-work-counter {
    font-size: 0.875rem;
    color: #000;
    font-weight: bold;
    min-width: 50px;
    text-align: center;
  }
  
  .how-we-work-cards {
    display: grid;
   grid-template-columns: 1fr 1fr 1fr;
    position: relative;
    gap: 20px;
  }
  
  .how-we-work-card {
    padding: 2rem;
    padding-right: 2rem;
    padding-left: 0;
    transition: opacity 0.3s ease;
  cursor: pointer;
  }
  
  .how-we-work-card.active {
    opacity: 1;
  }
  
  .how-we-work-card:not(.active):not(.inactive) {
    display: none;
  }
  
  .how-we-work-card-logo {
    margin-bottom: 1rem;
  }
  
  .how-we-work-card-logo img {
    height: 46px;
    width: auto;
    object-fit: contain;
  }

.how-we-work-card-link-wrapper {
  display: block;
  text-decoration: none;
  color: inherit;
}

  .how-we-work-card-img {
    width: 100%;
    height: 260px;
    background-color: #000000;
    border-radius: 16px;
  overflow: hidden;
}

.how-we-work-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  }
  
.how-we-work-card-text {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #000;
  margin: 20px 0 0 0;
  //font-weight: 400;
  font-family: Montserrat;
}

.how-we-work-card-metrics {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.how-we-work-card-metric {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.how-we-work-card-metric-value {
  font-size: 2.1rem;
  font-weight: 700;
  color: #000000;
  margin: 0;
  line-height: 1.2;
  font-family: Montserrat-Medium;
  //font-family: 'proximaNova';
}

.how-we-work-card-metric-label {
  font-size: 1rem;
  color: #B7B7B7;
  margin: 0;
  font-size: 13px;
  font-weight: 400;
}

.how-we-work-card.inactive .how-we-work-card-metric-label {
  color: #999999;
}
  
  .how-we-work-card-author {
    font-size: 1rem;
    font-weight: 600;
    color: #000000;
    margin: 0 0 0.5rem 0;
  }
  
  .how-we-work-card.inactive .how-we-work-card-author {
    color: #999999;
  }
  
  .how-we-work-card-role {
    font-size: 0.9375rem;
    color: #666666;
    margin: 0 0 1.5rem 0;
  }
  
  .how-we-work-card.inactive .how-we-work-card-role {
    color: #999999;
  }
  
  .how-we-work-card-button {
    display: inline-block;
    padding: 12px 24px;
    background-color: #f25600;
    color: #ffffff;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.9375rem;
    transition: background-color 0.2s ease;
  }
  
  .how-we-work-card-button:hover {
    background-color: #d94a00;
  }
  
  .how-we-work-card.inactive .how-we-work-card-button {
    background-color: #ffcccc;
    color: #f25600;
  }
  
  .solution-container {
    max-width: 100%;
    // padding: 0 180px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    text-align: center;
    max-width: 1250px;
  }
  
  .solution-title {
    font-size: 3rem;
    margin: 0 0 1rem 0;
    color: #000;
  }
  
  .solution-description {
    margin: 0;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #333;
    font-weight: 400;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .solution-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  }
  
  .solution-card {
  //background: rgba(0, 0, 0, 0.01);
  position: relative;
  border-radius: 32px;
  height: 360px;
  //border: 1px solid rgba(0, 0, 0, 0.03);
  display: flex;
  padding: 0.5rem 2.75rem 2.5rem 2.75rem;
  text-align: left;
  background: linear-gradient(-118deg, #f8eff3, #cfcffa);
  transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
}

.solution-card::before {
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  content: '';
  background: #F8F9FC;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 30px;
  z-index: -1;
  transition:
    background 0.25s ease,
    width 0.25s ease,
    height 0.25s ease,
    left 0.25s ease,
    top 0.25s ease;
}

.solution-card:hover::before {
  background: #ffffff;
  width: calc(100% - 6px) !important;
  height: calc(100% - 6px) !important;
  left: 3px;
  top: 3px;
}

.solution-card:hover::before {
  background: #ffffff;
}
  
.solution-card-inner {
  display: flex;
  flex-direction: column;
  //gap: 2.5rem;
  width: 100%;
}

.solution-card-icon-placeholder {
  width: 88px;
  height: 88px;
  border-radius: 12px;
  //background: rgba(242, 86, 0, 0.08);
  img {
    width: 100%;
    height: 100%;
  }
}
  
  .solution-card-body {
    display: flex;
    flex-direction: column;
  gap: 0.5rem;
  }
  
  .solution-card-title {
    margin: 0;
  font-size: 1.4rem;
  color: #000;
  font-family: Montserrat-Bold;
  }
  
  .solution-card-text {
    margin: 0;
  font-size: 1rem;
  line-height: 1.6rem;
  color: #000;
  }

.solution-card-link {
  margin-top: 2.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1rem;
  font-weight: 600;
  //color: #111827;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
  position: absolute;
  bottom: 40px;
  color: #3B31E5;
  font-family: Montserrat-Bold;
}

.solution-card-link:hover {
  color: #f25600;
}

.solution-card-link-arrow {
  font-size: 0.85rem;
}
  
  .case-stories-section {
    padding: 140px 2rem 160px;
    background: #ffffff;
  }
  
  .case-stories-wrapper {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
  
  .case-stories-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    align-items: flex-end;
  }
  
  .case-stories-header__text {
    flex: 1 1 100%;
    text-align: center;
  }
  
  .case-stories-title {
    font-size: 3rem;
    line-height: 1.1;
    margin: 0;
    color: #000000;
  }
  
  .case-stories-title .sunrise {
    background: #f25600;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  
  .case-stories-subtitle {
    margin: 0 0 1.5rem;
    color: #4b4b4b;
    max-width: 360px;
  }
  
  .case-stories-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .story-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    border-radius: 999px;
    padding: 0.9rem 1.3rem;
    font-weight: 600;
    text-decoration: none;
    border: 1px solid transparent;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .story-btn svg {
    width: 16px;
    height: 16px;
  }
  
  .story-btn--primary {
    background: #5e3cff;
    color: #fff;
  }
  
  .story-btn--secondary {
    background: transparent;
    border-color: rgba(0, 0, 0, 0.08);
    color: #111;
  }
  
  .story-btn--outline {
    background: transparent;
    border-color: rgba(255, 255, 255, 0.4);
    color: #fff;
    align-self: flex-start;
  }
  
  .story-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.12);
  }
  
  .story-btn--secondary:hover {
    border-color: rgba(0, 0, 0, 0.25);
  }
  
  .story-btn--outline:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
  
  .case-stories-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
  }
  
  .case-story {
    position: relative;
    border-radius: 28px;
    overflow: hidden;
    min-height: 540px;
    transition: background-color 0.3s ease;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
  
  .case-story:hover {
    background: #f8f8fb;
  }
  
  .case-story__inner {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .case-story__face {
    position: absolute;
    inset: 0;
    padding: 2rem 0 2rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 28px;
    transition: opacity 0.35s ease, transform 0.3s ease;
  }
  
  .case-story__front {
    background: #ffffff;
    color: #111;
  }
  
  .case-story__back {
    background: #F7F9FF;
    color: #000;
    opacity: 0;
    transform: translateY(24px);
    pointer-events: none;
  }
  
  .case-story:hover .case-story__front {
    background: #f8f8fb;
    opacity: 0;
    transform: translateY(-20px);
  }
  
  .case-story:hover .case-story__back {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
  
  .case-story--active .case-story__front {
    opacity: 0;
    transform: translateY(-20px);
  }
  
  .case-story--active .case-story__back {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
  
  .case-story__logo {
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    margin-bottom: 0.75rem;
    width: 120px;
  }
  
  .case-story__summary {
    font-size: 1.3rem;
    line-height: 1.6;
    color: inherit;
    padding-right: 20px;
  }
  
  .case-story__front .case-story__summary {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .case-story__category {
    font-size: 0.75rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #000;
    margin-top: 1rem;
  }
  
  .case-story__metrics {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    margin-top: 1rem;
  }
  
  .case-story__metric .metric-value {
    font-size: 1.7rem;
    font-weight: 700;
    margin: 0;
  }
  
  .case-story__metric .metric-label {
    margin: 0;
    font-size: 0.9rem;
    color: #000;
  }
  
  .case-story--image .case-story__front {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.06);
  }
  
  .case-story--text .case-story__back,
  .case-story--active .case-story__back {
    background: #ffffff;
    color: #111;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
  
  .case-story--text .case-story__category,
  .case-story--active .case-story__category {
    color: rgba(0, 0, 0, 0.5);
  }
  
  .case-story--text .case-story__metric .metric-label,
  .case-story--active .case-story__metric .metric-label {
    color: rgba(0, 0, 0, 0.7);
  }
  
  .case-story--text .story-btn--outline,
  .case-story--active .story-btn--outline {
    border-color: rgba(0, 0, 0, 0.15);
    color: #111;
  }
  
  .case-story--text .story-btn--outline:hover,
  .case-story--active .story-btn--outline:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  }
  
  .case-story__image {
    width: 100%;
    height: 280px;
    margin-top: 16px;
    border-radius: 18px 0 0 18px;
    background: #d5d5d5;
  }
  
  .case-story__highlight {
    margin-top: 1rem;
    display: flex;
    align-items: baseline;
    gap: 0.4rem;
  }
  
  .case-story__highlight-value {
    font-size: 2rem;
    font-weight: 700;
  }
  
  .case-story__highlight-label {
    font-size: 0.95rem;
    color: #555;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .join-team-section {
    position: relative;
    border-radius: 30px;
    padding: 10px 0;
    max-width: 1300px;
    margin: 0 auto;
    //background: linear-gradient(107deg,rgba(209,234,255,.81) 47.54%,rgba(255,220,204,.77) 116.24%);
    color: #222;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    scroll-margin-top: 70px;
    gap: 100px;
    ::before {
      content: "";
      pointer-events: none;
      position: absolute;
      top: -32%;
      left: -25%;
      z-index: -1;
      height: 120%;
      width: 150%;
      filter: blur(86px);
      //background: linear-gradient(70deg, rgba(3, 45, 195, .9) 39.12%, rgba(23, 74, 255, .18) 63.38%);
    }
    img {
      width: 45%;
    }
  }
  
  .join-team-content {
    position: relative;
    max-width: 1200px;
    //margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    text-align: left;
  }
  
  .join-team-title {
    font-size: 3rem;
    margin: 0;
    font-weight: 500;
    text-align: center;
    font-family: Montserrat-Medium;
  }
  
  .join-team-description {
    margin: 0;
    font-size: 22px;
    line-height: 36px;
    color: #333;
    font-weight: 400;
    text-align: center;
    font-family: Montserrat-Medium;
  }

.about-row {
  display: flex;
  align-items: center;
  gap: 50px;
  margin-top: 64px;
}

.about-row--mission {
  margin-top: 32px;
}

.about-row-text {
  flex: 1;
  width: 50%;
}

.about-row-image {
  flex: 1;
  width: 50%;
}

.about-row-image img {
  width: 100%;
  height: 380px;
  border-radius: 16px;
  object-fit: cover;
  display: block;
  transform: translateY(0);
  opacity: 1;
}

.our-story-title {
  font-family: Montserrat-Bold;
  /* font-size: 30px; */
}

.about-title {
  margin: 0 0 24px 0;
  font-size: 40px;
  line-height: 1.2;
  color: #000;
  font-family: Montserrat-Medium;
}

.about-text {
  margin: 0;
  font-size: 19px;
  line-height: 32px;
  color: #666;
  font-weight: 400;
}

.about-text-gradient {
  background: linear-gradient(90deg, #f25600 0%, #a229b9 100%);
  background: #f25600;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-family: Montserrat-Medium;
  // color: #000;
}
  
  .join-team-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0.9rem 2.6rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    color: #fdfcfe;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
  }
  
  .join-team-button:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
  
  /* Contact Form Section */
  .contact-form-section {
    padding: 160px 2rem 100px 2rem;
    background-color: #ffffff;
    scroll-margin-top: 70px;
  }
  
  .contact-form-container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
  }
  
  .form-group label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #333333;
  }
  
  .form-input {
    padding: 12px 16px;
    border: 1px solid #d0d0d0;
    border-radius: 8px;
    font-size: 0.9375rem;
    font-family: inherit;
    color: #333333;
    background-color: #ffffff;
    transition: border-color 0.2s;
    width: 100%;
  }

  .form-input.has-error {
    border-color: #ff4d4f;
    box-shadow: 0 0 0 1px rgba(255, 77, 79, 0.2);
  }
  
  .form-input:focus {
    outline: none;
    border-color: #f25600;
  }
  
  .form-input::placeholder {
    color: #999999;
  }
  
  .form-select {
    appearance: none;
    padding-right: 40px;
    cursor: pointer;
  }
  
  .select-arrow {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: #666666;
    margin-top: 12px;
  }
  
  .form-textarea {
    resize: vertical;
    min-height: 120px;
    font-family: inherit;
  }

  .form-error {
    margin-top: 4px;
    font-size: 12px;
    color: #ff4d4f;
  }
  
  .privacy-consent {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
    margin-top: 0.5rem;
  }
  
  .checkbox {
    margin-top: 4px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    flex-shrink: 0;
  }
  
  .privacy-label {
    font-size: 0.875rem;
    line-height: 1.5;
    color: #333333;
    cursor: pointer;
  }
  
  .privacy-link {
    color: #f25600;
    text-decoration: none;
    transition: color 0.2s;
  }
  
  .privacy-link:hover {
    color: #d94a00;
    text-decoration: underline;
  }
  
  .recaptcha-section {
    margin: 1rem 0;
  }
  
  .recaptcha-widget {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background-color: #f8f8f8;
    border-radius: 8px;
  }
  
  .recaptcha-box {
    flex: 1;
  }
  
  .recaptcha-text {
    font-size: 0.75rem;
    color: #666666;
    margin: 0 0 4px 0;
  }
  
  .recaptcha-links {
    font-size: 0.75rem;
    color: #666666;
  }
  
  .recaptcha-link {
    color: #666666;
    text-decoration: none;
    transition: color 0.2s;
  }
  
  .recaptcha-link:hover {
    color: #333333;
    text-decoration: underline;
  }
  
  .recaptcha-icon {
    width: 40px;
    height: 40px;
    background-color: #e0e0e0;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666666;
  }
  
  .submit-btn {
    background-color: #3B31E5;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    padding: 14px 32px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
    align-self: flex-start;
    margin-top: 1rem;
  }
  

  .toast {
    position: fixed;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.85);
    color: #fff;
    padding: 14px 20px;
    border-radius: 8px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
    z-index: 2000;
    font-size: 0.95rem;
  }

  .toast-fade-enter-active,
  .toast-fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
  }

  .toast-fade-enter-from,
  .toast-fade-leave-to {
    opacity: 0;
  transform: translate(-50%, -24px);
  }
  
  @media (max-width: 940px) {
    .hero-section {
      padding: 100px 1.5rem 80px;
    }
    
    .hero-title-line1 {
      font-size: 2.5rem;
    }
    
    .hero-title-line2 {
      font-size: 2.8rem;
    }
    
    .hero-description {
      font-size: 1rem;
    }
    
    .hero-principles-list {
      font-size: 0.9rem;
      gap: 0.5rem 1rem;
    }
  }
  
  @media (max-width: 767.98px) {
    .home2 {
      padding-left: 20px;
      padding-right: 20px;
    }

    .hero-section {
      padding: 80px 1rem 60px;
    }
    
    .hero-title-line1 {
      font-size: 2rem;
    }
    
    .hero-title-line2 {
      font-size: 2.3rem;
    }
    
    .hero-description {
      font-size: 0.95rem;
      padding: 0 1rem;
    }
    
    .hero-principles-list {
      flex-direction: column;
      gap: 0.75rem;
    }
    
    .hero-principles-list li:not(:last-child)::after {
      display: none;
    }
  
    .first-party-card {
      margin-top: 50px;
      grid-template-columns: 1fr;
    }
  
    .how-we-work-cards {
      grid-template-columns: 1fr;
    }
  
    .how-we-work-card.inactive {
      display: none;
    }
  
    .first-party-card-content {
      padding: 2rem;
    }
  
    .solution-grid {
      grid-template-columns: 1fr;
    }
  
    .solution-section {
      padding: 80px 1.5rem 120px;
    }
  
    .case-stories-header {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .case-stories-grid {
      grid-template-columns: 1fr;
    }
    
    .form-row {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 940px) {
    .about-row {
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      width: 100%;
    }

    .about-row--mission {
      flex-direction: column;
    }

    .about-row--story {
      flex-direction: column-reverse;
    }

    .about-row-text,
    .about-row-image {
      width: 100%;
    }

    .about-row-image img {
      max-width: 100%;
      height: 240px;
    }

    .about-title {
      font-size: 36px;
      margin-bottom: 20px;
    }

    .about-text {
      font-size: 17px;
      line-height: 26px;
    }
  }


  .contact-form-title {
    color: #000;
    text-align: center;
    margin-bottom: 50px;
  }
  .submit-btn {
    margin: 0 auto;
    border-radius: 100px;
    margin-top: 20px;
  }
  </style>