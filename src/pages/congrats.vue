<template>
  <div class="addinfo-box wh-100 absolute">
    <div class="addinfo-title">恭喜获得</div>
    <div class="info-box">
      <img class="info-bg wh-100" src="../images/info.png" alt>
      <!-- <congrats1></congrats1> -->
      <!-- <congrats2></congrats2> -->
      <!-- <congrats3></congrats3> -->
      <!-- <congrats4></congrats4> -->
      <congrats5></congrats5>
    </div>
    <!-- 福气榜单 -->
    <div class="btn-box-b">
      <img class="btn-img" src="../images/btn-green.png" alt>
      <div class="btn-context wh-100 absolute flex justify-center align-center">比拼福气</div>
    </div>
    <!-- 福气榜单 -->
    <div class="btn-box">
      <img class="btn-img" src="../images/btn-green.png" alt>
      <div class="btn-context wh-100 absolute flex justify-center align-center">福气榜单</div>
    </div>
    <tmall></tmall>
  </div>
</template>

<script>
import congrats1 from "../components/congrats1.vue";
import congrats2 from "../components/congrats2.vue";
import congrats3 from "../components/congrats3.vue";
import congrats4 from "../components/congrats4.vue";
import congrats5 from "../components/congrats5.vue";
import tmall from "../components/tmall.vue";
export default {
  components: {
    congrats1,
    congrats2,
    congrats3,
    congrats4,
    congrats5,
    tmall
  }
};
</script>

<style lang='scss' scoped>
.addinfo-box {
  padding-top: 2rem;
}
.addinfo-title {
  width: 100%;
  text-align: center;
  font-size: 0.66rem;
  color: #be1221;
  font-family: "Pm";
}
.info-box {
  position: absolute;
  top: 3.5rem;
  left: 0;
  right: 0;
  margin: auto;
  width: 6.67rem;
  height: (6.67 / 0.78) rem;
}

.btn-box-b {
  position: absolute;
  bottom: 1.8rem;
  left: 0;
  right: 0;
  margin: auto;
  width: 3.16rem;
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
</style>