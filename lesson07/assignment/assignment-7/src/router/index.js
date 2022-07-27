import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/HomeContent.vue'
import Images from '../components/ImagesContent.vue'
import Accordion from '../components/AccordionContent.vue'
import Grid from '../components/GridContent.vue'

Vue.use(VueRouter)

// Set up the routes within our project
const routes = [{
    path: '/',
    redirect: '/home'
},  
{
    path: '/home',
    name: 'Home',
    component: Home
},
{
    path: '/images',
    name: 'Images',
    component: Images
},
{
    path: '/grid',
    name: 'Grid',
    component: Grid
},
{
    path: '/accordion',
    name: 'Accordion',
    component: Accordion
}]

// Create the router with the the routes, and retain data from each page
const router = new VueRouter ({
    mode: 'history',
    routes,
    linkActiveClass: "active", // active class for non-exact links.
    linkExactActiveClass: "active" // active class for *exact* links.
})

// Let other vue files use the router
export default router