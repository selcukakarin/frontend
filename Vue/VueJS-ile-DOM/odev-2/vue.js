// daha fazla modifier için
// https://vuejs.org/v2/guide/events.html#Event-Modifiers
new Vue({
  el: "#excersise",
  data: {
    value: "input"
  },
  methods: {
    showAlert: function () {
      alert("Alert");
    },
    getData: function (event) {
      this.value = event.target.value;
    }
  }
});