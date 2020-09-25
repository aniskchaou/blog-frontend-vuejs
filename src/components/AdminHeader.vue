<template>
<div>

  <!-- navigation -->
  <v-navigation-drawer v-model="drawer" app >   
      <!-- list -->
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> <router-link to="/">HOME</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title><router-link to="/admin">POSTS</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
   
   
    <v-app-bar app color="blue-grey" dark >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>POSTS</v-toolbar-title>
    </v-app-bar>

    
</div>
    
</template>




 <script>
  export default {
    name: 'AdminHeader', 
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    })
  }
</script> 