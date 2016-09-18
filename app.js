new Vue = ({
    el: '#app',
    data: {
        posts: [],
        url: 'https://api.vk.com/method/wall.get?owner_id=-550910&offset=0&count=5&filter=all&v=5.53',
        loading: false
    },
    methods: {
        load: function () {
            this.loading = true
            this.$http.get(this.url).then(function (responce) {

                var json = responce.data,
                    posts = json.responce.items

                this.posts = this.posts.concat(posts)
                this.url = json.next_url
                this.loading = false

            }, function (error) {
                console.log(error)
                this.loading = false
            })
        },
        created: function () {
            this.load()
        }
    }
})