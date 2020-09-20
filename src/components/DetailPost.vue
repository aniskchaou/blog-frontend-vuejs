<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="error"
          dark
          v-bind="attrs"
          v-on="on"
          fab
          small
          absolute
          bottom
          center
        >
          +
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">{{post.title}}</v-card-title>
        <v-card-text>{{post.post}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Close</v-btn>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
      props:['post'],
    data () {
      return {
        dialog: false,
      }

      },methods:{
         close()
         {
           this.dialog=false;
           
         }
      }
    }
  
</script>