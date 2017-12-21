// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import '@/units/iconfont'
// import '@/units/flexible'

import Vue from 'vue'
import App from './App'
import router from './router'
import DrawerLayout from 'vue-drawer-layout'

Vue.config.productionTip = false
Vue.use(DrawerLayout)
require('es6-promise').polyfill()
// require('babel-polyfill')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
