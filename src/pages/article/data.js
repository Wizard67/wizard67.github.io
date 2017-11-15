import ajax from '@/configs/axios'

const state = {
    article: ""
}

const getters = {

}

const mutations = {
    setArticl(state, value) {
        state.article = value
    }
}

const actions = {
    getArticle({dispatch, commit, state}, articleName) {
        ajax.get(`./articles/${articleName}.html`, { responseType: 'text' })
            .then((res) => {
                commit('setArticl', res.data)
            })
    }
}

export default {
    namespace: 'articles',
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}