import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import services from '@/views/services.vue';
import Portfolio from '@/views/Portfolio.vue';
import Contact from '@/views/Contact.vue';
import OurCompany from '@/views/about/OurCompany.vue';
import Pricing from '@/views/about/Pricing.vue';
import Grid from '@/views/blog/Grid.vue';
import Sidebar from '@/views/blog/Sidebar.vue';
import Single from '@/views/blog/Single.vue';

const routes=[
    {
        name: 'home',
        path:'/',
        component: Home
    },
    {
        name: 'OurCompany',
        path: '/OurCompany',
        component: OurCompany
    },
    {
        name: 'Pricing',
        path: '/Pricing',
        component: Pricing
    },
    {
        name: 'services',
        path: '/services',
        component: services
    },
    {
        name: 'portfolio', 
        path: '/portfolio',
        component: Portfolio
    },
    {
        name: 'Grid',
        path: '/Grid',
        component: Grid
    },
    {
        name: 'Sidebar',
        path: '/Sidebar',
        component: Sidebar
    },
    {
        name: 'Single',
        path: '/Single',
        component: Single
    },
    {
        name: 'contact',
        path: '/contact',
        component: Contact
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;