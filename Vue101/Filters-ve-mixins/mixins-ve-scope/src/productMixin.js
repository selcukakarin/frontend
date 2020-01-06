export const productMixin = {
  data() {
    return {
      message: "Selamlar selçuk",
      products: ["Monitör", "Klavye", "Fare", "Kasa"],
      searchText: ""
    }
  },
  computed: {
    filtered() {
      return this.products.filter((element) => {
        return element.match(this.searchText);
      })
    }
  },
  created(){
    console.log("mixin created")
  }
}