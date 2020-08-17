<template>
  <div class="bg-gray">
    <div class="download-wrapper">
      <b-container>
        <div class="breadcrumb">
          <span>首页</span>
          >
          <span>iOS 下载</span>
        </div>
        <b-row no-gutters cols="1" cols-sm="2" align-h="center">
          <b-col>
            <div class="img-box">
              <img
                src="@/assets/images/ios-download-banner.svg"
                alt=""
                class="img"
              />
            </div>
          </b-col>
          <b-col class="qrcode-wrapper">
            <div class="qrcode-box">
              <img src="@/assets/images/qrcode.png" alt="" class="img" />
              <span class="text">扫一扫，下载水龙头 App</span>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-gray {
  background: #f2f2f2;
}

.download-wrapper {
  padding: 3rem 0 6rem;
}

.breadcrumb {
  margin-bottom: 3rem;
}

.img-box {
  margin: 3rem auto 0;
  width: 80%;
  text-align: center;
  .img {
    width: 100%;
  }
}

.qrcode-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.qrcode-box {
  margin: 3rem auto 0;
  width: 80%;
  padding: 3rem 5.3rem;
  text-align: center;
  background: #fff;
  box-shadow: 0 0.8rem 1.5rem 0 rgba(0, 0, 0, 0.16);

  .img {
    display: block;
    margin: 0 auto;
    width: 15rem;
    height: 15rem;
  }

  .text {
    display: inline-block;
    margin-top: 3rem;
    font-size: 1rem;
    color: #b1b1b1;
  }
}
</style>
