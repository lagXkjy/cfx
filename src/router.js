import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import home from './pages/home.vue'
import camera from './pages/camera.vue'
import testing from './pages/testing.vue'
import result from './pages/result.vue'

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/camera',
            component: camera
        },
        {
            path: '/testing',
            component: testing
        },
        {
            path: '/result',
            component: result
        }
    ]
}) 
