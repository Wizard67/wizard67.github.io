import ajax from '@/configs/axios'

const state = {
    demo: ""
}

const getters = {

}

const mutations = {
    setDemos(state, value) {
        state.demo = value
    }
}

const actions = {
    getDemo({dispatch, commit, state}, target) {
        ajax.get(`./demos/${target}.html`, { responseType: 'text' })
            .then((res) => {
                commit('setDemos', res.data)
            })
    }
}

export default {
    namespace: 'demos',
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}