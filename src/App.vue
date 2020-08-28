<template>
  <div id="app">
    <svg-supplier></svg-supplier>
    <nav-header></nav-header>
    <router-view class="main-view"></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import svgSupplier from "./components/svg-supplier";
import navHeader from "./components/nav-header";
import navFooter from "./components/nav-footer";
export default {
  components: {
    svgSupplier,
    navHeader,
    navFooter
  }
};
</script>

<style lang="scss">
@import "~bootstrap/scss/grid.scss";
@import "~bootstrap/scss/transitions.scss";
@import "~bootstrap/scss/utilities/position.scss";
@import "~bootstrap/scss/modal.scss";
@import "~bootstrap/scss/breadcrumb.scss";

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  box-sizing: border-box;
  min-height: 100%;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

a:hover {
  color: #ff5a00;
}

img {
  outline: none;
  vertical-align: middle;
}

button {
  outline: none;
  border: 0;
  background: transparent;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

h1,
h2,
h3,
h5,
h6,
body {
  margin: 0;
}

h4 {
  font-size: 1rem;
  margin: 1rem 0;
}

p {
  margin: 0 0 1rem;
}

video {
  outline: none;
}

@if $enable-grid-classes {
  @each $breakpoint in map-keys($grid-breakpoints) {
    html {
      @include media-breakpoint-up($breakpoint) {
        font-size: map-get($map: $root-sizes, $key: $breakpoint);
      }
    }
  }
}

.modal-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  .close {
    font-size: 2rem;
  }
}

.modal-body {
  text-align: center;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: ">" !important;
}

#app {
  position: relative;
}

.main-view {
  padding-top: 4.4rem;
  padding-bottom: 14rem;
  min-height: 100vh;
  background: #f2f2f2;
}
</style>
