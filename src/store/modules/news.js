export default {
  namespaced: true,
  state: {
    newsList: [],
    fields: [
      {
        key: "feedSource",
        label: "Source",
        sortable: true,
        sortDirection: "desc"
      },
      {
        key: "feedDescription",
        label: "Description",
        sortable: true
      },
      {
        key: "url",
        label: "URL",
        sortable: true
      },
      {
        key: "actions",
        label: "Actions",
        class: "text-center"
      }
    ],
    items: []
  },

  getters: {
    highlight: state => {
      const highlight = state.newsList.slice(0, 1);
      return highlight;
    },

    secondHighlight: state => {
      const secondHighlight = state.newsList.slice(1, 2);
      return secondHighlight;
    },

    top2: state => {
      const top2 = state.newsList.slice(2, 4);
      return top2;
    },

    top3: state => {
      const top3 = state.newsList.slice(0, 3);
      return top3;
    },

    rssFeeds: state => {
      const items = state.items;
      return items;
    },

    tableHeader: state => {
      const fields = state.fields;
      return fields;
    }
  },

  mutations: {
    SET_NEWS_LIST(state, news) {
      state.newsList = news;
    },
    SET_RSS_LIST(state, rss) {
      state.items = rss;
    }
  },

  actions: {
    getFeed({ commit }) {
      return this.$httpFeed
      .get(
        "https://wt-c2bde7d7dfc8623f121b0eb5a7102930-0.sandbox.auth0-extend.com/getRss?url=http://www.techradar.com/rss"
      )
      .then(response => {
        const { data: { feed: { items } = {} } } = response;
        commit("SET_NEWS_LIST", items);
      });
    },
    getFeedsRSS({ commit }) {
      return this.$http
      .get("/RssFeed/GetAll")
      .then(response => {
        const { data } = response;
        commit("SET_RSS_LIST", data);
      });
    }
  }
};
