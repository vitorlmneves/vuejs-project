<template>
  <div class="interests">
    <section v-for="item in interestsListAux" :key="item.title" class="section">
      <h1 class="mb-8 mt-4 section__title">
        {{ item.title }}
        <i class="interests__img fa fa-wrench"></i>
      </h1>
      <div class="d-flex flex-wrap">
        <div
          v-for="(item, index) in item.interests"
          :key="index"
          class="col-12 col-md-4 col-lg-3 interests__cards"
        >
          <router-link
            :to="{
              name: 'interests-details',
              params: {
                id: item.id
              }
            }"
            class="interests__link"
          >
            <div class="interests__inner">
              <div class="interests__info">
                <h3 class="interests__name">{{ item.name }}</h3>
                <span class="interests__consultants">
                  <router-link
                    class="interests__avatar-link"
                    v-for="(user, index) in item.users"
                    :key="index"
                    :to="{
                    name: 'profile',
                    params: { 
                      id: user.id 
                      }
                    }"
                  >
                    <img
                      
                      :src="`http://192.168.0.155:5000/images/profile/${user.picture}`"
                      class="avatar avatar--round avatar--small"
                      :title="user.name"
                      @error="imageLoadError"
                    />
                  </router-link>
                  {{ item.numberOfUsers }} Consultants
                </span="interests__consultants">
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
  name: "InterestsCards",

  props: {
    interestsListAux: Array
  },

  methods: {
    imageLoadError(event) {
      event.target.src = require("@/assets/images/m1.png");
    }
  }
};
</script>
