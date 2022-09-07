import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('@/views/login/login.vue')
const Layout = () => import('@/views/layout/index.vue')
const Home = () => import('@/views/home/Home.vue')
const MyProfile = () => import('@/views/myprofile/MyProfile.vue')
const Question = () => import('@/views/question/Question.vue')
const Video = () => import('@/views/video/Video.vue')
const GoLogin = () => import('@/views/myprofile/GoLogin.vue')
const routes = [
  {
    // 重定向
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/layout',   
    component: Layout,
    redirect: '/home', /* 设置默认子路由为 Home 只能有一个 */
    children: [
      {
        path: '/home',  
        component: Home
      },
      {
        path: '/question',
        component: Question,
      },
      {
        path: '/myprofile',
        component: MyProfile,
      },
      {
        path: '/video',
        component: Video,
      },
      {
        path: '/gologin',
        component: GoLogin
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
