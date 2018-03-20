import ajax from '@/configs/axios'

const state = {
    isFocus: false,
    author: {
        avatar: '/static/images/avatar.jpg',
        links: [
            {
                name: 'github',
                link: ''
            }
        ]
    },
    nav: [
        {
            "column": "Article",
            "categorys": [
                {
                    "category": "category",
                    "items": [
                        {
                            "title": "title",
                            "url": "/"
                        }
                    ]
                }
            ]
        }
    ],
    title: 'Title'
}

const getters = {

}

const mutations = {
    toggleFocus(state) {
        state.isFocus = !state.isFocus
    },
    setNav(state, value) {
        state.nav = value.length ? value : null
    },
    setTitle(state, value) {
        state.title = value
    }
}

const actions = {
    getNav({dispatch, commit, state}) {
        ajax.get('./api/nav.json')
            .then(({data}) => {
                data.code === 200 ? commit('setNav', data.data) : null
            })
            .catch((err) => {
                console.log('网络错误')
            })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
