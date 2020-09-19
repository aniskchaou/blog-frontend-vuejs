<template>
 
    <v-flex xs8 md10 >
         <AddPost/>
        <h2>Posts</h2>
  
    <v-simple-table>
        <template v-slot:default>
        <thead>
            <tr>
            <th >#</th>
            <th >title</th>
            <th >Author</th>
            <th >Date</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in posts" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.author }}</td>
            <td>{{ item.Date }}dfdsfsd</td>
            <td><EditPost :post="item" />
              <DeletePost :post="item"/> </td>
            </tr>
        </tbody>
        </template>
    </v-simple-table>
    </v-flex>






</template>

<script>
 import AddPost from '@/components/AddPost.vue'
 import EditPost from '@/components/EditPost.vue'
 import DeletePost from '@/components/DeletePost.vue'
  export default {
      name:'AdminHeader',
      props:['posts'],
      data(){
         return{ dialog:false,}
      },components:{
     AddPost,EditPost,DeletePost
    }
      
    }
  
</script>

