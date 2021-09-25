<template>
  <div>
    <cabezera
        :titulo="'CRUD DE USUARIOS'"
        :sub-titulo="'usuarios del sistema'"
        :es-princial="false"
    />

    <p class="derecha mt-5">
      <v-btn color="secundary">+ Nuevo</v-btn>
    </p>

    <p style="text-align: left">
      <v-text-field outlined label="Buscar: "></v-text-field>
    </p>

  </div>
</template>

<script>
import Cabezera from "@/components/cabezera";
export default {
  name: "Usuario",
  components: {Cabezera}
}
</script>

<style scoped>
.derecha{
  text-align: right;
}
</style>