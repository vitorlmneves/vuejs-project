export default {
  namespaced: true,

  state: {
    fields: [
      { key: 'brand', label: 'Brand', sortable: true, sortDirection: 'desc' },
      { key: 'namePlate', label: 'Car Plate', sortable: true },
      { key: 'carKm', label: 'Kms', sortable: true },
      { key: 'status', label: 'Status', sortable: true },
      { key: 'actions', label: 'Actions', class: 'text-center' }
    ],
    items: []
  },

  getters: {
    carsList: (state) => {
      const items = state.items;
      return items;
    },

    tableHeader: (state) => {
      const fields = state.fields;
      return fields;
    }
  },

  mutations: {
    SET_CARS_LIST(state, cars) {
      state.items = cars;
    }
  },

  actions: {
    getAll({ commit }) {
      return this.$http
        .get("/Cars/GetAll")
        .then(response => {
          const { data } = response;
          commit("SET_CARS_LIST", data);
        });
    }
  }
};
