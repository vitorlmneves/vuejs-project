<template>
  <article class="d-flex flex-wrap hub-clients">
    <div class="col-12 col-md-3 hub-clients__logo">
      <img
        class="hub-clients__img"
        src="@/assets/images/logo-SportingCP.png"
        alt=""
      >
    </div>
    <div class="col-12 col-md-3 hub-clients__logo">
      <img
        class="hub-clients__img"
        src="@/assets/images/logo-SevilhaFC.png"
        alt=""
      />
    </div>
    <div class="col-12 col-md-3 hub-clients__logo">
      <img
        class="hub-clients__img"
        src="@/assets/images/logo-esdrm.png"
        alt=""
      />
    </div>
    <div class="col-12 col-md-3 hub-clients__logo">
      <img
        class="hub-clients__img"
        src="@/assets/images/logo-barcelona.png"
        alt=""
      />
    </div>
    <div class="col-12 col-md-3 hub-clients__logo">
      <img
        class="hub-clients__img"
        src="@/assets/images/logo-clubeAtleticoMineiro.svg"
        alt=""
      />
    </div>
    <div class="col-12 col-md-3 hub-clients__logo">
      <img
        class="hub-clients__img"
        src="@/assets/images/logo-ElGounaFC.png"
        alt=""
      />
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

table {
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  position: relative;

  * {
    position: relative;
  }

  td,
  th {
    padding-left: 8px;
  }

  thead th {
    background-color: #449845;
    color: $white;
    font-size: 16px;
    height: 80px;
    padding: 15px;
    width: 200px;

    & .title {
      align-items: center;
      display: inline-flex;
    }

    & .small {
      font-size: 12px;
      font-weight: $font-weight-normal;
      margin: 0;
    }

    & tr {
      color: $white;
      font-size: 16px;
      height: 60px;
    }

    & i {
      font-size: 3rem;
      margin-right: 20px;
    }
  }

  tbody tr {
    background-color: $white;

    & td {
      padding: 30px 15px 15px;
      vertical-align: top;
      width: 25%;
    }

    & .title {
      align-items: center;
      display: inline-flex;
    }

    & i {
      color: #449845;
      margin-right: 20px;
    }
  }
}
</style>
