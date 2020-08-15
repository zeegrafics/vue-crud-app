import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import AddSupplier from '../components/Suppliers/AddSupplier'
import SupplierList from '../components/Suppliers/SupplierList'
import AddCategory from '../components/Products/AddCategory'
import Categories from '../components/Products/Categories'
import AddProduct from '../components/Products/AddProduct'
import Products from '../components/Products/Products'

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
  },
  {
    path: '/addcategory',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/addproduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
