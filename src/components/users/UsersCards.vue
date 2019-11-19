<template>
  <div class="team">
    <section class="section">
      <h1 class="section__title">
        {{ usersListAux.name }}
      </h1>
      <div class="team__list">
        <div
          v-for="(item, id) in usersListAux.users"
          :key="id"
          class="col-12 col-md-6 col-lg-3 team__cards"
        >
          <router-link 
            class="team__link"
            :to="{
              name: 'profile',
              params: {
                id: item.id
              }
            }"
          >
            <div class="team__inner">
              <img
                class="team__img"
                :src="item.email"
                @error="imageLoadError"
              />
              <div class="team__info">
                <h3 class="team__name">{{ item.name }}</h3>

                <span class="team__role">Consultant</span>
                <p class="team__view">View profile</p>
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
  name: "UsersCards",

  props: {
    usersListAux: Object
  },

  methods: {
    imageLoadError(event) {
      event.target.src = require("@/assets/images/m1.png");
    }
  }
};
</script>
