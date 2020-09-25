<template>
  <v-flex xs8 md12>
    <v-card class="mx-auto">
      <v-card-text>
          <!-- add post -->
        <AddPost/>

        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in posts" :key="item.id">
                <td>
                  <img height="60" width="60" :src="item.image">
                </td>
                <td>{{ item.title }}</td>
                <td>{{ item.author }}</td>
                <td>
                  <v-chip class="ma-2" color="primary" text-color="white">{{ item.date }}</v-chip>
                </td>
                <td>
                  <EditPost :post="item"/> <!-- edit -->
                  <DeletePost :post="item"/> <!-- delete -->
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>


        
      </v-card-text>
    </v-card>
  </v-flex>
</template>


<script>
import AddPost from "@/components/AddPost.vue";
import EditPost from "@/components/EditPost.vue";
import DeletePost from "@/components/DeletePost.vue";

export default {
  name: "AdminHeader",
  props: ["posts"],
  data() {
    return { dialog: false, newPost: {} };
  },
  components: {
    AddPost,
    EditPost,
    DeletePost
  },
  methods: {
    reload() {}
  }
};
</script>

