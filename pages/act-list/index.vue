<template>
  <div class="bg-gray">
    <div class="activity-wrapper">
      <b-container>
        <div class="breadcrumb">
          <span>首页</span>
          >
          <span>活动动态</span>
        </div>
        <b-row cols="1" cols-sm="2" cols-lg="3">
          <b-col v-for="(activity, i) in activityList" :key="i">
            <div class="activity-item" @click="goDetail(activity.id)">
              <img class="activity-banner" :src="activity.imgUrl" />
              <div class="activity-title">{{ activity.title }}</div>
              <div class="activity-status">{{ activity.status }}</div>
              <div class="activity-des" v-text="activity.des"></div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */
export default {
  data() {
    return {
      activityList: [],
    };
  },
  mounted() {
    this.$axios
      .get('/web/activities')
      .then(data => {
        const d = data.data.data;
        if (Array.isArray(d)) {
          this.activityList = d.map(item => {
            return {
              id: item.id,
              imgUrl: item.image,
              title: item.title,
              status: item.subtitle,
              des: item.description,
            };
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    goDetail(id) {
      this.$router.push(`/act-list/detail?id=${id}`);
    },
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

.activity-item {
  margin: 0 1.5rem 1.5rem 0;
  padding: 3rem;
  background: #fff;

  .activity-banner {
    width: 100%;
  }

  .activity-title {
    margin: 2rem 0 1rem;
    font-size: 1.5rem;
    line-height: 1.2;
    font-weight: bold;
  }

  .activity-des {
    margin-top: 2rem;
    color: #b1b1b1;
  }
}
</style>
