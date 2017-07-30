
var derId = 'fff97ecd15d949f6f836d5a7f52d9695b11964d8e7b135db6c7310124229ba2b'

new Vue ({
    el: '#der',
    data: {
        photos: [],
        total: 0,
        perPage: 9,
        currentPage: 1
    }, 
    methods: {
        fetch: function(page){
             
             var opt = {
                 params: {
                     client_id: derId,
                     page: page,
                     per_Page: this.perPage
                 }
             }

            this.$http.get('https://api.unsplash.com/photos', opt).then(function(response){
             
             this.photos = response.data

             this.total = parseInt(response.headers.get('x-total'))

             this.currentPage = page

             console.log(response)

            }, console.log)
        }
    },
    created: function(){
        this.fetch(this.currentPage)
    }
})