<template>
  <div class="congrats2 wh-100 absolute">
    <img class="zhnl" src="../images/zhnl.png" alt>
    <div class="text-shadow pm">
      <div class="zd">指定产品</div>
      <div class="man">
        满
        <span>139</span>元
      </div>
      <div class="jian">
        减
        <span>30</span>元
      </div>
      <div class="yhq">优惠券</div>
    </div>
    <div class="quan pm">仅限五芳斋门店使用</div>
    <!-- 马上使用 -->
    <div class="btn-box">
      <img class="btn-img" src="../images/btn-red.png" alt>
      <div class="btn-context wh-100 absolute flex justify-center align-center">马上使用</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

 <style lang='scss' scoped>
.pm {
  font-family: "Pm";
}
.text-shadow {
  text-shadow: 0 0 0.4rem #ffffff;
  color: #015883;
  font-style: italic;
  font-weight: bold;
}
.man {
  font-size: 0.8rem;
}
.man > span {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-style: normal;
  font-size: 1rem;
}
.jian {
  font-size: 0.8rem;
}
.jian > span {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-style: normal;
  color: #de0d0d;
  font-size: 1rem;
}
.zd {
  font-size: 0.5rem;
  margin-bottom: 0.3rem;
}
.congrats2 {
  padding-top: 1.38rem;
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
.yhq {
  font-size: 0.6rem;
  margin-bottom: 0.26rem;
  margin-top: 0.2rem;
}
.quan {
  border: 0.09rem solid #00a64b;
  background: #eed900;
  color: #be1221;
  text-align: center;
  font-size: 0.32rem;
  line-height: 0.32rem;
  display: inline-block;
  padding: 0.1rem;
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

