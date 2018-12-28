<template>
  <div class="congrats1 wh-100 absolute">
    <img class="zhnl" src="../images/zhnl.png" alt>
    <div class="price">
      <span class="price-price">100</span>
      <span class="pm">元</span>
    </div>
    <div class="wmk pm">无门槛优惠券</div>
    <div class="quan pm">五芳斋天猫旗舰店全场通用</div>
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
.congrats1 {
  padding-top: 0.8rem;
  text-align: center;
}
.zhnl {
  width: 4rem;
  display: block;
  margin: auto;
}
.price {
  text-align: center;
  color: #015883;
  text-shadow: 0 0 0.4rem #ffffff;
  font-size: 0.5rem;
  margin-top: 0.55rem;
  margin-bottom: 0.4rem;
  font-style: italic;
}
.price-price {
  font-weight: bold;
  font-size: 1rem;
  line-height: 1rem;
  font-style: italic;
}
.wmk {
  text-align: center;
  font-size: 0.7rem;
  color: #be1221;
  margin-bottom: 0.1rem;
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

