<template>
  <div>
    <b-container>
      <div class="wrapper">
        <h2 class="title">服务协议</h2>
        <div class="info">
          <div class="content">
            <service-content />
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { BContainer } from "bootstrap-vue";
import ServiceContent from "@/components/service-content";
export default {
  components: {
    BContainer,
    ServiceContent
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
