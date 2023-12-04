import { createRouter, createWebHistory } from 'vue-router'
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
            name:'login',
            component: LoginView
        },
        {
            path:'/',
            name:'home',
            component: HomeView
        },
        {
            path:'/customer',
            name:'customer',
            component: CustomerView
        },
        {
            path:'/branches',
            name:'branches',
            component: BranchView
        },
        {
            path:'/employees',
            name:'employees',
            component: EmployeesView
        }
    ]
})

export default router