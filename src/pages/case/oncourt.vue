<template>
  <div id="oncourt-case-page">
    <Header :startTransparent="false" />

    <main class="oncourt-main">
      <section class="oncourt-hero">
        <p class="oncourt-hero-kpi">
          <span class="oncourt-hero-kpi-number">240%</span>
          <span class="oncourt-hero-kpi-label">Return on ad spend</span>
        </p>
        <h1 class="oncourt-hero-title">
          Oncourt – Efficient Retargeting for Ecommerce
        </h1>
      </section>

      <section class="oncourt-hero-media">
        <div class="oncourt-hero-media-inner">
          <div class="oncourt-cover-wrapper">
            <img src="/src/assets/brands/oncourt.webp" alt="">
          </div>
        </div>
      </section>

      <section class="oncourt-article">
        <div class="oncourt-article-block">
          <p>
            Swedish e-commerce, Oncourt, used Shopera to increase online sales. With a CPC of $2.70 and a return of over
            240% of marketing spend, Oncourt saw a 10% cost reduction, allowing them to invest money back into its
            operations and grow their e-commerce.
          </p>
        </div>

        <div class="oncourt-article-block">
          <h2>About</h2>
          <p>
            Oncourt is a Swedish racquet sports equipment retailer. With both a physical presence in Stockholm, Sweden
            and a significant online presence, Oncourt’s business operations saw an uptick in the growth of pickleball
            and other racquet sports in Europe, and wanted to capture a greater share of the marketplace.
          </p>
          <p>
            Oncourt came to Shopera with a mutual vision of driving sales while also building its brand in both
            existing and new markets.
          </p>
        </div>

        <div class="oncourt-article-block">
          <h2>Opportunity</h2>
          <p>
            Shopera helped Oncourt improve their marketing by suggesting their programmatic advertising platform. This platform helped Oncourt attract new customers and bring back previous website visitors at a lower cost. Shopera’s prospecting function helped Oncourt enhance their brand and Retargeting boosted sales and drive down CPA.
          </p>
        </div>

        <div class="oncourt-article-block">
          <h2>Results</h2>
          <ul>
            <li>
              Oncourt’s native ad campaign resulted in 2.42x ROAS, exceeding its goal of 2x.
            </li>
            <li>
              Oncourt’s cost-per-click (CPC) of $2.70 and cost per one thousand impressions (CPM) of $2.56 represented a 9% cost reduction, allowing Oncourt to invest money back into its operations.
            </li>
          </ul>
        </div>

        <section class="oncourt-hero-media">
        <div class="oncourt-hero-media-inner">
          <div class="oncourt-cover-wrapper" style="height: 400px;">
            <img src="/src/assets/oncourt-case.webp" alt="">
          </div>
        </div>
      </section>


        <div style="margin-top: 30px;" class="oncourt-article-block">
          <!-- <h2>Achieve more with AI powered display advertising</h2> -->
          <p>“Shopera’s user-friendly platform, exceptional customer success team, and powerful AI made it an ideal programmatic partner for Oncourt in our quest to become Europe’s largest racquet sports retailer.”</p>
          <p>——— Simon Dimopoulos, E-Commerce Manager</p>
        </div>

        <div class="oncourt-metrics">
          <div class="oncourt-metric">
            <span class="oncourt-metric-value">240%</span>
            <span class="oncourt-metric-label">Return on ad spend</span>
          </div>
          <div class="oncourt-metric">
            <span class="oncourt-metric-value">242%</span>
            <span class="oncourt-metric-label">ROAS</span>
          </div>
          <div class="oncourt-metric">
            <span class="oncourt-metric-value">$2.70</span>
            <span class="oncourt-metric-label">Cost per click</span>
          </div>
          <div class="oncourt-metric">
            <span class="oncourt-metric-value">10%</span>
            <span class="oncourt-metric-label">Cost reduction</span>
          </div>
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
#oncourt-case-page {
  background-color: #ffffff;
}

.oncourt-main {
  padding: 120px 1.5rem 120px;
}

.oncourt-hero {
  max-width: 1000px;
  margin: 40px auto 0;
  text-align: center;
}

.oncourt-hero-kpi {
  margin: 0 0 12px;
  font-size: 0.95rem;
  color: #374151;
}

.oncourt-hero-kpi-number {
  font-size: 1.4rem;
  font-weight: 700;
  color: #f25600;
  margin-right: 4px;
}

.oncourt-hero-title {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: #111827;
}

.oncourt-hero-media {
  max-width: 1000px;
  margin: 32px auto 0;
}

.oncourt-hero-media-inner {
  position: relative;
  border-radius: 0;
  overflow: hidden;
}

.oncourt-cover-wrapper {
  height: 300px;
  width: 800px;
  margin: 0 auto;
}

.oncourt-cover-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.oncourt-logo-wrapper {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  background: #ffffff;
  padding: 16px 32px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.25);
}

.oncourt-logo-image {
  height: 56px;
  width: auto;
  display: block;
}

.oncourt-article {
  max-width: 1000px;
  margin: 0 auto;
  background: #ffffff;
  padding: 64px 72px 56px;
  position: relative;
}

.oncourt-article-block + .oncourt-article-block {
  margin-top: 32px;
}

.oncourt-article-block h2 {
  margin: 0 0 16px;
  font-size: 1.35rem;
  font-weight: 600;
  color: #111827;
}

.oncourt-article-block p {
  margin: 0 0 16px;
  font-size: 1rem;
  line-height: 1.7;
  color: #374151;
}

.oncourt-article-block ul {
  margin: 8px 0 16px 1.25rem;
  padding: 0;
}

.oncourt-article-block li {
  font-size: 1rem;
  line-height: 1.7;
  color: #374151;
}

.oncourt-metrics {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
  border-top: 1px solid #e5e7eb;
  padding-top: 24px;
}

.oncourt-metric {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.oncourt-metric-value {
  font-size: 1.35rem;
  font-weight: 700;
  color: #111827;
}

.oncourt-metric-label {
  font-size: 0.9rem;
  color: #6b7280;
}

@media (max-width: 1024px) {
  .oncourt-main {
    padding: 96px 1.25rem 96px;
  }

  .oncourt-article {
    padding: 40px 32px 40px;
  }

  .oncourt-hero-title {
    font-size: 1.6rem;
  }

  .oncourt-metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .oncourt-main {
    padding: 80px 1rem 80px;
  }

  .oncourt-article {
    padding: 32px 20px 32px;
  }

  .oncourt-hero-title {
    font-size: 1.4rem;
  }

  .oncourt-metrics {
    grid-template-columns: 1fr;
  }
}
</style>