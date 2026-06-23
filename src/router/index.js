import { createRouter, createWebHistory } from 'vue-router'

import Main from "../pages/Main.vue";
import ProductsPage from "../pages/ProductsPage.vue";

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main
    },
    {
        path: '/products',
        name: 'products',
        component: ProductsPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router