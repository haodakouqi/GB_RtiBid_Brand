<template>
  <div class="blog-container">
    <div class="blog-wrapper">
      <div class="blog-grid">
        <div v-for="blog in blogs" :key="blog.id" class="blog-card">
          <div class="card-image">
            <img :src="blog.image" :alt="blog.alt" />
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ blog.articleTitle }}</h3>
            <p class="card-desc">
              {{ blog.metaDescription }}
            </p>
            <a href="javascript:void(0)" class="read-more" @click="handleScroll(blog.id)">Read More →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { GlHookuseRouter } from '@/utils/methods'
// import { useRouter as vueUseRouter, useRoute as vueUseRoute } from 'vue-router'
const router = GlHookuseRouter()

import detailOptions from '../Detail/detailOptions.js';

const blogs = detailOptions.slice(0, 6);
// 锚点平滑滚动方法
const handleScroll = (name) => {
  router.push('Detail', {
    name: name
  })
}
</script>

<style lang="less" scoped>
.blog-container {
  width: 100%;
  padding: 50px 0 69px;

  .blog-wrapper {
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 24px;

    .blog-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;

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
            margin: 0 0 12px;
            color: #101828;
            font-family: Inter;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 28px; /* 140% */
            letter-spacing: -0.449px;
          }

          .card-desc {
            font-size: 16px;
            line-height: 1.6;
            color: #4A5565;
            margin: 0 0 16px;
          }

          .read-more {
            color: var(--brand, #155DFC);
            font-family: Inter;
            font-size: 16px;
            line-height: 26px; /* 162.5% */
            font-style: normal;
            font-weight: 600;
            letter-spacing: -0.312px;
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