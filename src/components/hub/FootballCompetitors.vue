<template>
  <article class="product-info">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Company</th>
          <th>Head Office</th>
          <th>Advantages and disadvantages</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img class="logo" src="@/assets/images/logo-SoccerLab.png" alt>
          </td>
          <td>SoccerLab</td>
          <td>Belgium</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <img class="logo" src="@/assets/images/logo-prosoccer.png" alt>
          </td>
          <td>ProSoccer Data</td>
          <td>Belgium</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <img class="logo" src="@/assets/images/logo-director11.png" alt>
          </td>
          <td>Director 11</td>
          <td>Spain</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <img class="logo" src="@/assets/images/logo-mycoach.jpg" alt>
          </td>
          <td>My Coach</td>
          <td>France</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <img class="logo" src="@/assets/images/logo-ams.jpg" alt>
          </td>
          <td>
            <p class="small">Catapult AMS</p>
          </td>
          <td>Australia</td>
          <td>Very oriented to the performance and well being of the player. It does not have most non-technical areas.</td>
        </tr>
      </tbody>
    </table>
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
    border-right: 2px solid $white;
    color: $white;
    font-size: 16px;
    height: 80px;
    padding: 15px;

    &:not(:first-child) {
      background-color: $black;
    }

    &:last-child {
      background-color: #449845;
      width: 40%;
    }

    &:not(:last-child) {
      text-align: center;
      width: 20%;
    }

    & .title {
      align-items: center;
      display: inline-flex;
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

    &:nth-child(2n) {
      background-color: rgb(248, 248, 248);
    }

    & td {
      padding: 15px 0;
      vertical-align: middle;

      &:not(:last-child) {
        text-align: center;
      }

      & .logo {
        margin: 0;
        padding: 0;
        width: 100px;
      }
    }

    & .title {
      align-items: center;
      display: inline-flex;
    }

    & .small {
      font-size: 12px;
      font-weight: $font-weight-normal;
      margin: 0 0 10px;
    }

    & p {
      line-height: 1.2;
    }

    & i {
      color: #449845;
      margin-right: 20px;
    }
  }
}
</style>