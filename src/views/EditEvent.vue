<template>
  <main class="container-fluid">
    <article class="article">
      <div class="article__header">
        <h1 class="article__title">Edit Event</h1>
      </div>
      <div class="d-flex flex-wrap m-2">
        <div class="col-12 col-md-6">
          <form style="width:100%" class="needs-validation" id="event"> 
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="interestName">Interests</label>
                <select nmae="interestName"
                  :disabled="interestsList === undefined"
                  @change="onChange($event)"
                  class="js-interests form-control"
                  v-model="eventContent.interestName"
                >
                  <option value="" disabled>Choose a option</option>
                  <option
                    v-for="(item, index) in interestsList"
                    :value="index"
                    :key="index"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="technologieName">Technologies</label>
                <select
                  name="technologieName" 
                  @change="onChange($event)"
                  class="js-technologies form-control"
                  v-model="eventContent.technologieName"
                >
                  <option value="">Choose a option</option>
                  <option
                    v-for="(item, index) in technologiesList"
                    :key="item.name"
                    v-bind:value="item.name"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-3">
                <label v-b-tooltip.hover title="If there isn't a limit insert 0 in both fields" for="start-date">
                  Min. Persons*
                </label>
                <input
                  class="form-control"
                  type="number"
                  name="minimumNumberPeople"
                  v-model="eventContent.minimumNumberPeople"
                  required
                />
                <span class="text-danger"
                    v-if="validationErrors.minimumNumberPeople" v-text="validationErrors.minimumNumberPeople"
                ></span>
              </div>
              <div class="form-group col-md-3">
                <label v-b-tooltip.hover title="If there isn't a limit insert 0 in both fields" for="end-date">Max. Persons*</label>
                <input
                  class="form-control"
                  type="number"
                  name="maximumNumberPeople"
                  v-model="eventContent.maximumNumberPeople"
                  required
                />
                <span class="text-danger"
                    v-if="validationErrors.maximumNumberPeople" v-text="validationErrors.maximumNumberPeople"
                ></span>
              </div>
              <div class="form-group col-md-6">
                <label for="deadline">Deadline</label>
                <VueCtkDateTimePicker
                  name="deadline"
                  minute-interval="15"
                  no-weekends-days
                  format="YYYY-MM-DDTHH:mm:ss.000Z"
                  v-model="eventContent.deadLine"
                  required
                />
              <span class="text-danger"
                  v-if="validationErrors.deadline" v-text="validationErrors.deadline"
              ></span>
              </div>
            </div>
            <div class="form-group">
              <label for="title">Title</label>
              <input
                class="form-control"
                type="text"
                name="title"
                placeholder="Event title"
                v-model="eventContent.title"
                required
              />
              <span class="text-danger"
                  v-if="validationErrors.title" v-text="validationErrors.title"
              ></span>
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea
                class="form-control"
                name="description"
                style="width:100%"
                rows="5"
                placeholder="Event description"
                v-model="eventContent.description"
                required
              >
              </textarea>
              <span class="text-danger"
                  v-if="validationErrors.description" v-text="validationErrors.description"
              ></span>
            </div>
            <div class="form-group">
              <label for="address">Address</label>
              <gmap-autocomplete
                class="js-address-autocomplete form-control"
                name="address"
                placeholder="Event address"
                @place_changed="setPlace"
                :value="eventContent.address"
                required
              >
              </gmap-autocomplete>
              <span class="text-danger"
                  v-if="validationErrors.address" v-text="validationErrors.address"
              ></span>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="startDate">Start Date</label>
                <VueCtkDateTimePicker
                  name="startDate"
                  minute-interval="15"
                  no-weekends-days
                  format="YYYY-MM-DDTHH:mm:ss.000Z"
                  v-model="eventContent.startDate"
                  required
                />
              <span class="text-danger"
                  v-if="validationErrors.startDate" v-text="validationErrors.startDate"
              ></span>
              </div>
              <div class="form-group col-md-6">
                <label for="endDate">End Date</label>
                <VueCtkDateTimePicker
                  name="endDate"
                  minute-interval="15"
                  no-weekends-days
                  format="YYYY-MM-DDTHH:mm:ss.000Z"
                  v-model="eventContent.endDate"
                  required
                />
              <span class="text-danger"
                  v-if="validationErrors.endDate" v-text="validationErrors.endDate"
              ></span>
              </div>
            </div>
            <div class="form-group">
              <input
                class="btn btn-primary"
                type="button"
                value="Submit"
                @click.prevent="submitForm()"
              />
            </div>
          </form>
        </div>
        <div class="col-12 col-md-6">
          <GmapMap
            :center="{
              lat: Number(eventContent.latitude),
              lng: Number(eventContent.longitude)
            }"
            :zoom="zoom"
            style="width: 100%; height: 100%"
          >
            <GmapMarker
              v-if="this.eventContent.latitude"
              :position="{
                lat: Number(eventContent.latitude),
                lng: Number(eventContent.longitude)
              }"
            />
          </GmapMap>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import { router } from "@/router";
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";

import Vue from "vue";
Vue.component("VueCtkDateTimePicker", VueCtkDateTimePicker);

export default {
  data() {
    return {
      zoom: 9,
      markers: [],
      place: null,
      validationErrors: {
        title: null,
        description: null,
        startDate: null,
        endDate: null,
        address: null,
        minimumNumberPeople: null,
        maximumNumberPeople: null,
        deadline: null
      }
    };
  },

  filters: {
    formatDateEvent: function(value) {
      if (value) {
        return moment(String(value)).format("YYYY.MM.DD | HH:mm");
      }
    }
  },
  
  computed: {
    ...mapGetters({
      interestsList: "interests/interestByUsersId",
      technologiesList: "technologies/technologiesList",
      eventContent: 'events/event'
    })
  },

  methods: {
    imageLoadError(event) {
      event.target.src = require("@/assets/images/m1.png");
    },
    ...mapActions({
      getInterestsByUserId: "interests/getInterestsByUserId",
      getTechnologiesByUserId: "technologies/getAllTechnologies",
      getEventById: "events/getEventById",
      isGoing: "events/isGoing"
    }),
    userIsGoing(state) {
      this.eventContent.isGoing = document.querySelector("#isGoing").checked
      this.$store.dispatch('events/isGoing', this.eventContent)
        .then((response) => {
            router.push("/events");
          })
          .catch((err) => {
            this.$swal.fire({
              width: 500,
              heightAuto: true,
              type: 'error',
              text: 'Sorry, there was an error submiting the event!!!',
            })
          });
    },
    setPlace(place) {
      console.log(place);
      
      const interestNameElm = document.querySelector(".js-interests");
      let interestNameOptions = interestNameElm.options;

      if(interestNameOptions.length > 1) {
        let interestName = interestNameElm.options[interestNameElm.selectedIndex].innerHTML.trim();

        this.eventContent.interestName = interestName
      }

      this.place = place;

      this.center = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      },

      this.eventContent.address = place.formatted_address;
      this.eventContent.longitude = place.geometry.location.lng();
      this.eventContent.latitude = place.geometry.location.lat();
    },
    submitForm() {
      if (this.validateForm()) {
        this.$store.dispatch('events/updateEvent', this.eventContent)
          .then((response) => {
            router.push("/events");
          })
          .catch((err) => {
            this.$swal.fire({
              width: 500,
              heightAuto: true,
              type: 'error',
              text: 'Sorry, there was an error submiting the event!!!',
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
  },

  created() {
    this.getInterestsByUserId();
    this.getTechnologiesByUserId();
    this.getEventById(this.$route.params.id);
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.custom-switch {
  padding-left: 0;
}

.custom-control-input {
  display: inline-block;
  position: initial;
  width: 45px;
}
</style>
