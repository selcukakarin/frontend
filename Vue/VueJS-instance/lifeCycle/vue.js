new Vue({
  el: "#app1",
  data: {
    title: "VueJs instance"
  },
  methods: {
    destroy: function () {
      this.$destroy();
    }
  },
  beforeCreate: function () {
    console.log("before create")
  },
  created: function () {
    console.log("created")
  },
  beforeMount: function () {
    console.log("beforeMount")
  },
  mounted: function () {
    console.log("mounted")
  },
  beforeUpdate: function () {
    console.log("beforeUpdate")
  },
  updated: function () {
    console.log("updated")
  },
  beforeDestroy: function () {
    console.log("beforeDestroy")
  },
  destroyed: function () {
    console.log("destroyed")
  }
})