import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Welcome from '@/components/Welcome'
import Toplists from '@/components/Toplists'
import DailyChanges from '@/components/DailyChanges'
import CDFDomains from '@/components/CDFDomains'
import TopListsIntersection from '@/components/TopListsIntersection'

export default new Router({
  routes: [
    {
      // Første du kommer til
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/toplists',
      name: 'Toplists',
      component: Toplists
    },
    {
      path: '/dailyChanges',
      name: 'DailyChanges',
      component: DailyChanges
    },
    {
      path: '/cdfDomains',
      name: 'CDFDomains',
      component: CDFDomains
    },
    {
      path: '/intersection',
      name: 'TopListsIntersection',
      component: TopListsIntersection
    }
  ]
})
