<template>
  <header class="d-flex mb-4 justify-between hub-header">
    <template
      v-if="routeName === 'shiftVision' || routeName === 'shiftBusiness'"
    >
      <a class="col-12 col-md-3" href="#" target="_blank">
        <img
          class="hub-header__logo"
          src="@/assets/images/logo-ShiftManager.png"
          alt="ShiftManager"
        />
      </a>
      <div class="col-12 col-md-6">
        <HubTitle />
      </div>
      <div class="col-12 col-md-3">
        <span class="hub-header__title">Powered by:</span>
        <a class="hub-header__link" href="http://www.bee-eng.pt/">
          <img
            class="hub-header__owner"
            src="@/assets/images/logo.svg"
            alt="Bee Enginnering"
          />
        </a>
      </div>
    </template>
    <template v-else-if="routeName === 'bioVision'">
      <a class="col-12 col-md-3" href="#" target="_blank">
        <img
          class="hub-header__logo"
          src="@/assets/images/logo-biobox.jpg"
          alt="BioBox"
        />
      </a>
      <div class="col-12 col-md-6">
       <HubTitle />
      </div>
      <div class="col-12 col-md-3">
        <span class="hub-header__title">Powered by:</span>
        <a class="hub-header__link" href="http://www.adentis.pt/">
          <img
            class="hub-header__owner"
            src="@/assets/images/logo-adentis.png"
            alt="Adentis"
          />
        </a>
      </div>
    </template>
    <template v-else>
      <a
        class="col-12 col-md-3"
        href="http://www.football-ism.com/"
        target="_blank"
      >
        <img
          class="hub-header__logo"
          src="@/assets/images/logo-footbalISM.svg"
          alt="FootbalISM"
        />
      </a>
      <div class="col-12 col-md-6">
        <HubTitle />
      </div>
      <div class="col-12 col-md-3">
        <span class="hub-header__title">Powered by:</span>
        <a class="hub-header__link" href="http://www.agap2-it.pt/Agap2IT">
          <img
            class="hub-header__owner"
            src="@/assets/images/logo-agap2.svg"
            alt="Agap2IT"
          />
        </a>
      </div>
    </template>
  </header>
</template>

<script>
import HubTitle from "@/components/hub/HubTitle";

export default {
  components: {
    HubTitle
  },

  computed: {
    routeName() {
      // console.log(this.$route.fullPath)
      return this.$route.name;
    }
  }
};
</script>
