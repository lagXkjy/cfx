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
        <input type="text" v-model="Name">
        <div class="info-border"></div>
        <div class="info-title">手机号</div>
        <input type="text" maxlength="11" v-model="Phone">
        <div class="info-border"></div>
        <div class="info-title">寄件地址</div>
        <textarea v-model="Site"></textarea>
        <div class="info-border"></div>
      </div>
    </div>
    <!-- 提交 -->
    <div @click="submit" class="btn-box">
      <img class="btn-img" src="../images/btn-red.png" alt>
      <div class="btn-context wh-100 absolute flex justify-center align-center">提交</div>
    </div>
  </div>
</template>

<script>
import $request from "@/utils/request";
export default {
  data() {
    return {
      Name: "",
      Phone: "",
      Site: "",
      PrizeId: 1
    };
  },
  methods: {
    submit() {
      if (this.Name.trim().length <= 0) {
        return alert("请填写收件人");
      }
      if (!/^(1[3456789]|9[28])\d{9}$/.test("" + this.Phone)) {
        return alert("请填写正确的手机号");
      }
      if (this.Site.trim().length <= 0) {
        return alert("请填写寄件地址");
      }
      const data = {
        Name: this.Name,
        Phone: this.Phone,
        Site: this.Site,
        PrizeId: this.PrizeId
      };
      alert(JSON.stringify(data));
      $request
        .post("PostAddress", data)
        .then(res => {
          alert(JSON.stringify(res));
          if (!res.res) {
            alert("提交失败");
          }
        })
        .catch(err => {
          alert(JSON.stringify(err));
        });
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
  width: 76%;
  height: 8.5rem;
}
.info-div {
  position: absolute;
  top: 1.4rem;
  left: 0;
  right: 0;
  margin: auto;
  width: 72%;
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
  bottom: 2.5rem;
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