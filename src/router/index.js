import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from '@/components/Blog/BlogHome'
import BlogPosts from '@/components/Blog/BlogPosts'
import BlogDetail from '@/components/Blog/BlogDetail'
import BlogUserProfile from '@/components/Blog/BlogUserProfile'
import UserAccount from '../components/Blog/User/UserAccount'
import User from '../components/Blog/User/User'
import BlogAddPost from '../components/Blog/BlogAddPost'
import BlogEditPost from '../components/Blog/BlogEditPost'

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
      component: User,
      children: [
        {
          path: '',
          name: 'userAccount',
          component: UserAccount
        },
        {
          path: '/mon-compte/article',
          name: 'addPost',
          component: BlogAddPost
        },
        {
          path: '/mon-compte/article/edit/:id',
          name: 'editPost',
          component: BlogEditPost
        }
      ],
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
