<script setup>
</script>

<template>
    <header class="navigation">
        <nav class="navbar navbar-expand-lg  py-4" id="navbar">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    Mega<span>kit.</span>
                </router-link>

                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                    data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="fa fa-bars"></span>
                </button>

                <div class="collapse navbar-collapse text-center" id="navbarsExample09">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <router-link class="nav-link dropdown-toggle" to="" id="dropdown03" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">About</router-link>
                            <ul class="dropdown-menu" aria-labelledby="dropdown03">
                                <li><router-link class="dropdown-item" to="/OurCompany">Our company</router-link></li>
                                <li><router-link class="dropdown-item" to="/Pricing">Pricing</router-link></li>
                            </ul>
                        </li>
                        <li class="nav-item"><router-link class="nav-link" to="/services">Services</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/Portfolio">Portfolio</router-link></li>
                        <li class="nav-item dropdown">
                            <router-link class="nav-link dropdown-toggle" to="" id="dropdown05" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">Blog</router-link>
                            <ul class="dropdown-menu" aria-labelledby="dropdown05">
                                <li><router-link class="dropdown-item" to="/Grid">Blog Grid</router-link></li>
                                <li><router-link class="dropdown-item" to="/Sidebar">Blog with Sidebar</router-link></li>

                                <li><router-link class="dropdown-item" to="/Single">Blog Single</router-link></li>
                            </ul>
                        </li>
                        <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link></li>
                    </ul>

                    <form class="form-lg-inline my-2 my-md-0 ml-lg-4 text-center">
                        <router-link to="/contact" class="btn btn-solid-border btn-round-full">Get a Quote</router-link>
                    </form>
                </div>
            </div>
        </nav>
    </header>
    <router-view></router-view>
</template>

<style scoped></style>
