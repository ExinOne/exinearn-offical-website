<template>
  <div>
    <b-container>
      <div class="wrapper">
        <h2 class="title">隐私政策</h2>
        <div class="info">
          <div class="content">
            <privacy-content />
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { BContainer } from "bootstrap-vue";
import PrivacyContent from "@/components/privacy-content";
export default {
  components: {
    BContainer,
    PrivacyContent
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 3rem 0;
}

.title {
  margin-bottom: 1.5rem;
  font-size: 2rem;
}
</style>
