import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
    },
    {
        path: '/repos',
        name: 'repos',
        component: () => import(/* webpackChunkName: "repos" */ '../views/ReposView.vue')
    },
    {
        path: '/repoinfo',
        name: 'repoinfo',
        component: () => import(/* webpackChunkName: "repoinfo" */ '../views/RepoInfo.vue')
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
