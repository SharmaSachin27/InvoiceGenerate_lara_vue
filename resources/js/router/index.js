import { createRouter, createWebHistory } from "vue-router";
import invoiceIndex from '../components/invoice/index.vue';
import notFound from '../components/NotFound.vue';
import invoiceNew from '../components/invoice/new.vue';


const routes = [
    {
        path: '/',
        component: invoiceIndex
    },
    {
        path: '/invoice/new',
        component: invoiceNew
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes

})

export default router