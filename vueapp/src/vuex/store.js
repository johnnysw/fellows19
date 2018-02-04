import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    photoList: []
}

const mutations = {
    setPhotoList(state, status){
        state.photoList = status;
    }
}

// 相当于计算属性
const getters = {
    
}

const actions = {
    setPhotoListAction({commit}, status){
        commit('setPhotoList', status);
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});


