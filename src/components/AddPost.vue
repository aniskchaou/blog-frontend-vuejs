<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="success"
          dark
          v-bind="attrs"
          v-on="on"
                small
                absolute
                top
                left
                fab
        >
        +
        </v-btn>
        <br><br>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Create Post</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-text-field label="Title" v-model="newPost.title" ></v-text-field>
              </v-col>
               <v-col cols="12" sm="6" md="12">
                <v-text-field label="Author" v-model="newPost.author" ></v-text-field>
              </v-col>
               <v-col cols="12" sm="6" md="12">
                <v-text-field label="Image URL" v-model="newPost.image" ></v-text-field>
              </v-col>
              <v-col cols="23" sm="6" md="12">
                <v-textarea label="Description" v-model="newPost.post"></v-textarea>
              </v-col>
               <v-col cols="12" sm="6" md="12">
                    <v-date-picker label="Date" v-model="newPost.date"></v-date-picker>
               </v-col>
              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="addPost">Create</v-btn>
        </v-card-actions>
      </v-card>  
    </v-dialog>
  </v-row>
</template>

<script>

  export default {
    data: () => ({
      dialog: false,
      picker: new Date().toISOString().substr(0, 10),
      newPost:{}
    }),methods:{
       addPost()
       {
         let payload={
             title:this.newPost.title,
             author:this.newPost.author,
             post:this.newPost.post,
             date:this.newPost.date,
             image: this.newPost.image
         }
         fetch("https://blog-nodejs-backend.herokuapp.com/add",{ method:"POST",
             headers:{"content-type":"application/json"},
             body: JSON.stringify(payload)
             
             }).then(data=>{
               console.log(payload);
             return data.json();
         }).then(json=>{
             this.$emit('newPost',json.result);
             this.newPost={};
             this.dialog = false;
             this.$router.go('/admin');
         })
        
       }
    }
  }
</script>