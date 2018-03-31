import Vue from 'vue'
import Vuex from 'vuex'
import { importAll } from './utils'

/* global */
import global from '@/store'

const Pages = require.context('@/pages', true, /store\.js$/)
const routeList = importAll(Pages, 'store')

Vue.use( Vuex )

export default new Vuex.Store({
  ...global,
  modules: {
    ...routeList
  }
})
