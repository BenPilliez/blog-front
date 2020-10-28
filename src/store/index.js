import Vue from 'vue'
import Vuex from 'vuex'
import postsStore from './modules/posts'
import authStore from './modules/auth'
import usersStore from './modules/users'

Vue.use(Vuex)

export const store = new Vuex.Store(
  {
    state: {
      loading: false,
      notification: null
    },

    modules: {
      Posts: postsStore,
      Auth: authStore,
      Users: usersStore
    },
    mutations: {
      notification (state, notification) {
        state.notification = {
          color: notification.color,
          icon: notification.icon,
          timeout: notification.timeout,
          mode: notification.mode,
          text: notification.text
        }
      }
    },

    getters: {
      notification: state => state.notification,
      loading: state => state.loading
    }
  }
)
