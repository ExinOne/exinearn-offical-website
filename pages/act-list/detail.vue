<template>
  <div class="bg-gray">
    <div class="activity-wrapper">
      <b-container>
        <div class="breadcrumb">
          <span>首页</span>
          >
          <span>活动动态</span>
          >
          <span>{{ name }}</span>
        </div>
        <h3 class="title">{{ title }}</h3>
        <p class="subtitle">水龙头团队 编辑于 {{ date }}</p>
        <div class="content" v-html="des"></div>
      </b-container>
    </div>
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */
export default {
  data() {
    return {
      name: '',
      title: '',
      subtitle: '',
      des: '',
      date: '',
    };
  },
  mounted() {
    const id = this.$route.query.id;
    this.$axios
      .get(`/web/activity/${id}`)
      .then(data => {
        const d = data.data.data;
        this.name = d.name;
        this.title = d.title;
        this.subtitle = d.subtitle;
        this.date = new Date(d.created_at * 1000).toLocaleDateString();
      })
      .catch(err => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
.bg-gray {
  background: #f2f2f2;
}

.activity-wrapper {
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
</style>