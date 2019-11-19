<template>
  <div class="team">
    <section class="section" v-for="job in usersListAux" :key="job.title">
      <h1 class="section__title">
        {{ job.title }}
      </h1>
      <div class="team__list" v-if="job.users.length">
        <div
          v-for="(user, index) in job.users"
          :key="index"
          class="col-12 col-md-6 col-lg-3 team__cards"
        >
          <router-link 
            class="team__link"
            :to="{
              name: 'profile',
              params: { 
                id: user.id 
                }
              }"
            >
            <div class="team__inner">
              <img
                v-if="user.picture !== null"
                :src="user.picture"
                class="team__img"
                @error="imageLoadError"
              />
              <img
                v-else
                src="@/assets/images/m1.png"
                class="team__img"
              />
              <div class="team__info">
                <h3 class="team__name">{{ user.name }}</h3>
                <span class="team__role">{{ user.profileType }}</span>
                <p class="team__view">
                  View profile
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "TeamCards",
  props:{
    usersListAux: Array,
  },
  methods: {
    imageLoadError(event) {
      event.target.src = require("@/assets/images/m1.png");
    }
  },
};
</script>
