import NProgress from "nprogress";

export default {
  namespaced: true,
  state: {
    searchTerm: "",
    interestTitles: [
      {
        title: "Food",
        interestId: [1]
      },
      {
        title: "Sports",
        interestId: [2]
      },
      {
        title: "Gaming",
        interestId: [3]
      },
      {
        title: "Music",
        interestId: [4]
      }
    ],
    interestsGroupList: [],
    interestsList: [],
    usersByInterest: [],
    interestByUsersId: [],
    interestIdByUsersId: []
  },

  getters: {
    interestTypes: state => {
      // Reduce solution
      // const groupBy = (key, array, filter = "product") =>
      //   array.reduce((objectsByKeyValue, obj) => {
      //     const value = obj[key];
      //     objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(
      //       obj //para 'agarrar' uma propriedade especifica passa a ser obg[filter]
      //     );
      //     return objectsByKeyValue;
      //   }, {});

      const filtered = state.interestsGroupList.filter(interest => interest.name.toLowerCase().includes(state.searchTerm.toLowerCase()));
      return state.interestTitles.map(title => {
        return {
          ...title,
          interests: filtered.filter(interest =>
            title.interestId.includes(interest.interestTypeId)
          )
        };
      });
    },
    interestList: state => state.interestsList,
    usersByInterest: state => state.usersByInterest,
    interestByUsersId: state => state.interestsUserList,
    interestIdByUsersId: state => {
      const interestIdByUsersId = [];
      state.interestsUserList.forEach(element => {
        interestIdByUsersId.push(element.id);
      });

      return interestIdByUsersId;
    },
    searchTerm: state => state.searchTerm
  },

  mutations: {
    SET_INTERESTS_GROUP_LIST(state, interests) {
      state.interestsGroupList = interests;
    },
    SET_INTERESTS_LIST(state, interests) {
      state.interestsList = interests;
    },
    SET_INTERESTS_USER_LIST(state, interests) {
      state.interestsUserList = interests;
    },
    SET_SEARCH_TERM(state, searchTerm) {
      state.searchTerm = searchTerm;
    }
  },

  actions: {
    getAllInterests({ commit }) {
      const oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=UTF-8"
          }
        };
      return this.$http
        .get("/Interest/GetAll", config)
        .then(response => {
          const { data = [] } = response;
          commit("SET_INTERESTS_GROUP_LIST", data);
          commit("SET_INTERESTS_LIST", data);
        })
        .catch(error => {
          NProgress.done();

          console.log(error);
          //sessionStorage.removeItem("vuex");
          throw error;
        });
    },
    getInterestsById({ commit }) {
      const oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=UTF-8"
          }
        };
      return this.$http
        .get("/Interest/GetById", config)
        .then(response => {
          const { data = [] } = response;
          commit("SET_INTERESTS_GROUP_LIST", data);
        })
        .catch(error => {
          NProgress.done();

          console.log(error);
          //sessionStorage.removeItem("vuex");
          throw error;
        });
    },
    getInterestsByUserId({ commit }, userId) {
      const oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=UTF-8"
          }
        };
      return this.$http
        .get(`User/GetInterestsByUserId/${userId}`, config)
        .then(response => {
          const { data } = response;
          commit("SET_INTERESTS_USER_LIST", data);
        })
        .catch(error => {
          NProgress.done();

          console.log(error);
          //sessionStorage.removeItem("vuex");
          throw error;
        });
    }
  }
};
