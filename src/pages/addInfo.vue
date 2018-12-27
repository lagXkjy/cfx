<template>
  <div class="addinfo-box wh-100 absolute">
    <div class="addinfo-title">请完善领奖信息</div>
    <div class="addinfo-tips">
      <div>请确保个人信息准确</div>
      <div>奖品将于活动结束后7个工作日内发出</div>
    </div>
    <div class="info-box">
      <img class="info-bg wh-100" src="../images/info.png" alt>
      <div class="info-div">
        <div class="info-title">收件人</div>
        <input type="text">
        <div class="info-border"></div>
        <div class="info-title">手机号</div>
        <input type="text" maxlength="11">
        <div class="info-border"></div>
        <div class="info-title">寄件地址</div>
        <textarea></textarea>
        <div class="info-border"></div>
      </div>
    </div>
    <!-- 提交 -->
    <div class="btn-box">
      <img class="btn-img" src="../images/btn-red.png" alt>
      <div class="btn-context wh-100 absolute flex justify-center align-center">提交</div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    dFixed() {
    }
  }
};
</script>

<style lang='scss' scoped>
.addinfo-box {
  padding-top: 2.2rem;
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
.info-div {
  position: absolute;
  top: 1.4rem;
  left: 0;
  right: 0;
  margin: auto;
  width: 4.63rem;
}
.info-div > .info-title {
  font-family: "Pm";
  font-size: 0.34rem;
  color: #be1221;
  text-align: center;
  margin-bottom: 0.5rem;
}
.info-div > input {
  background: none;
  border: none;
  width: 100%;
  height: 0.6rem;
  outline: none;
}
.info-border {
  width: 100%;
  height: 0.06rem;
  background: #00a14b;
  border-bottom: 0.03rem solid #eccd00;
  margin-bottom: 0.32rem;
}
.info-div > textarea {
  background: none;
  border: none;
  width: 100%;
  outline: none;
  height: 1.2rem;
}
.addinfo-tips {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 3.27rem;
  margin: auto;
  text-align: center;
  color: #009942;
  font-size: 0.24rem;
  font-family: "Pm";
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