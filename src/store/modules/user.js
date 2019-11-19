import NProgress from "nprogress";
import { log } from "util";

export default {
  namespaced: true,
  state: {
    authorDetails: [],
    userDetails: [],
    usersList: {},
    usersByInterest: [],
    lastAcquisitions: [],
    usersBirthdays: []
  },

  getters: {
    postAuthor: state => state.authorDetails,
    usersByInterest: state => {
      return state.usersByInterest;
    },
    lastAcquisitions: state => {
      return state.lastAcquisitions;
    },
    usersBirthdays: state => {
      return state.usersBirthdays;
    }
  },

  mutations: {
    SET_USERS_DETAILS(state, data) {
      state.userDetails = data;
    },
    SET_USERS_DETAILS_SKILLS(state, data) {
      state.userDetails.skills = data;
    },
    SET_USERS_BY_SKILLS(state, data) {
      state.usersList = data;
    },
    SET_USERS_INTERESTS(state, data) {
      state.usersByInterest = data;
    },
    SET_ACQUISITIONS(state, data) {
      state.lastAcquisitions = data;
    },
    SET_USERS_BIRTHDAYS(state, data) {
      state.usersBirthdays = data;
    }
  },

  actions: {
    getUserProfileById({ commit }, id) {
      let oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=UTF-8"
          }
        };
      return this.$http
        .get(`/User/GetUserProfileById/${id}`, config)
        .then(response => {
          const { data = [] } = response;
          commit("SET_USERS_DETAILS", data);
        })
        .catch(error => {
          NProgress.done();
          if (error.response !== undefined && error.response.status === 500) {
            throw error;
            //sessionStorage.removeItem("vuex");
          }
          throw error;
        });
    },
    getUserSkills({ commit }, userId) {
      let oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=UTF-8"
          }
        };
      return this.$httpBCR
        .get(`/skill/user/${userId}`, config)
        .then(response => {
          const { data } = response;
          commit("SET_USERS_DETAILS_SKILLS", data);
        })
        .catch(error => {
          NProgress.done();
          //sessionStorage.removeItem("vuex");
          throw error;
        });
    },
    getUsersBySkills({ commit }, skillId) {
      let oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=UTF-8"
          }
        };
      return this.$httpBCR
        .get(`/skill/${skillId}`, config)
        .then(response => {
          const { data } = response;
          commit("SET_USERS_BY_SKILLS", data);
        })
        .catch(error => {
          NProgress.done();
          //sessionStorage.removeItem("vuex");
          throw error;
        });
    },
    getUsersByInterest({ commit }, id) {
      let oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=UTF-8"
          }
        };
      return this.$http
        .get(`/User/GetByInterestId/${id}`, config)
        .then(response => {
          const dataArray = [];
          const { data = [] } = response;
          dataArray.push(data);
          commit("SET_USERS_INTERESTS", dataArray);
        })
        .catch(error => {
          NProgress.done();
          if (error.response !== undefined && error.response.status === 500) {
            throw error;
            //sessionStorage.removeItem("vuex");
          }
          throw error;
        });
    },
    getAcquisitions({ commit }) {
      let oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=UTF-8"
          }
        };
      return this.$http
        .get(`/User/GetAcquisitions`, config)
        .then(response => {
          const { data = [] } = response;
          commit("SET_ACQUISITIONS", data);
        })
        .catch(error => {
          NProgress.done();
          if (error.response !== undefined && error.response.status === 500) {
            throw error;
            //sessionStorage.removeItem("vuex");
          }
          throw error;
        });
    },
    getBirthdays({ commit }) {
      let oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=UTF-8"
          }
        };
      return this.$http
        .get(`/User/GetBirthdays`, config)
        .then(response => {
          const { data = [] } = response;
          commit("SET_USERS_BIRTHDAYS", data);
        })
        .catch(error => {
          NProgress.done();
          if (error.response !== undefined && error.response.status === 500) {
            throw error;
            //sessionStorage.removeItem("vuex");
          }
          throw error;
        });
    },
    updateAboutUser(data) {
      const _data = {
        id: data.state.userDetails.id,
        homeAddress: data.state.userDetails.homeAddress,
        placeOfWork: data.state.userDetails.placeOfWork,
        phoneNumber: data.state.userDetails.phoneNumber
      }
      const oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=UTF-8"
          }
        };

      return this.$http
        .post("/User/UpdateAboutUser", _data, config)
        .then(response => {
          if (response.status === 200) {
            // TODO later
          }
        })
        .catch(error => {
          NProgress.done();
          throw error;
        });
    },
    updateUserInterest({commit}, data) {
      const oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=UTF-8"
          }
        };

      return this.$http
        .post("/User/UpdateUserInterest", data, config)
        .then(response => {
          if (response.status === 200) {
            // TODO later
          }
        })
        .catch(error => {
          NProgress.done();
          throw error;
        });
    },
    updateUserSocialNetworks({commit}, data) {
      console.log(data);
      
      /* const oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=UTF-8"
          }
        };

      return this.$http
        .post("/User/UpdateUserSocialNetwork", data, config)
        .then(response => {
          if (response.status === 200) {
            // TODO later
          }
        })
        .catch(error => {
          NProgress.done();
          throw error;
        }); */
    },
    updateProfileImage({commit}, data) {
      const oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        formData = new FormData(),
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
        };

      formData.append("formFile", data);

      return this.$http
        .post("/User/SaveImageProfile", formData, config)
        .then(response => {
          if (response.status === 200) {
            // TODO later
          }
        })
        .catch(error => {
          NProgress.done();
          throw error;
        });
    },
  }
};
