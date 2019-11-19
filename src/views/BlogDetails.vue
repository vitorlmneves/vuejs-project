<template>
  <main class="container-fluid">
    <article class="article">
      <div class="article__header">
        <router-link
          v-if="
            post.createdBy == $store.state.auth.currentUser.id &&
              post.statusId == 2
          "
          :to="{
            name: 'blog-edit',
            params: {
              id: post.id
            }
          }"
          class="d-inline-flex ml-auto button"
        >
          Edit article
        </router-link>
        <router-link
          v-if="post.statusId == 2 && $store.state.auth.currentUser.email == ''"
          :to="{
            name: 'blog-approve',
            params: {
              id: post.id
            }
          }"
          class="d-inline-flex ml-auto button"
        >
          Approve article
        </router-link>
      </div>
      <div class="flex-grow m-2">
        <BlogContent :post="post"></BlogContent>
      </div>
    </article>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";
import BlogContent from "@/components/blog/BlogContent";

export default {
  components: {
    BlogContent
  },

  computed: {
    ...mapState({
      post: state => state.blog.post
    })
  },

  methods: {
    ...mapActions({
      getById: "blog/getById"
    })
  },

  created() {
    this.getById(this.$route.params.id);
  }
};
</script>
