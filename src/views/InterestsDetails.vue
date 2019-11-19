<template>
  <main class="container-fluid">
    <article class="article">
      <div class="article__header">
        <h1 class="article__title">Interests</h1>
      </div>
      <section class="section">
        <h1 class="section__title"v-for="title in usersListAux">
          {{title.interestName}}
        </h1>
      </section>
      <TeamCards :usersListAux="usersListAux" />
    </article>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TeamCards from "@/components/users/TeamCards";

export default {
  components: {
    TeamCards
  },

  computed: {
    ...mapGetters({
      usersListAux: "user/usersByInterest"
    })
  },

  methods: {
    imageLoadError(event) {
      event.target.src = require("@/assets/images/m1.png");
    },
    ...mapActions({
      getUsersByInterest: "user/getUsersByInterest"
    })
  },

  created() {
    this.getUsersByInterest(this.$route.params.id);
  }
};
</script>
