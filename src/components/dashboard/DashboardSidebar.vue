<template>
  <aside class="sidebar">
    <section class="sidebar__box">
      <h1 class="sidebar__title">Upcoming Birthdays</h1>
      <ul class="sidebar__list" v-for="(user, id) in birthdays" :key="id">
        <li class="sidebar__item">
          <div class="sidebar__content">
            <div class="sidebar__img-container">
              <img class="sidebar__content-img" src="@/assets/images/m1.png" />
            </div>
            <div class="sidebar__content-name">
              {{ user.name }}
              <span class="sidebar__content-date">
                {{ user.birthday | formatDate }}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <section class="sidebar__box">
      <h1 class="sidebar__title">Latest Acquisitions</h1>
      <ul class="sidebar__list" v-for="(user, id) in acquisitions" :key="id">
        <li class="sidebar__item sidebar__item--employes">
          <div class="sidebar__content">
            <div class="sidebar__img-container">
              <img class="sidebar__content-img" src="@/assets/images/m1.png" />
            </div>
            <div class="sidebar__content-name">
              {{ user.name }}
              <span class="sidebar__content-date">
                {{ user.startedWork | formatDate }}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";

export default {
  name: "DashboardSidebar",

  filters: {
    formatDate: function(value) {
      if (value) {
        return moment(String(value)).format("D MMM");
      }
    }
  },

  computed: {
    ...mapGetters({
      acquisitions: "user/lastAcquisitions",
      birthdays: "user/usersBirthdays"
    })
  },

  methods: {
    ...mapActions({
      lastAcquisitions: "user/getAcquisitions",
      userBirthdays: "user/getBirthdays"
    })
  },

  created() {
    this.lastAcquisitions();
    this.userBirthdays();
  }
};
</script>
