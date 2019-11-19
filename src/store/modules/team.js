import NProgress from 'nprogress';

export default {
  namespaced: true,
  state: {
    searchTerm: '',
    userTitles: [
      {
        title: "Directors",
        positions: ["Directors"]
      },
      {
        title: "Managers",
        positions: ["Managers"]
      },
      {
        title: "RH",
        positions: ["RH"]
      },
      {
        title: "Consultants",
        positions: ["Consultants"]
      }
    ],
    usersList: []
  },
  getters: {
    jobTypes: state => {

      // Reduce solution
      // const groupBy = (key, array, filter = "product") =>
      //   array.reduce((objectsByKeyValue, obj) => {
      //     const value = obj[key];
      //     objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(
      //       obj //para 'agarrar' uma propriedade especifica passa a ser obg[filter]
      //     );
      //     return objectsByKeyValue;
      //   }, {});

      const filtered = state.usersList.filter(user =>
        user.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );

      return state.userTitles.map(title => {
        return {
          ...title,
          users: filtered.filter(user =>
            title.positions.includes(user.profileType)
          )
        };
      });
    },
    searchTerm: state => state.searchTerm
  },
  mutations: {
    SET_USERS_LIST(state, users) {
      state.usersList = users;
    },
    SET_SEARCH_TERM(state, searchTerm) {
      state.searchTerm = searchTerm;
    }
  },
  actions: {
    fetchUsers({ commit }) {
      return this.$http
        .get(`/User/GetAllActive`)
        .then(response => {
          const { data = [] } = response;
          commit("SET_USERS_LIST", data);
        })
        .catch(error => {
          console.log(error.code)
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
