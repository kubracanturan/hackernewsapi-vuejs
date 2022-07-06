import axios from "axios";

export default class news{
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
      .get("https://hacker-news.firebaseio.com/v0/newstories.json")
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

