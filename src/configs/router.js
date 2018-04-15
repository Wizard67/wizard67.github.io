import Vue from 'vue'
import Router from 'vue-router'
import { importAll } from './utils'

const Pages = require.context('@/views', true, /page\.vue$/)
const routeList = importAll(Pages, 'router')

Vue.use(Router)

export default new Router({
  routes: [
    ...routeList
  ]
})
