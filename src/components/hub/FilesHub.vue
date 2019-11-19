<template>
    <div class="hub-files">
      <template v-if="routeName === 'shiftVision'">
        <p class="hub-files__title">Status</p>
        <p class="hub-files__status">MVP</p>
        <p class="hub-files__title">Files</p>
        <a class="hub-files__link" href="#">
          <i class="far fa-file-pdf"></i>
          Download
        </a>
      </template>
      <template v-else>
        <p class="hub-files__title">Status</p>
        <p class="hub-files__status">Product</p>
        <p class="hub-files__title">Files</p>
        <a class="hub-files__link" target="_blank" href="@/../../assets/images/FootballISM-AGAP2-PRESENTATION_PT.pdf" download>
          <i class="far fa-file-pdf"></i>
          Apresentação
        </a>
        <a class="hub-files__link" target="_blank" href="@/../../assets/images/FootballISM-AGAP2-PRESENTATION_FR.pdf" download>
          <i class="far fa-file-pdf"></i>
          À propos de nous
        </a>
        <a class="hub-files__link" target="_blank" href="@/../../assets/images/FootballISM-AGAP2-PRESENTATION_ES.pdf" download>
          <i class="far fa-file-pdf"></i>
          Aresentación
        </a>
        <a class="hub-files__link" target="_blank" href="@/../../assets/images/FootballISM-AGAP2-PRESENTATION_EN.pdf" download>
          <i class="far fa-file-pdf"></i>
          Presentation
        </a>
      </template>
    </div>
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


<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.hub-files {
  padding-left: 10px;
  margin-top: 30px;

  &__title {
    font-weight: $font-weight-bold;
    margin-bottom: 10px;
  }

  &__status {
    margin-bottom: 30px;
  }

  &__link {
    color: $black;
    display: block;
    margin-bottom: 10px;
    text-decoration: none;

    & .fa-file-pdf {
      color: $pdf-red;
      margin-right: 5px;
    }
  }
}
</style>
