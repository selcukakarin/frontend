import Vue from 'vue'
import App from './App.vue'

Vue.mixin({
  created(){
    console.log("Global mixin created");
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
