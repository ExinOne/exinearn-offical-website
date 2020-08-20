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
        <b-collapse
          id="nav-collapse"
          is-nav
          @show="onCollapseShow"
          @hidden="onCollapseHidden"
        >
          <b-navbar-nav>
            <li class="nav-item">
              <nuxt-link to="/activities" class="nav-link" target="_self">
                活动动态
              </nuxt-link>
            </li>
            <b-nav-item
              href="https://shuilongtouapp.invisionapp.com/board/App-cke0078nv073o0zxwf12ai2rh"
            >
              品牌素材
            </b-nav-item>
            <li class="nav-item">
              <nuxt-link to="/contact" class="nav-link" target="_self">
                联系我们
              </nuxt-link>
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
  computed: {
    container() {
      return this.$refs.container;
    },
  },
  mounted() {
    const handler = () => {
      if (window.scrollY >= 1) {
        this.hasBg = true;
      } else {
        this.hasBg = false;
      }
    };
    window.addEventListener('scroll', handler, false);
    this.$once('hook:beforeDestory', () => {
      window.removeEventListener('scroll', handler, false);
    });
  },
  methods: {
    onCollapseShow() {
      if (!this.container.classList.contains('shadow')) {
        this.container.classList.add('shadow');
      }
    },
    onCollapseHidden() {
      if (this.container.classList.contains('shadow')) {
        this.container.classList.remove('shadow');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/functions.scss';
@import '../assets/scss/variable.scss';
@import '~bootstrap/scss/mixins.scss';

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.navbar-nav {
  display: flex;
  flex-direction: column; // cannot use `inherit` to get the `.navbar`s value
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

  .nav-link {
    padding-left: 0;
    padding-right: 0;
    line-height: 2;
  }
}

.navbar-brand {
  display: inline-block;
  padding-top: $navbar-brand-padding-y;
  padding-bottom: $navbar-brand-padding-y;
  margin-right: $navbar-brand-margin-x;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.navbar-expand {
  &-sm {
    @include media-breakpoint-up(sm) {
      flex-flow: row nowrap;
      justify-content: flex-start;

      .navbar-collapse {
        display: flex !important; // stylelint-disable-line declaration-no-important
        flex-basis: auto;
      }

      .navbar-nav {
        flex-direction: row;

        .dropdown-menu {
          position: absolute;
        }

        .nav-link {
          padding-right: $navbar-nav-link-padding-x;
          padding-left: $navbar-nav-link-padding-x;
        }
      }

      .navbar-collapse {
        display: flex !important;
        flex-basis: auto;
      }

      .navbar-toggler {
        display: none;
      }
    }

    @include media-breakpoint-down(sm) {
      .navbar-nav {
        text-align: center;
        .nav-item {
          margin-top: 3rem;

          &:last-child {
            margin-bottom: 3rem;
          }
        }
      }
    }
  }
}

.navbar-light {
  .navbar-nav {
    .nav-link {
      color: $navbar-light-color;
      @include hover-focus() {
        color: $navbar-light-hover-color;
      }
    }

    .nav-link.active {
      color: $navbar-light-active-color;
    }
  }

  .navbar-toggler {
    color: $navbar-light-color;
  }
}

.icon-logo {
  color: $dark;
  width: 8.7rem;
  height: 2.4rem;
}

.icon-navbar-toggle {
  width: 2.4rem;
  height: 2.4rem;
}

.header > .container-fluid {
  position: relative;
  background: transparent;
  transition: box-shadow 0.3s linear;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: $white;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  @include media-breakpoint-up(sm) {
    &.bg-white:before {
      opacity: 1;
    }
  }

  @include media-breakpoint-down(sm) {
    background: $white;

    &.shadow {
      box-shadow: 0 0.8rem 1.5rem 0 rgba(0, 0, 0, 0.16);
    }
  }
}
</style>
