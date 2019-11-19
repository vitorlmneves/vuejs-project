<template>
  <hooper :infiniteScroll="true">
    <slide>
      <img src="@/assets/images/footballISM-product-01.jpg" />
    </slide>
    <slide>
      <img src="@/assets/images/footballISM-product-02.jpg" />
    </slide>
    <slide>
      <img src="@/assets/images/footballISM-product-03.jpg" />
    </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination  
  } from 'hooper';

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
  }
}
</script>

<style lang="scss" scoped>
@import '~hooper/dist/hooper.css';

.hooper {
  height: auto;
  margin-bottom: 30px;
}
</style>
