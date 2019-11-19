<template>
  <div class="article__header">
    <h1 class="article__title">{{pageTitle}}</h1>
    <Search :searchComponent='true' :search-term.sync="search" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Search from "@/components/base/Search";

export default {
  props: {
    pageTitle: {
      required: true,
      type: String,
      default: false
    }
  },

  components: {
    Search
  },

  computed: {
    search: {
      set(val){
        console.log('new search: ', val)
        this.$store.commit('technologies/SET_SEARCH_TERM', val)
      },
      get(){
        return this.$store.getters['team/searchTerm']
      }
    }
  }
}
</script>

<style>

</style>

