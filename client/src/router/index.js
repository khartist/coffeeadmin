import { createRouter, createWebHistory } from 'vue-router'
import Navigation from '../views/master/navigation.vue'
import HomeView from '../views/HomeView.vue'
import CustomerView from '../views/CustomerView.vue'
import BranchView from '../views/BranchView.vue'
import EmployeesView from '../views/EmployeesView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            name: 'Navigation',
            path: '/navigation',
            component: Navigation,
            children: [
               {
                name: 'home',
                path: '/home',
                component:HomeView
              },
              {
                name: 'customer',
                path: '/customer',
                component:CustomerView
              },
              {
                name: 'branches',
                path: '/branches',
                component:BranchView
              },
              {
                name: 'employees',
                path: '/employees',
                component:EmployeesView
              }
            ]
        }
    ]
})

export default router