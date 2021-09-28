<template>
  <v-card>
    <v-card-title>
      {{ esInsertar === true ? 'Nuevo' : 'Modificar' }} registro
      <v-spacer/>
      <v-btn
          icon
          @click="$emit('cerrar')"
      >
        X
      </v-btn>

    </v-card-title>

    <v-card-text>
      <v-text-field
          label="Nombre: "
          v-model="chofer.nombre"
      ></v-text-field>

      <v-text-field
          label="Licencia: "
          v-model="chofer.licencia"
      ></v-text-field>

      <v-text-field
          label="Celular: "
          v-model="chofer.celular"
          type="number"
      ></v-text-field>

      <pre>{{ chofer }}</pre>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" @click="guardar">Aceptar</v-btn>
      <v-btn color="default" @click="$emit('cerrar')">Cancelar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CchoferesDialog",
  props: {
    esInsertar: Boolean,
    chofer: Object
  },
  computed: {
    ...mapGetters({
      url: "getUrl"
    })
  },
  methods: {
    guardar(){
      //POST https://sifoli.herokuapp.com/api/choferes
      //PUT  https://sifoli.herokuapp.com/api/choferes/38 --> 38 es id del registro a modificar

      let url = `${this.url}choferes` + ( this.esInsertar === true ? '' : `/${this.chofer.id}`);
      this.axios({
        method: this.esInsertar === true ? 'POST' : 'PUT',
        url: url,
        data: this.chofer
      }).then(response => {
        if(response.data.success === true){
          alert(response.data.message);
          this.$emit('cerrar')
          this.$emit('listar')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>