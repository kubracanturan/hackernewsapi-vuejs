<template>

  <div class="container">
    <div class="story-text">
      <p>Son 25 yazının (story) başlığı içerisinde en çok geçen 10 kelimenin listesi; {{ titles }}</p>
    </div>
    <div v-for="story in stories" :key="story.id" class="store-new">
      <h2>{{ story.book.title }}</h2>
      <p>By: {{ story.book.by }}</p>
      <p>Type: {{ story.book.type }}</p>
        <p>Link: {{ story.book.url }}</p>
      <p >karma: {{ story.author.karma }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data: function() {
    return {
      err: "",
      stories: [],
      titles: []
    };
  },
created: async function () {
    axios
        .get("https://hacker-news.firebaseio.com/v0/newstories.json")
        .then(async result => {
            this.results = result.data.slice(0, 25);
            this.results.forEach(async element => {

                const book = await axios.get("https://hacker-news.firebaseio.com/v0/item/" + element + ".json")
                    .catch(err => {
                        console.log(err);
                    });


                const author = await axios.get("https://hacker-news.firebaseio.com/v0/user/" + book.data.by + ".json")
                    .catch(err => {
                        console.log(err);
                    });

                this.stories.push({
                    book:book.data,
                    author:author.data
                });
                this.titles = this.mostFrequentTitles(book.data.title.split(" "));


                console.log({
                    book:book.data,
                    author:author.data,
                })
                

            });
        })
        .catch(err => {
            this.err = err;
        });
},
methods: {
        mostFrequentTitles: function (arr) {
            const merged = [].concat.apply([], arr);

            const num = 10;
            const mostFrequent = (merged = [], num = 1) => {
                const map = {};
                let keys = [];
                for (let i = 0; i < merged.length; i++) {
                    if (map[merged[i]]) {
                        map[merged[i]]++;
                    } else {
                        map[merged[i]] = 1;
                    }
                }
                for (let i in map) {
                    keys.push(i);
                }
                keys = keys.sort((a, b) => {

                    if (map[a] === map[b]) {

                        if (a > b) {
                            return 1;
                        } else {
                            return -1;
                        }
                    }
                    else {
                        return map[b] - map[a];
                    }
                })
                    .slice(0, num);
                return keys;
            };
            const mostFrequentWord = mostFrequent(merged, num).toString();

            return mostFrequentWord;
        },
    }
};


</script>
