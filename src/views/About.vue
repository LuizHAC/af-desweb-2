<template>
  <!-- App.vue -->
  
    <v-app>

      <v-card
      color="grey lighten-4"
      flat
      height="200px"
      tile
      >
        <v-toolbar dense>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

          <v-toolbar-title>Title</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
      
      <v-navigation-drawer v-model="drawer" app class="indigo">
        <!-- -->
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        
      </v-navigation-drawer>
      </v-card>

  </v-app>

</template>

<script>
export default {
  name: 'About',
  components: {
  },
  data: () => ({
    //
    drawer:false
  }),
};
</script>