const GetContent = (namespace) => ({
    watch: {
        $route(n){
            this.$store.dispatch(`${namespace}/getContent`, n)
        }
    },
    computed: {
        content() {
            return this.$store.state[namespace].content
        }
    },
    mounted(){
        this.$store.dispatch(`${namespace}/getContent`, this.$route)
    }
})

export default GetContent