new Vue({
  el: "#exercise",
  data: {
    name: "Selçuk",
    age: 25,
    at: "https://www.videosinif.com/assets/images/logo_egitim.png"
  },
  methods: {
    random: function() {
      return Math.random();
    },
    changed: function(event) {
      this.age = event.target.value;
    }
  }
});
