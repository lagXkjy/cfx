<template>
  <!-- 首页， 动态猪 -->
  <div class="wh-100 absolute">
    <!-- 猪福 -->
    <div class="pig-box width-100 absolute">
      <img class="pig" src="../images/pig.gif" alt>
      <img class="bless" src="../images/bless.gif" alt>
    </div>
    <!-- 横幅 -->
    <div class="banner-box absolute">
      <img class="wh-100" src="../images/banner.png" alt>
      <div class="banner-context width-100 absolute emblem">
        <span style="transform: rotateZ(-32deg) translate3d(0px, 0px, 0px);">你</span>
        <span style="transform: rotateZ(-24deg) translate3d(0px, 0px, 0px);">是</span>
        <span style="transform: rotateZ(-16deg) translate3d(0px, 0px, 0px);">有</span>
        <!-- <span class="banner-scale" style="transform: rotateZ(-8deg) translate3d(0px, 0px, 0px);">福</span>
        <span class="banner-scale" style="transform: rotateZ(0deg) translate3d(0px, 0px, 0px);">相</span> -->
        <span style="transform: rotateZ(8deg) translate3d(0px, 0px, 0px);">的</span>
        <span style="transform: rotateZ(16deg) translate3d(0px, 0px, 0px);">人</span>
        <span style="transform: rotateZ(24deg) translate3d(0px, 0px, 0px);">吗</span>
        <span style="transform: rotateZ(32deg) translate3d(0px, 0px, 0px);">?</span>
        <img class="fx-img" src="../images/fx.gif" alt="">
      </div>
      <!-- 灯笼 -->
      <div class="wh-100 absolute">
        <img class="lantern lantern-l" src="../images/lantern-l.gif" alt>
        <img class="lantern lantern-r" src="../images/lantern-l.gif" alt>
      </div>
    </div>
    <!-- 刷脸开测 -->
    <div @click="toCamera" class="btn-box">
      <img class="btn-img" src="../images/btn-green.png" alt>
      <div class="btn-context wh-100 absolute flex justify-center align-center">刷脸开测</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toCamera() {
      console.log("rererer");
      this.$router.push("/camera");
    }
  }
};
</script>

<style lang='scss' scoped>
.fx-img{
  width: 1.6rem;
  position: absolute;
  top: -0.1rem;
  left: 3.7rem;
  transform: rotateZ(-1deg)
}
.banner-box {
  top: 1.5rem;
  width: 110%;
  height: 9rem / 2.48;
  left: -5%;
}
.lantern {
  position: absolute;
  top: (9rem / 2.48 / 2) - 0.2rem;
  width: 2.9rem;
}

.lantern-l {
  left: 0.15rem;
}

.lantern-r {
  right: 0.15rem;
  transform: rotateY(180deg);
  transform-origin: center top;
}

.banner-context {
  color: #ffffff;
  font-size: 0.66rem;
  font-family: "Pm";
  text-align: center;
  top: 0.4rem;
}

.pig-box {
  top: 3.3rem;
}

.pig {
  width: 83%;
  margin: auto;
  display: block;
}

.bless {
  width: 5rem;
  margin: auto;
  display: block;
  position: absolute;
  bottom: -0.9rem;
  left: 0;
  right: 0;
}

.btn-box {
  position: absolute;
  bottom: 0.33rem;
  left: 0;
  right: 0;
  margin: auto;
  width: 3.16rem;
}

.btn-img {
  width: 3.16rem;
  border-radius: 0.2rem;
  box-shadow: 0rem 0rem 0.12rem 0.1rem #f8f3f3;
  display: block;
  margin: auto;
}

.btn-context {
  color: #ffffff;
  font-size: 0.42rem;
  font-family: "Pm";
  letter-spacing: 0.04rem;
}

.emblem {
  position: absolute;
  height: 11rem;
}

.emblem span {
  position: absolute;
  display: inline-block;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
// .banner-scale{
//   animation: mymove 0.5s ease-in-out infinite alternate;
// }
@keyframes mymove{
  from{
    font-size: 0.75rem;
    // top: -0.1rem;
  }
  to{
    font-size: 0.66rem;
    // top: 0;
  }
}
</style>