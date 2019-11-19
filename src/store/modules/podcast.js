import NProgress from "nprogress";

export default {
  namespaced: true,

  state: {
    selectedTrack: null,
    index: 0,
    playing: false,
    loop: false,
    shuffle: false,
    seek: 0,
    playlist: [],
    fields: [
      {
        key: "title",
        label: "Title",
        sortable: true,
        sortDirection: "desc"
      },
      {
        key: "description",
        label: "Description",
        sortable: true
      },
      {
        key: "fileSize",
        label: "FileSize (MB)",
        sortable: true,
        class: "text-center"
      },
      {
        key: "publishDate",
        label: "PublishDate",
        sortable: true
      },
      {
        key: "path",
        label: "Audio"
      },
      {
        key: "actions",
        label: "Actions",
        class: "text-center"
      }
    ],
    items: []
  },

  getters: {
    /* playlist:(state) => {
      //setTimeout(function () {
        //if (state.playlist) {
          //console.log(state.playlist)
        state.playlist.forEach((track) => {
          //console.log(track)
          track.howl = new Howl({
            src: [`https://bpc.bee-eng.pt${track.path}`],
            onend: () => {
              if (this.loop) {
                this.play(this.index)
              } else {
                this.skip('next')
              }
            }
          })
        })

        return playlist = {...state.playlist, ...state};
      //}
      //}, 1000);
    }*/
    audioList: state => {
      const items = state.playlist;
      return items;
    },

    tableHeader: state => {
      const fields = state.fields;
      return fields;
    }
  },

  mutations: {
    SET_PLAYLIST(state, podcasts) {
      state.playlist = podcasts;
    }
  },

  actions: {
    getAll({ commit }) {
      let oToken = JSON.parse(sessionStorage.getItem("vuex")),
          token = oToken.auth.tokens.token;
      return this.$http
      .get("/BeeFm/GetAll", {
          headers: {
            Authorization: token,
            "X-Content-Type-Options": "nosniff",
            Pragma: "no-cache",
            Expires: 0,
            "Content-Type": "application/json;charset=UTF-8"
          }
        })
        .then(response => {
          const { data } = response;
          commit("SET_PLAYLIST", data);
        })
        .catch(error => {
          NProgress.done();
          //sessionStorage.removeItem("vuex");
          throw error;
        });
    }
  }
};
