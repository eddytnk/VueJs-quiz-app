import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        count: 0,
        score: 0
    },
    mutations: {
        incrementCounter(state, payload) {
            state.count += payload
        },
        incrementScore(state, payload) {
            state.score += payload
        }
    },
    actions: {
        inrementAction(context, payload) {
            context.commit('incrementCounter', payload)
        },
        inrementScoreAction(context, payload) {
            context.commit('incrementScore', payload)
        }
    },
    getters: {
        counter(state) {
            return state.count
        },
        score(state) {
            return state.score
        }
    }
})