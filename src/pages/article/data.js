import ajax from '@/configs/axios'

const state = {
    article: ""
}

const getters = {

}

const mutations = {
    setValue(state, value) {
        state.article = value
    }
}

const actions = {

}

export default {
    namespace: 'article',
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}