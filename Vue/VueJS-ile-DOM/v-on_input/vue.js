new Vue({
    el: "#app",
    data: {
      title: "Merhabalar | Selçuk",
      description : "Bu bir açıklamadır."
    },
    methods: {
      changeTitle: function(event){
        this.description = event.target.value;
      }
    }
  });
  