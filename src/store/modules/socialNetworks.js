import NProgress from "nprogress";

export default {
  namespaced: true,
  state: {
    socialNetworksList: [],
    userSocialNetworks: []
  },

  getters: {
    socialNetworksList: state => {
      const _socialNetworksList = state.socialNetworksList;
      state.socialNetworksList.forEach((value, index) => {
        let userSocialNetwork = state.userSocialNetworks.filter(
          sw => sw.socialNetworkId === value.id
        );
        if (userSocialNetwork !== "undefined" && userSocialNetwork.length > 0) {
          _socialNetworksList[index]["link"] = userSocialNetwork[0].link;
        }
      });
      return _socialNetworksList;
    },
    userSocialNetworks: state => state.userSocialNetworks
  },

  mutations: {
    SET_SOCIAL_NETWORKS_LIST(state, socialNetworks) {
      state.socialNetworksList = socialNetworks;
    },
    SET_USER_SOCIAL_NETWORKS(state, userSocialNetworks) {
      state.userSocialNetworks = userSocialNetworks;
    }
  },

  actions: {
    getSocialNetworks({ commit }) {
      const oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
        };
      return this.$http
        .get("/SocialNetworks/GetAll", config)
        .then(response => {
          const { data } = response;
          commit("SET_SOCIAL_NETWORKS_LIST", data);
        })
        .catch(error => {
          NProgress.done();

          if (error.response !== undefined && error.response.status === 500) {
            console.log(error.response);
            //sessionStorage.removeItem("vuex");
          }
          throw error;
        });
    },
    getUserSocialNetworks({ commit }, userId) {
      const oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
        };
      return this.$http
        .get(`/User/GetAllUserSocialNetworkUserId/${userId}`, config)
        .then(response => {
          const { data } = response;
          commit("SET_USER_SOCIAL_NETWORKS", data);
        })
        .catch(error => {
          NProgress.done();

          if (error.response !== undefined && error.response.status === 500) {
            console.log(error.response);
            //sessionStorage.removeItem("vuex");
          }
          throw error;
        });
    }
  }
};
