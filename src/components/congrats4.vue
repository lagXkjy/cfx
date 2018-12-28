<template>
  <div class="wh-100 absolute">
    <img class="zhnl" src="../images/zhnl.png" alt>
    <div class="congrats2 wh-100 absolute">
      <div class="ds pm">戴森吹风机一台</div>
      <div class="sup">SUPERSONIC HDOI</div>
      <div class="ck pm">图片仅供参考，具体以实物为准</div>
    </div>
    <img class="ds-image" src="../images/ds.png" alt>
    <!-- 立即领取 -->
    <div class="btn-box">
      <img class="btn-img" src="../images/btn-red.png" alt>
      <div class="btn-context wh-100 absolute flex justify-center align-center">立即领取</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

 <style lang='scss' scoped>
.ds-image {
  width: 30%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 6%;
  margin: auto;
}
.ds {
  font-size: 0.7rem;
  color: #015883;
  font-style: italic;
}
.sup {
  font-size: 0.26rem;
  color: #015883;
  font-style: italic;
  font-weight: bold;
  margin-top: 0.1rem;
  margin-bottom: 0.24rem;
}
.ck {
  font-size: 0.26rem;
  color: #009942;
}
.pm {
  font-family: "Pm";
}

.congrats2 {
  padding-top: 1rem;
  text-align: center;
}
.zhnl {
  width: 4rem;
  position: absolute;
  top: -0.5rem;
  left: 0;
  right: 0;
  margin: auto;
}
.btn-box {
  position: absolute;
  bottom: 0.9rem;
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

