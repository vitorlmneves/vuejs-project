<template>
  <footer class="footer">
    <p class="footer__text">
      Copyright © {{ year }} All rights reserved | Bee Engineering
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.footer {
  background-color: $light-gray-bg;
  padding: 30px 0 90px;
  width: 100%;

  &__text {
    font-size: .875rem;
    margin: 0 auto;
    padding: 0 10px;
    text-align: center;
    max-width: 1400px;
  }
}
</style>
