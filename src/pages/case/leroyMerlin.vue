<template>
  <div id="leroy-case-page">
    <Header :startTransparent="false" />

    <main class="leroy-main">
      <section class="leroy-hero">
        <p class="leroy-hero-kpi">
          <span class="leroy-hero-kpi-label">High-performance retargeting for DIY &amp; home improvement</span>
        </p>
        <h1 class="leroy-hero-title">
          Leroy Merlin – Demanding Retargeting Goals, Measurable Results
        </h1>
      </section>

      <div class="leroy-hero-media">
        <div class="leroy-hero-media-inner">
          <img src="/src/assets/brands/leroymerlin.png" alt="Leroy Merlin" />
        </div>
      </div>

      <section class="leroy-article">
        <div class="leroy-article-intro leroy-article-block">
          <div class="leroy-section-header">
            <span class="leroy-section-label">INTRODUCTION</span>
            <h3 class="leroy-section-title">About the client</h3>
          </div>
          <p>
            Leroy Merlin is the leading French omnichannel retail brand in DIY and home improvement. The company is part
            of Adeo, the third-largest DIY market player in the world. With a strong focus on innovative omnichannel
            customer experiences, its digital sales tripled between 2019 and 2021, making Leroy Merlin France one of the
            top French e‑commerce websites.
          </p>
        </div>

        <div class="leroy-quote-section">
          <h3 class="leroy-quote-title">
            <span class="leroy-quote-title-normal">What they say </span>
            <span class="leroy-quote-title-gradient">about us</span>
          </h3>
          <div class="leroy-quote-block">
            <!-- <div class="leroy-quote-icon">"</div> -->
            <div class="leroy-quote-content">
              <blockquote class="leroy-quote">
                "Convinced by the potential of the retargeting channel, Shopera has enabled Leroy Merlin France to develop
                traffic and sales accordingly while meeting strict ROAS performance objectives. An innovative approach,
                transparency, and the client-side team's support have been the keys to this ongoing success."
              </blockquote>
              <p class="leroy-quote-author">
                Pol‑Amaury Cresp
                <span class="leroy-quote-author-role">
                  — Traffic, Media, and CRM Manager at Leroy Merlin France
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="leroy-article-block">
          <div class="leroy-section-header">
            <span class="leroy-section-label">DESCRIPTION</span>
            <h3 class="leroy-section-title">The challenge</h3>
          </div>
          <p>
            Leroy Merlin France set out to challenge its existing retargeting activities in order to achieve better
            performance. The new strategy needed to respect strict values such as transparency, brand safety and client
            exposure capping. The main challenge for Shopera was to complement existing channels while meeting clearly
            defined ROAS performance indicators.
          </p>
        </div>

        <div class="leroy-article-block">
          <div class="leroy-section-header">
            <span class="leroy-section-label">STORY</span>
            <h3 class="leroy-section-title">The solution</h3>
          </div>
          <p>
            The Shopera team first outlined projections for the campaign, setting a strong ROI goal from the outset. We
            used metrics from the client's site — such as average order value and conversion rate — to establish this
            goal and then set about finding the right campaign mix to hit the targets.
          </p>
          <p>
            The campaign utilized classic retargeting banners, leveraging templates designed in‑house by Shopera. With a
            wide inventory comprising the Leroy Merlin product offering, it was imperative to ensure that all products
            in the feed could be shown in ads and that precise tags were used to define individual users within the
            audience. This allowed us to show relevant products to individual shoppers and optimize campaign efficiency.
          </p>
        </div>

        <div class="leroy-article-block">
          <div class="leroy-section-header">
            <span class="leroy-section-label">SUCCESS</span>
            <h3 class="leroy-section-title">The result</h3>
          </div>
          <p>
            Although the initial projections for the campaign were ambitious, Shopera was able to meet and exceed the
            expectations of Leroy Merlin France. Strong performance in the opening months allowed both teams to review
            projections and adjust the budget, switching over to a permanent campaign model after just three months.
          </p>
          <p>
            Leroy Merlin France ultimately saw a threefold increase in Return on Ad Spend (ROAS) and a 9x increase in
            conversion value from retargeting ads, turning retargeting into a reliable and scalable growth channel.
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
#leroy-case-page {
  background-color: #ffffff;
}

.leroy-main {
  padding: 120px 1.5rem 120px;
}

.leroy-hero {
  max-width: 1000px;
  margin: 40px auto 0;
  text-align: center;
}

.leroy-hero-kpi {
  margin: 0 0 12px;
  font-size: 0.95rem;
  color: #6b7280;
}

.leroy-hero-kpi-label {
  font-size: 1rem;
}

.leroy-hero-title {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: #111827;
}

.leroy-hero-media {
  max-width: 800px;
  margin: 32px auto 0;
}

.leroy-hero-media-inner {
  width: 800px;
  height: 360px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 24px;
}

.leroy-hero-media-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.leroy-article {
  max-width: 1000px;
  margin: 32px auto 0;
  background: #ffffff;
  padding: 64px 72px 56px;
  position: relative;
}

.leroy-article-block + .leroy-article-block {
  margin-top: 32px;
}

.leroy-section-header {
  border-radius: 8px;
  padding: 24px 20px 24px 0px;
  background: #ffffff;
}

.leroy-section-label {
  display: block;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 600;
  color: #f25600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.leroy-section-title {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  text-align: left;
  line-height: 1.3;
}

.leroy-article-block p {
  margin: 0 0 16px;
  font-size: 1rem;
  line-height: 1.7;
  color: #374151;
}

.leroy-quote-section {
  margin: 48px 0;
  text-align: center;
  position: relative;
}

.leroy-quote-title {
  margin: 0 0 48px;
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
}

.leroy-quote-title-normal {
  color: #111827;
}

.leroy-quote-title-gradient {
    color: #f25600;
  /* background: linear-gradient(90deg, #f25600 0%, #a229b9 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700; */
}

.leroy-quote-block {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 48px 56px 40px 80px;
  border-radius: 24px;
  background: #ffffff;
  text-align: left;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}

.leroy-quote-block::before {
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

.leroy-quote-icon {
  position: absolute;
  left: 20px;
  top: 32px;
  font-size: 5rem;
  font-weight: 700;
  color: #a229b9;
  line-height: 1;
  font-family: Georgia, serif;
}

.leroy-quote-content {
  position: relative;
  z-index: 1;
}

.leroy-quote {
  margin: 0 0 24px;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #111827;
  font-style: normal;
  padding: 0;
  border: none;
}

.leroy-quote-highlight {
  color: #f25600;
  font-weight: 600;
}

.leroy-quote-author {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
}

.leroy-quote-author-role {
  font-weight: 400;
  color: #6b7280;
  font-size: 0.95rem;
}

@media (max-width: 1024px) {
  .leroy-main {
    padding: 96px 1.25rem 96px;
  }

  .leroy-hero-media-inner {
    width: 100%;
    height: 260px;
  }

  .leroy-article {
    padding: 40px 32px 40px;
  }

  .leroy-hero-title {
    font-size: 1.6rem;
  }

  .leroy-section-header {
    padding: 24px 20px 24px 0px;
  }

  .leroy-section-title {
    font-size: 1.5rem;
  }

  .leroy-quote-title {
    font-size: 2rem;
  }

  .leroy-quote-block {
    padding: 40px 40px 32px 70px;
  }

  .leroy-quote-icon {
    font-size: 4rem;
    left: 16px;
    top: 28px;
  }
}

@media (max-width: 640px) {
  .leroy-main {
    padding: 80px 1rem 80px;
  }

  .leroy-article {
    padding: 32px 20px 32px;
  }

  .leroy-hero-title {
    font-size: 1.4rem;
  }

  .leroy-section-header {
    padding: 24px 20px 24px 0px;
  }

  .leroy-section-label {
    font-size: 0.7rem;
  }

  .leroy-section-title {
    font-size: 1.35rem;
  }

  .leroy-quote-title {
    font-size: 1.75rem;
    margin-bottom: 32px;
  }

  .leroy-quote-block {
    padding: 32px 24px 24px 60px;
  }

  .leroy-quote-icon {
    font-size: 3.5rem;
    left: 12px;
    top: 24px;
  }

  .leroy-quote {
    font-size: 1rem;
  }
}
</style>