<template>
    <!-- Set up the navbar with the primary color -->
    <b-navbar toggleable="sm" type="dark" variant="primary">
        <!-- To keep the buttons in a good position, wrap them in a container -->
        <b-container>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <!-- Add the router links -->
                <b-navbar-nav>
                    <router-link to="/home" class="nav-link">Home</router-link>
                    <router-link to="/personal" class="nav-link">Personal</router-link>
                    <router-link to="/shop" class="nav-link">Shop</router-link>
                    <router-link to="/blog" class="nav-link">Blog</router-link>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>
