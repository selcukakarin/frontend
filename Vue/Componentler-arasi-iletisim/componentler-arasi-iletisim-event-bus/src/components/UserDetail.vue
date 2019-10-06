<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p>Kullanıcı adı : {{ name }}</p>
    <p>Kullanıcı adı ters : {{ switchName() }}</p>
    <p>Kullanıcı yaşı : {{ userAge }}</p>
    <button @click="sendToParent">Veriyi parent'a gönder</button>
  </div>
</template>
<script>
  import { eventBus } from "../main";
  export default{
    props : {
      // name : [String, Array]
      name : {
        type : String,
        default : "videosinif.com"
        // Object için
        // type : Object,
        // default : function(){
        //   return{

        //   }
        // }
      },
      userAge : String
    },
    methods : {
      switchName(){
        return this.name.split("").reverse().join("");
      },
      sendToParent(){
        this.$emit("degisken", "Selcuk Akarın");
      }
    },
    created(){
      eventBus.$on("ageWasEdited",(age) => {
        this.userAge=age;
      })
    }
  }
</script>
<style scoped>
  div {
    background-color: lightcoral;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>
