import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Create from '../views/Create.vue'
import Dashboard from '../views/DasHboard.vue'
import ViewWorkout from '../views/ViewWorkout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: "Home"
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        title: "Dashboard"
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: "Login"
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: "Register"
      }
    },
    {
      path: '/create',
      name: 'Create',
      component: Create,
      meta: {
        title: "Create workout"
      }
    },
    {
      path: '/workout/:workoutId',
      name: 'View-Workout',
      component: ViewWorkout,
      meta: {
        title: "Workout View"
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Flexdev`;
  next();
})
export default router
