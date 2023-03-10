import VueRouter from 'vue-router'
import { Auth } from 'aws-amplify'

import Home from './components/Home'
import Profile from './components/Profile'
import AuthComponent from './components/Auth'
import Schedule from './components/Schedule'

import Upload from './components/Upload'
import Gallery from'./components/Gallery'

const routes = [
  { path: '/', component: Home },
  { path: '/auth', component: AuthComponent },
  { path: '/schedule', component: Schedule, meta: { requiresAuth: false} },

  { path: '/upload', component: Upload, meta: { requiresAuth: true} },
  { path: '/profile', component: Profile, meta: { requiresAuth: true} },
  { path: '/gallery', component: Gallery, meta: { requiresAuth: false} }

]

const router = new VueRouter({
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Auth.currentAuthenticatedUser().then(() => {
      next()
    }).catch(() => {
      next({
        path: '/auth'
      });
    });
  }
  next()
})

export default router