import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import Services from '@/views/Services.vue';
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
        path: '/about/ourcompany',
        component: OurCompany
    },
    {
        name: 'Pricing',
        path: '/about/pricing',
        component: Pricing
    },
    {
        name: 'Services',
        path: '/Services',
        component: Services
    },
    {
        name: 'Portfolio', 
        path: '/portfolio',
        component: Portfolio
    },
    {
        name: 'Grid',
        path: '/blog/Grid',
        component: Grid
    },
    {
        name: 'Sidebar',
        path: '/blog/Sidebar',
        component: Sidebar
    },
    {
        name: 'Single',
        path: '/blog/Single',
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