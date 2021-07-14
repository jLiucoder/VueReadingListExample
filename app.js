const app = Vue.createApp({
    data() {
        return {

            showBooks: true,
            books: [
                {title: 'Batman/Fortnite: Zero Point', author: 'CHRISTOS GAGE',img:'zeroPoint.jpeg', isFav: true},
                {title: 'Survive the Night', author: 'RILEY SAGER', img:'STN.jpeg',isFav: false},
                {title: 'Nightfall and Other Stories', author: 'ISAAC ASIMOV',img:'nightFall.jpeg', isFav: true},

            ]
        }
    },

    methods: {

        toggleShow() {
            this.showBooks = !this.showBooks
        },
        setFav(book){
            book.isFav = !book.isFav
        }
    },

    computed:{
        filteredBooks(){
            return this.books.filter((book)=> book.isFav )
        }
    }

})

app.mount('#app')
