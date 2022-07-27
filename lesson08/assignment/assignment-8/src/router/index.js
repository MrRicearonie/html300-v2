import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/HomeContent.vue'
import Shop from '../components/ShopContent.vue'
import Blog from '../components/BlogContent.vue'
import Personal from '../components/PersonalContent.vue'

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
    path: '/shop',
    name: 'Shop Example',
    component: Shop
},
{
    path: '/personal',
    name: 'Personal Example',
    component: Personal
},
{
    path: '/blog',
    name: 'Blog Example',
    component: Blog
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