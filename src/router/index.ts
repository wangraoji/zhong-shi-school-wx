import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: "/home",
      component: () => import('@/views/layout/index.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/layout/components/home/index.vue')
        },
        {
          path: '/industryNews',
          name: 'industryNews',
          component: () => import('@/views/layout/components/industryNews/index.vue')
        },
        {
          path: '/exclusiveView',
          name: 'exclusiveView',
          component: () => import('@/views/layout/components/exclusiveView/index.vue')
        },
        {
          path: '/eliteCourse',
          name: 'eliteCourse',
          component: () => import('@/views/layout/components/eliteCourse/index.vue')
        },
        {
          path: '/bookClub',
          name: 'bookClub',
          component: () => import('@/views/layout/components/bookClub/index.vue')
        },
        {
          path: '/courseReg',
          name: 'courseReg',
          component: () => import('@/views/layout/components/courseReg/index.vue')
        },
        {
          path: '/contactInfo',
          name: 'contactInfo',
          component: () => import('@/views/layout/components/contactInfo/index.vue')
        },
        {
          path: '/vipInfo',
          name: 'vipInfo',
          component: () => import('@/views/layout/components/vipInfo/index.vue')
        }

      ]
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('@/views/layout/index.vue'),
      children: [
        {
          path: '/newsDetail',
          name: 'newsDetail',
          component: () => import('@/views/details/components/newsDetail/index.vue'),
        },
        {
          path: '/viewDetail',
          name: 'viewDetail',
          component: () => import('@/views/details/components/viewDetail/index.vue'),
        },
        {
          path: '/courseDetail',
          name: 'courseDetail',
          component: () => import('@/views/details/components/courseDetail/index.vue'),
        },
        {
          path: '/regDetail',
          name: 'regDetail',
          component: () => import('@/views/details/components/regDetail/index.vue'),
        },
        {
          path: '/bookClubDetail',
          name: 'bookClubDetail',
          component: () => import('@/views/details/components/bookClubDetail/index.vue'),
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    // }
  ]
})
