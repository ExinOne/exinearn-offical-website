<template>
  <div>
    <div class="activity-wrapper">
      <b-container>
        <b-breadcrumb :items="breadcrumbItems" />
        <b-row cols="1" cols-sm="2" cols-lg="3">
          <b-col v-for="(activity, i) in activityList" :key="i">
            <div class="activity-item" @click="goDetail(activity)">
              <img class="activity-banner" :src="activity.imgUrl" />
              <div class="activity-title">
                {{ activity.title }}
              </div>
              <div class="activity-status">
                {{ activity.status }}
              </div>
              <div class="activity-des" v-text="activity.des" />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { BContainer, BRow, BCol, BBreadcrumb } from "bootstrap-vue";
import { state, actions } from "@/store/index";
export default {
  components: { BContainer, BRow, BCol, BBreadcrumb },
  computed: {
    activityList() {
      return state.activityList;
    },
    breadcrumbItems() {
      return [
        {
          text: "首页",
          href: "/"
        },
        {
          text: "活动动态",
          href: "#"
        }
      ];
    }
  },
  mounted() {
    actions.updateActivityList().catch(err => {
      // eslint-disable-next-line no-console
      console.warn(err);
    });
  },
  methods: {
    goDetail(activity) {
      if (activity.type === "url") {
        window.open(activity.url, "_blank");
      } else {
        this.$router.push(`/activities/${activity.id}`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.activity-wrapper {
  padding: 3rem 0 6rem;
}

.activity-item {
  margin: 0 1.5rem 1.5rem 0;
  padding: 3rem;
  background: #fff;
  height: calc(100% - 1.5rem);

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
