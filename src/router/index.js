import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../pages/dashboard/index.vue'

// import PrivacyPolicy from '../pages/common/PrivicyPolicy.vue'

// import Home from '../pages/Home.vue'
// import YarnCase from '../pages/case/yarn.vue'
// import OnCourtCase from '../pages/case/oncourt.vue'
// import herbmedCase from '../pages/case/herbmed.vue'
// import VuxenCase from '../pages/case/vuxen.vue'
// import LeroyMerlinCase from '../pages/case/leroyMerlin.vue'
// import WestwingCase from '../pages/case/westwing.vue'

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: '/',
    name: 'dashboard',
    component: dashboard,
    children: [
      {
        "path": "/home",
        "name": "home",
        "meta": {
          title: '',
        },
        component: () => import('@/pages/dashboard/home/index.vue')
      },
      {
        "path": "/technology",
        "name": "technology",
        "meta": {
          title: '',
        },
        component: () => import('@/pages/dashboard/Technology/index.vue')
      },
      {
        "path": "/AboutUs",
        "name": "AboutUs",
        "meta": {
          title: '',
        },
        component: () => import('@/pages/dashboard/AboutUs/index.vue')
      },
      {
        "path": "/Blog",
        "name": "Blog",
        "meta": {
          title: '',
        },
        component: () => import('@/pages/dashboard/Blog/index.vue')
      },
      {
        "path": "/GetStarted",
        "name": "GetStarted",
        "meta": {
          title: '',
        },
        component: () => import('@/pages/dashboard/GetStarted/index.vue')
      }
      
    ]
  },

  // {
  //   path: '/privacy-center',
  //   name: 'PrivacyPolicy',
  //   component: PrivacyPolicy
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 配置滚动行为，使页面切换时滚动条重置为0
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置，则恢复到该位置
    if (savedPosition) {
      return savedPosition
    }
    // 否则滚动到顶部
    return { top: 0, left: 0 }
  }
})

export default router