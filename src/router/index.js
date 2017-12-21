import Vue from 'vue'
import Router from 'vue-router'
import Lodash from '@/views/lodash-page'
import HelloEggplant from '@/views/hello-eggplant'
import Grid from '@/views/grid'

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
  }, {
    path: '/grid',
    name: 'Grid',
    component: Grid
  }]
})
