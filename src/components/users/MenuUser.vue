<template>
  <div v-if="currentUser" class="menu-user">
    <div class="menu-user__item">
      <a href="#" class="menu-user__dropdown-toggle">
        <span class="menu-user__name">{{ currentUser.name }}</span>
        <img
          :src="'http://192.168.0.155:5000/images/profile/' + currentUser.photo"
          class="menu-user__img"
          @error="imageLoadError"
        />
      </a>
      <ul class="user-submenu">
        <li class="user-submenu__item">
          <img
            :src="'http://192.168.0.155:5000/images/profile/' + currentUser.photo"
            class="user-submenu__img"
            @error="imageLoadError"
          />
          <p class="user-submenu__role">
            {{ currentUser.profileType }}
          </p>
        </li>
        <li class="user-submenu__footer">
          <div class="user-submenu__left">
            <router-link
              :to="{
                name: 'profile',
                params: {
                  id: currentUser.id
                }
              }"
              class="user-submenu__button"
            >
              Profile
            </router-link>
          </div>
          <div class="user-submenu__right">
            <a href="#"
              class="user-submenu__button"
              @click="$store.dispatch('auth/logout', $router)"
            >
              Logout
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Profile",

  computed: {
    ...mapState({
      currentUser: state => state.auth.currentUser
    })
  },

  methods: {
    imageLoadError(event) {
      event.target.src = require("@/assets/images/m1.png");
    },
    collapseSidenav() {
      this.$root.isCollapsed = !this.$root.isCollapsed;
    },
    ...mapActions({
      getUserProfileById: "user/getUserProfileById",
      getUserInfo: "auth/getUserInfo"
    })
  }
};
</script>
