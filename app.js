const MovBaseUrl = "https://api.themoviedb.org/3/movie/";
const ApiKey = "298f5c948b209ca206b7885a546e697e";

function buildUrl(url) {
    return MovBaseUrl + url + "?api-key=" + ApiKey
}

const vm = new Vue({
    el: '#app',
    data: {
        results: []
    },
    mounted() {
        this.getPosts('home');
    },
    methods: {
        getPosts(section) {
            let url = buildUrl(section);
            axios.get(url).then((response) => {
                this.results = response.data.results;
            }).catch(error => { console.log(error); });
        }
    }
});