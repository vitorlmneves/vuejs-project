<template>
  <nav class="main-menu main-menu--desktop">
    <ul class="main-menu__items">
      <li class="main-menu__item">
        <router-link class="main-menu__link" to="/team">
          Team
        </router-link>
      </li>
      <li class="main-menu__item">
        <router-link class="main-menu__link" to="/technologies">
          Technologies
        </router-link>
      </li>
      <li class="main-menu__item">
        <router-link  class="main-menu__link" to="/interests">
          Interests
        </router-link>
      </li>
      <li class="main-menu__item">
        <router-link class="main-menu__link" to="/events">
          Events
        </router-link>
      </li>
      <li class="main-menu__item">
        <router-link
          class="main-menu__link"
          to="/news"
        >
          News
        </router-link>
      </li>
      <li class="main-menu__item">
        <router-link class="main-menu__link" to="/blog">
          Blog
        </router-link>
      </li>
      <li class="main-menu__item">
        <router-link class="main-menu__link" to="/hub">
          Products
        </router-link>
      </li>
      <li class="main-menu__item">
        <a class="main-menu__link">
          Apps
          <i class="icon fas fa-chevron-down"></i>
        </a>
        <ul class="main-menu__submenu">
          <li class="main-menu__submenu-item">
            <router-link class="main-menu__submenu-link" to="/bpc">
              BPC
            </router-link>
          </li>
          <li class="main-menu__submenu-item">
            <router-link class="main-menu__submenu-link" to="/bcf">
              BCF
            </router-link>
          </li>
          <li class="main-menu__submenu-item">
            <router-link class="main-menu__submenu-link" to="/bcr">
              BCR
            </router-link>
          </li>
          <li class="main-menu__submenu-item">
            <router-link class="main-menu__submenu-link" to="/bam">
              BAM
            </router-link>
          </li>
          <li class="main-menu__submenu-item">
            <router-link class="main-menu__submenu-link" to="/bmm">
              BMM
            </router-link>
          </li>
          <li class="main-menu__submenu-item">
            <router-link class="main-menu__submenu-link" to="/bsa">
              BSA
            </router-link>
          </li>
        </ul>
      </li>
      <li class="main-menu__item">
        <router-link class="main-menu__link" to="/configurations">
          Configurations
        </router-link>
      </li>
      <div class="social-networks">
        <li class="social-networks__item">
          <a href="https://www.facebook.com/BeeEngineering.pt/" target="_blank">
            <i class="fab fa-facebook-f fa-2x"></i>
          </a>
        </li>
        <li class="social-networks__item">
          <a href="https://twitter.com/beeeng_pt" target="_blank">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
        </li>
        <li class="social-networks__item">
          <a
            href="https://www.linkedin.com/company/beeengineeringict/"
            target="_blank"
          >
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
        </li>
        <li class="social-networks__item">
          <a
            href="https://www.instagram.com/bee_engineering_ict/"
            target="_blank"
          >
            <i class="fab fa-instagram fa-2x"></i>
          </a>
        </li>
      </div>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.social-networks {
  align-items: center;
  display: flex;
  font-size: 10px;
  height: 35px;
  justify-content: flex-end;
  padding: 10px 0;
  text-align: center;
  width: 100%;

  &__item {
    margin-right: 15px;

    & i {
      color: $white;
    }
  }
}
</style>
