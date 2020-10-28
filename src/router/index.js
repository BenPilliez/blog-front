import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from '@/components/Blog/BlogHome'
import BlogPosts from '@/components/Blog/BlogPosts'
import BlogDetail from '@/components/Blog/BlogDetail'
import BlogUserProfile from '@/components/Blog/BlogUserProfile'
import UserAccount from '../components/Blog/UserAccount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: BlogHome
    },
    {
      path: '/articles',
      name: 'Posts',
      component: BlogPosts
    },
    {
      path: '/article/:id',
      name: 'BlogDetail',
      component: BlogDetail
    },
    {
      path: '/mon-compte',
      name: 'userAccount',
      component: UserAccount,
      meta: {requiresAuth: true}
    },
    {
      path: '/user/:id',
      name: 'BlogUserProfile',
      component: BlogUserProfile
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
