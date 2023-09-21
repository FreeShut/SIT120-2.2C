const App = {
    data() {
        return {
            searchTerm: '',
            newFriends: Array.from({ length: 50 }, (_, i) => ({ id: i + 1, name: `Friend ${i + 1}` })),
            myFriends: []
        }
    },
    computed: {
        filteredFriends() {
            return this.newFriends.filter(friend => friend.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
        }
    },
    methods: {
        sendRequest(friend) {
            this.myFriends.push(friend);
            this.newFriends = this.newFriends.filter(f => f.id !== friend.id);
        },
        deleteFriend(friend) {
            this.newFriends.push(friend);
            this.myFriends = this.myFriends.filter(f => f.id !== friend.id);
        },
        chatWithFriend(friend) {
            alert(`Chatting with ${friend.name}...`);
        }
    }
}

Vue.createApp(App).mount('#app');