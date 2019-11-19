<template>
  <main class="container-fluid">
    <article class="article">
      <div class="article__header">
        <h1 class="article__title">News</h1>
      </div>
      <NewsCards />
    </article>
  </main>
</template>

<script>
import NewsCards from "@/components/news/NewsCards";

export default {
  components: {
    NewsCards
  }
};
</script>
