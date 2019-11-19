<template>
  <main class="container-fluid">
    <article class="article">
      <div class="article__header">
        <h1 class="article__title">{{ pageTitle }}</h1>
        <Search :search-term.sync="search" />
      </div>
      <TechnologiesCards :technologiesListAux="technologiesListAux" />
    </article>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TechnologiesCards from "@/components/tech/TechnologiesCards";
import Search from "@/components/base/Search";

export default {
  components: {
    TechnologiesCards,
    Search
  },

  data() {
    return {
      pageTitle: "Technologies"
    };
  },

  computed: {
    ...mapGetters({
      technologiesListAux: "technologies/technologyTypes"
    }),
    search: {
      set(val) {
        //console.log('new search: ', val)
        this.$store.commit("technologies/SET_SEARCH_TERM", val);
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
      getAllTechnologies: "technologies/getAllTechnologies"
    })
  },

  created() {
    this.getAllTechnologies();
  }
};
</script>
