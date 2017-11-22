import ajax from '@/configs/axios'

const state = {
    article: ""
}

const getters = {

}

const mutations = {
    setArticle(state, value) {
        state.article = value
    }
}

const actions = {
    getArticle({dispatch, commit, state}, target) {
        ajax.get(`./articles/${target}.html`, { responseType: 'text' })
            .then((res) => {
                commit('setArticle', res.data)
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