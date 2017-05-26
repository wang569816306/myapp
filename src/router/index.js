import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import wei from '@/components/wei'
import book from '@/components/book'
import vip from '@/components/vip'
import partner from '@/components/partner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/wei',
      name: 'wei',
      component: wei
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/vip',
      name: 'vip',
      component: vip
    },
    {
      path: '/partner',
      name: 'partner',
      component: partner
    }
  ]
})
