import Vue from 'vue'
import Home from '../views/Home.vue'
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

  const routes = [
  {
    path:'*',
      redirect :'/'
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
