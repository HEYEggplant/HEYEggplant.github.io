import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Lodash from '@/views/lodash-page'
import HelloEggplant from '@/views/hello-eggplant'
import H5 from '@/views/h5'

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
    path: '/h5',
    name: 'H5',
    component: H5
  }]
})
