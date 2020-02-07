import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home')
const Category = () => import('views/category')
const Cart = () => import('views/cart')
const Personal = () => import('views/personal')
const Search = () => import('views/search')
const Product = () => import('views/product')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home',
    meta: { showTab: true }
  },
  {
    path: '/home',
    component: Home,
    meta: { showTab: true },
    children: [
      {
        name: 'home-product',
        path: 'product/:id',
        component: Product
      }
    ]
  },
  {
    path: '/category',
    component: Category,
    meta: { showTab: true }
  },
  {
    path: '/cart',
    component: Cart,
    meta: { showTab: true }
  },
  {
    path: '/personal',
    component: Personal,
    meta: { showTab: true }
  },
  {
    path: '/search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
