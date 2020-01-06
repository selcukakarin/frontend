<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <Servers></Servers>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from "./components/Common/Header";
  import Footer from "./components/Common/Footer";
  import Servers from "./components/Server/Servers";
  import ServerDetails from "./components/Server/ServerDetails";

  export default {
    components : {
      appHeader : Header,
      "app-footer" : Footer,
      // appServers : Servers,
      Servers,  // ES6
      appServerDetails : ServerDetails
    }
  }
</script>

<style>

</style>
