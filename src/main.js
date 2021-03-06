// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import setAuthorizationToken from './helpers/axios'
import {store} from './store/index'
import vuetify from '@/helpers/vuetify'
import './assets/scss/app.scss'

Vue.config.productionTip = false

const token = localStorage.getItem('token')

if (token) {
  setAuthorizationToken(token)
}

// On maintient la connexion pendant 24h
let hours = 24 // Reset when storage is more than 24hours
let now = new Date().getTime()
let setupTime = localStorage.getItem('setupTime')
if (setupTime == null) {
  localStorage.setItem('setupTime', now)
} else {
  if (now - setupTime > hours * 60 * 60 * 1000) {
    localStorage.clear()
    localStorage.setItem('setupTime', now)
  }
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!localStorage.getItem('user')) {
      store.commit('notification', {
        color: 'red darken-2',
        icon: 'mdi-alert-circle',
        mode: null,
        timeout: 7500,
        text: 'Tu as oublié de te connecter'
      })
      next('/')
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  store,
  components: {App},
  template: '<App/>'
})
