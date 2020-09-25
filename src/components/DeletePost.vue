<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="error" dark v-bind="attrs" v-on="on" fab  outlined  small>
          <v-icon>mdi-delete</v-icon> 
        </v-btn>
      </template>
      <v-card>
        
        <v-card-title class="headline">Delete Post</v-card-title>
        
        <v-card-text>Are you sure you want to delete this post ?</v-card-text>
       
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>
          <v-btn color="green darken-1" text @click="deletePost(post)">Delete</v-btn>
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
         deletePost(post)
         {
           let payload={id:post.id};
           fetch("https://blog-nodejs-backend.herokuapp.com/delete",{ 
             method:"POST",
             headers:{"content-type":"application/json"},
             body: JSON.stringify(payload)
             
             }).then(data=>{
               console.log(payload);
             return data.json();
         }).then(json=>{
             this.$emit('posts',json.result);
             this.dialog = false;
             this.$router.replace('/');
         })
         }
      }
    }
  
</script>