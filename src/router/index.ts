import { createRouter, createWebHistory } from 'vue-router'

import Main from "../pages/Main.vue";

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
    },
    {
        path: '/about',
        name: 'about',
        component: Main,
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})