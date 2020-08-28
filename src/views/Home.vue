<template>
  <div>
    <div class="jumbotron">
      <b-container>
        <b-row>
          <b-col sm="12" lg="9">
            <h1 class="title">
              让全球数十亿的用户都能轻松拥有「比特币」
            </h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="jumbotron-body">
              <button type="button" class="btn">
                <span class="icon-wrapper" @click="onModalShow">
                  <svg class="icon-play">
                    <use xlink:href="#icon-play" />
                  </svg>
                </span>
                <span class="align-left">如何使用「水龙头」，点击观看。</span>
              </button>
              <b-button @click="goRoute('/download-ios')">
                <svg class="icon-apple">
                  <use xlink:href="#icon-apple" />
                </svg>
                <span>iOS 下载</span>
              </b-button>
              <b-button @click="goRoute('/download-android')">
                <svg class="icon-apple">
                  <use xlink:href="#icon-android" />
                </svg>
                <span>Android 下载</span>
              </b-button>
            </div>
            <p class="jumbotron-footer">
              我们创办的「水龙头」是一个比特币奖励和学习平台，让你 0 成本 0
              风险投资拥有你第一笔比特币。
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="main-body">
      <b-container>
        <h2 class="main-body-heading">
          水龙头简介
        </h2>
        <b-row :no-gutters="true">
          <b-media>
            <template v-slot:aside>
              <img src="@/images/home-media.png" alt="" class="media-img" />
            </template>
            <h3 class="media-title">
              李笑来投资的比特币奖励平台
            </h3>
            <p class="para">
              水龙头 App
              是第一个通过网购就能轻松获得比特币奖励的平台，始终秉持「轻松赚取比特币」的理念，致力于综合性电商/生活服务平台的聚合和推荐。
            </p>
            <p class="para">
              我们已经打通淘宝、天猫、京东、拼多多、唯品会等多个电商平台，饿了么、美团等生活服务平台，还有大
              V 专区的各种优质商品推荐，当您在水龙头 App
              已经支持的平台上进行消费，可以获得一定的比特币奖励。
            </p>
          </b-media>
        </b-row>
      </b-container>
      <b-container>
        <h2 class="main-body-heading">
          奖励方式
        </h2>
        <b-row
          :no-gutters="true"
          cols="2"
          cols-sm="2"
          cols-md="3"
          cols-lg="4"
          cols-xl="5"
          class="rewards-wrapper"
        >
          <b-col v-for="(item, i) in rewardsList" :key="i">
            <div class="reward-item">
              <svg class="reward-item-icon">
                <use :xlink:href="item.icon" />
              </svg>
              <span class="reward-item-text">
                {{ item.title }}<br />{{ item.subtitle }}
              </span>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <h2 class="main-body-heading">
          创始人 & 投资人介绍
        </h2>
        <b-row :no-gutters="true" cols="1" cols-sm="2" cols-md="2" cols-lg="3">
          <b-col>
            <div class="person-item">
              <img
                class="person-item-avatar"
                src="@/images/avatar-1.png"
                alt="Avatar"
              />
              <div class="person-item-name">
                Thorb 姜岳
              </div>
              <div class="person-item-title">
                创始人 & CEO
              </div>
              <div class="person-item-intro">
                基于 Mixin Network 的一站式数字资产金融服务平台 ExinOne
                创始人，朴素的程序员。
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="person-item">
              <img
                class="person-item-avatar"
                src="@/images/avatar-2.png"
                alt="Avatar"
              />
              <div class="person-item-name">
                李笑来
              </div>
              <div class="person-item-title">
                投资人
              </div>
              <div class="person-item-intro">
                知名作家，投资人。
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div v-if="activityList.length > 0" class="main-footer">
      <b-container>
        <div class="main-footer-links">
          <div class="main-footer-title">
            水龙头资讯链接：
          </div>
          <div class="main-footer-link-list">
            <span
              v-for="(item, index) in activityList"
              :key="index"
              class="link-item"
              @click="goDetail(item)"
            >
              {{ item.title }}
            </span>
          </div>
        </div>
      </b-container>
    </div>
    <b-modal
      v-model="isModelShow"
      class="video-modal"
      :centered="true"
      :no-close-on-backdrop="true"
      :hide-footer="true"
    >
      <video
        class="video-box"
        src="https://outin-990fbd40ad1711eaba4100163e024c6a.oss-cn-shanghai.aliyuncs.com/sv/48bb5e7b-173ce28ded9/48bb5e7b-173ce28ded9.mp4?Expires=1599483734&OSSAccessKeyId=LTAIVVfYx6D0HeL2&Signature=SH%2F2E3ul0MkNvVisMFSfDJYgc%2F0%3D"
        controls="controls"
        preload="metadata"
        playsinline="playsinline"
        player-fullscreen="true"
        x5-video-play-type="h5"
        x5-video-player-fullscreen="true"
        type="video/mp4"
        source
        poster="https://exinearn-public.oss-cn-shenzhen.aliyuncs.com/images/CqcIJgY4ceQ0nZts6EC6c2Euuxw09qDOGJ57DOdw.png"
      />
    </b-modal>
  </div>
</template>

<script>
import { BContainer, BRow, BCol, BButton, BMedia, BModal } from "bootstrap-vue";
import axios from "@/components/http";
export default {
  components: { BContainer, BRow, BCol, BButton, BMedia, BModal },

  data() {
    return {
      isModelShow: false,
      activityList: [],
      rewardsList: [
        {
          icon: "#icon-taobao",
          title: "淘宝",
          subtitle: "购物奖励"
        },
        {
          icon: "#icon-tmall",
          title: "天猫",
          subtitle: "购物奖励"
        },
        {
          icon: "#icon-jingdong",
          title: "京东",
          subtitle: "购物奖励"
        },
        {
          icon: "#icon-pinduoduo",
          title: "拼多多",
          subtitle: "购物奖励"
        },
        {
          icon: "#icon-vipshop",
          title: "唯品会",
          subtitle: "购物奖励"
        },
        {
          icon: "#icon-eleme",
          title: "饿了么",
          subtitle: "外卖奖励"
        },
        {
          icon: "#icon-meituan",
          title: "淘宝",
          subtitle: "外卖奖励"
        },
        {
          icon: "#icon-tmall-market",
          title: "天猫超市",
          subtitle: "购物奖励"
        },
        {
          icon: "#icon-tmall-national",
          title: "天猫国际",
          subtitle: "购物奖励"
        },
        {
          icon: "#icon-more",
          title: "更多方式",
          subtitle: "敬请期待"
        }
      ]
    };
  },
  mounted() {
    axios
      .get("/web/activities")
      .then(data => {
        const d = data.data.data;
        if (Array.isArray(d)) {
          this.activityList = d.map(item => {
            return {
              id: item.id,
              title: item.title,
              type: item.type,
              url: item.url
            };
          });
        }
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.warn(err);
      });
  },
  methods: {
    goRoute(route) {
      this.$router.push(route);
    },
    goDetail(item) {
      if (item.type === "url") {
        window.open(item.url, "_blank");
      } else {
        this.$router.push(`/activities/${item.id}`);
      }
    },
    onModalShow() {
      this.isModelShow = true;
    }
  }
};
</script>

<style lang="scss">
.jumbotron {
  margin-top: -4.4rem;
  padding-top: 15.75rem;
  padding-bottom: 10rem;
  background: $white top -54.375rem right -79.375rem / 141.75rem 141.75rem
    url("~@/images/home-bg.svg") no-repeat;

  .title {
    font-size: 2.5rem;
    line-height: 1.5;

    @include media-breakpoint-up(xl) {
      font-size: 5rem;
    }
  }

  .jumbotron-body {
    margin-bottom: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include media-breakpoint-up(lg) {
      flex-direction: row-reverse;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 3rem;
      width: 22rem;
      height: 6rem;
      padding: 0 1.5rem;
      font-size: 1.2rem;
      transition: all 0.3s linear;

      &:nth-child(3) {
        background: $dark;
        color: $danger;
        &:hover {
          background: #464646;
          box-shadow: 0 1.3rem 2.4rem 0 rgba(0, 0, 0, 0.16);
        }
      }

      &:nth-child(2) {
        background: $danger;
        color: $white;

        &:hover {
          background: #fe7f3a;
          box-shadow: 0 1.3rem 2.4rem 0 rgba(0, 0, 0, 0.16);
        }
      }

      @include media-breakpoint-only(lg) {
        &:first-child {
          justify-content: flex-start;
          width: 100%;
        }
      }

      @include media-breakpoint-up(lg) {
        &:not(:first-child) {
          margin-right: 2.4rem;
        }
      }

      .icon-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1.5rem;
        flex: 0 0 6rem;
        height: 6rem;
        border-radius: 50%;

        color: #ff5a00;
        background: #fff;
        transition: all 0.3s linear;
        &:hover {
          box-shadow: 0 0.8rem 1.5rem 0 rgba(0, 0, 0, 0.16);
        }

        .icon-play {
          width: 4rem;
          height: 4rem;
        }
      }

      .align-left {
        text-align: left;
      }

      .icon-apple,
      .icon-android {
        width: 2rem;
        height: 2rem;
      }
    }
  }
}

.main-body {
  margin-bottom: 4rem;
}

.main-body-heading {
  margin: 10rem 0 3rem;
  font-size: 2.5rem;

  @include media-breakpoint-down(xs) {
    font-size: 2.08rem;
  }
}

.rewards-wrapper {
  .reward-item {
    display: flex;
    flex-direction: column;
    margin: 0 1.25rem 1.25rem 0;
    padding: 3rem;
    background: #fff;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-0.5rem);
      box-shadow: 0 1.3rem 2.4rem 0 rgba(0, 0, 0, 0.16);
    }

    .reward-item-icon {
      width: 2.5rem;
      height: 2.5rem;
      color: #d6d6d6;
    }

    .reward-item-text {
      margin-top: 2rem;
      font-size: 1.5rem;
      line-height: 1.65;
      font-weight: bold;
    }
  }
  @include media-breakpoint-down(xs) {
    margin-right: -1.25rem;

    .reward-item {
      padding: 2rem;

      .reward-item-text {
        font-size: 1.25rem;
      }
    }
  }
}

.person-item {
  margin: 0 1.5rem 1.5rem 0;
  padding: 3rem;
  background: #fff;
  line-height: 1.5;
  height: calc(100% - 1.5rem);

  .person-item-avatar {
    width: 5rem;
    height: 5rem;
  }

  .person-item-name {
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .person-item-title {
    margin-top: 1rem;
    font-size: 1rem;
  }

  .person-item-intro {
    margin-top: 2rem;
    font-size: 1rem;
    color: #b1b1b1;
  }
}
.main-footer {
  padding: 4rem 0;

  .main-footer-links {
    display: flex;
  }

  .main-footer-title {
    margin-right: 1.5rem;
    min-width: 8.5rem;
    font-weight: bold;
  }
  .main-footer-link-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .link-item {
    display: inline-block;
    margin: 0 1.5rem 1.5rem 0;
    color: #ff5a00;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
}

.video-box {
  width: 100%;
}

.media {
  display: flex;
  align-items: flex-start;
  padding: 3rem;
  background: #fff;

  .media-img {
    width: 30rem;
  }

  .media-body {
    flex: 1 0 0;
    margin-left: 3rem;
    line-height: 1.5rem;

    .para {
      margin: 0 0 1rem;
    }

    .media-title {
      margin-bottom: 1.25rem;
      font-size: 1.5rem;
    }
  }

  @include media-breakpoint-down(md) {
    flex-direction: column;

    .media-img {
      margin-bottom: 3rem;
      width: 100%;
    }

    .media-body {
      margin-left: 0;
    }
  }
}
</style>
