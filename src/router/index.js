import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Lodash from '@/views/lodash-page'
import HelloEggplant from '@/views/hello-eggplant'
import H5 from '@/views/h5'
import Grid from '@/views/grid'
import CmsDemo from '@/views/cms-demo'
import CmsIndex from '@/views/cms-index'
import CmsDetail from '@/views/cms-detail'

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
  }, {
    path: '/grid',
    name: 'Grid',
    component: Grid
  }, {
    path: '/cms-demo',
    name: 'CmsDemo',
    component: CmsDemo
  }, {
    path: '/cms-index',
    name: 'CmsIndex',
    component: CmsIndex
  }, {
    path: '/cms-detail',
    name: 'CmsDetail',
    component: CmsDetail
  }]
})
