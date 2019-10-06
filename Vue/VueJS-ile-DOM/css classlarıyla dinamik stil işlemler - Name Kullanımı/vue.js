new Vue({
  el: "#app",
  data: {
    attachedClass: false,
    color: "pink"
  },
  computed: {
    divClass: function () {
      return {
        yellow: this.attachedClass,
        blue: !this.attachedClass
      }
    }
  }
})