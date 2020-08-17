<template>
  <footer class="footer">
    <div class="bg-dark footer-container">
      <b-container>
        <b-navbar type="dark">
          <b-navbar-brand>
            <svg class="icon-logo">
              <use xlink:href="#icon-logo" />
            </svg>
          </b-navbar-brand>
          <b-navbar-nav class="ml-auto" tag="ul">
            <li class="nav-item" align="center">
              <nuxt-link to="/aboutus" class="nav-link">关于我们</nuxt-link>
            </li>
            <!-- <li class="nav-item" align="center">
              <nuxt-link to="/aboutus" class="nav-link">我们的团队</nuxt-link>
            </li>
            <b-nav-item href="#" align="center">
              Github
            </b-nav-item> -->
          </b-navbar-nav>
        </b-navbar>
      </b-container>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  .footer-container {
    padding: 4.2rem 0;
  }
  .icon-logo {
    width: 8.7rem;
    height: 2.4rem;
  }

  .navbar-nav {
    align-items: center;
  }
}
</style>
