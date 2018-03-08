import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Features from './../components/features.vue'
import Pricing from '../components/pricing.vue'
import Contact from '../components/contactus.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/features',
      name: 'Features',
      component:Features
    },
    {
      path:'/pricing',
      name:'Pricing',
      component:Pricing
    },
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
    path:'/contactus',
    name:'Contactus',
    component:Contact

    }
  ]
})
