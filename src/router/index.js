import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import Artwork from '@/components/Artwork'
import Carousel3d from 'vue-carousel-3d';

Vue.use(Carousel3d);
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/artwork',
      name: 'Artwork',
      component: Artwork
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
