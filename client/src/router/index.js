import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerView from '../views/CustomerView.vue'
import BranchView from '../views/BranchView.vue'
import EmployeesView from '../views/EmployeesView.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
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