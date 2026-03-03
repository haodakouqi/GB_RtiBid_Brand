<template>
  <div class="privacy-policy-page">

    <Header></Header>

    <section class="hero-section">
      <div class="bg"></div>
      <div class="hero-content">
        <h3 class="hero-label">PRIVACY</h3>
        <h1 class="hero-title">
          Data Privacy Policy
        </h1>
        <p class="privacy-subtitle">Last updated on Nov. 10, 2025</p>
      </div>
    </section>

    <!-- Tabs Navigation -->
    <div class="tabs-container">
      <div class="tabs-wrapper">

        <!-- Content Panel -->
        <div class="content-panel">
          <div class="content-wrapper">
            <div class="sidebar-nav">
              <div
                v-for="(item, index) in navigationItems"
                :key="index"
                class="nav-item"
              >
                <a
                  :href="`#${item.id}`"
                  :class="['nav-link', { active: activeSection === item.id }]"
                  @click="scrollToSection(item.id, $event)"
                >
                  {{ item.title }}
                </a>
              </div>
            </div>
            <section class="privacy-content">
              <article class="privacy-content__inner">
                <p>This Privacy Policy describes how Shopera Inc. ("we," "us," "our") collects, uses, discloses, and
                  processes personal information in connection with our demand-side platform ("DSP") and related advertising
                  technology services.</p>

                <h2 id="our-services">1. Our Services</h2>
                <p>Shopera provides a technology platform that enables advertisers and agencies to purchase digital
                  advertising inventory ("Ad Inventory") through automated auctions. We do not own or operate the websites or
                  apps where ads are displayed. This policy focuses on data processed in our role as a DSP.</p>

                <h2 id="information-we-collect">2. Information We Collect</h2>
                <p>We collect the following categories of personal information:</p>
                <ul>
                  <li><strong>Device Identifiers and Technical Information:</strong> Cookie IDs, mobile advertising identifiers
                    (e.g., IDFA, GAID), IP address, browser type and version, operating system, device type and model, network
                    connection type.
                  </li>
                  <li><strong>Internet and Network Activity Data:</strong> Information about interactions with ads (e.g.,
                    impressions, clicks), websites or apps visited, and content viewed. This includes data received in bid
                    requests from supply-side platforms (SSPs) and exchanges.
                  </li>
                  <li><strong>Inferred Data and Interest Segments:</strong> Data associated with your device identifier to
                    create interest categories (e.g., "sports enthusiast," "frequent traveler") for ad targeting.
                  </li>
                  <li><strong>Geolocation Data:</strong> Non-precise, city- or zip-code-level location data derived from your IP
                    address.
                  </li>
                  <li><strong>Commercial Information:</strong> Records of ad campaigns served and user interactions with those
                    campaigns.
                  </li>
                  <li><strong>Information from Partners:</strong> We receive data from data providers, advertisers, SSPs, and
                    publishers to facilitate and optimize advertising campaigns.
                  </li>
                </ul>

                <h2 id="how-we-use-your-information">3. How We Use Your Information</h2>
                <p>We use the information we collect for the following business and commercial purposes:</p>
                <ul>
                  <li><strong>Programmatic Advertising:</strong> To facilitate the real-time bidding and placement of ads.</li>
                  <li><strong>Ad Targeting:</strong> To help advertisers deliver relevant ads to audiences likely to be
                    interested in their products or services.
                  </li>
                  <li><strong>Frequency Capping:</strong> To limit the number of times you see the same ad.</li>
                  <li><strong>Ad Measurement and Attribution:</strong> To analyze and report on the performance and delivery of
                    ad campaigns, and to understand the effectiveness of ads (e.g., measuring conversions).
                  </li>
                  <li><strong>Fraud Detection and Security:</strong> To identify and prevent invalid traffic, fraudulent clicks,
                    and other malicious activity.
                  </li>
                  <li><strong>Research and Development:</strong> To improve, test, and enhance the effectiveness of our platform
                    and algorithms.
                  </li>
                </ul>

                <h2 id="how-we-disclose-your-information">4. How We Disclose Your Information</h2>
                <p>We disclose personal information to the following categories of third parties:</p>
                <ul>
                  <li><strong>Advertising Partners:</strong> We share information with advertisers, agencies, SSPs, ad
                    exchanges, and other ad tech partners to enable the buying and selling of Ad Inventory.
                  </li>
                  <li><strong>Service Providers:</strong> We engage vendors to provide services on our behalf, such as data
                    analytics, cloud storage, and technical support.
                  </li>
                  <li><strong>Legal and Compliance:</strong> We may disclose information if required by law, subpoena, or other
                    legal process, or to protect our rights, property, or safety.
                  </li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of all or a portion
                    of our assets.
                  </li>
                </ul>
                <p>Under the California Consumer Privacy Act (CCPA), as amended by the CPRA, sharing personal information with
                  our advertising partners for cross-context behavioral advertising may be considered a "sale" or "sharing." You
                  have the right to opt-out of such "sales" or "sharing."</p>

                <h2 id="cookies-and-similar-technologies">5. Cookies and Similar Technologies</h2>
                <p>We and our partners use cookies, pixels, SDKs, and other tracking technologies to collect and store
                  information about your device and usage. These technologies help us recognize your browser or device across
                  different websites and over time.</p>

                <h2 id="your-choices-and-rights">6. Your Choices and Rights</h2>
                <p>You have control over how your information is used for interest-based advertising:</p>
                <ul>
                  <li><strong>Opt-Out of Interest-Based Advertising:</strong> You can opt-out of having your data used for
                    interest-based advertising by companies participating in the following industry opt-out programs:
                    <ul>
                      <li>Digital Advertising Alliance (DAA): <a href="https://optout.aboutads.info/" target="_blank">https://optout.aboutads.info/</a>
                      </li>
                      <li>Network Advertising Initiative (NAI): <a href="https://optout.networkadvertising.org/"
                                                                   target="_blank">https://optout.networkadvertising.org/</a>
                      </li>
                    </ul>
                  </li>
                  <li><strong>Mobile Opt-Out:</strong> You can reset your mobile advertising identifier or opt-out of
                    personalized ads through your device settings (iOS: Settings > Privacy > Advertising; Android: Settings >
                    Google > Ads).
                  </li>
                  <li><strong>Global Privacy Control (GPC):</strong> We process and respect the GPC signal as a valid opt-out
                    preference for browsers that support it.
                  </li>
                  <li><strong>Consumer Rights Requests (CCPA/CPRA & Other States):</strong> If you are a resident of California,
                    Virginia, Colorado, Connecticut, Utah, or other states with comprehensive privacy laws, you may have the
                    right to:
                    <ul>
                      <li>Know what personal information we have collected about you.</li>
                      <li>Request deletion of your personal information.</li>
                      <li>Correct inaccurate personal information.</li>
                      <li>Opt-out of the "sale" or "sharing" of your personal information.</li>
                      <li>Data portability.</li>
                    </ul>
                    To exercise these rights, please submit a verifiable request to us at privacy@shoperatech.com or through our webform at shoperatech.com.
                  </li>
                  <li><strong>GDPR Rights (EEA/UK):</strong> If our processing of your personal data is subject to GDPR, you
                    have the right to access, rectify, erase, restrict processing, object to processing, and data portability.
                    Please contact us at privacy@shoperatech.com.
                  </li>
                </ul>

                <h2 id="data-retention">7. Data Retention</h2>
                <p>We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy,
                  unless a longer retention period is required or permitted by law. Our standard retention period for log data
                  and user-level data is [e.g., 13, 18, 24] months, after which it is aggregated or deleted.</p>

                <h2 id="data-security">8. Data Security</h2>
                <p>We implement appropriate technical and organizational security measures designed to protect the information
                  we process. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>

                <h2 id="international-data-transfers">9. International Data Transfers</h2>
                <p>We are headquartered in the United States. Information we collect may be transferred to, and processed in,
                  the U.S. or other countries outside of your residence. We ensure such transfers are governed by appropriate
                  safeguards, such as Standard Contractual Clauses.</p>

                <h2 id="childrens-privacy">10. Children's Privacy</h2>
                <p>Our services are not directed to children under the age of 16. We do not knowingly collect personal
                  information from children under 16. If we become aware that we have inadvertently done so, we will take steps
                  to delete such information.</p>

                <h2 id="changes-to-this-policy">11. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting
                  the new policy on our website and updating the "Last Updated" date.</p>

                <h2 id="contact-us">12. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <p>Shopera Inc.<br>
                  <!--          [Your Physical Address]<br>-->
                  privacy@shoperatech.com<br>
                  shoperatech.com</p>
              </article>
            </section>


          </div>
        </div>
      </div>
    </div>
    
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

const activeTab = ref('services')
const activeSection = ref('our-services')

const navigationItems = [
  { id: 'our-services', title: '1. Our Services' },
  { id: 'information-we-collect', title: '2. Information We Collect' },
  { id: 'how-we-use-your-information', title: '3. How We Use Your Information' },
  { id: 'how-we-disclose-your-information', title: '4. How We Disclose Your Information' },
  { id: 'cookies-and-similar-technologies', title: '5. Cookies and Similar Technologies' },
  { id: 'your-choices-and-rights', title: '6. Your Choices and Rights' },
  { id: 'data-retention', title: '7. Data Retention' },
  { id: 'data-security', title: '8. Data Security' },
  { id: 'international-data-transfers', title: '9. International Data Transfers' },
  { id: 'childrens-privacy', title: '10. Children\'s Privacy' },
  { id: 'changes-to-this-policy', title: '11. Changes to This Policy' },
  { id: 'contact-us', title: '12. Contact Us' }
]

const scrollToSection = (id, event) => {
  event.preventDefault()
  activeSection.value = id
  const element = document.getElementById(id)
  if (element) {
    const offset = 100
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const handleScroll = () => {
  const sections = navigationItems.map(item => ({
    id: item.id,
    element: document.getElementById(item.id)
  }))
  
  const scrollPosition = window.scrollY + 150
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section.element) {
      const sectionTop = section.element.offsetTop
      if (scrollPosition >= sectionTop) {
        activeSection.value = section.id
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Check initial scroll position
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.privacy-policy-page {
  min-height: 100vh;
  background-color: #ffffff;
}

/* Hero Section */
.hero-section {
  background: radial-gradient(circle at 15% 20%, rgba(0, 120, 255, 0.65), rgba(4, 13, 60, 0.95)),
  linear-gradient(125deg, #041949 10%, #1a4ff0 60%, #57d1ff 100%);
  padding: 160px 2rem 80px;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.bg {
  background-image: url('https://www.criteo.com/wp-content/themes/criteo2017/img/segments-bg.svg');
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('https://www.criteo.com/wp-content/themes/criteo2017/img/segments-bg.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 1;
}

.privacy-subtitle {
  color: rgba(255, 255, 255, 0.6);
  margin-top: 20px;
  position: relative;
  z-index: 1;
}

.hero-content {
  max-width: 1280px;
  margin: 0 auto;
}

.hero-label {
  color: #fff;
  font-family: 'Inter', Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.hero-title {
  font-family: 'Inter', Arial, sans-serif;
  font-size: 4rem;
  line-height: 4rem;
  font-weight: 400;
  letter-spacing: -0.125rem;
  color: #ffffff;
  margin: 0;
  position: relative;
  z-index: 1;
}

.gradient-text {
  /* background:; */
  /* background-clip: text; */
  /* -webkit-background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
  color: #fff;
}

@media (max-width: 940px) {
  .hero-title {
    font-size: 2.625rem;
    line-height: 2.625rem;
    letter-spacing: -0.0625rem;
  }
}

/* Tabs Container */
.tabs-container {
  background-color: #ffffff;
}

.tabs-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.tabs {
  display: flex;
  gap: 0;
  border-bottom: 1px solid #e5e5e5;
  overflow-x: auto;
}

.tab {
  position: relative;
  background: none;
  border: none;
  padding: 1.5rem 2rem;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
  transition: color 0.25s;
  color: #666666;
  white-space: nowrap;
}

.tab:hover {
  color: #f25600;
}

.tab.active {
  color: #f25600;
}

.tab-title {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5rem;
}

.tab-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #f25600;
}

/* Content Panel */
.content-panel {
  padding: 3rem 0;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 4rem;
  align-items: start;
}

/* Sidebar Navigation */
.sidebar-nav {
  position: sticky;
  top: 120px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-item {
  margin: 0;
}

.nav-link {
  display: block;
  color: #333333;
  text-decoration: none;
  font-size: 0.875rem;
  line-height: 1.5rem;
  padding: 0.5rem 0;
  transition: color 0.25s;
  border-left: 2px solid transparent;
  padding-left: 1rem;
}

.nav-link:hover {
  color: #f25600;
}

.nav-link.active {
  color: #f25600;
  border-left-color: #f25600;
  font-weight: 500;
}

/* Main Content */
.main-content {
  max-width: 800px;
}

.content-title {
  font-size: 2rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.content-link {
  margin-bottom: 2rem;
}

.link {
  color: #f25600;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.25s;
}

.link:hover {
  color: #f25600;
  text-decoration: underline;
}

.content-text {
  color: #333333;
  line-height: 1.8;
}

.content-text p {
  margin-bottom: 1.5rem;
  font-size: 0.9375rem;
}

.content-text em {
  font-style: normal;
  color: #000000;
  font-weight: 500;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  scroll-margin-top: 120px;
}

.section-title:first-of-type {
  margin-top: 0;
}

@media (max-width: 1024px) {
  .content-wrapper {
    grid-template-columns: 200px 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 80px 1.5rem 60px;
  }

  .tabs-wrapper {
    padding: 0 1.5rem;
  }

  .tab {
    padding: 1rem 1.5rem;
  }

  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .sidebar-nav {
    position: static;
    order: 2;
  }

  .main-content {
    order: 1;
  }

  .content-title {
    font-size: 1.75rem;
  }
}


.privacy-content {
  padding: 20px 24px 80px 120px;
}

.privacy-content__inner {
  max-width: 820px;
  margin: 0 auto;
  /* background-color: #ffffff; */
  border-radius: 28px;
  /* box-shadow: 0 80px 120px -80px rgba(15, 23, 42, 0.45); */
  /* padding: clamp(32px, 6vw, 72px); */
  line-height: 1.65;
  font-size: 1.02rem;
}

.privacy-content__inner h2 {
  font-size: clamp(1.35rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: #333;
  margin: 48px 0 16px;
}

.privacy-content__inner h2:first-of-type {
  margin-top: 0;
}

.privacy-content__inner p {
  margin: 0 0 20px;
  color: #333;
}

.privacy-content__inner ul {
  margin: 0 0 20px 1.5em;
  padding: 0;
  list-style: disc;
}

.privacy-content__inner ul ul {
  margin-top: 12px;
  list-style: circle;
}

.privacy-content__inner li {
  margin-bottom: 12px;
  color: #333;
}

.privacy-content__inner strong {
  color: #333;
  font-weight: 700;
}

.privacy-content__inner a {
  color: #f25600;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

.privacy-content__inner a:hover {
  color: #f25600;
}

@media (max-width: 767px) {
  .privacy-hero {
    padding: 96px 20px 120px;
    text-align: left;
  }

  .privacy-hero__inner {
    max-width: 100%;
  }

  .privacy-hero__meta {
    font-size: 1rem;
  }

  .privacy-content {
    padding: 48px 20px 80px;
  }

  .privacy-content__inner {
    padding: 32px 24px 40px;
    border-radius: 20px;
  }
}

</style>
