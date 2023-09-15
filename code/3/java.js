const App = {
    data() {
        return {
            articles: [
                { title: "Title of Article 1", likes: 0, shares: 0, dislikes: 0 },
                { title: "Title of Article 2", likes: 0, shares: 0, dislikes: 0 },
                { title: "Title of Article 3", likes: 0, shares: 0, dislikes: 0 }
            ]
        };
    },
    methods: {
        increment(article, type) {
            article[type]++;
        }
    }
}

Vue.createApp(App).mount('#app');