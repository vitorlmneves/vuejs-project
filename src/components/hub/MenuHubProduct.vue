<template>
  <nav class="vertical-menu">
    <ul v-if="routeName === 'shiftVision'">
      <li>
        <router-link 
          :class="{
            'active': $route.path == '/hubShift/shiftVision'
          }"
          to="/hubShift/shiftVision"
        >
          Vision
          </router-link>
      </li>
      <li>
        <router-link 
          :class="{
            'active': $route.path == '/hubShift/shiftBusiness'
          }"
          to="/hubShift/shiftBusiness">
          Business Plan
        </router-link>
      </li>
      <li>
        <router-link
          :class="{
            'active': $route.path == '/hubShift/shiftSale'
          }" 
          to="#">
          Sale
        </router-link>
      </li>
      <li>
        <router-link
          :class="{
            'active': $route.path == '/hubShift/shiftCompetitors'
          }" 
          to="#">
          Competitors
        </router-link>
      </li>
      <li>
        <router-link
          :class="{
            'active': $route.path == '/hubShift/shiftClients'
          }" 
          to="#">
          Clients
        </router-link>
      </li>
      <li>
        <router-link
          :class="{
            'active': $route.path == '/hubShift/shiftRoadMap'
          }" 
          to="#">
          RoadMap
        </router-link>
      </li>
      <li>
        <router-link 
          to="/hub"
        >
          Back
        </router-link>
      </li>
      <li>
        <a href="#" class="vertical-menu__social">
          <i class="fas fa-desktop"></i>
        </a>
        <a href="#" class="vertical-menu__social">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="#" class="vertical-menu__social">
          <i class="fab fa-facebook-square"></i>
        </a>
        <a href="#" class="vertical-menu__social">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" class="vertical-menu__social">
          <i class="fab fa-twitter-square"></i>
        </a>
        <a href="#" class="vertical-menu__social">
          <i class="fab fa-youtube"></i>
        </a>
      </li>
    </ul>
    <ul v-else>
      <li>
        <router-link 
          :class="{
            'active': $route.path == '/hubFootball/footballVision'
          }"
          to="/hubFootball/footballVision"
        >
          Vision
          </router-link>
      </li>
      <li>
        <router-link 
          :class="{
            'active': $route.path == '/hubFootball/footballBusiness'
          }"
          to="#"
        >
          Business Plan
        </router-link>
      </li>
      <li>
        <router-link
          :class="{
            'active': $route.path == '/hubFootball/footballSale'
          }" 
          to="/hubFootball/footballSale"
        >
          Sale
        </router-link>
      </li>
      <li>
        <router-link
          :class="{
            'active': $route.path == '/hubFootball/footballCompetitors'
          }" 
          to="/hubFootball/footballCompetitors"
        >
          Competitors
        </router-link>
      </li>
      <li>
        <router-link
          :class="{
            'active': $route.path == '/hubFootball/footballClients'
          }" 
          to="/hubFootball/footballClients"
        >
          Clients
        </router-link>
      </li>
      <li>
        <router-link
          :class="{
            'active': $route.path == '/hubFootball/footballtRoadMap'
          }" 
          to="#"
        >
          RoadMap
        </router-link>
      </li>
      <li>
        <router-link 
          to="/hub"
        >
          Back
        </router-link>
      </li>
      <li>
        <a href="http://www.football-ism.com" class="vertical-menu__social" target="_blank">
          <i class="fas fa-desktop"></i>
        </a>
        <a href="https://www.linkedin.com/company/football-ism/" class="vertical-menu__social" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <!-- <a href="#" class="vertical-menu__social" target="_blank">
          <i class="fab fa-facebook-square"></i>
        </a> -->
        <a href="https://www.instagram.com/footballismgmt/" class="vertical-menu__social" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com/FootballISMgmt" class="vertical-menu__social" target="_blank">
          <i class="fab fa-twitter-square"></i>
        </a>
        <!-- <a href="#" class="vertical-menu__social" target="_blank">
          <i class="fab fa-youtube"></i>
        </a> -->
        <a mailto="contact@footballism.pt" class="vertical-menu__social">
          <i class="fas fa-at"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    routeName() {
      return this.$route.name;
    }
  }
}
</script>

