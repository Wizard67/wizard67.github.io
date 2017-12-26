import _ from 'lodash/function'
import raf from 'raf'
import checkActions from './checkActions'

const Headroom = {
    data () {
        return {
            currentScrollY: 0,
            lastScrollY: 0,
            elemHeight: 0,
            state: 'pinned'
        }
    },
    mounted () {
        this.initHeader()
    },
    computed: {
        type() {
            return this.state === 'unpinned'? '-hidden': '-show'
        }
    },
    methods: {
        _handleScroll () {
            raf(this.update)
        },
        _getScrollY () {
            let top
            if (window.pageYOffset !== undefined) {
                top = window.pageYOffset
            } else if (window.scrollTop !== undefined) {
                top = window.scrollTop
            } else {
                top = (document.documentElement || document.body.parentNode || document.body).scrollTop
            }
            return top
        },
        initHeader (){
            this.elemHeight = this.$el.offsetHeight
            this._handleScroll()
            window.addEventListener('scroll', _.throttle( this._handleScroll, 50 ))
        },
        update () {
            this.currentScrollY = this._getScrollY()
            const action = checkActions(this)
            switch (action) {
                case 'pin':
                this.state = 'pinned'
                break
            case 'unpin':
                this.state = 'unpinned'
                break
            case 'unfix':
                this.state = 'unfixed'
                break
            }
            this.lastScrollY = this.currentScrollY
        }
    }
}

export default Headroom