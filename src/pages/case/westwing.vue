<template>
  <div id="westwing-case-page">
    <Header :startTransparent="false" />

    <main class="westwing-main">
      <section class="westwing-hero">
<!--        <p class="westwing-hero-kpi">-->
<!--          <span class="westwing-hero-kpi-number">81%</span>-->
<!--          <span class="westwing-hero-kpi-label">Increase in retargeting revenue over Black Friday</span>-->
<!--        </p>-->
        <h1 class="westwing-hero-title">
          Westwing Grows Retargeting Revenue with Shopera by 81% over Black Friday
        </h1>
      </section>

      <div class="westwing-hero-media">
        <div class="westwing-hero-media-inner">
          <img src="/src/assets/brands/westwing.jpg" alt="Westwing" />
        </div>
      </div>

      <section class="westwing-article">
        <div class="westwing-article-block">
          <div class="westwing-section-header">
            <span class="westwing-section-label">INTRODUCTION</span>
            <h3 class="westwing-section-title">About the client</h3>
          </div>
          <p>
            Westwing is a home decor, design, and lifestyle platform that brings more beauty to its customers. Through
            three main channels — Clube, Now, and Lojas — the brand curates inspirational products from renowned names
            in the market, such as Le Creuset, Kitchenaid, and Luiza Perea, as well as its own brand, the Westwing
            Collection.
          </p>
          <p>
            In 2011, the company entered the Brazilian market as a subsidiary of the German group Westwing. The company
            has been working with Shopera since 2020 to implement Deep Learning‑based retargeting campaigns.
          </p>
        </div>

        <div class="westwing-quote-section">
          <h3 class="westwing-quote-title">
            <span class="westwing-quote-title-normal">What they say </span>
            <span class="westwing-quote-title-gradient">about us</span>
          </h3>
          <div class="westwing-quote-block">
            <!-- <div class="westwing-quote-icon">"</div> -->
            <div class="westwing-quote-content">
              <blockquote class="westwing-quote">
                "The partnership with Shopera was instrumental in increasing the scale of retargeting campaigns on
                <span class="westwing-quote-highlight">WestwingClube</span> and <span class="westwing-quote-highlight">WestwingNow</span>. Our budget allocation was even more effective with them, which drove revenue
                growth and stable YOY ROI, even during Black Friday, the most challenging and competitive period for us in
                Brazil."
              </blockquote>
              <p class="westwing-quote-author">
                Samantha Araujo
                <span class="westwing-quote-author-role">
                  — Head of Growth at Westwing
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="westwing-article-block">
          <div class="westwing-section-header">
            <span class="westwing-section-label">DESCRIPTION</span>
            <h3 class="westwing-section-title">The challenge</h3>
          </div>
          <p>
            Black Friday is the busiest period for retail in Brazil and a major focus for interior design brands.
            However, in 2022, it coincided with the opening weekend of the football World Cup, meaning any promotions
            would have to compete for the nation's attention.
          </p>
          <p>
            Shopera had to bring greater scale and revenue to Westwing's two websites while maintaining their ROI goals
            in a fast‑paced, highly competitive retail sector.
          </p>
        </div>

        <div class="westwing-article-block">
          <div class="westwing-section-header">
            <span class="westwing-section-label">STORY</span>
            <h3 class="westwing-section-title">The solution</h3>
          </div>
          <p>
            Shopera and Westwing worked closely to develop the best media strategy to deliver on campaign goals. To
            anticipate Black Friday, account managers divided Westwing products into categories and promotional periods
            and created highly engaging dedicated banners for retargeting campaigns. This strategy helped drive
            incremental sales throughout the month.
          </p>
          <p>
            Our Deep Learning‑powered campaigns maximized conversions by delivering targeted, personalized ads with
            relevant product recommendations to customers who were ready to buy.
          </p>
        </div>

        <div class="westwing-article-block">
          <div class="westwing-section-header">
            <span class="westwing-section-label">SUCCESS</span>
            <h3 class="westwing-section-title">The result</h3>
          </div>
          <p>
            Despite the World Cup opening and a 1% year‑over‑year decline in Black Friday month e‑commerce sales in
            Brazil, Westwing campaigns carried out with Shopera exceeded the company’s established goals.
          </p>
          <p>
            They delivered an 81% increase in revenue from October to November 2022 while keeping ROI stable. Compared
            to the previous November, the campaigns achieved a 70% increase in revenue.
          </p>
          <p>
            Deep Learning‑powered ad campaigns are able to better serve relevant creatives to individuals and predict
            buyer intent. This smarter use of campaign resources led to significantly stronger results for Westwing
            during Black Friday.
          </p>
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
#westwing-case-page {
  background-color: #ffffff;
}

.westwing-main {
  padding: 120px 1.5rem 120px;
}

.westwing-hero {
  max-width: 1000px;
  margin: 40px auto 0;
  text-align: center;
}

.westwing-hero-kpi {
  margin: 0 0 12px;
  font-size: 0.95rem;
  color: #374151;
}

.westwing-hero-kpi-number {
  font-size: 1.4rem;
  font-weight: 700;
  color: #10b981;
  margin-right: 4px;
}

.westwing-hero-title {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: #111827;
}

.westwing-hero-media {
  max-width: 800px;
  margin: 32px auto 0;
}

.westwing-hero-media-inner {
  width: 800px;
  height: 360px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 24px;
}

.westwing-hero-media-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.westwing-article {
  max-width: 1000px;
  margin: 32px auto 0;
  background: #ffffff;
  padding: 64px 72px 56px;
  position: relative;
}

.westwing-article-block + .westwing-article-block {
  margin-top: 32px;
}

.westwing-section-header {
  border-radius: 8px;
  padding: 24px 20px 24px 0px;
  background: #ffffff;
}

.westwing-section-label {
  display: block;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 600;
  color: #f25600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.westwing-section-title {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  text-align: left;
  line-height: 1.3;
}

.westwing-article-block p {
  margin: 0 0 16px;
  font-size: 1rem;
  line-height: 1.7;
  color: #374151;
}

.westwing-quote-section {
  margin: 48px 0;
  text-align: center;
  position: relative;
}

.westwing-quote-title {
  margin: 0 0 48px;
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
}

.westwing-quote-title-normal {
  color: #111827;
}

.westwing-quote-title-gradient {
    color: #f25600;
  /* background: linear-gradient(90deg, #f25600 0%, #a229b9 100%); */
  /* -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; */
  font-weight: 700;
}

.westwing-quote-block {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 48px 56px 40px 80px;
  border-radius: 24px;
  background: #ffffff;
  text-align: left;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}

.westwing-quote-block::before {
  content: '';
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: radial-gradient(ellipse at bottom left, rgba(248, 239, 243, 0.8) 0%, transparent 50%),
              radial-gradient(ellipse at top right, rgba(207, 207, 250, 0.6) 0%, transparent 50%);
  border-radius: 24px;
  z-index: -1;
  pointer-events: none;
}

.westwing-quote-icon {
  position: absolute;
  left: 20px;
  top: 32px;
  font-size: 5rem;
  font-weight: 700;
  color: #a229b9;
  line-height: 1;
  font-family: Georgia, serif;
}

.westwing-quote-content {
  position: relative;
  z-index: 1;
}

.westwing-quote {
  margin: 0 0 24px;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #111827;
  font-style: normal;
  padding: 0;
  border: none;
}

.westwing-quote-highlight {
  color: #f25600;
  font-weight: 600;
}

.westwing-quote-author {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
}

.westwing-quote-author-role {
  font-weight: 400;
  color: #6b7280;
  font-size: 0.95rem;
}

@media (max-width: 1024px) {
  .westwing-main {
    padding: 96px 1.25rem 96px;
  }

  .westwing-hero-media-inner {
    width: 100%;
    height: 260px;
  }

  .westwing-article {
    padding: 40px 32px 40px;
  }

  .westwing-hero-title {
    font-size: 1.6rem;
  }

  .westwing-quote-title {
    font-size: 2rem;
  }

  .westwing-quote-block {
    padding: 40px 40px 32px 70px;
  }

  .westwing-quote-icon {
    font-size: 4rem;
    left: 16px;
    top: 28px;
  }

  .westwing-section-header {
    padding: 24px 20px 24px 0px;
  }

  .westwing-section-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 640px) {
  .westwing-main {
    padding: 80px 1rem 80px;
  }

  .westwing-article {
    padding: 32px 20px 32px;
  }

  .westwing-hero-title {
    font-size: 1.4rem;
  }

  .westwing-section-header {
    padding: 14px 16px;
  }

  .westwing-section-label {
    font-size: 0.7rem;
  }

  .westwing-section-title {
    font-size: 1.35rem;
  }

  .westwing-quote-title {
    font-size: 1.75rem;
    margin-bottom: 32px;
  }

  .westwing-quote-block {
    padding: 32px 24px 24px 60px;
  }

  .westwing-quote-icon {
    font-size: 3.5rem;
    left: 12px;
    top: 24px;
  }

  .westwing-quote {
    font-size: 1rem;
  }
}
</style>