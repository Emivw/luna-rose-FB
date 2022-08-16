import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Products from '../views/Products.vue'
import Product from '../views/Product.vue'
import Contact from '../views/Contact.vue'
import Admin from '../views/Admin.vue'
import UsersAdmin from '../views/UsersAdmin.vue'
import ProductAdmin from '../views/ProductAdmin.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product
  },{
    path: '/contact',
    name: 'conatct',
    component: Contact
  },
  {
    path: '/admin/:id',
    name: 'admin',
    component: Admin
  },
  {
    path: '/admin/products',
    name: 'adminProducts',
    component:ProductAdmin
  },{
    path: '/admin/users',
    name: 'adminUsers',
    component: UsersAdmin
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
