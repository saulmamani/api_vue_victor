<template>
<div>
  <hr>

  <div class="derecha" v-if="esPrincial === false">
    <button @click="salir">Salir</button>
  </div>

  <h1>{{ titulo }}</h1>
  <h4 style="margin: -20px">{{ subTitulo }}</h4>
  <br>
  <hr>
</div>
</template>

<script>
export default {
  name: "cabezera",
  props: {
    titulo: String,
    subTitulo: String,
    esPrincial: Boolean
  },
  methods: {
    salir(){
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style scoped>
  h1{
    color:#42b983;
  }
  h4{
    color:darkgrey;
    font-family: "Book Antiqua";
  }
  .derecha{
    text-align: right;
  }
</style>