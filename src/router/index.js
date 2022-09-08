import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/film',
    component: () => import('@/views/film/Film.vue'),
    children: [
      {
        path: 'hotplaying',
        component: () => import('@/views/film/HotPlaying')
      },
      {
        path: 'willplaying',
        component: () => import('@/views/film/WillPlaying')
      },
      {
        path: '',
        redirect: 'hotplaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: () => import('@/views/cinema/Cinema')
  },
  {
    path: '/information',
    component: () => import('@/views/Information')
  },
  {
    path: '/mine',
    component: () => import('@/views/Mine')
  },
  {
    path: '/detail',
    component: () => import('@/views/detail/detail')
  },
  {
    path: '/city',
    component: () => import('@/views/cinema/city/City.vue')
  },
  // Search
  {
    path: '/cinema/search',
    component: () => import('@/views/cinema/Search/Search.vue')
  },
  // 重定向
  {
    path: '*',
    redirect: '/film'
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
