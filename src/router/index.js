import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from '@/components/BlogHome'
import BlogPosts from '@/components/BlogPosts'
import BlogDetail from '@/components/BlogDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: BlogHome
    },
    {
      path: '/posts',
      name: 'Posts',
      component: BlogPosts
    },
    {
      path: '/posts/:id',
      name: 'BlogDetail',
      component: BlogDetail
    }
  ]
})
