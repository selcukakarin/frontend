// v-show ike v-if arasındaki fark
// v-if direkt olarak dom'dan elementi kaldırır
// v-show ise display:none yapar
new Vue({
  el: "#app",
  data: {
    show: false,
    sayi: 15,
    showParagh: false
  }
})