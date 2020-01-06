new Vue({
  el: "#app",
  data: {
    counter: 0
  },
  methods: {
    showAlert: function () {
      alert();
    },
    increaseCounter: function () {
      this.counter++;
    }
  }
});