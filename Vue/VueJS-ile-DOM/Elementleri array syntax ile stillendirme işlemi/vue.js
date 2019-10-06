new Vue({
  el: "#app",
  data: {
    color: "green",
    yukseklik: 100
  },
  computed: {
    customStyle: function () {
      return {
        backgroundColor: this.color,
        height: this.yukseklik + "px"
      }
    }
  }
})