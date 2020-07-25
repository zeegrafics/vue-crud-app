import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import AddSupplier from '../components/Suppliers/AddSupplier'
import SupplierList from '../components/Suppliers/SupplierList'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/addsupplier',
    name: 'AddSupplier',
    component: AddSupplier
  },
  {
    path: '/suppliers',
    name: 'SupplierList',
    component: SupplierList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
