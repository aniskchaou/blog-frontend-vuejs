
<template>
  <v-row align="center" justify="center">

                <v-card style="margin:20px;" class="mx-auto" max-width="300" :key="post.id"  v-for="post in posts">
            <v-img
            class="white--text align-end"
            height="200px"
            width="300px"
            :src="post.image"
            >
            <v-card-title>{{post.title}}</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
            <div><v-chip class="ma-2" color="primary" text-color="white">{{post.date}}</v-chip></div>
             <DetailPost :post="post"/>
            </v-card-text>
        </v-card>





















     <br><br>
        </v-row>

        
</template>

<script>
import DetailPost from '@/components/DetailPost.vue'
  export default {
    name: 'Posts',
    props:['posts'],
    components:{
        DetailPost
    }
  }
</script>
