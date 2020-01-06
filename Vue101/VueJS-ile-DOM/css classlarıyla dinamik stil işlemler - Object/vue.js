new Vue({
  el: "#app",
  data: {
    attachedClass: false
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