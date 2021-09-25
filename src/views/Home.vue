<template>
  <div class="home">
    <cabezera
      :titulo="'PAGINA PRINCIPAL'"
      :sub-titulo="'principal'"
      :es-princial="true"
    />

    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Cabezera from "@/components/cabezera";

export default {
  name: 'Home',
  components: {
    Cabezera,
    HelloWorld
  }
}
</script>
