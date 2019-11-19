import NProgress from "nprogress";

export default {
  namespaced: true,
  state: {
    sentence: {},
    sentenceList: []
  },
  getters: {
    sentence: state => {
      return state.sentence;
    },
    sentenceList: state => state.sentenceList
  },
  mutations: {
    SET_SENTENCE(state, data) {
      state.sentence = data;
    },
    SET_SENTENCES_LIST(state, data) {
      state.sentenceList = data;
    }
  },
  actions: {
    getQuoteOfDay({ commit }) {
      return this.$http
        .get(`/Quotes/GetQuoteOfDay`)
        .then(response => {
          const { data = [] } = response;
          commit("SET_SENTENCE", data);
        })
        .catch(error => {
          console.log(error.code);
          NProgress.done();

          if (error.code === "ECONNABORTED") {
            // TODO
          }
          if (
            error.response.status !== undefined &&
            error.response.status === 500
          ) {
            sessionStorage.removeItem("vuex");
            window.location = "/login";
          }
          throw error;
        });
    },
    getAll({ commit }) {
      return this.$http
        .get(`/Quotes/GetAll`)
        .then(response => {
          const { data = [] } = response;
          commit("SET_SENTENCES_LIST", data);
        })
        .catch(error => {
          console.log(error.code);
          NProgress.done();

          if (error.code === "ECONNABORTED") {
            // TODO
          }
          if (
            error.response.status !== undefined &&
            error.response.status === 500
          ) {
            sessionStorage.removeItem("vuex");
            window.location = "/login";
          }
          throw error;
        });
    }
  }
};
