import NProgress from "nprogress";

export default {
  namespaced: true,
  state: {
    event: {},
    allEvents: []
  },
  getters: {
    events: state => {
      const holidays = [
        {
          "title": "New year",
          "start": "2019-01-01",
          "allDay": true,
          "holiday": "1",
          "backgroundColor": "#ccc"
        },
        {
          "title": "Carnival",
          "start": "2019-03-05",
          "allDay": true,
          "holiday": "1",
          "backgroundColor": "#ccc"
        },
        {
          "title": "Good friday",
          "start": "2019-04-19",
          "allDay": true,
          "holiday": "1",
          "backgroundColor": "#ccc"
        },
        {
          "title": "Easter",
          "start": "2019-04-21",
          "allDay": true,
          "holiday": "1",
          "backgroundColor": "#ccc"
        },
        {
          "title": "Labor day",
          "start": "2019-05-01",
          "allDay": true,
          "holiday": "1",
          "backgroundColor": "#ccc"
        },
        {
          "title": "Portugal day",
          "start": "2019-06-10",
          "allDay": true,
          "holiday": "1",
          "backgroundColor": "#ccc"
        },
        {
          "title": "Santo António",
          "start": "2019-06-13",
          "allDay": true,
          "holiday": "1",
          "backgroundColor": "#ccc"
        },
        {
          "title": "God's body",
          "start": "2019-06-20",
          "allDay": true,
          "holiday": "1",
          "backgroundColor": "#ccc"
        },
        {
          "title": "Assumption of Our Lady",
          "start": "2019-08-15",
          "allDay": true,
          "holiday": "1",
          "backgroundColor": "#ccc"
        },
        {
          "title": "Implementation of the republic",
          "start": "2019-10-05",
          "allDay": true,
          "holiday": "1",
          "backgroundColor": "#ccc"
        },
        {
          "title": "Hallowmas",
          "start": "2019-11-01",
          "allDay": true,
          "holiday": "1",
          "backgroundColor": "#ccc"
        },
        {
          "title": "Restoration of independence",
          "start": "2019-12-01",
          "allDay": true,
          "holiday": "1",
          "backgroundColor": "#ccc"
        },
        {
          "title": "Our Lady of Conception",
          "start": "2019-12-08",
          "allDay": true,
          "holiday": "1",
          "backgroundColor": "#ccc"
        },
        {
          "title": "Christmas",
          "start": "2019-12-25",
          "allDay": true,
          "holiday": "1",
          "backgroundColor": "#ccc"
        }
      ],
        events = state.allEvents;
      return events.concat(holidays);
    },
    event: state => state.event
  },
  mutations: {
    SET_ALL_EVENTS(state, events) {
      state.allEvents = events;
    },
    SET_EVENT_BY_ID(state, event) {
      state.event = event;
    }
  },
  actions: {
    getAllEvents({ commit }) {
      let oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=UTF-8"
          }
        };
      return this.$http
        .get("/Events/GetAll", config)
        .then(response => {
          const data = [];
          let events = {};

          for (let i = 0; i < response.data.length; i++) {
            events = {
              id: response.data[i].id,
              title: response.data[i].title,
              description: response.data[i].description,
              address: response.data[i].address,
              start: response.data[i].startDate,
              end: response.data[i].endDate,
              interestName: response.data[i].interestName,
              technologieName: response.data[i].technologieName,
              isCurrentUserGoing: response.data[i].isCurrentUserGoing
            };
            data.push(events);
          }

          commit("SET_ALL_EVENTS", data);
        })
        .catch(error => {
          console.log(error)
          NProgress.done()
          //sessionStorage.removeItem("vuex");
          throw error;
        });
    },
    getEventById({ commit }, id) {
      let oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=UTF-8"
          }
        };
      return this.$http
        .get(`/Events/GetById/${id}`, config)
        .then(response => {
          const { data } = response;
          commit("SET_EVENT_BY_ID", data);
        })
        .catch(error => {
          console.log(error)
          NProgress.done()
          //sessionStorage.removeItem("vuex");
          throw error;
        });
    },
    addEvent({ commit }, data) {
      const oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=UTF-8"
          }
        };

      return this.$http
        .post("/Events/InsertEvent", data, config)
        .then(response => {
          if (response.status === 200) {
            document.getElementById("event").reset();
          }
        })
        .catch(error => {
          NProgress.done();
          throw error;
        });
    },
    updateEvent(data) {
      const oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=UTF-8"
          }
        };

      return this.$http.post("/Events/UpdateEvent", data, config)
        .then(response => {
          if (response.status === 200) {
            document.getElementById("event").reset();
          }
        }).catch(error => {
          NProgress.done();
          throw error;
        });
    },
    isGoing(data) {
      const oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=UTF-8"
          }
        };

      return this.$http
        .post("/Events/UpdateUserGoingState", data, config)
        .then(response => {
          if (response.status === 200) {
            // TODO
          }
        })
        .catch(error => {
          NProgress.done();
          throw error;
        });
    }
  }
};
