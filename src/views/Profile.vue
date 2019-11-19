<template>
  <main class="container-fluid">
    <article class="article">
      <div class="article__header">
        <h1 class="article__title">Profile</h1>
      </div>
      <div class="d-flex flex-wrap profile">
        <div class="col-12 col-md-6 col-lg-4 profile__wrap">
          <ProfileCard></ProfileCard>
        </div>
        <div class="col-12 col-md-6 col-lg-8 profile__wrap">
          <ProfileDetails />
          <ProfileEdit
            v-if="$store.state.auth.currentUser.id == loggedUserId"
          />
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import ProfileCard from "@/components/users/ProfileCard";
import ProfileDetails from "@/components/users/ProfileDetails";
import ProfileEdit from "@/components/users/ProfileEdit";

export default {
  components: {
    ProfileCard,
    ProfileDetails,
    ProfileEdit
  },

  computed: {
    loggedUserId() {
      return this.$route.params.id;
    }
  }
};
</script>
