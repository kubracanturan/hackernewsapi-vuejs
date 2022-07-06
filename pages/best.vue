<template>
  <div class="container">
    <div v-for="story in stories" :key="story.id" class="store-new" id="news">
        <h2>{{ story.data.title }}</h2>
        <p>By: {{ story.data.by }}</p>
        <p>Type: {{ story.data.type }}</p>
        <p>Link: {{ story.data.url }}</p>
        <p>Score: {{ story.data.score }}</p>
      </div>
    </div>
</template>
<script>

import axios from "axios";

export default{
  name: "news",

  data: function() {
    return {
      err: "",
      stories: [],
      titles: []
    };
  },
  created: function() {
    axios
      .get("https://hacker-news.firebaseio.com/v0/beststories.json")
      .then(result => {
        this.results = result.data.slice(0, 25);
        this.results.forEach(element => {

          axios
            .get(
              "https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
            )
            .then(result => {
              this.stories.push(result);
              this.titles.push(result.data.title.split(" "));

            })
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch(err => {
        this.err = err;
      });
  }
};

</script>

