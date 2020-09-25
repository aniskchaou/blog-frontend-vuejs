<template>
<div>
    <v-app id="inspire">
      <!-- header -->
     <Header/>   
    <v-main style="padding: 5px 0px 0px 0px;">
      <v-container class="fill-height" fluid>
        <!-- posts -->
        <div v-if="loading">
           <div class="text-xs-center" ><v-progress-circular style="position:absolute;top:10%;left:50%;"  align="center" class="justify-center"  :size="150" indeterminate color="primary"></v-progress-circular></div>
        </div>
        <div v-else>
             <Posts :posts="posts"/>
        </div>
      </v-container>
    </v-main>
    <br><br>
    <!-- footer -->
    <Footer/>
  </v-app>
</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Posts from '@/components/Posts.vue'

  export default {
    name:'Layout',
    data(){
      return {
       API_URL: "https://blog-nodejs-backend.herokuapp.com/all",
       posts:[],
       loading: false
      }
    },
    components: {Footer,Header,Posts
    },methods:{
      gestPosts()
      {
        this.loading = true 
        fetch(this.API_URL).then(data=>{
          return data.json();
       
        }).then(json=>{this.posts=json.result;})
        .finally(() => (this.loading = false))
      }
    },beforeMount(){
      this.gestPosts();
    }
  }
</script>
