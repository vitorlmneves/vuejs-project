<template>
  <div class="technologies">
    <section 
      v-for="item in technologiesListAux" :key="item.title"
      class="section"
    >
      <h1 class="mb-8 mt-4 section__title">
        {{ item.title }}
        <i class="technologies__img fa fa-wrench"></i>
      </h1>
      <div class="d-flex flex-wrap">
        <div 
          v-for="(item, index) in item.techs"
          :key="index"
          class="col-12 col-md-4 col-lg-3 technologies__cards"
        >
          <router-link
            :to="{
              name: 'technologies-details',
              params: { 
                id: item.id 
                }
              }"
            class="technologies__link"
          >
            <div class="technologies__inner">
              <div class="technologies__info">
                <h3 class="technologies__name">{{ item.name }}</h3>
                <span class="technologies__consultants">
                  <img
                    class="avatar avatar--round avatar--small"
                    src="https://randomuser.me/api/portraits/women/43.jpg"
                  />
                  <img
                    class="avatar avatar--round avatar--small"
                    src="https://randomuser.me/api/portraits/men/43.jpg"
                  />
                  <img
                    class="avatar avatar--round avatar--small"
                    src="https://randomuser.me/api/portraits/men/23.jpg"
                  />
                  <img
                    class="avatar avatar--round avatar--small"
                    src="https://randomuser.me/api/portraits/women/23.jpg"
                  />
                  {{ item.users }} Consultants
                </span>
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
  name: "TechnologiesCards",
  props:{
    technologiesListAux: Array,
  },
  methods: {
    imageLoadError(event) {
      event.target.src = require("@/assets/images/m1.png");
    }
  }
};
</script>
