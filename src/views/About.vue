<template>
  <div>
    <div class="about-wrapper">
      <b-container>
        <b-row cols="1" no-gutters>
          <b-breadcrumb :items="breadcrumbItems" />
          <h3 class="title">
            关于我们
          </h3>
          <p class="subtitle">
            水龙头团队 编辑于 2020/08/10
          </p>
          <p class="para">
            我们是一个专业的区块链技术团队，我们相信比特币终将成为全球价值存储网络，我们创办水龙头
            App 是希望全球数十亿人都拥有和使用比特币。
          </p>
          <p class="para">
            比特币是全球最安全、应用最广泛的数字货币，是区块链最完美的应用，总市值超过
            1000
            亿美金，我们相信比特币是未来，但是当前获取比特币并不容易，甚至在某些国家开设交易所是不合规的，我们希望通过水龙头
            App
            帮助用户可以轻松的赚取自己的第一笔比特币，并且可以轻松的保存、转让比特币。
          </p>
          <p class="para">
            希望您能加入我们，一起创造未来，改变世界。
          </p>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { BContainer, BRow, BBreadcrumb } from "bootstrap-vue";
export default {
  components: { BContainer, BRow, BBreadcrumb },
  computed: {
    breadcrumbItems() {
      return [
        {
          text: "首页",
          href: "/"
        },
        {
          text: "关于我们",
          href: "#"
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.about-wrapper {
  padding: 3rem 0 6rem;
}

.breadcrumb {
  margin-bottom: 3rem;
}

.title {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.subtitle {
  color: #b1b1b1;
}

.para {
  margin-top: 2rem;
}
</style>
