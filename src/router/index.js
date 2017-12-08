import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Lodash from '@/views/lodash-page'
import HelloEggplant from '@/views/hello-eggplant'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloEggplant',
    component: HelloEggplant
  }, {
    path: '/lodash',
    name: 'Lodash',
    component: Lodash
  }]
})
