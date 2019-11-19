<template>
  <div class="networks-list">
    <form style="width:100%" class="needs-validation" id="socialNetworks">
      <div v-for="item in socialNetworksList" :key="item.id" class="form-group">
        <label :for="`${item.name}`">
          {{ item.name }}
        </label>
        <input
          v-if="item.link !== undefined"
          class="form-control"
          type="text"
          placeholder="https://"
          :name="`${item.name}`"
          :value="item.link"
        />
        <input
          v-else
          class="form-control"
          type="text"
          placeholder="https://"
          :name="`${item.name}`"
        />
      </div>
      <div class="form-group">
        <button
          class="btn btn-primary"
          type="submit"
          @click.prevent="submitSocialNetworksForm()"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SocialNetworksList",

  props: {
    socialNetworksList: Array
  },

  data() {
    return {
      socialNetworks: {
        //TODO later
      }
    };
  },

  /* computed: {
    ...mapGetters({
      userSocialNetworks: "socialNetworks/userSocialNetworks"
    })
  }, */

  methods: {
    ...mapActions({
      getUserSocialNetworks: "socialNetworks/getUserSocialNetworks"
    }),
    submitSocialNetworksForm() {
      //this.$store.dispatch("user/updateUserSocialNetworks", this.socialNetworks);
    }
  },

  created() {
    this.getUserSocialNetworks(this.$store.state.auth.currentUser.id);
  }
};
</script>
