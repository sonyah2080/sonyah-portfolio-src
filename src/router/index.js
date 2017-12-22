import Vue from 'vue'
import Router from 'vue-router'
import portfolio from '@/pages/portfolio'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'portfolio',
      component: portfolio
    }, {
      path: '/helloworld',
      name: 'hellowolrd',
      component: HelloWorld
    }
  ]
})
