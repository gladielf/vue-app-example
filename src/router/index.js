import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import card from '@/components/card'
import axiotest from '@/components/axiotest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/card',
      name: 'card',
      component: card
    },
    {
      path: '/axiotest',
      name: 'axiotest',
      component: axiotest
    }
  ]
})
