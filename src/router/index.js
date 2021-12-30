import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/dashboard/Dashboard'
import Login from '../components/auth/Login'
import HomePage from '../components/home/HomePage'
import Register from '../components/auth/Register'
import ChatPage from '../components/chat/ChatPage'
import FreeChat from '../components/chat/free-chat/FreeChatPage'
import TherapistsPage from '../components/therapists/TherapistsPage'
import VolunteerPage from '../components/volunteer/VolunteerPage'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/chat',
    name: 'Chat',
    component: ChatPage
  },
  {
    path: '/free-chat',
    name: 'FreeChat',
    component: FreeChat
  },
  {
    path: '/therapists',
    name: 'Therapists',
    component: TherapistsPage
  },
  {
    path: '/volunteer',
    name: 'Volunteer',
    component: VolunteerPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
