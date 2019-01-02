import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.sessionStorage //指定vuex存储方式
})

const store = new Vuex.Store({
    state: {
        showtmall: true,
        showFlower: false
    },
    getters: {
        showtmall(state){
            return state.showtmall
        },
        showFlower(state){
            return state.showFlower
        }
    },
    mutations: {
        CHANGE_TMALL(state ,bool){
            state.showtmall = bool
        },
        CHANGE_FLOWER(state ,bool){
            state.showFlower = bool
        }
    },
    actions: {
        
    },
    plugins: [vuexLocal.plugin]
})

export default store