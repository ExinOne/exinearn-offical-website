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
        <div class="content" v-html="content"></div>
      </b-container>
    </div>
    <b-modal
      v-model="isModelShow"
      class="video-modal"
      :centered="true"
      :no-close-on-backdrop="true"
      :hide-footer="true"
      @hide="onModalHide"
    >
      <video
        ref="video"
        class="video-box"
        :src="videoSrc"
        controls="controls"
        preload="metadata"
        playsinline="playsinline"
        player-fullscreen="true"
        x5-video-play-type="h5"
        x5-video-player-fullscreen="true"
        type="video/mp4"
        source
        :poster="viewPoster"
      ></video>
    </b-modal>
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
      content: '',
      isModelShow: false,
      videoSrc: '',
      viewPoster: '',
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
        this.content = d.content;
      })
      .catch(err => {
        console.warn(err);
      });
  },
  methods: {
    showVideoModal(item) {
      this.videoSrc = item.src;
      this.viewPoster = item.poster;
      this.$nextTick(() => {
        this.isModelShow = true;
      });
    },
    onModalHide() {
      this.$refs.video && this.$refs.video.pause();
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

.title {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.subtitle {
  color: #b1b1b1;
}
</style>