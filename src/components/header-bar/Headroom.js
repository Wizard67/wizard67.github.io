import _ from 'lodash/function'
import raf from 'raf'

export default {
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
    watch: {
        state(v) {
            const classList = this.$el.classList
            v === 'unpinned' ? classList.add('-hidden') : classList.remove('-hidden')
        }
    },
    methods: {
        _handleScroll() {
            raf(this.update)
        },
        _getScrollY() {
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
        initHeader() {
            this.elemHeight = this.$el.offsetHeight
            this._handleScroll()
            window.addEventListener('scroll', _.throttle( this._handleScroll, 50 ))
        },
        checkActions() {
            const direction = this.currentScrollY >= this.lastScrollY ? 'down' : 'up'
            const distanceScrolled = Math.abs(this.currentScrollY - this.lastScrollY)
            var action

            if ( this.currentScrollY <= 0 && this.state !== 'unfixed') {
                action = 'unfix'
            }else if( this.currentScrollY <= this.elemHeight && direction === 'down' && this.state === 'unfixed' ) {
                action = 'none'
            }else if( direction === 'down' && ['pinned', 'unfixed'].indexOf(this.state) >= 0 && this.currentScrollY > (this.elemHeight + 0) && distanceScrolled > 0 ) {
                action = 'unpin'
            } else if ( direction === 'up' && distanceScrolled > 5 && ['pinned', 'unfixed'].indexOf(this.state) < 0 ) {
                action = 'pin'
            } else if ( direction === 'up' && this.currentScrollY <= this.elemHeight && ['pinned', 'unfixed'].indexOf(this.state) < 0 ) {
                action = 'pin'
            } else {
                action = 'none'
            }
            return action
        },
        update() {
            this.currentScrollY = this._getScrollY()
            const action = this.checkActions()
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
