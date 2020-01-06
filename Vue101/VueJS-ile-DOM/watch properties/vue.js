// computed senkron, watch asenkron
new Vue({
  el: "#app",
  data: {
    counter: 0,
    secondCounter: 0
  },
  methods: {
    result: function () {
      console.log("Method çalıştı");
      return this.counter > 10 ? "10'dan büyük" : "küçüktür";
    },
  },
  computed: {
    output: function () {
      console.log("Computed çalıştı");
      return this.counter > 10 ? "10'dan büyük" : "küçüktür";
    }
  },

  watch: {
    counter: function (value) {
      vm = this;
      setTimeout(function () {
        vm.counter = 0;
      }, 1500)
    }
  }

});