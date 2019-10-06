<template>
  <div class="col-md-s6">
    <h3>Child Component 2</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir diğer Child componentim</p>
    <p>Kullanıcı yaşı : {{ userAge }}</p>
    <button @click="changeAge">Yaş bilgisini değiştir</button>
  </div>
</template>
<script>
  import { eventBus } from "../main";

  export default{
    props : ["userAge"],
    methods : {
      changeAge(){
        this.userAge=30;
        // this.$emit("ageWasEdited", this.userAge);
        // eventBus.$emit("ageWasEdited", this.userAge)
        eventBus.changeAge(this.userAge);
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightgoldenrodyellow;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>

