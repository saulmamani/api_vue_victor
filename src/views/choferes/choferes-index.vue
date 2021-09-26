<template>
<v-container>
  <cabezera
      :titulo="'CRUD DE CHOFERES'"
      :sub-titulo="'choferes del sistema'"
      :es-princial="false"
  />

  <p class="text-right mt-5">
    <v-btn color="secundary">+ Nuevo</v-btn>
  </p>

  <v-row>
    <v-col cols="10">
      <v-text-field outlined label="Buscar: " v-model="txtBuscar" />
    </v-col>
    <v-col cols="2">
      <v-btn color="primary" large block @click="getChoferes">Buscar</v-btn>
    </v-col>
  </v-row>

  <v-data-table
      :headers="headers"
      :items="choferes"
      item-key="id"
      class="elevation-1"
      hide-default-footer
  >
    <template v-slot:item.nombre="{item}">
      <strong>{{item.nombre}}</strong>
    </template>

    <template v-slot:item.opciones="{item}">
      <v-btn
        icon
        @click="modificar(item.id)"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
          icon
          @click="eliminar(item.id)"
          color="red"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </template>
  </v-data-table>

</v-container>
</template>

<script>
import Cabezera from "@/components/cabezera";
import { mapGetters } from 'vuex'

export default {
  name: "choferes-index",
  components: {Cabezera},
  data: () => ({
    choferes: [],
    txtBuscar: '',

    //columnas de las tablas
    headers: [
      { text: 'Nombre', value: 'nombre' },
      { text: 'Licencia', value: 'licencia' },
      { text: 'Fono', value: 'celular' },
      { text: 'Opciones', value: 'opciones',  sortable: false,}
    ]
  }),
  computed:{
    ...mapGetters({
      url: "getUrl"
    })
  },
  mounted() {
    //esto se ejecuta cuando se carga la pagina o se carga el componente
    this.getChoferes()
  },
  methods:{
    getChoferes(){
      // let url = "http://localhost:8000/api/choferes";
      let url = `${this.url}choferes`; //this.url + 'choferes'
      this.axios.get(url, {
        params: {txtBuscar: this.txtBuscar}
      }).then(response => {
        this.choferes = response.data;
      })
    },
    modificar(id){
      alert(id)
    },
    eliminar(id){
      alert(id)
    }
  }
}
</script>

<style scoped>

</style>