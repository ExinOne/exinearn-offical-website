<template>
  <header class="header fixed-top">
    <b-container ref="container" fluid :class="hasBg ? 'bg-white' : ''">
      <b-navbar toggleable="sm" type="light">
        <b-navbar-brand href="/">
          <svg class="icon-logo">
            <use xlink:href="#icon-logo" />
          </svg>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse">
          <svg class="icon-navbar-toggle">
            <use xlink:href="#icon-navbar-toggle" />
          </svg>
        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav @show="onShow" @hidden="onHidden">
          <b-navbar-nav>
            <li class="nav-item" align="center">
              <nuxt-link to="/act-list" class="nav-link">
                活动动态
              </nuxt-link>
            </li>
            <li class="nav-item" align="center">
              <nuxt-link to="https://exinone.com" class="nav-link">
                品牌素材
              </nuxt-link>
            </li>
            <li class="nav-item" align="center">
              <nuxt-link to="/contact" class="nav-link">联系我们</nuxt-link>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </header>
</template>

<script>
export default {
  name: 'NavHeader',
  data() {
    return {
      hasBg: false,
    };
  },
  mounted() {
    window.addEventListener(
      'scroll',
      // eslint-disable-next-line prettier/prettier
      () => {
        if (window.scrollY >= 1) {
          this.hasBg = true;
        } else {
          this.hasBg = false;
        }
      },
      false,
    );
  },
  methods: {
    onShow() {
      if (!this.$refs.container.classList.contains('has-shadow')) {
        this.$refs.container.classList.add('has-shadow');
      }
    },
    onHidden() {
      if (this.$refs.container.classList.contains('has-shadow')) {
        this.$refs.container.classList.remove('has-shadow');
      }
    },
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/functions.scss';
@import '../assets/scss/variables';
@import '~bootstrap/scss/mixins.scss';
.header {
  .icon-logo {
    width: 8.7rem;
    height: 2.4rem;
  }

  .icon-navbar-toggle {
    width: 2.4rem;
    height: 2.4rem;
  }

  .navbar-brand {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    height: 4.4rem;
  }

  .navbar-toggler {
    border: 0;
    color: inherit;
  }

  .nav-link {
    display: block;
    line-height: 2;
  }

  .nav-item {
    @include media-breakpoint-down(xs) {
      margin-top: 3rem;

      &:last-child {
        margin-bottom: 3rem;
      }
    }
  }

  & > .container-fluid {
    background: transparent;
    transition: all 0.2s linear;
    @include media-breakpoint-down(xs) {
      background: $white;

      &.has-shadow {
        box-shadow: 0 0.8rem 1.5rem 0 rgba(0, 0, 0, 0.16);
      }
    }
  }
}
</style>
