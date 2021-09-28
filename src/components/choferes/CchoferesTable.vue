<template>
  <div>
    <p class="text-right mt-5">
      <v-btn color="secundary" @click="insertar">+ Nuevo</v-btn>
    </p>

    <v-row>
      <v-col cols="10">
        <v-text-field outlined label="Buscar: " v-model="txtBuscar"/>
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
        disable-pagination
        :loading="loading"
        :loading-text="'Cargando datos...'"
    >
      <template v-slot:item.nombre="{item}">
        <strong>{{ item.nombre }}</strong>
      </template>

      <template v-slot:item.opciones="{item}">
        <v-btn
            icon
            @click="modificar(item)"
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


    <v-dialog :value="dialog" persistent>
      <cchoferes-dialog
        @cerrar="dialog=false"
        @listar="getChoferes"
        :es-insertar="esInsertar"
        :chofer="chofer"
      />
    </v-dialog>

  </div>
</template>

<script>
import {mapGetters} from "vuex";
import CchoferesDialog from "@/components/choferes/CchoferesDialog";

export default {
  name: "CchoferesTable",
  components: {CchoferesDialog},
  data: () => ({
    choferes: [],
    txtBuscar: '',
    loading: false,
    dialog:false,
    esInsertar: true,
    chofer: {}, //variable para insertar y/o modificar

    //columnas de las tablas
    headers: [
      {text: 'Nombre', value: 'nombre'},
      {text: 'Licencia', value: 'licencia'},
      {text: 'Fono', value: 'celular'},
      {text: 'Opciones', value: 'opciones', sortable: false,}
    ]
  }),
  computed: {
    ...mapGetters({
      url: "getUrl"
    })
  },
  mounted() {
    //esto se ejecuta cuando se carga la pagina o se carga el componente
    this.getChoferes()
  },
  methods: {
    getChoferes() {
      // let url = "http://localhost:8000/api/choferes";
      //GET https://sifoli.herokuapp.com/api/choferes
      let url = `${this.url}choferes`; //this.url + 'choferes'

      this.loading = true;
      this.axios.get(url, {
        params: {txtBuscar: this.txtBuscar}
      }).then(response => {
        this.choferes = response.data;
      }).finally(() => {
        this.loading = false;
      })
    },
    insertar(){
      this.dialog = true;
      this.esInsertar = true;
      this.chofer = {};
    },
    modificar(reg) {
      this.dialog = true;
      this.esInsertar = false;
      this.chofer = reg;
    },
    eliminar(id) {
      if(confirm("Seguro que quiere eliminar el registro")){

        //DELETE  https://sifoli.herokuapp.com/api/choferes/38   -> 38 es el id del chofer
        let url = `${this.url}choferes/${id}`; //this.url + 'choferes/' + id
        this.axios.delete(url).then(response => {
          if(response.data.success === true){
            alert(response.data.message)
            this.getChoferes();
          }
        })

      }
    }
  }
}
</script>

<style scoped>

</style>