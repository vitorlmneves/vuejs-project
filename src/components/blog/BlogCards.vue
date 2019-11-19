<template>
  <section class="blog" :class="{ 'blog--homepage': homepage }">
    <router-link
      v-for="(post, index) in highlightBlog"
      :key="index"
      :to="{
        name: 'blog-details',
        params: {
          id: post.id
        }
      }"
      class="w-100 blog__link"
      :class="{ 'blog__link--list': list }"
    >
      <div class="blog__post">
        <picture class="blog__img blog__img--blog">
          <source
            media="(max-width: 540px)"
            :srcset="`http://192.168.0.155:5000/images/blog/${post.imageSmall}`"
          />
          <source
            media="(max-width: 799px)"
            :srcset="`http://192.168.0.155:5000/images/blog/${post.imageMedia}`"
          />
          <source
            media="(min-width: 800px)"
            :srcset="`http://192.168.0.155:5000/images/blog/${post.imageLarge}`"
          />
          <img
            class="blog__img"
            :srcset="`http://192.168.0.155:5000/images/blog/${post.imageLarge}`"
            alt="…"
          />
        </picture>
        <div>
          <div
            v-if="post.publicationTypeId !== undefined &&
            post.publicationTypeId == 1"
            class="blog__title"
          >
            [Opinion] | {{ post.title }}
          </div>
          <div v-else class="blog__title">[Technical] | {{ post.title }}</div>
          <p class="blog__date">
            {{ post.author }} - {{ post.date | trimDate }}
          </p>
        </div>
      </div>
    </router-link>
    <template v-if="routeName !== 'blog'">
      <div class="blog-news" :class="{ 'blog-news--list': list }">
        <a
          v-for="(article, index) in top3"
          :key="index"
          :href="article.link"
          :class="{
            'lg:w-full': !fluid,
            'w-full': fluid,
            'news__link news__link--dashboard': true
          }"
          target="_blank"
        >
          <div class="blogNews__margin">
            <div
              class="blogNews__content"
              :style="{ 'background-image': `url(${article.enclosure.url})` }"
            >
              <a href="#" class="blogNews__image--link"></a>
            </div>
            <div class="info">
              <h5 class="blogNews__info">
                <a class="blogNews__link" :href="article.link">
                  {{ article.title }}
                </a>
              </h5>
              <span class="blogNews__date">
                {{ article.pubDate | formatDateNews }}
              </span>
            </div>
          </div>
        </a>
      </div>
    </template>
    <template v-if="routeName === 'blog'">
      <div class="blog-news" :class="{ 'blog-news--list': list }">
        <router-link
          v-for="(post, index) in bloglist"
          :key="index"
          :class="{
            'col-lg-12': !fluid,
            'col-12': fluid,
            'news__link news__link--dashboard': true
          }"
          :to="{
            name: 'blog-details',
            params: {
              id: post.id
            }
          }"
        >
          <div class="blogNews__margin">
            <div
              class="blogNews__content"
              :style="{ 'background-image': 'url(' + post.images + ')' }"
            >
              <router-link
                class="blogNews__image--link"
                :to="{
                  name: 'blog-details',
                  params: {
                    id: post.id
                  }
                }"
              ></router-link>
            </div>
            <div class="info">
              <h5 class="blogNews__info">
                <router-link
                  v-if="
                    post.publicationTypeId !== undefined &&
                    post.publicationTypeId == 1
                  "
                  class="blogNews__link"
                  :to="{
                    name: 'blog-details',
                    params: {
                      id: post.id
                    }
                  }"
                >[Opinion] | {{ post.title }}</router-link>
                <router-link
                  v-else
                  class="blogNews__link"
                  :to="{
                    name: 'blog-details',
                    params: {
                      id: post.id
                    }
                  }"
                >[Technical] | {{ post.title }}</router-link>
              </h5>
              <span
                class="blogNews__date"
                >
                {{ post.author }} - {{ post.date | trimDate }}
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </template>
  </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import moment from "moment";

export default {
  name: "BlogCards",

  props: {
    fluid: {
      required: false,
      type: Boolean,
      default: false
    },
    list: {
      required: false,
      type: Boolean,
      default: false
    },
    homepage: {
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
      highlightBlog: "blog/highlightBlog",
      bloglist: "blog/blogList",
      top3: "news/top3"
    }),
    routeName() {
      return this.$route.name;
    }
  },

  filters: {
    trimDate: function(value) {
      if (!value) {
        return "";
      }
      let cutedDate = value.substr(0, 10);
      return cutedDate;
    },

    formatDateNews: function(value) {
      if (value) {
        return moment(String(value)).format("YYYY MMM DD");
      }
    }
  },

  methods: {
    imageLoadError(event) {
      event.target.src = require("@/assets/images/m1.png");
    },
    ...mapActions({
      getAll: "blog/getAll"
    })
  },

  created() {
    this.getAll();
  }
};
</script>
