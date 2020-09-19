<template>
<div>
    <v-app id="inspire">
     <Header/>   
    <v-main>
      <v-container class="fill-height" fluid>
       <Posts :posts="posts"/>
      </v-container>
    </v-main>
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
       API_URL: "http://localhost:3000/all",
       posts:[]
      }
    },
    components: {Footer,Header,Posts
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
