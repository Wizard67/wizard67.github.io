const GetContent = (namespace) => ({
    watch: {
        $route(n){
            this.$store.dispatch('getContent', n)
        }
    },
    computed: {
        content() {
            return this.$store.state[namespace].content
        }
    },
    mounted(){
        this.$store.dispatch('getContent', this.$route)
    }
})

export default GetContent