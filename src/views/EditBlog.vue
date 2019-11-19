<template>
  <main class="container-fluid">
    <article class="article">
      <div class="article__header">
        <h1 class="article__title">Edit Article</h1>
      </div>
      <div class="d-flex flex-wrap m-2">
        <div class="col-12">
          <form style="width:100%" class="needs-validation" id="article">
            <div class="form-group">
              <b-form-group label="Type:">
                <b-form-radio-group
                  v-model="articleContent.publicationTypeId"
                  :value="postTypes.index"
                  :options="postTypes"
                  name="PublicationTypeId"
                  required
                ></b-form-radio-group>
              </b-form-group>
              <span
                class="text-danger"
                v-if="validationErrors.PublicationTypeId"
                v-text="validationErrors.PublicationTypeId"
              ></span>
            </div>
            <div class="form-group">
              <b-form-file
                placeholder="Choose a file..."
                drop-placeholder="Drop file here..."
                @change="onFileChange"
              ></b-form-file>
            </div>
            <div class="form-group">
              <label for="title">Title</label>
              <input
                class="form-control"
                type="text"
                name="title"
                placeholder="Article title"
                v-model="articleContent.title"
                required
              />
              <span
                class="text-danger"
                v-if="validationErrors.title"
                v-text="validationErrors.title">
              </span>
            </div>
            <div class="form-group">
              <label for="resume">Resume</label>
              <textarea
                class="form-control"
                name="preview"
                style="width:100%"
                rows="5"
                placeholder="Article resume"
                v-model="articleContent.preview"
                required
              ></textarea>
              <span
                class="text-danger"
                v-if="validationErrors.preview"
                v-text="validationErrors.preview"
              >
              </span>
            </div>
            <div class="form-group">
              <label for="content">Content</label>
              <wysiwyg
                name="content"
                placeholder="Article content"
                v-model="articleContent.content"
                required
              />
              <span
                class="text-danger"
                v-if="validationErrors.content"
                v-text="validationErrors.content"
              >
              </span>
            </div>
            <div class="form-group">
              <button
                class="btn btn-primary"
                type="submit"
                @click.prevent="submitForm()"
              >
                Submit for approval
              </button>
            </div>
          </form>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
//import { router } from "@/router";
import { mapActions, mapState, mapGetters } from "vuex";
import wysiwyg from "vue-wysiwyg";
import Vue from "vue";

Vue.use(wysiwyg, {
  // { [module]: boolean (set true to hide) }
  hideModules: {
    separator: true,
    table: true,
    code: true,
    justifyLeft: true,
    justifyCenter: true,
    justifyRight: true,
    orderedList: true,
    unorderedList: true
  },

  /* you can override icons too, if desired
  just keep in mind that you may need custom styles in your application to
  get everything to align
  iconOverrides: { "bold": "<i class="your-custom-icon"></i>" }, */

  // if the image option is not set, images are inserted as base64
  /* image: {
    uploadURL: "http://192.168.0.155:8080/images/blog/",
    dropzoneOptions: {}
  }, */

  /* limit content height if you wish. If not set, editor size will grow
  with content. */
  maxHeight: "500px",

  /* set to 'true' this will insert plain text without styling when you paste
  something into the editor. */
  forcePlainTextOnPaste: true
});

/* this will insert plain text without styling when you paste something into
the editor. */
document.addEventListener("paste", function(e) {
  e.preventDefault();
  document.execCommand(
    "insertHTML",
    false,
    e.clipboardData.getData("text/plain")
  );
});

export default {
  data() {
    return {
      validationErrors: {
        title: null,
        preview: null,
        content: null
      }
    };
  },

  computed: {
    ...mapState({
      articleContent: state => state.blog.post
    }),
    ...mapGetters({
      postTypes: 'blog/postTypes'
    }),
    ...mapGetters({
      errored: 'blog/formStatusError'
    })
  },

  methods: {
    onFileChange(event) {
      this.articleContent.file = event.target.files[0];
    },
    submitForm() {

      if (this.validateForm()) {
        this.$store.dispatch('blog/updateArticle', this.articleContent)
          .then((response) => {
            //router.push("/blog");
            this.$router.push("/blog");
          })
          .catch((err) => {
            this.$swal.fire({
              width: 500,
              heightAuto: true,
              type: 'error',
              text: 'Sorry, there was an error submiting the post!!!',
            })
          });
      }
    },
    validateForm() {
      const formId = "article",
            nodes = document.querySelectorAll(`#${formId} :invalid`),
            errorObjectName = "validationErrors",
            vm = this; //current vue instance;

      Object.keys(this[errorObjectName]).forEach(key => {
        this[errorObjectName][key] = null;
      });

      if (nodes.length > 0) {
        nodes.forEach(node => {
          this[errorObjectName][node.name] = node.validationMessage;
          node.addEventListener("change", function(e) {
            vm.validateForm();
          });
        });
        return false;
      } else {
        return true;
      }
    },
    ...mapActions({
      getById: "blog/getById",
      getPostTypes: "blog/getPublicationPostTypes"
    })
  },

  created() {
    this.getById(this.$route.params.id);
    this.getPostTypes();
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "~vue-wysiwyg/dist/vueWysiwyg.css";

.calendar-wrap {
  border-top: 2px solid $blue;
  margin-right: 30px;
  margin-bottom: 60px;
  margin-top: 30px;
  padding-top: 10px;
}
</style>
