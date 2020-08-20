<template>
  <div class="main-wrapper">
    <nav-header />
    <Nuxt class="main-view" />
    <nav-footer />
    <svg-supplier />
  </div>
</template>

<script>
import svgSupplier from '../components/svg-supplier';
import navHeader from '../components/nav-header';
import navFooter from '../components/nav-footer';
export default {
  components: {
    svgSupplier,
    navHeader,
    navFooter,
  },
};
</script>

<style lang="scss">
@import '~@/assets/scss/index.scss';
.main-wrapper {
  position: relative;
}

.main-view {
  padding-top: 4.4rem;
  padding-bottom: 12.4rem;
  min-height: 100vh;
  background: #f2f2f2;
}
</style>
