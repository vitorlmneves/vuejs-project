<template>
  <main class="container-fluid">
    <section class="d-flex flex-wrap m-2">
      <div class="col-12 col-md-6">
        <div class="event">
          <div class="event__header">
            <h1 class="event__title">{{ event.title }}</h1>
            <router-link
              v-if="event.ownerId == $store.state.auth.currentUser.id &&
              event.deadLine > state.currentDate"
              :to="{
                name: 'event-edit',
                params: { 
                  id: event.id 
                }
              }"
              class="d-inline-flex ml-auto button"
            >
              Edit event
            </router-link>
          </div>
          <template v-if="event.interestId !== null">
            <h3 class="event__subtitle">Interest</h3>
            <p class="event__text">{{ event.interestName }}</p>
          </template>
          <template v-else>
            <h3 class="event__subtitle">Technologie</h3>
            <p class="event__text">{{ event.technologieName }}</p>
          </template>
          <h3 class="event__subtitle">Description</h3>
          <p class="event__text">{{ event.description }}</p>
          <h3 class="event__subtitle">Address</h3>
          <p class="event__text">{{ event.address }}</p>
          <h3 class="event__subtitle">Start Date</h3>
          <p class="event__text">{{ event.startDate | formatDateEvent }}h</p>
          <h3 class="event__subtitle">End Date</h3>
          <p class="event__text">{{ event.endDate | formatDateEvent  }}h</p>
          <h3 class="event__subtitle">Attending?</h3>
          <div class="custom-control custom-switch">
            <span>No</span>
            <input
              :disabled="state.currentDate > event.deadLine || 
                (event.maximumNumberPeople != 0 && event.users !== undefined && 
                event.users.length >= event.maximumNumberPeople)"
              type="checkbox"
              class="custom-control-input"
              id="isGoing"
              v-model="event.isCurrentUserGoing"
              @click="userIsGoing"
            >
            <label class="custom-control-label" for="isGoing">Yes</label>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <GmapMap
            :center="{
              lat: Number(event.latitude),
              lng: Number(event.longitude)
            }"
            :zoom="zoom"
            style="width: 100%; height: 100%; margin-top: 30px"
          >
            <GmapMarker
              :position="{
                lat: Number(event.latitude),
                lng: Number(event.longitude)
              }"
            />
          </GmapMap>
      </div>
      <div class="col-12">
        <div class="event">
          <h3 class="event__subtitle">Users going</h3>
          <div class="team">
            <div class="team__list">
              <div
                v-for="(user, index) in event.users"
                :key="index"
                class="col-12 col-md-4 col-lg-2 team__cards team__cards--events"
              >
                <router-link
                  class="team__link"
                  :to="{
                    name: 'profile',
                    params: {
                      id: user.id
                    }
                  }"
                >
                  <div class="team__inner team__inner--events">
                    <img
                      v-if="user.picture !== null"
                      :src="user.picture"
                      class="team__img team__img--events"
                      @error="imageLoadError"
                    />
                    <img
                      v-else
                      src="@/assets/images/m1.png"
                      class="team__img team__img--events"
                    />
                    <div class="team__info">
                      <h3 class="team__name team__name--events">
                        {{ user.name }}
                      </h3>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";

export default {
  data() {
    return {
      state: {
        currentDate: new Date().toISOString()
      },
      eventContent: {
        isGoing: false,
        eventId: this.$route.params.id
      },
      center: {
        lat: 38.736946,
        lng: -9.142685
      },
      zoom: 9,
      markers: [],
      place: null
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
      event: "events/event"
    })
  },

  methods: {
    imageLoadError(event) {
      event.target.src = require("@/assets/images/m1.png");
    },
    ...mapActions({
      getEventById: "events/getEventById",
      isGoing: "events/isGoing"
    }),
    userIsGoing() {
      this.eventContent.isGoing = document.querySelector("#isGoing").checked;
      this.$store.dispatch("events/isGoing", this.eventContent);
    }
  },

  created() {
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
