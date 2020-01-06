new Vue({
  el: "#app",
  data: {
    title: "Selam dünyalı",
    link: "https://www.google.com"
  },
  methods: {
    hello: function () {
      this.title = "Dev gezegenler ardında"
      return this.title;
    }
  }
});