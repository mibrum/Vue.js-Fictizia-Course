import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/TheHomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TheAboutView.vue'),
    children: [
      {
        path: 'books',
        component: () => import(/* webpackChunkName: "about" */ '../components/Books.vue')
      },
      {
        path: 'history',
        component: () => import(/* webpackChunkName: "about" */ '../components/History.vue')
      }
    ]
  },
  {
    path: '/wizard/:id',
    name: 'wizard',
    props: true,
    component: () => import(/* webpackChunkName: "WizardView" */ '../views/TheWizardView.vue')
  },
  {
    path: '/login',
    name: 'loging',
    component: () => import(/* webpackChunkName: "WizardView" */ '../views/TheLoginView.vue')
  }
]


const router = new VueRouter({
  routes
})

export default router
