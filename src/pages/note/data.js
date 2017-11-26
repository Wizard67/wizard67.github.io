import ajax from '@/configs/axios'

const state = {
    content: ""
}

const getters = {

}

const mutations = {
    setContent(state, value) {
        state.content = value
    }
}

const actions = {

}

export default {
    namespace: 'note',
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}