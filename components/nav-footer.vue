<template>
  <footer class="footer">
    <b-container>
      <b-navbar type="dark">
        <b-navbar-brand href="/">
          <svg class="icon-logo">
            <use xlink:href="#icon-logo" />
          </svg>
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto" tag="ul">
          <li class="nav-item">
            <nuxt-link to="/aboutus" class="nav-link" target="_self">
              关于我们
            </nuxt-link>
          </li>
        </b-navbar-nav>
      </b-navbar>
    </b-container>
  </footer>
</template>

<style lang="scss" scoped>
@import '~bootstrap/scss/functions.scss';
@import '../assets/scss/variable.scss';
@import '~bootstrap/scss/mixins.scss';
.footer {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  z-index: $zindex-fixed;
  background: $dark;
  padding: 5rem 0;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.navbar-nav {
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

  .nav-link {
    padding-right: $navbar-nav-link-padding-x;
    padding-left: $navbar-nav-link-padding-x;
    line-height: 2;
  }
}

.icon-logo {
  color: $white;
  width: 8.7rem;
  height: 2.4rem;
}

.navbar-dark {
  .navbar-nav {
    .nav-link {
      color: $navbar-dark-color;
      @include hover-focus() {
        color: $navbar-dark-hover-color;
      }
    }
  }
}
</style>
