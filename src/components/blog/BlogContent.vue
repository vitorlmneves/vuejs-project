<template>
  <section class="blog">
    <div class="w-100 blog__container">
      <h1 v-if="post.publicationTypeId !== undefined && post.publicationTypeId == 1"
        class="blog__title blog__title--details"
      >
        [Opinion] | {{ post.title }}
      </h1>
      <h1 v-else class="blog__title blog__title--details">
        [Technical] | {{ post.title }}
      </h1>
      <div class="blog__content" v-html="post.content"></div>
      <div class="blog__info">
        <router-link
          :to="{
            name: 'profile',
              params: { 
              id: user.id 
            }
          }"
        >
          <img
            class="avatar avatar--round avatar--medium"
            :src="`http://192.168.0.155:5000/images/profile/${user.photo}`"
            :title="user.name"
            @error="imageLoadError"
          />
        </router-link>
        <div class="blog__meet-author">
          <h5>Meet the author</h5>
          <div class="f-large">
          <router-link
            :to="{
              name: 'profile',
                params: { 
                id: user.id 
              }
            }"
            class=""
          >
            {{user.firstName}} {{user.lastName}}
          </router-link>
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
            >
            </i>
          </a>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BlogContent",

  props: {
    post: Object
  },

  computed: {
    ...mapGetters({
      user: state => state.state.authorDetails
    })
  },

  methods: {
    imageLoadError(event) {
      event.target.src = require("@/assets/images/m1.png");
    },
    ...mapActions({
      getUserProfileById: "user/getUserProfileById"
    })
  },

  async created(post) {
    console.log(this.post.createdBy)
    await this.getUserProfileById(this.post.createdBy)
  }
};
</script>
