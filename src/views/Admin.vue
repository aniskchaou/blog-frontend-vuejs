<template>
<div>
    <v-app id="inspire">
      <!-- header -->
     <AdminHeader/>   
    <v-main style="padding: 25px 0px 0px 256px;">
      <v-container fluid >
        <!-- post -->
      
       <div v-if="loading">
           <div class="text-xs-center" ><v-progress-circular style="left:5%;" align="center" class="justify-center"  :size="100" indeterminate color="primary"></v-progress-circular></div>
        </div>
        <div v-else>
              <AdminPosts :posts="posts" />
        </div>
      </v-container>
    </v-main>
    <!-- footer -->
    <AdminFooter/>
  </v-app>
</div>
</template>
<script>


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
       posts:[],
       loading: false
      }
    },methods:{
      gestPosts()
      {
        this.loading = true 
        fetch(this.API_URL).then(data=>{
          return data.json();
       
        })
        .then(json=>{this.posts=json.result;})
        .finally(() => (this.loading = false))
      }
    },beforeMount(){
      this.gestPosts();
    }
}
</script>
