<template>
  <div>
    <div class="activity-detail-wrapper">
      <b-container>
        <b-breadcrumb :items="breadcrumbItems" />
        <h3 class="title">
          {{ title }}
        </h3>
        <p class="subtitle">水龙头团队 编辑于 {{ date }}</p>
        <div class="content" v-html="content" />
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      title: '',
      subtitle: '',
      des: '',
      date: '',
      content: '',
      isModelShow: false,
      videoSrc: '',
      viewPoster: '',
    };
  },
  computed: {
    breadcrumbItems() {
      return [
        {
          text: '首页',
          href: '/',
        },
        {
          text: '活动动态',
          href: '/activities',
        },
        {
          text: this.title,
          href: '#',
        },
      ];
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.$axios
      .get(`/web/activity/${id}`)
      .then((data) => {
        const d = data.data.data;
        this.name = d.name;
        this.title = d.title;
        this.subtitle = d.subtitle;
        this.date = new Date(d.created_at * 1000).toLocaleDateString();
        this.content = d.content;
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.warn(err);
      });
  },
};
</script>

<style lang="scss" scoped>
.activity-detail-wrapper {
  padding: 3rem 0 6rem;
}

.title {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.subtitle {
  color: #b1b1b1;
}

.content {
  padding: 3rem 0;
}
</style>
