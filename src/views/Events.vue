<template>
  <main class="container-fluid">
    <section class="d-flex flex-wrap m-2">
      <div class="col-12 col-md-9">
        <FullCalendar 
            class="calendar-wrap"
            defaultView="dayGridMonth"
            :plugins="calendarPlugins"
            :events="events"
            :eventLimit="true"
            @eventRender="eventRender"
            @dateClick="addEvent"
            @eventClick="eventDetails"
        />
      </div>
      <div class="col-12 col-md-3">
        <EventInfo />
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import EventInfo from '@/components/events/EventInfo'
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';

import PopOver from 'bootstrap-vue/src/utils/popover.class'

export default {
  components: {
    EventInfo,
    FullCalendar
  },
  data(state) {
    return {
      calendarPlugins: [ dayGridPlugin, interactionPlugin ],
      addEvent: function(info, element) {
        const holidays = [],
              infoBox = document.getElementById('event-info');

        state.events.forEach(event => {
          if(!event.holiday) {
            infoBox.innerHTML = "";
            infoBox.insertAdjacentHTML(
              'beforeend', 
              `<p class="event-info__subtitle">Day</p>
              <p class="event-info__date">${info.dateStr}</p>
              <a href="CreateEvent/${info.dateStr}"
                class="js-create-event event-info__button"
              >
                New Event
              </a>`
            );
          }
        });

      },
      eventDetails: function(info) {
        if (!info.event.extendedProps.holiday) {
          const infoBox = document.getElementById('event-info');
          let eventObj = info.event,
              formatedDate = "",
              date = new Date(eventObj.start);

          formatedDate = date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + date.getDate();

          infoBox.innerHTML = "";
          infoBox.insertAdjacentHTML(
            'beforeend', 
            `<p class="event-info__title">${eventObj.title}</p>
            <p class="event-info__subtitle">Schedule Event</p>
            <p class="event-info__date"><b>Start:</b> ${formatedDate}</p>
            <p class="event-info__subtitle">Address</p>
            <p class="event-info__date">${eventObj.extendedProps.address}</p>
            ${eventObj.extendedProps.interestName ? `
              <p class="event-info__subtitle">Interest</p>
              <p class="event-info__date">${eventObj.extendedProps.interestName}</p>
            ` : `
              <p class="event-info__subtitle">Technologie</p>
              <p class="event-info__date">${eventObj.extendedProps.technologieName}</p>
            `}
            <p class="event-info__date">${eventObj.extendedProps.isCurrentUserGoing ? "Going" : "Not Going"}</p>
            <a href="event/${eventObj.id}"
              class="js-open-event event-info__button"
            >
              Open Event
            </a>`
          );
        }
      },
      eventRender(info) {        
        // CONFIG FOR THE PopOver CLASS
        const config = {
          title: info.event.title,
          content: info.event.extendedProps.description,
          placement: 'auto', // can use any of Popover's placements(top, bottom, right, left etc)
          container: 'null', // can pass in the id of a container here, other wise just appends to body
          boundary: 'scrollParent',
          boundaryPadding: 5,
          delay: 0,
          offset: 0,
          animation:true,
          trigger: 'hover', // can be 'click', 'hover' or 'focus'
          html: false, // if you want HTML in your content set to true.
        }

        const target = info.el;
        const toolpop = new PopOver(target, config);
      }
    }
  },
  
  computed: {
    ...mapGetters({
      events: 'events/events'
    })
  },

  methods: {
    ...mapActions({
      getAllEvents: "events/getAllEvents"
    })
  },

  created() {
    this.getAllEvents();
    //this.dateClick();
  }
}
</script>

<style scoped lang="scss">
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";

@import "@/assets/scss/variables.scss";

.calendar-wrap {
  border-top: 2px solid $blue;
  margin-right: 30px;
  margin-bottom: 60px;
  margin-top: 30px;
  padding-top: 10px;
}

.fc table {
  height: 300px !important;
}

</style>
