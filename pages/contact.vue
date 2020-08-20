<template>
  <div>
    <div class="contact-wrapper">
      <b-container>
        <b-row no-gutters cols="1">
          <b-breadcrumb :items="breadcrumbItems" />
          <h3 class="title">
            联系我们
          </h3>
          <p class="subtitle">
            水龙头团队 编辑于 2020/08/10
          </p>
          <div class="list-wrapper">
            <div>
              <strong>商务合作：</strong>
            </div>
            <p class="list-item">
              · 微信： exin2018
            </p>
            <p class="list-item">
              · 邮箱： mia@exin.one
            </p>
          </div>
          <div class="list-wrapper">
            <div>
              <strong>微信公众号：</strong>
            </div>
            <p class="list-item">
              <img
                src="@/assets/images/official-account.jpeg"
                alt="Wechat Official Account"
                class="img"
              />
            </p>
          </div>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    breadcrumbItems() {
      return [
        {
          text: '首页',
          href: '/',
        },
        {
          text: '联系我们',
          href: '#',
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-wrapper {
  padding: 3rem 0 6rem;
}

.title {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.subtitle {
  color: #b1b1b1;
}

.list-wrapper {
  margin-top: 2rem;
  line-height: 1.5rem;

  .img {
    margin-top: 1rem;
    width: 10rem;
  }
}
</style>
