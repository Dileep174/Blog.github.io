<script>
export default {
    data() {
        return {
            navItems: [
                { name: 'Home', path: '/' },
                {
                    name: 'About', path: '/about', children:
                        [
                            { name: 'OurCompany', path: '/about/ourcompany' },
                            { name: 'Pricing', path: '/about/pricing' }
                        ]
                },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                {
                    name: 'Blog', path: '/blog', children:
                        [
                            { name: 'Grid', path: '/blog/grid' },
                            { name: 'Sidebar', path: '/blog/sidebar' },
                            { name: 'Single', path: '/blog/single' }
                        ]
                },
                { name: 'Contact', path: '/contact' }
            ]
        };
    }
};
</script>

<template>
    <slot name="header"></slot>
    <header class="navigation">
        <nav class="navbar navbar-expand-lg  py-4" id="navbar">
            <div class="container">
                <a><router-link class="navbar-brand" to="/">
                        Mega<span>kit.</span>
                    </router-link></a>

                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                    data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="fa fa-bars"></span>
                </button>

                <div class="collapse navbar-collapse text-center" id="navbarsExample09">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active" v-for="(item, index) in navItems" :key="index">
                            <a v-if="!item.children"><router-link class="nav-link" :to="item.path">{{ item.name }}<span
                                        class="sr-only">(current)</span></router-link></a>

                            <div v-else>
                        <li class="nav-item dropdown">
                            <a><router-link class="nav-link dropdown-toggle" to="" id="dropdown03"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ item.name
                                    }}</router-link></a>
                            <ul class="dropdown-menu">
                                <li aria-labelledby="dropdown03" v-for="(child, childIndex) in item.children"
                                    :key="childIndex">
                                    <a><router-link class="dropdown-item" :to="child.path">{{ child.name
                                            }}</router-link></a>
                                </li>
                            </ul>
                        </li>
                </div>
                </li>
                </ul>

                <form class="form-lg-inline my-2 my-md-0 ml-lg-4 text-center">
                    <a><router-link to="/contact" class="btn btn-solid-border btn-round-full">Get a
                            Quote</router-link></a>
                </form>
            </div>
            </div>
        </nav>
    </header>
    <router-view></router-view>
</template>

<style scoped></style>
