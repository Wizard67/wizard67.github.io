import ajax from '@/configs/axios'

const state = {
    note: ""
}

const getters = {

}

const mutations = {
    setNote(state, value) {
        state.note = value
    }
}

const actions = {
    getNote({dispatch, commit, state}, target) {
        ajax.get(`./notes/${target}.html`, { responseType: 'text' })
            .then((res) => {
                commit('setNote', res.data)
            })
    }
}

export default {
    namespace: 'notes',
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}