<template>
  <div id="app">
    <MainHeader v-if="$store.getters['auth/isLoggedIn']" />
    <router-view />
    <Footer v-if="$store.getters['auth/isLoggedIn']" />
    <Player v-if="$store.getters['auth/isLoggedIn']" />
  </div>
</template>

<script>
import MainHeader from "@/components/base/MainHeader";
import Footer from "@/components/base/Footer";
import Player from "@/components/player/Player";
import { mapActions } from "vuex";

export default {
  components: {
    MainHeader,
    Footer,
    Player
  },

  methods: {
    ...mapActions({
      logout: "auth/logout"
    }),
    async handleLogout() {
      await this.logout();
      this.$router.push("/login");
    }
  }
};
</script>
