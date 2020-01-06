<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">
      <br><br>
      <button @click="selectedComponent = 'appMemory'" class="btn-sm btn btn-primary">appMemory</button>
      <button @click="selectedComponent = 'appAuthor'" class="btn-sm btn btn-primary">appAuthor</button>
      <button @click="selectedComponent = 'appNewMemory'" class="btn-sm btn btn-primary">appNewMemory</button>

      <p>{{ selectedComponent }}</p>

      <!-- <app-memory content="Selamlar"></app-memory> -->
      <!-- <app-memory>
       <h1 slot="heading">Başlık</h1>
       <p >Bu güzel bir yazıdır.</p>
     </app-memory> -->
      <keep-alive>
        <component :is="selectedComponent">
          <h1 slot="heading">Başlık</h1>
          <p>Bu güzel bir yazıdır.</p>
        </component>
      </keep-alive>

    </div>
  </div>
</template>

<script>
  import Memory from "./components/Memory";
  import Author from "./components/Author";
  import NewMemory from "./components/NewMemory";

  export default {
    data: function () {
      return {
        selectedComponent: "appMemory"
      }
    },
    components: {
      appMemory: Memory,
      appAuthor: Author,
      appNewMemory: NewMemory
    }
  }
</script>