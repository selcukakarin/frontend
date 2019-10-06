// computed senkron, watch asenkron
new Vue({
  el: "#app",
  data: {
    link: "https://www.vuejsegitim.com/"
  },
  methods: {
    changeLink: function () {
      this.link = "https://www.videosinif.com/"
    },
  }

});

// v-bind attribute binding
// v-on event binding