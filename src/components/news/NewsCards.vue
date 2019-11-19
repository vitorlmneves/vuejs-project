<template>
  <div class="article__content">
    <!-- <Spinner/> -->
    <template v-if="routeName === 'news'">
      <section 
        v-for="(article, index) in newsList"
        :key="index"
        :href="article.link"
        :class="{
          'col-6': !fluid,
          'col-12': fluid,
          'news': true
        }"
        class="news"
      >
        <a
          :href="article.link"
          class="news__link"
          target="_blank"
        >
          <div
            class="news__img-bg"
            :style="{ 'background-image': `url(${article.enclosure.url})` }"
            title="Woman holding a mug"
          ></div>
          <div class="news__info">
            <h2 class="news__title">{{ article.title }}</h2>
            <p class="news__text">{{ article.content }}</p>
            <p class="news__date">{{ article.pubDate }}</p>
          </div>
        </a>
      </section>
    </template>

    <template v-else>
      <div class="news news--home">
        <div class="d-flex flex-wrap no-gutters">
          <section
            v-for="(article, index) in highlight"
            :key="index"
            class="col-6"
          >
            <a
              :href="article.link"
              :class="{
                'col-lg-6': !fluid,
                'news__link news__link--dashboard': true
              }"
              target="_blank"
            >
              <div
                class="news__image"
                :style="{ 'background-image': `url(${article.enclosure.url})` }"
              >
                <a href="#" class="news__gradient"></a>
                <div class="news__info news__info--home">
                  <a href="#" class="news__link news__link--home">
                    {{ article.title }}
                  </a>
                  <span class="news__date news__date--home">
                    {{ article.pubDate }}
                  </span>
                </div>
              </div>
            </a>
          </section>

          <div class="col-6">
            <section v-for="(article, index) in secondHighlight" :key="index">
              <a
                :href="article.link"
                :class="{
                  'col-lg-12': !fluid,
                  'col-12': fluid,
                  'news__link news__link--dashboard': true
                }"
                target="_blank"
              >
                <div
                  class="news__image news__image--2ndHighlight"
                  :style="{
                    'background-image': `url(${article.enclosure.url})`
                  }"
                >
                  <a href="#" class="news__gradient"></a>
                  <div class="news__info news__info--home">
                    <a
                      href="#"
                      class="news__link news__link--home news__link--medium"
                    >
                      {{ article.title }}
                    </a>
                    <span class="news__date news__date--home">
                      {{ article.pubDate }}
                    </span>
                  </div>
                </div>
              </a>
            </section>

            <div class="d-flex no-gutters">
              <section
                v-for="(article, index) in top2"
                :key="index"
                class="col-6 news__content"
              >
                <a
                  :href="article.link"
                  :class="{
                    'lg:w-full': !fluid,
                    'news__link news__link--dashboard': true
                  }"
                  target="_blank"
                >
                  <div
                    class="news__image news__image--3rdHighlight"
                    :style="{
                      'background-image': `url(${article.enclosure.url})`
                    }"
                  >
                    <a href="#" class="news__gradient"></a>
                    <div class="news__info news__info--home">
                      <a
                        href="#"
                        class="news__link news__link--home news__link--small"
                      >
                        {{ article.title }}
                      </a>
                      <span class="news__date news__date--home">
                        {{ article.pubDate }}
                      </span>
                    </div>
                  </div>
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "NewsCards",

  props: {
    fluid: {
      required: false,
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapState({
      newsList: state => state.news.newsList
    }),
    ...mapGetters({
      highlight: "news/highlight",
      secondHighlight: "news/secondHighlight",
      top2: "news/top2"
    }),
    routeName() {
      return this.$route.name;
    }
  },

  methods: {
    ...mapActions({
      getFeed: "news/getFeed"
    })
  },

  created() {
    this.getFeed();
  }
};
</script>
