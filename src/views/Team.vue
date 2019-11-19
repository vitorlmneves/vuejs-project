<template>
  <main class="container-fluid">
    <article class="article">
      <div class="article__header">
        <h1 class="article__title">Team</h1>
        <Search :search-term.sync="search" />
      </div>
      <TeamCards :usersListAux="usersListAux" />
    </article>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TeamCards from "@/components/users/TeamCards";
import Search from "@/components/base/Search";

export default {
  components: {
    TeamCards,
    Search
  },

  computed: {
    ...mapGetters({
      usersListAux: "team/jobTypes"
    }),
    search: {
      set(val) {
        this.$store.commit("team/SET_SEARCH_TERM", val)
      },
      get() {
        return this.$store.getters['team/searchTerm']
      }
    }
  },

  methods: {
    ...mapActions({
      fetchUsers: "team/fetchUsers"
    })
  },

  created() {
    this.fetchUsers();
  }
};
</script>
