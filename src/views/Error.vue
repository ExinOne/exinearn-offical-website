<template>
  <div class="wrapper">
    <img src="@/images/404.svg" alt="404" class="err-img" />
    <span>页面找不到了～</span>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .err-img {
    margin-bottom: 1.5rem;
  }
}
</style>
