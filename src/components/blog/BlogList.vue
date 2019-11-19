<template>
  <div class="article__content">
    <section
      v-for="(post, index) in blogList"
      :key="index"
      :class="{
        'col-6': !fluid,
        'col-12': fluid,
        'news': true
      }"
      class="news"
      v-if="post.statusID == 1 || post.createdBy == $store.state.auth.currentUser.id"
    >
      <router-link
        class="news__link"
        :to="{
          name: 'blog-details',
          params: { 
            id: post.id 
          }
        }"
      >
        <picture class="news__img-bg news__img-bg--blog">
          <source 
            media="(max-width: 540px)" 
            :srcset="`http://192.168.0.155:5000/images/blog/${post.imageSmall}`"
          >
          <source 
            media="(max-width: 799px)" 
            :srcset="`http://192.168.0.155:5000/images/blog/${post.imageMedia}`"
          >
          <source 
            media="(min-width: 800px)" 
            :srcset="`http://192.168.0.155:5000/images/blog/${post.imageLarge}`"
          >
          <img
            class="news__img-bg"
            :srcset="`http://192.168.0.155:5000/images/blog/${post.imageLarge}`"
            alt="…"
          >
        </picture>
        <div class="news__info">
          <h2 v-if="post.publicationTypeId !== undefined && post.publicationTypeId == 1"
            class="news__title">
            [Opinion] | {{ post.title }}
          </h2>
          <h2 v-else
            class="news__title">
            [Technical] | {{ post.title }}
          </h2>
          <p class="news__text">{{ post.preview }}</p>
          <p class="news__date">{{ post.author }} - {{ post.date | trimDate }}</p>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import moment from 'moment';

export default {
  name: "BlogList",

  props: {
    fluid: {
      required: false,
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapState({
      postsList: state => state.blog.postsList
    }),
    ...mapGetters({
      blogList: 'blog/blogList'
    })
  },

  filters: {
    trimDate: function(value) {
      if (!value) {
        return "";
      }
      let cutedDate = value.substr(0, 10);
      return cutedDate;
    }
    
  },

  methods: {
    ...mapActions({
      getAll: "blog/getAll"
    })
  },
  
  created() {
    this.getAll();
  }
};
</script>
