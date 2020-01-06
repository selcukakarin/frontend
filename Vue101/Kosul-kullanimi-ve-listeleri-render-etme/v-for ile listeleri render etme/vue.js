// v-show ike v-if arasındaki fark
// v-if direkt olarak dom'dan elementi kaldırır
// v-show ise display:none yapar
new Vue({
  el: "#app",
  data: {
    products: ["Monitör", "Klavye", "Askı", "Masa"],
    persons: [{
        name: "Selçuk",
        email: "selcukakarin@gmail.com"
      },
      {
        name: "alican",
        email: "alican@gmail.com"
      },
      {
        name: "mustafa",
        email: "mustafa@gmail.com"
      },
      {
        name: "samet",
        email: "samet@gmail.com"
      },
    ]
  }
})