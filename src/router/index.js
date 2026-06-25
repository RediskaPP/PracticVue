import { createRouter, createWebHistory } from 'vue-router'

import Main from "../pages/Main.vue";
import ProductsPage from "../pages/ProductsPage.vue";
import UsefulTips from "../components/ Question/UsefulTips.vue";
import PromotionsPage from "../pages/PromotionsPage.vue";

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
    },
    {
        path: '/questions',
        name: 'questions',
        component: UsefulTips
    },
    {
        path: '/promotions',
        name: 'promotions',
        component: PromotionsPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router