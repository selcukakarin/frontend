new Vue({
  el: "#app",
  data: {
    color: "green",
    height: 100
  },
  computed: {
    customStyle: function () {
      return {
        backgroundColor: this.color,
        height: this.height + "px"
      }
    }
  }
})