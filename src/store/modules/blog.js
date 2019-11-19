import NProgress from "nprogress";
import { log } from "util";

export default {
  namespaced: true,
  state: {
    postTypes: [],
    postsList: [],
    post: {},
    blogList: [],
    newArticle: {},
    errored: null
  },

  getters: {
    highlightBlog: state => {
      const highlight = state.postsList.slice(0, 1);
      return highlight;
    },
    blogList: state => {
      const blogList = state.postsList;
      return blogList;
    },
    postTypes: state => {
      const postTypes = state.postTypes.reduce((prev, curr) => {
        prev[curr.id] = curr.name;
        return prev;
      }, {});

      return postTypes;
    },
    /* formStatusError: state => {
      console.log("2", state.errored);
      
      state = state.errored;
    } */
  },

  mutations: {
    SET_POST_LIST(state, posts) {
      state.postsList = posts;
    },
    SET_POST_ITEM(state, post) {
      state.post = post;
    },
    SET_POST_TYPES(state, postTypes) {
      state.postTypes = postTypes;
    },
    SET_ARTICLE_ADD(state, payload) {
      state.newArticle = payload;
    },
    /* FORM_ERROR(state, formStatus) {
      console.log("1", formStatus);
      
      state.errored = formStatus;
    } */
  },

  actions: {
    getAll({ commit }) {
      const oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
        };
      return this.$http
        .get("/Blogs/GetAll", config)
        .then(response => {
          const { data } = response;
          commit("SET_POST_LIST", data);
        })
        .catch(error => {
          NProgress.done();
          // console.log(error)
          // sessionStorage.removeItem("vuex");
          throw error;
        });
    },
    getById({ commit }, id) {
      const oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
        };
      return this.$http
        .get(`/Blogs/getById/${id}`, config)
        .then(response => {
          const { data } = response;
          commit("SET_POST_ITEM", data);
        })
        .catch(error => {
          NProgress.done();
          // sessionStorage.removeItem("vuex");
          throw error;
        });
    },
    getPublicationPostTypes({ commit }) {
      const oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
        };
      return this.$http
        .get(`/Blogs/GetAllPublicationType`, config)
        .then(response => {
          const { data } = response;
          commit("SET_POST_TYPES", data);
        })
        .catch(error => {
          NProgress.done();
          // sessionStorage.removeItem("vuex");
          throw error;
        });
    },
    addArticle({commit}, data) {
      const oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        formData = new FormData(),
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
        };

      formData.append("publicationTypeId", data.publicationTypeId);
      formData.append("title", data.title);
      formData.append("preview", data.preview);
      formData.append("content", data.content);
      formData.append("author", data.author);
      formData.append("createdBy", data.createdBy);
      formData.append("updatedBy", data.updatedBy);
      formData.append("file", data.file);

      return this.$http
        .post("/Blogs/Insert", formData, config)
        .then(response => {
          if (response.status === 200) {
            document.getElementById("article").reset();
            /*
              Summernote editor. This is to clear the content since it's a DIV
              with editable content propertie
            */
            document.querySelector(".editr--content").innerHTML = "";
          }
        })
        .catch(error => {
          NProgress.done();
          throw error;
        });
    },
    updateArticle({commit}, data) {
      const oToken = JSON.parse(sessionStorage.getItem("vuex")),
        token = oToken.auth.tokens.token,
        formData = new FormData(),
        config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
        };

      formData.append("id", data.id);
      formData.append("publicationTypeId", data.publicationTypeId);
      formData.append("title", data.title);
      formData.append("preview", data.preview);
      formData.append("content", data.content);
      formData.append("file", data.file);

      return this.$http
        .post("/Blogs/Update", formData, config)
        .then(response => {
          if (response.status === 200) {
            //TODO
            //this.state.blog.errored = false;
            //commit("FORM_ERROR", true);
          }
        })
        .catch(error => {
          NProgress.done();
          //commit("FORM_ERROR", false);
          throw error;
        });
    }
  }
};
