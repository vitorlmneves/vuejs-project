import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import auth from "./modules/auth";
import blog from "./modules/blog";
import cars from "./modules/cars";
import events from "./modules/events";
import interests from "./modules/interests";
import news from "./modules/news";
import podcast from "./modules/podcast";
import sentences from "./modules/sentences";
import socialNetworks from "./modules/socialNetworks";
import team from "./modules/team";
import technologies from "./modules/technologies";
import user from "./modules/user";
import NProgress from 'nprogress';

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
  modules: ["auth"]
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    token: sessionStorage.getItem("ApiToken") || "",
    user: {}
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token, user) {
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    }
  },
  actions: {
    /* login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        return this.$http.post("/Authentication/Login", user)
          .then(resp => {
            const token = resp.data.token;
            const user = resp.data.user;
            sessionStorage.setItem("ApiToken", token);
            // Add the following line:
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            resolve(resp);
          })
          .catch(err => {
            alert(err)
            NProgress.done();
            commit("auth_error");
            sessionStorage.removeItem("ApiToken");
            reject(err);
          });
      });
    }, */
    /* logout({ commit }) {
      return new Promise(resolve => {
        commit("logout");
        sessionStorage.removeItem("ApiToken");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    } */
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  },
  modules: {
    auth,
    blog,
    cars,
    events,
    interests,
    news,
    podcast,
    sentences,
    socialNetworks,
    team,
    technologies,
    user
  },
  plugins: [vuexLocal.plugin]
});
