<template>
  <div>
    <cabezera
        :titulo="'CRUD DE USUARIOS'"
        :sub-titulo="'usuarios del sistema'"
        :es-princial="false"
    />

    <p class="derecha">
      <button>+ Nuevo</button>
    </p>

    <p style="text-align: left">
      <input type="text"/>
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