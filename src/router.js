import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Java from './views/Java.vue';
import Python from './views/Python.vue';
import Web from './views/Web.vue';
import BigData from './views/BigData.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/java',
      name: 'java',
      component: Java
    },
    {
      path: '/python',
      name: 'python',
      component: Python
    },
    {
      path: '/bigdata',
      name: 'bigdata',
      component: BigData
    },
    {
      path: '/web',
      name: 'web',
      component:  Web
    }
  ]
})
