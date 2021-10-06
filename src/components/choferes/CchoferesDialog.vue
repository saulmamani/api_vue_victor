<template>
  <v-card>
    <v-form
        ref="form"
        lazy-validation
        v-model="valid"
    >

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
          :rules="[(v) => !!v || 'Nombre es requerido']"
      ></v-text-field>

      <v-text-field
          label="Licencia: "
          v-model="chofer.licencia"
          :rules="[(v) => !!v || 'Licencia es requerido']"
      ></v-text-field>

      <v-text-field
          label="Celular: "
          v-model="chofer.celular"
          type="number"
          :rules="[(v) =>
                      !!v || 'Celular es requerido',
                      v => (v && v.length <= 8 && v.length >= 8) || 'El celular debe ser de 8 digitos']"
      ></v-text-field>

      <pre>{{ chofer }}</pre>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" @click="guardar">Aceptar</v-btn>
      <v-btn color="default" @click="$emit('cerrar')">Cancelar</v-btn>
    </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import {mapGetters} from "vuex";
import {Alert} from "@/addons/Alert";

export default {
  name: "CchoferesDialog",
  props: {
    esInsertar: Boolean,
    chofer: Object
  },
  data: () => ({
    valid: false
  }),
  computed: {
    ...mapGetters({
      url: "getUrl"
    })
  },
  methods: {
    guardar(){
      if (!this.$refs.form.validate())
        return;


      //POST https://sifoli.herokuapp.com/api/choferes
      //PUT  https://sifoli.herokuapp.com/api/choferes/38 --> 38 es id del registro a modificar

      let url = `${this.url}choferes` + ( this.esInsertar === true ? '' : `/${this.chofer.id}`);
      this.axios({
        method: this.esInsertar === true ? 'POST' : 'PUT',
        url: url,
        data: this.chofer
      }).then(response => {
        if(response.data.success === true){
          Alert.ok(response.data.message);
          this.$emit('cerrar')
          this.$emit('listar')
        }
      }).catch(e => {
        console.log(e.response.data.errors);
        let errores = this.listaErrores(e.response.data.errors);
        Alert.validate(errores);
      })

    },
    listaErrores: (json) => {
      let res = "<strong>Errores: </strong> <br><br>";
      Object.entries(json).forEach(item => {
        res += "-" + item + "<br>";
      });
      return res;
    },
  }
}
</script>

<style scoped>

</style>