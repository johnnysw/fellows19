import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0
}

const mutations = {
    add(state, num){
        state.count += num;
    },
    reduce(state){
        state.count--;
    }
}

// 相当于计算属性
const getters = {
    count(state){
        return state.count += 10
    }
}

const actions = {
    addAction({commit}){
        setTimeout(()=>{
            commit('add', 10);
        }, 2000);
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
