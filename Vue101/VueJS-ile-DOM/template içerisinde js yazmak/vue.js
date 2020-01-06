// daha fazla modifier için
// https://vuejs.org/v2/guide/events.html#Event-Modifiers
new Vue({
  el: "#app",
  data: {
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    showAlert: function (name) {
      alert(name);
    },
    showAlert2: function (event) {
      alert(event.target.value);
    },
    increaseCounter: function (step) {
      this.counter += step;
    },
    updateCoords: function (step, event) {
      this.counter += step;
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
});