<template>
  <div class="profile-card">
    <div class="profile-card__inner">
      <img
        :src="'http://192.168.0.155:5000/images/profile/' + user.photo"
        class="profile-card__img"
        @error="imageLoadError"
      />
      <span v-if="$store.state.auth.currentUser.id == loggedUserId">
        <input
          type="file"
          name="file-1[]"
          id="file-1"
          class="inputfile inputfile-1 profile-card__upload"
          @change="onFileChange"
        />
        <label for="file-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="17"
            viewBox="0 0 20 17"
          >
            <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/>
          </svg>
          <span>Choose a file&hellip;</span>
        </label>
      </span>
      <div class="profile-card__info">
        <h3 class="profile-card__name">{{ user.firstName }} {{ user.lastName }}</h3>
        <span class="profile-card__role">{{ user.careerLevel }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { log } from 'util';

export default {
  name: "ProfileCard",

  data() {
    return {
      profile: {
        file: {}
      }
    };
  },

  computed: {
    ...mapState({
      user: state => state.user.userDetails
    }),
    loggedUserId() {
      return this.$route.params.id;
    }
  },

  methods: {
    imageLoadError(event) {
      event.target.src = require("@/assets/images/m1.png");
    },
    ...mapActions({
      getUserProfileById: "user/getUserProfileById"
    }),
    onFileChange(event) {
      this.profile.file = event.target.files[0];

      if (this.profile.file) {
        this.$store.dispatch("user/updateProfileImage", this.profile.file);
      }
    },
  },

  created() {
    this.getUserProfileById(this.$route.params.id);
  }
};
</script>
