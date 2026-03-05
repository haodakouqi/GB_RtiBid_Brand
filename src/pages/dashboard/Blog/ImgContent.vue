<template>
  <div class="blog-container">
    <div class="blog-wrapper">
      <div class="blog-grid">
        <!-- 卡片1 -->
        <div class="blog-card">
          <div class="card-image">
            <img src="https://picsum.photos/id/870/800/450" alt="AI-Driven DSPs" />
          </div>
          <div class="card-content">
            <h3 class="card-title">Why AI-Driven DSPs Are the Future of Ecommerce Advertising</h3>
            <p class="card-desc">
              The rise of AI-driven platforms has revolutionized the world of digital advertising, particularly for ecommerce brands looking to...
            </p>
            <a href="#" class="read-more">Read More →</a>
          </div>
        </div>

        <!-- 卡片2 -->
        <div class="blog-card">
          <div class="card-image">
            <img src="https://picsum.photos/id/180/800/450" alt="Predictive Bidding" />
          </div>
          <div class="card-content">
            <h3 class="card-title">Rtibid's Predictive Bidding: How AI Helps Maximize Ecommerce ROI</h3>
            <p class="card-desc">
              The challenge for many ecommerce advertisers is maximizing ROI while minimizing waste. Rtibid's predictive bidding technology solves t...
            </p>
            <a href="#" class="read-more">Read More →</a>
          </div>
        </div>

        <!-- 卡片3 -->
        <div class="blog-card">
          <div class="card-image">
            <img src="https://picsum.photos/id/425/800/450" alt="Dynamic Product Recommendations" />
          </div>
          <div class="card-content">
            <h3 class="card-title">Rtibid's AI-Powered Dynamic Product Recommendations</h3>
            <p class="card-desc">
              One of the key drivers of ecommerce success is personalized recommendations. Rtibid's AI-powered product recommendations engine d...
            </p>
            <a href="#" class="read-more">Read More →</a>
          </div>
        </div>

        <!-- 卡片4 -->
        <div class="blog-card">
          <div class="card-image">
            <img src="https://picsum.photos/id/412/800/450" alt="Contextual Advertising" />
          </div>
          <div class="card-content">
            <h3 class="card-title">The Future of Contextual Advertising: Rtibid's AI-Powered Approach</h3>
            <p class="card-desc">
              As privacy regulations continue to tighten, contextual advertising is becoming an increasingly popular alternative to traditional b...
            </p>
            <a href="#" class="read-more">Read More →</a>
          </div>
        </div>

        <!-- 卡片5 -->
        <div class="blog-card">
          <div class="card-image">
            <img src="https://picsum.photos/id/433/800/450" alt="Full-Funnel Advertising" />
          </div>
          <div class="card-content">
            <h3 class="card-title">Rtibid's Full-Funnel Advertising Solution for Ecommerce</h3>
            <p class="card-desc">
              Ecommerce brands need to engage customers across every stage of the buyer journey. Rtibid provides a full-funnel advertising solution that...
            </p>
            <a href="#" class="read-more">Read More →</a>
          </div>
        </div>

        <!-- 卡片6 -->
        <div class="blog-card">
          <div class="card-image">
            <img src="https://picsum.photos/id/48/800/450" alt="Performance Marketing" />
          </div>
          <div class="card-content">
            <h3 class="card-title">Rtibid's AI-Powered Performance Marketing: A Game Changer for ...</h3>
            <p class="card-desc">
              As competition in the ecommerce space continues to grow, brands need smarter advertising solutions to stay ahead. Rtibid's A...
            </p>
            <a href="#" class="read-more">Read More →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑可在此扩展
</script>

<style lang="less" scoped>
.blog-container {
  width: 100%;
  padding: 24px 0;

  .blog-wrapper {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;

    .blog-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;

      .blog-card {
        background: #fff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.2s ease;

        &:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .card-image {
          width: 100%;
          height: 220px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }

          &:hover img {
            transform: scale(1.05);
          }
        }

        .card-content {
          padding: 20px;

          .card-title {
            font-size: 18px;
            font-weight: 600;
            line-height: 1.4;
            color: #111;
            margin: 0 0 12px;
          }

          .card-desc {
            font-size: 14px;
            line-height: 1.6;
            color: #555;
            margin: 0 0 16px;
          }

          .read-more {
            font-size: 14px;
            font-weight: 500;
            color: #0066cc;
            text-decoration: none;
            transition: color 0.2s ease;

            &:hover {
              color: #004c99;
            }
          }
        }
      }
    }
  }

  // 响应式断点：768px 以下
  @media (max-width: 768px) {
    .blog-wrapper {
      padding: 0 16px;

      .blog-grid {
        grid-template-columns: repeat(1, 1fr);
        gap: 16px;

        .blog-card {
          .card-image {
            height: 180px;
          }

          .card-content {
            padding: 16px;

            .card-title {
              font-size: 16px;
            }

            .card-desc {
              font-size: 13px;
            }
          }
        }
      }
    }
  }

  // 响应式断点：769px - 1024px
  @media (min-width: 769px) and (max-width: 1024px) {
    .blog-wrapper {
      .blog-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
}
</style>