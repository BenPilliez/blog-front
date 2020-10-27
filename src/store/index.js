import Vue from 'vue'
import Vuex from 'vuex'
import postsStore from './modules/posts'
import authStore from './modules/auth'

Vue.use(Vuex)

export const store = new Vuex.Store(
  {
    state: {
      loading: false,
      notification: null
    },

    modules: {
      Posts: postsStore,
      Auth: authStore
    },
    mutations: {
      notification (state, notification) {
        state.notification = {
          type: notification.type,
          text: notification.text
        }
      },
      message_null (state) {
        state.notification = null
      }
    },

    getters: {
      notification: state => state.notification,
      loading: state => state.loading
    }
  }
)
