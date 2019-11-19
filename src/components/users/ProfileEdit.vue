<template>
  <div class="profile-card profile-card__edit">
    <div class="profile-card__inner">
      <b-tabs content-class="mt-3">
        <b-tab title="Details" active>
          <form style="width:100%" class="needs-validation" id="profile">
            <div class="form-group">
              <label for="homeAddress">Home Address</label>
              <input
                class="form-control"
                type="text"
                name="homeAddress"
                placeholder="Home Address"
                v-model="user.homeAddress"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-8">
                <label for="placeOfWork">Work Address</label>
                <input
                  class="form-control"
                  type="text"
                  name="placeOfWork"
                  placeholder="Work Address"
                  v-model="user.placeOfWork"
                />
              </div>
              <div class="form-group col-md-4">
                <label for="phoneNumber">Phone Number</label>
                <input
                  class="form-control"
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  v-model="user.phoneNumber"
                />
              </div>
            </div>
            <div class="form-group">
              <button
                class="btn btn-primary"
                type="submit"
                @click.prevent="submitAboutUserForm()"
              >
                Save
              </button>
            </div>
          </form>
        </b-tab>
        <b-tab title="Interests">
          <InterestsList :interestsList="interestsList" />
        </b-tab>
        <b-tab title="Social Networks">
          <SocialNetworksList :socialNetworksList="socialNetworksList" />
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template> 

<script>
import { router } from "@/router";
import { mapActions, mapState, mapGetters } from "vuex";
import InterestsList from "@/components/interests/InterestsList";
import SocialNetworksList from "@/components/socialNetworks/SocialNetworksList";

export default {
  name: "ProfileDetails",

  components: {
    InterestsList,
    SocialNetworksList
  },

  computed: {
    ...mapState({
      user: state => state.user.userDetails
    }),
    ...mapGetters({
      interestsList: "interests/interestTypes",
      socialNetworksList: "socialNetworks/socialNetworksList"
    })
  },

  methods: {
    ...mapActions({
      getUserProfileById: "user/getUserProfileById",
      getUserSkills: "user/getUserSkills",
      getAllInterests: "interests/getAllInterests",
      getSocialNetworks: "socialNetworks/getSocialNetworks"
    }),
    submitAboutUserForm() {
      this.$store.dispatch("user/updateAboutUser", this.profileContent)
        .then((response) => {
            this.$swal.fire({
              width: 500,
              heightAuto: true,
              type: 'sucess',
              text: 'Your data was saved successfully!!!',
            })
          })
          .catch((err) => {
            this.$swal.fire({
              width: 500,
              heightAuto: true,
              type: 'error',
              text: 'Sorry, there was an error submiting the post!!!',
            })
          });
      
    }
  },

  async created() {
    await this.getUserProfileById(this.$route.params.id);
    await this.getUserSkills(this.$route.params.id);
    await this.getAllInterests();
    await this.getSocialNetworks();
  }
};
</script>
