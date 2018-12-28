import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const getComponent = str => res => require([`@/pages/${str}`], res)

export default new VueRouter({
    base: '/cfx/',
    routes: [
        { path: '/', component: getComponent('home') },
        { path: '/home', component: getComponent('home') },
        { path: '/camera', component: getComponent('camera') },
        { path: '/testing', component: getComponent('testing') },
        { path: '/result', component: getComponent('result') },
        { path: '/ranking', component: getComponent('ranking') },
        { path: '/fail', component: getComponent('fail') },
        { path: '/addInfo', component: getComponent('addInfo') },
        { path: '/congrats', component: getComponent('congrats') }
    ]
}) 
