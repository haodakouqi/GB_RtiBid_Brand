<template>
  <div id="herbmed-case-page">
    <Header :startTransparent="false" />

    <main class="herbmed-main">
      <section class="herbmed-hero">
        <h1 class="herbmed-hero-title">
          Herbmed – Demanding Challenges. Creative Solutions.
        </h1>
      </section>

      <section class="herbmed-hero-media">
        <div class="herbmed-hero-media-inner">
          <div class="herbmed-cover-wrapper">
            <img
              class="herbmed-cover-image"
              src="https://www.match2one.com/wp-content/uploads/2021/12/Herbmed-customer-cover.png"
              alt="Herbmed customer story cover"
            />
          </div>
          <!-- <div class="herbmed-logo-wrapper">
            <img
              class="herbmed-logo-image"
              src="https://www.match2one.com/wp-content/uploads/2021/12/Herbmed-Logo.png"
              alt="Herbmed logo"
            />
          </div> -->
        </div>
      </section>

      <section class="herbmed-article">
        <div class="herbmed-article-block">
          <p>
            Due to many digital advertising channels restricting ads for the CBD industry, Herbmed needed a scalable
            solution. With Shopera’s platform and skilled customer success team, Herbmed has not only maintained a ROAS
            above 329% but also developed and fine-tuned its messaging.
          </p>
        </div>

        <div class="herbmed-article-block">
          <h2>About</h2>
          <p>
            Since 2015 Herbmed has been at the forefront of the CBD industry, including products such as CBD oils or
            skincare. The e-commerce brand follows a vision to create opportunities for everyone to use safe and
            natural CBD products.
          </p>
          <h3 style="margin-top: 30px;">Why Herbmed?</h3>
          <p>
            Few CBD brands have been in the game as long as Herbmed. They only use ethically-sourced CBD extract from a
            trusted supplier and rely on independent test labs to ensure high quality across their product range.
          </p>
          <p>
            Herbmed focuses much of its communication on educating consumers about the benefits of CBD products, which
            can be used as pain relief, in supplements, or for skincare.
          </p>
          <a href="https://herbmed.se/">
            Read more about Herbmed’s work here.
          </a>
        </div>

        <div class="herbmed-article-block">
          <h2>Challenge</h2>
          <p>
            Even though all psychoactive substances are removed from CBD oils and creams, the industry is still widely
            misunderstood. Consequently, Herbmed has an uphill climb in its marketing efforts.
          </p>
          <h3>Herbmed’s Challenges</h3>
          <p>
            Herbmed’s main marketing activities are centered around website content, email campaigns, influencers, and
            organic social media.
          </p>
          <p>
            Due to many digital advertising channels, such as Facebook and Google Ads, restricting ads for the CBD
            industry, Herbmed needed a scalable solution.
          </p>
          <p>
            They required a channel to grow brand awareness, minimize distrust, and lead the effort to educate the
            market about the proven benefits of CBD products — while increasing sales and maintaining a positive ROI.
          </p>
        </div>

        <div class="herbmed-article-block">
          <h2>Results</h2>
          <p>
            Herbmed’s goal is to maintain a sustainable return on ad spend (ROAS) while continuing to increase brand
            awareness and sales — simple and effective. After seeing the simplicity of the platform and real-time
            reporting in a Shopera demo, the choice was a natural one.
          </p>
          <h3>Goal: High ROAS. Solution: Shopera</h3>
          <p>
            “Shopera has found the perfect synergy between a great self-service advertising platform and creative and
            strategic support for great results,” says George Duckett, Head of Marketing at Herbmed.
          </p>
          <p>
            With Shopera’s platform and skilled customer success team, Herbmed has not only maintained ROAS above 329%
            but also developed and fine-tuned its messaging.
          </p>
          <p>
            With the creative support of a dedicated success manager, Herbmed was able to double its click-through
            rate (CTR).
          </p>
          <p>
            “Our partnership has been great so far. The assistance from our dedicated success manager surpasses my
            expectations. We routinely have follow-ups covering everything from targeting improvements and A/B testing
            to optimization of ads. We continue to see a positive return on ad spend and are very satisfied. I look
            forward to continuing our partnership,” says George Duckett, Head of Marketing, Herbmed.
          </p>
          <h3>Herbmed’s Success: A Quick Summary</h3>
          <p>Shopera’s platform has helped Herbmed with:</p>
          <ul>
            <li>Maintaining a high ROAS</li>
            <li>Increasing conversions</li>
            <li>Creating banner ads directly in the platform</li>
            <li>A/B testing messages and offers</li>
            <li>Finding the right target audience</li>
          </ul>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
</script>

<style scoped>
#herbmed-case-page {
  background-color: #ffffff;
}

.herbmed-main {
  padding: 120px 1.5rem 120px;
}

.herbmed-hero {
  max-width: 1000px;
  margin: 40px auto 0;
  text-align: center;
}

.herbmed-hero-kpi {
  margin: 0 0 12px;
  font-size: 0.95rem;
  color: #6b7280;
}

.herbmed-hero-kpi-label {
  font-size: 1rem;
}

.herbmed-hero-title {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: #111827;
}

.herbmed-hero-media {
  max-width: 1000px;
  margin: 32px auto 0;
}

.herbmed-hero-media-inner {
  position: relative;
  border-radius: 0;
  overflow: hidden;
  width: 600px;
  margin: 0 auto;
}

.herbmed-cover-wrapper {
  width: 100%;
}

.herbmed-cover-image {
  width: 100%;
  height: auto;
  display: block;
}

.herbmed-logo-wrapper {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  background: #ffffff;
  padding: 16px 32px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.25);
}

.herbmed-logo-image {
  height: 60px;
  width: auto;
  display: block;
}

.herbmed-article {
  max-width: 1000px;
  margin: 0 auto;
  background: #ffffff;
  padding: 64px 72px 56px;
  position: relative;
}

.herbmed-article-block + .herbmed-article-block {
  margin-top: 32px;
}

.herbmed-article-block h2 {
  margin: 0 0 16px;
  font-size: 1.35rem;
  font-weight: 600;
  color: #111827;
  font-family: Montserrat-Bold;
}

.herbmed-article-block h3 {
  margin: 26px 0 8px;
  font-size: 1.1rem;
  font-family: Montserrat-Bold;
  color: #666;
}

.herbmed-article-block p {
  margin: 0 0 16px;
  font-size: 1rem;
  line-height: 1.7;
  color: #666;
}

.herbmed-article-block ul {
  margin: 8px 0 16px 1.25rem;
  padding: 0;
}

.herbmed-article-block li {
  font-size: 1rem;
  line-height: 1.7;
  color: #666;
}

@media (max-width: 1024px) {
  .herbmed-main {
    padding: 96px 1.25rem 96px;
  }

  .herbmed-article {
    padding: 40px 32px 40px;
  }

  .herbmed-hero-title {
    font-size: 1.6rem;
  }
}

@media (max-width: 640px) {
  .herbmed-main {
    padding: 80px 1rem 80px;
  }

  .herbmed-article {
    padding: 32px 20px 32px;
  }

  .herbmed-hero-title {
    font-size: 1.4rem;
  }
}
</style>