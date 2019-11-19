<template>
  <main class="container-fluid">
    <article class="article">
      <div class="article__header">
        <h1 class="article__title">Technologies</h1>
      </div>
      <UsersCards :usersListAux="usersListAux"></UsersCards>
    </article>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";
import UsersCards from "@/components/users/UsersCards";

export default {
  components: {
    UsersCards
  },

  computed: {
    ...mapState({
      usersListAux: state => state.user.usersList
    })
  },

  methods: {
    imageLoadError(event) {
      event.target.src = require("@/assets/images/m1.png");
    },
    ...mapActions({
      getUsersBySkills: "user/getUsersBySkills"
    })
  },
  
  created() {
    this.getUsersBySkills(this.$route.params.id);
  }
};
</script>
