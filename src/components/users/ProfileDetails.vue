<template>
  <div class="profile-card">
    <div class="profile-card__inner">
      <h2 class="profile-card__title">About Me</h2>
      <h3 class="profile-card__topic profile-card__topic--email">
        Email
      </h3>
      <p>
        {{ user.email }}
      </p>
      <h3
        v-if="user.phone"
        class="profile-card__topic profile-card__topic--phone"
      >
        Phone Number
      </h3>
      <p>
        {{ user.phone }}
      </p>
      <h3
        v-if="user.homeAddress"
        class="profile-card__topic profile-card__topic--address"
      >
        Home Address
      </h3>
      <p>
        {{ user.homeAddress }}
      </p>
      <h3
        v-if="user.workAddress"
        class="profile-card__topic profile-card__topic--address"
      >
        Work Address
      </h3>
      <p>
        {{ user.workAddress }}
      </p>
      <h3
        class="profile-card__topic profile-card__topic--skills"
        v-if="user.skills && user.skills.length > 0"
      >
        Technologies
      </h3>
      <p
        class="profile-card__badges"
        v-for="(skill, index) in user.skills"
        :key="`skills_${index}`"
      >
        {{ skill }}
      </p>
      <h3
        class="profile-card__topic profile-card__topic--interests"
        v-if="user.interests && user.interests.length > 0"
      >
        Interests
      </h3>
      <p
        class="profile-card__badges"
        v-for="(interest, index) in user.interests"
        :key="`interests_${index}`"
      >
        {{ interest.name }}
      </p>
      <h3
        class="profile-card__topic profile-card__topic--social"
        v-if="user.socialNetworks && user.socialNetworks.length > 0"
      >
        Social Networks
      </h3>
      <a
        v-for="(socialNetwork, index) in user.socialNetworks"
        :key="`socialNetworks_${index}`"
        :href="`${socialNetwork.link}`"
        target="_blank"
        class="profile-card__link"
      >
        <i
          :class="`${socialNetwork.icon}`"
          :style="{color: `${socialNetwork.iconColor}`}"
        ></i>
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "ProfileDetails",

  computed: {
    ...mapState({
      user: state => state.user.userDetails
    })
  },

  methods: {
    ...mapActions({
      getUserProfileById: "user/getUserProfileById",
      getUserSkills: "user/getUserSkills"
    })
  },
  
  async created() {
    await this.getUserProfileById(this.$route.params.id);
    await this.getUserSkills(this.$route.params.id);
  }
};
</script>
