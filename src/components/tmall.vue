<template>
  <div class="tmall">
    <div class="kuang-box">
      <img class="kuang" src="../images/kuang.jpg" alt>
      <div class="kuang-content flex justify-center align-center flex-direction">
        <div class="kl">淘口令</div>
        <div class="kl-border">
          <div class="kl-b-g">65466876165</div>
        </div>
        <div class="copy">一键复制</div>
        <div class="kuang-t">复制这条信息</div>
        <div class="kuang-t">打开淘宝/天猫App即可使用</div>
      </div>
    </div>
    <div class="close"></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang='scss' scoped>
.kuang-t {
  font-size: 0.32rem;
}
.copy {
  color: #ffffff;
  font-size: 0.3rem;
  line-height: 0.3rem;
  padding: 0.18rem 0.3rem;
  border-radius: 0.1rem;
  background: #ff0000;
  margin-bottom: 0.3rem;
}
.kl-b-g {
  border: 0.03rem solid #009b45;
  background: #ffffff;
  font-size: 0.3rem;
  line-height: 0.3rem;
  padding: 0.24rem;
}
.kl-border {
  border: 0.03rem solid #e9d200;
  margin: 0.2rem 0 0.3rem;
}
.kl {
  font-size: 0.3rem;
  color: #ff0000;
}
.kuang-content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
}
.tmall {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba($color: #000000, $alpha: 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.kuang-box {
  position: relative;
  top: 0;
  left: 0;
  background: #e7d5b8;
  width: 5.64rem;
  height: 5.2rem;
}
.kuang {
  width: 100%;
  height: 100%;
}
.close {
  width: 0.7rem;
  height: 0.7rem;
  margin-top: 0.3rem;
  background: url("../images/close.png") no-repeat;
  background-size: 100%;
}
</style>

