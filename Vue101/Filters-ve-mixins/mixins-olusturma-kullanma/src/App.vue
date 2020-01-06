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
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>

  import FilterList from "./FilterList";
  import { productMixin } from "./productMixin";

  export default {
    mixins : [productMixin],
    components :{
      appList : FilterList
    },
    data() {
      return {
        message: "Selamlar selçuk",
        searchText: ""
      }
    },
    filters: {
      buyukHarf(value) {
        return value.toUpperCase();
      }
    }
  }
</script>

<style>

</style>