<template>
  <main class="container-fluid">
    <article class="article">
      <div class="article__header">
        <h1 class="article__title">{{ pageTitle }}</h1>
        <Search :search-term.sync="search" />
      </div>
      <InterestsCards :interestsListAux="interestsListAux" />
    </article>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import InterestsCards from "@/components/interests/InterestsCards";
import Search from "@/components/base/Search";

export default {
  components: {
    InterestsCards,
    Search
  },

  data() {
    return {
      pageTitle: "Interests"
    };
  },

  computed: {
    ...mapGetters({
      interestsListAux: "interests/interestTypes"
    }),
    search: {
      set(val) {
        //console.log('new search: ', val)
        this.$store.commit("interests/SET_SEARCH_TERM", val);
      },
      get() {
        return this.$store.getters["team/searchTerm"]
      }
    }
  },

  methods: {
    imageLoadError(event) {
      event.target.src = require("@/assets/images/m1.png");
    },
    ...mapActions({
      getAllInterests: "interests/getAllInterests"
    })
  },

  created() {
    this.getAllInterests();
  }
};
</script>
