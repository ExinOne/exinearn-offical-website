<template>
  <div class="main-wrapper">
    <nav-header />
    <Nuxt class="main" />
    <nav-footer />
    <svg-supplier />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '../assets/scss/index.scss';

.main-wrapper {
  position: relative;

  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
}

.main {
  padding-top: 4.4rem;
  padding-bottom: 10.8rem;
  min-height: 100vh;
}
</style>
