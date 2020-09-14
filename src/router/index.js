import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Auth/Login'
import Home from '../components/Home'
import About from '../components/About'
import AddSupplier from '../components/Suppliers/AddSupplier'
import SupplierList from '../components/Suppliers/SupplierList'
import AddCategory from '../components/Products/AddCategory'
import Categories from '../components/Products/Categories'
import AddProduct from '../components/Products/AddProduct'
import Products from '../components/Products/Products'
import AddSale from '../components/Sales/AddSale'
import { auth } from '../firebase'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/addsupplier',
      name: 'AddSupplier',
      component: AddSupplier,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/suppliers',
      name: 'SupplierList',
      component: SupplierList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/addcategory',
      name: 'AddCategory',
      component: AddCategory,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/addproduct',
      name: 'AddProduct',
      component: AddProduct,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/addsale',
      name: 'AddSale',
      component: AddSale,
      meta: {
        requiresAuth: true
      }
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
