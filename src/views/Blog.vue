<template>
  <main class="container-fluid">
    <article class="article">
      <div v-if="routeName === 'blog'" class="article__header">
        <h1 class="article__title">Blog</h1>
        <router-link
          :to="{
            name: 'create-blog'
          }"
          class="d-inline-flex ml-auto button">
          Create article
        </router-link>
      </div>
      <BlogList />
    </article>
  </main>
</template>

<script>
import BlogList from "@/components/blog/BlogList";

export default {
  components: {
    BlogList
  },

  computed: {
    routeName() {
      return this.$route.name;
    }
  }
};
</script>
