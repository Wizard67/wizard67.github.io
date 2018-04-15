import Vue from 'vue'
import Vuex from 'vuex'
import { importAll } from './utils'

/* global */
import global from '@/store'

const Pages = require.context('@/views', true, /store\.js$/)
const routeList = importAll(Pages, 'store')

Vue.use( Vuex )

export default new Vuex.Store({
  ...global,
  modules: {
    ...routeList
  }
})
