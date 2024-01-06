import { createRouter, createWebHistory } from "vue-router";
import invoiceIndex from '../components/invoice/index.vue';
import notFound from '../components/NotFound.vue';
import invoiceShow from '../components/invoice/show.vue';
import invoiceNew from '../components/invoice/new.vue';
import invoiceEdit from '../components/invoice/edit.vue';


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
    {
        path: '/invoice/show/:id',
        component: invoiceShow,
        props: true
    },
    {
        path: '/invoice/edit/:id',
        component: invoiceEdit,
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes

})

export default router