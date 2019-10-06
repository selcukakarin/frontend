new Vue({
  el: "#app",
  data: {
    title: "Selam ",
    message: "furkan hg.",
    link: "https://www.google.com"
  },
  methods: {
    hi: function () {
      return "Selamlar Selçuk Akarın"
    },
    hello: function () {
      return this.title;
    },
    hello2: function () {
      return this.title + this.message;
    }
  }
});