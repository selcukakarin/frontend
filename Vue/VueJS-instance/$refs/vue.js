var data = {
  title: 'VueJS Instance',
  showParagraph: false
}
var vm1 = new Vue({
  el: '#app1',
  data: data,
  methods: {
    show: function () {
      this.showParagraph = true;
      this.updateTitle('VueJS Instance (Güncellendi)');
      this.$refs.myButton.innerText = "TEST!!!!";
    },
    updateTitle: function (title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function () {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function (value) {
      alert('Title değişti, yeni değer : ' + value);
    }
  }
});

console.log(vm1)
console.log(vm1.$data === data);
console.log(vm1.$data.title)

setTimeout(function () {
  vm1.title = "Timer tarafından değişti";
  vm1.show();
}, 2000)

var vm2 = new Vue({
  el: "#app2",
  data: {
    title: "Vue instance2"
  },
  methods: {
    changeTitle: function () {
      vm1.title = "inst2 tarafından değiştirildi";
    }
  }
});