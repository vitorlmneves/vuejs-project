import NProgress from "nprogress";

export default {
  namespaced: true,
  state: {
    searchTerm: "",
    technologiesTitles: [
      {
        title: "Business Intelligence",
        technologiesId: [0]
      },
      {
        title: "Methodologies",
        technologiesId: [1]
      },
      {
        title: "Data Bases",
        technologiesId: [2]
      },
      {
        title: "Infrastructure",
        technologiesId: [3]
      },
      {
        title: "Project Management Tools",
        technologiesId: [4]
      },
      {
        title: "Languages and Development Platforms",
        technologiesId: [5]
      }
    ],
    technologiesGroupList: [],
    technologiesList: [],
    technologiesByUserId: []
  },

  getters: {
    technologyTypes: state => {
      Object.keys(state.technologiesGroupList).forEach(function(index, item) {
        state.technologiesGroupList[index].forEach(function(tech) {
          tech.techType = item;
        });
      });

      const techList = [];

      Object.keys(state.technologiesGroupList).forEach(function(index) {
        state.technologiesGroupList[index].forEach(function(tech) {
          techList.push(tech);
        });
      });

      const filtered = techList.filter(tech =>
        tech.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );

      return state.technologiesTitles.map(title => {
        return {
          ...title,
          techs: filtered.filter(tech =>
            title.technologiesId.includes(tech.techType)
          )
        };
      });
    },
    technologiesList: state => {
      Object.keys(state.technologiesGroupList).forEach(function(index, item) {
        state.technologiesGroupList[index].forEach(function(tech) {
          tech.techType = item;
        });
      });

      const technologiesList = [];

      Object.keys(state.technologiesGroupList).forEach(function(index) {
        state.technologiesGroupList[index].forEach(function(tech) {
          technologiesList.push(tech);
        });
      });

      return technologiesList;
    },
    searchTerm: state => state.searchTerm
  },

  mutations: {
    SET_TECHNOLOGIES_LIST(state, technologies) {
      state.technologiesGroupList = technologies;
      state.technologiesList = technologies;
    },
    SET_TECHNOLOGIES_USER_LIST(state, technologies) {
      state.technologiesGroupList = technologies;
    },
    SET_SEARCH_TERM(state, searchTerm) {
      state.searchTerm = searchTerm;
    }
  },

  actions: {
    getAllTechnologies({ commit }) {
      const oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
        };
      return this.$httpBCR
        .get(`/skill/count`, config)
        .then(response => {
          const { data = [] } = response;
          commit("SET_TECHNOLOGIES_LIST", data);
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
