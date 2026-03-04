import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../pages/dashboard/index.vue'

import Home from '../pages/Home.vue'
import PrivacyPolicy from '../pages/common/PrivicyPolicy.vue'
import YarnCase from '../pages/case/yarn.vue'
import OnCourtCase from '../pages/case/oncourt.vue'
import herbmedCase from '../pages/case/herbmed.vue'
import VuxenCase from '../pages/case/vuxen.vue'
import LeroyMerlinCase from '../pages/case/leroyMerlin.vue'
import WestwingCase from '../pages/case/westwing.vue'

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
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../pages/test.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    component: Home,
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/privacy-center',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/case/yarn',
    name: 'YarnCase',
    component: YarnCase
  },
  {
    path: '/case/oncourt',
    name: 'OnCourtCase',
    component: OnCourtCase
  },
  {
    path: '/case/herbmed',
    name: 'HerbmedCase',
    component: herbmedCase
  },
  {
    path: '/case/vuxen',
    name: 'VuxenCase',
    component: VuxenCase
  },
  {
    path: '/case/leroyMerlin',
    name: 'LeroyMerlinCase',
    component: LeroyMerlinCase
  },
  {
    path: '/case/westwing',
    name: 'WestwingCase',
    component: WestwingCase
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

