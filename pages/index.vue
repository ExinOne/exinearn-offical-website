<template>
  <div class="bg-gray">
    <div class="jumbotron">
      <b-container>
        <b-row>
          <b-col sm="12" lg="8">
            <h1 class="jumbotron-heading">
              让全球数十亿的用户都能轻松拥有「比特币」
            </h1>
          </b-col>
        </b-row>
        <div class="jumbotron-btn-group">
          <button type="button" class="btn">
            <span class="icon-wrapper" @click="onModalShow">
              <svg class="icon-play">
                <use xlink:href="#icon-play" />
              </svg>
            </span>
            <span class="align-left">如何使用「水龙头」，点击观看。</span>
          </button>
          <b-button squared variant="dark" @click="goRoute('/ios-download')">
            <svg class="icon-apple">
              <use xlink:href="#icon-apple" />
            </svg>
            <span>iOS 下载</span>
          </b-button>
          <b-button
            squared
            variant="danger"
            @click="goRoute('/android-download')"
          >
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
      </b-container>
    </div>
    <div class="main-body">
      <b-container>
        <h2 class="main-body-heading">奖励方式</h2>
        <b-row :no-gutters="true" cols="2" cols-sm="3" cols-md="4" cols-lg="5">
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
        <h2 class="main-body-heading">创始人 & 投资人介绍</h2>
        <b-row :no-gutters="true" cols="1" cols-sm="2" cols-md="2" cols-lg="3">
          <b-col v-for="i in 2" :key="i">
            <div class="person-item">
              <img
                class="person-item-avatar"
                src="@/assets/images/avatar.png"
                alt="Avatar"
              />
              <div class="person-item-name">罗永浩</div>
              <div class="person-item-title">XXX</div>
              <div class="person-item-intro">
                简单一段介绍什么的比黎吧啦发多少范德萨发撒的范德萨发简单一段介绍什么的比黎吧啦发多少范德萨发撒的范德萨发简单…
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div v-if="activityList.length > 0" class="main-footer">
      <b-container>
        <div class="main-footer-links">
          <div class="main-footer-title">水龙头资讯链接：</div>
          <div class="main-footer-link-list">
            <nuxt-link
              v-for="(item, index) in activityList"
              :key="index"
              :to="`/act-list/detail?id=${item.id}`"
              class="link-item"
            >
              {{ item.title }}
            </nuxt-link>
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
      ></video>
    </b-modal>
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */
export default {
  data() {
    return {
      isModelShow: false,
      activityList: [],
      rewardsList: [
        {
          icon: '#icon-eleme',
          title: '饿了么',
          subtitle: '购物奖励',
        },
        {
          icon: '#icon-taobao',
          title: '淘宝',
          subtitle: '购物奖励',
        },
        {
          icon: '#icon-jingdong',
          title: '京东',
          subtitle: '购物奖励',
        },
        {
          icon: '#icon-pinduoduo',
          title: '拼多多',
          subtitle: '购物奖励',
        },
      ],
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
              title: item.title,
            };
          });
        }
      })
      .catch(err => {
        console.warn(err);
      });
  },
  methods: {
    goRoute(route) {
      this.$router.push(route);
    },
    onModalShow() {
      this.isModelShow = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/functions.scss';
@import '../assets/scss/variables';
@import '~bootstrap/scss/mixins.scss';
.bg-gray {
  background: #f2f2f2;
}
.jumbotron {
  padding-top: 14.4rem;
  padding-bottom: 3rem;
  margin-top: -4.4rem;
  background: #fff top -43.5rem right -50rem / 113.4rem 113.4rem
    url('~@/assets/images/home-bg.svg') no-repeat;

  .jumbotron-heading {
    font-size: 3rem;
    line-height: 1.5;

    @include media-breakpoint-up(xl) {
      font-size: 5rem;
    }
  }

  .jumbotron-btn-group {
    margin-bottom: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include media-breakpoint-up(lg) {
      flex-direction: row-reverse;
      flex-wrap: wrap;
      justify-content: flex-end;
    }
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    width: 23.2rem;
    height: 6rem;
    padding: 0 1.5rem;
    font-size: 1.2rem;

    @include media-breakpoint-only(lg) {
      &:first-child {
        justify-content: flex-start;
        width: 100%;
      }
    }

    @include media-breakpoint-up(lg) {
      &:not(:first-child) {
        margin-right: 3rem;
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
      box-shadow: 0 0.8rem 1.5rem 0 rgba(0, 0, 0, 0.16);
      color: #ff5a00;
      background: #fff;

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

.main-body {
  .main-body-heading {
    margin: 6rem 0 3rem;
  }
  .reward-item {
    display: flex;
    flex-direction: column;
    margin: 0 1.5rem 1.5rem 0;
    padding: 3rem;
    background: #fff;

    .reward-item-icon {
      width: 2.5rem;
      height: 2.5rem;
      color: #d6d6d6;
    }

    .reward-item-text {
      margin-top: 2rem;
      font-size: 1.5rem;
      line-height: 3.3rem;
      font-weight: bold;
    }
  }

  .person-item {
    margin: 0 1.5rem 1.5rem 0;
    padding: 3rem;
    background: #fff;
    line-height: 1.5;

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
}

.main-footer {
  padding: 9rem 0 4rem;

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
  }

  .link-item {
    display: inline-block;
    margin: 0 1.5rem 1.5rem 0;
  }
}

.video-box {
  width: 100%;
}
</style>
