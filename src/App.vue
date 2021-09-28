<template>
  <v-app>
    <v-navigation-drawer permanent>
      <!-- menu de la derecha -->
      <v-list-item class="mt-15">
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Menu principal
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider/>

      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>

    </v-navigation-drawer>



    <v-app-bar app
               color="deep-purple accent-4"
               dense
               dark
    >
      <!-- barra de navegacion de encima -->
      <v-app-bar-nav-icon/>
      <v-toolbar-title>Mi aplicacion</v-toolbar-title>
      <v-spacer/>
      <v-btn icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-app-bar>



    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>

    <v-footer app>
      &copy; somosDAS
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    items: [
      {title: 'Home', icon: 'mdi-view-dashboard', to: '/'},
      {title: 'About', icon: 'mdi-image', to: '/about'},
      {title: 'Usuario', icon: 'mdi-help-box', to: '/usuarios'},
      {title: 'Choferes', icon: 'mdi-help-box', to: '/choferes'},
    ],
  }),
};
</script>
