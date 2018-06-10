import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from 'components/Index'
import Calendar from 'components/Calendar'
import Cummunity from 'components/Cummunity'
import Hospital from 'components/Hospital'
import CummunityInfo from 'components/CummunityInfo'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/hospital',
      name: 'hospital',
      component: Hospital
    },
    {
      path: '/cummunity',
      name: 'cummunity',
      component: Cummunity
    },
    {
      path: '/cummunity/:id',
      name: 'cummunityinfo',
      component: CummunityInfo
    }
  ]
})
