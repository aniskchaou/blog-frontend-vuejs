<template>

  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      
      <template v-slot:activator="{ on, attrs }">
      
        <v-btn
          color="warning"
          dark
          v-bind="attrs"
          v-on="on"
          fab
          outlined 
          small
        >
          <v-icon>mdi-pencil</v-icon> 
        </v-btn>
        
      </template>
      
      <v-card>
        <v-card-title>
          <span class="headline">Edit Post</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-text-field label="Title" v-if="post" v-model="post.title" required></v-text-field>
              </v-col>
               <v-col cols="12" sm="6" md="12">
                <v-text-field label="Author" v-if="post" v-model="post.author"  required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="12">
                <v-text-field label="Image URL" v-if="post" v-model="post.image"  required></v-text-field>
              </v-col>
              <v-col cols="23" sm="6" md="12">
                <v-textarea label="Description" v-if="post"  v-model="post.post"></v-textarea>
              </v-col>
               <v-col cols="12" sm="6" md="12">
                    <v-date-picker label="Date" v-if="post" v-model="picker"></v-date-picker>
               </v-col>
              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="editPost(post)">Edit</v-btn>
        </v-card-actions>
      </v-card>  
    </v-dialog>
  </v-row>
  
</template>

<script>

  export default {
    props:['post'],
    data: () => ({
      dialog: false,
      picker: new Date().toISOString().substr(0, 10),
      newPost:{}
    }),methods:{
       editPost(post)
       {
         let payload={
             id:post.id,
             title:post.title,
             author:post.author,
             post:post.post,
             date:post.date,
             image:post.image
         }
        console.log(payload);
        fetch("https://blog-nodejs-backend.herokuapp.com/edit",{ method:"POST",
             headers:{"content-type":"application/json"},
             body: JSON.stringify(payload)}).then(data=>{
               console.log(payload);
             return data.json();
         }).then(json=>{
             this.$emit('newPost',json.result);
             //this.newPost={};
             this.dialog = false;
             this.$router.go('/admin');
         })
       }
    }
  }
</script>