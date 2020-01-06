<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter ve Mixins</h3>
        <p>{{ message | buyukHarf }}</p>
        <input type="text" v-model="searchText">
        <ul>
          <li v-for="product in filtered">{{product}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "Selamlar selçuk",
        products: ["Monitör", "Klavye", "Fare", "Kasa"],
        searchText: ""
      }
    },
    filters: {
      buyukHarf(value) {
        return value.toUpperCase();
      }
    },
    computed : {
      filtered(){
        return this.products.filter((element) => {
          return element.match(this.searchText);
        })
      }
    }
  }
</script>

<style>

</style>