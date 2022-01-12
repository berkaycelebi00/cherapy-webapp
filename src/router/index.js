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
import ProfessionalPage from '../components/professional/ProfessionalPage'
import ProfessionalRegisterPage from '../components/professional/ProfessionalRegister'
import ProfessionalEditProfile from '../components/professional/ProfessionalEditProfile'
import ProfessionalDashboard from '../components/professional/ProfessionalDashboard'
import ProfessionalClients from '../components/professional/ProfessionalClients'
import ProfessionalAds from '../components/professional/ProfessionalAds'
import ProfessionalAddAd from '../components/professional/ProfessionalAddAd'
import ProfessionalClientInfo from '../components/professional/ProfessionalClientInfo'
import ProfessionalCalendar from '../components/professional/ProfessionalCalendar'
import MyCounsellors from '../components/my-counsellors/MyCounsellors'


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
  {
    path: '/professional',
    name: 'Professional',
    component: ProfessionalPage
  },
  {
    path: '/professional-register',
    name: 'Professional-Register',
    component: ProfessionalRegisterPage
  },
  {
    path: '/professional-edit-profile',
    name: 'Professional-edit-profile',
    component: ProfessionalEditProfile
  },
  {
    path: '/professional-dashboard',
    name: 'Professional-dashboard',
    component: ProfessionalDashboard
  },
  {
    path: '/professional-clients',
    name: 'Professional-clients',
    component: ProfessionalClients
  },
  {
    path: '/professional-ads',
    name: 'Professional-ads',
    component: ProfessionalAds
  },
  {
    path: '/professional-add-ad',
    name: 'Professional-add-ad',
    component: ProfessionalAddAd
  },
  {
    path: '/professional-client-info',
    name: 'Professional-client-info',
    component: ProfessionalClientInfo
  },
  {
    path: '/professional-calendar',
    name: 'Professional-calendar',
    component: ProfessionalCalendar
  },
  {
    path: '/my-counsellors',
    name: 'my-counsellors',
    component: MyCounsellors
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
