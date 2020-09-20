<template>
<div>
    <v-app id="inspire">
     <AdminHeader/>   
    <v-main style="padding: 25px 0px 0px 256px;">
      <v-container fluid >
       <AdminPosts :posts="posts" />
      </v-container>
    </v-main>
    <AdminFooter/>
  </v-app>
</div>
</template>
<script>
// @ is an alias to /src

import AdminPosts from '@/components/AdminPosts.vue'
import AdminHeader from '@/components/AdminHeader.vue'
import AdminFooter from '@/components/AdminFooter.vue'

export default {
  name: 'Admin',
  components: {
    AdminPosts,AdminHeader,AdminFooter
  },
    data(){
      return {
       API_URL: "https://blog-nodejs-backend.herokuapp.com/all",
       posts:[]
      }
    },methods:{
      gestPosts()
      {
        fetch(this.API_URL).then(data=>{
          return data.json();
       
        }).then(json=>{this.posts=json.result;})
      }
    },beforeMount(){
      this.gestPosts();
      console.log(this.posts);
    }
}
</script>
