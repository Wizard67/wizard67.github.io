import ajax from '@/configs/axios'

const state = {
    note: ""
}

const getters = {

}

const mutations = {
    setValue(state, value) {
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
    namespace: 'note',
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}