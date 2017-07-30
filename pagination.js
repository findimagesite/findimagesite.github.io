Vue.component('pagination', {
    template: '#pagination-template',
    props: {
        current: {
            type: Number,
            default: 1
        }, 
        total: {
            type: Number,
            default: 0
        },
        perPage: {
            type: Number,
            default: 9
        }
    }, 
    computed: {

        totalPages: function(){
            return Math.ceil(this.total/this.perPage)
        },
        nextPage: function() {
            return this.current + 1
        },
        prevPage: function() {
            return this.current -1
        }
    },
    methods: {
        hasPrev: function() {
          return this.current > 1
        },
        hasNext: function() {
            return this.current < this.totalPages
        },
        changePage: function(page){
            this.$emit('page-changed', page)
        }
    }
});