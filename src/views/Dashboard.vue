<template>
  <main class="container-fluid">
    <!-- <Sentence /> -->
    <NewsCards :fluid='true'/>
    <section class="d-flex">
      <div class="col-9">
        <Sentence :slider='true' />
        <BlogCards :homepage='true' />
      </div>
      <div class="col-3">
        <DashboardSidebar />
      </div>
    </section>
  </main>
</template>

<script>
import Sentence from "@/components/base/Sentence";
import NewsCards from "@/components/news/NewsCards";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import BlogCards from "@/components/blog/BlogCards";

export default {
  components: {
    Sentence,
    NewsCards,
    DashboardSidebar,
    BlogCards
  },

  props: {
    homepage: {
      required: false,
      type: Boolean,
      default: true
    }
  },
};
</script>

