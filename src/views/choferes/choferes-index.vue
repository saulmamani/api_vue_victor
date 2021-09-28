<template>
  <v-card>

    <v-card-title>
      <cabezera
          :titulo="'CRUD DE CHOFERES'"
          :sub-titulo="'choferes del sistema'"
          :es-princial="false"
      />
    </v-card-title>

    <v-card-text>
      <CchoferesTable/>
    </v-card-text>

  </v-card>
</template>

<script>
import Cabezera from "@/components/cabezera";
import CchoferesTable from "@/components/choferes/CchoferesTable";

export default {
  name: "choferes-index",
  components: {CchoferesTable, Cabezera},
}
</script>

<style scoped>

</style>