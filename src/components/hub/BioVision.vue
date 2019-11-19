<template>
  <article class="product-info">
    <table>
      <thead>
        <tr>
          <th>
            <span class="title">
              <i class="fas fa-eye"></i>
              VISION
            </span>
          </th>
          <th colspan="3">
            <p>Swaping shifts as easy as asking for an uber ride.</p>
            <p>BSM empowers teams to manage time in a smart and easy way.</p>
            <p>
              Real life schedules made for real life situations. Allow teams to drop 
              and swap shifts and keep track of every change. Now changing the 
              schedules is simple
            </p>
            <p>Work Hard. Play Hard. Swaping shifts? Simple.</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="space"></tr>
        <tr>
          <td>
            <span class="title">
              <i class="fas fa-users fa-2x"></i>
              TARGET GROUP
            </span>
          </td>
          <td>
            <span class="title">
              <i class="fas fa-heart fa-2x"></i>
              NEEDS
            </span>
          </td>
          <td>
            <span class="title">
              <i class="fas fa-box-open fa-2x"></i>
              PRODUCT
            </span>
          </td>
          <td>
            <span class="title">
              <i class="fas fa-crosshairs fa-2x"></i>
              BUSINESS GOALS
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              The target costumers are team leaders, managers, directors, heads of 
              department, CEOs.
            </p>
            <p>
              The target users are shift workers and managers.
            </p>
            <p>
              Businesses that have shift workers:
              </p>
            <ul>
              <li>Bars, restaurants & cafes</li>  
              <li>Call centres & support employees</li> 
              <li>Charities, non-profits & volunteers</li> 
              <li>Cinemas, theatres & live events</li> 
              <li>Emergency workers & first responders</li> 
              <li>Gyms & fitness centres</li> 
              <li>Hospitality, hotels & events</li> 
              <li>Hospitals, medical & care providerS</li> 
              <li>Retail stores & supermarkets</li> 
              <li>Schools & universities</li> 
              <li>Security services & law enforcement</li> 
              <li>Shipping & transportation</li> 
            </ul>
          </td>
          <td>
            <p>
              It's the end of:
            </p>
            <ul>
              <li>the excel spreadsheet</li>
              <li>the hassle of asking several co-workers for availability</li>
              <li>the back and forth of texting, emailing, calling</li>
              <li>the long approval system</li>
            </ul>
            <p>
              BSM
            </p>
            <ul>
              <li>
                Flexible: Check your schedule, swap, drop, report, manage all in 
                the same place: your phone.
              </li>
              <li>Smart: It's all in the same place: your phone</li>
              <li>Simple: It's so easy everyone will use it. Reduce no show/no call</li>
              <li>
                Life: time is the most valuable thing we have in life. We make shifts 
                simple so you can have live more
              </li>
            </ul>
          </td>
          <td>
            <p>
              BSM is an app designed to make Shift Life simple. Managers and 
              shift-workers love it because you can save a lot of time not dealing 
              with excel spreadsheets, and it's so much easier having all 
              comunications and changes all in one place. 
            </p>
            <p>
              BSM is a simple app that everyone can use.
            </p>
            <p>
              Has impecable design.
            </p>
            <p>
              Has an efective distribution channel.
            </p>
            <p>
              YES.
            </p>
            <p>
              Human power
            </p>
            <p>
              Knowledge
            </p>
            <p>
              Financial resources
            </p>
          </td>
          <td>
            <p>
              We want to end excel spreadsheets and be the app on the phones of 
              every shift teams
            </p>
          </td>
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
    /* background-color: #08f; */
    border-top: 2px solid #08f;
    border-bottom: 2px solid #08f;
    /* color: $white; */
    color: #08f;
    font-size: 16px;
    height: 80px;
    padding: 15px;
    width: 200px;

    &:not(:first-child) {
      border-right: 2px solid #08f;
    }

    &:not(:last-child) {
      border-left: 2px solid #08f;
    }

    & .title {
      align-items: center;
      display: inline-flex;
    }

    & p {
      color: $black;
      font-size: 1rem;
      font-weight: $font-weight-normal;

      &:last-child {
        margin-bottom: 0;
      }
    }

    & .small {
      font-size: 12px;
      font-weight: $font-weight-normal;
      margin: 0;
    }

    & tr {
      /* color: $white; */
      color: #08f;
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

    &.space {
      height: 20px;
    }

    & td {
      padding: 30px 15px 15px;
      vertical-align: top;
      width: 25%;

      &:not(:last-child) {
        border-right: 1px solid #08f;
      }
    }

    & .title {
      align-items: center;
      color: #08f;
      display: inline-flex;
      font-weight: $font-weight-bold;
    }

    & i {
      color: #08f;
      margin-right: 20px;
    }
  }
}
</style>
