import NProgress from "nprogress";

export default {
  namespaced: true,
  state: {
    tokens: null,
    currentUser: null
  },
  getters: {
    isLoggedIn: state => state.tokens !== null && state.tokens !== ""
  },
  mutations: {
    SET_TOKENS(state, tokens) {
      state.tokens = tokens;
    },
    CURRENT_USER(state, user) {
      state.currentUser = user;
    },
    CLEAR_TOKENS(state) {
      state.tokens = null;
      state.currentUser = null;
    }
  },
  actions: {
    login({ commit }, data) {
      return this.$http
        .post(`${this.$apiUrl}Authentication/Login`, data)
        .then(response => {
          const { data: tokens = null } = response;
          commit("SET_TOKENS", tokens);
        })
        .catch(error => {
          console.log(error);
          NProgress.done();
          throw error;
        });
    },
    getUserInfo({ commit }, data) {
      return this.$http
        .get(`${this.$apiUrl}User/GetCurrentUser?userToken=${data.token}`)
        .then(response => {
          const { data: user = null } = response;
          commit("CURRENT_USER", user);
        })
        .catch(error => {
          console.log(error);
          NProgress.done();
          throw error;
        });
    },
    logout({ commit }, router) {
      commit("CLEAR_TOKENS");
      router.push("/login");
    }
  }
};
