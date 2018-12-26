<template>
  <div class="wraper relative wh-100">
    <img class="wh-100" src="../images/bg.png">
    <div class="bg-box wh-100 absolute">
      <div class="bg-border relative wh-100">
        <div class="bg-border-green absolute wh-100"></div>
      </div>
    </div>
    <div class="bg-box wh-100 absolute">
      <img class="wh-100" src="../images/border.png" alt>
    </div>
    <div class="bg-box wh-100 absolute">
      <div class="bg-border-t relative wh-100">
        <div class="bg-border-green-t absolute wh-100">
          <!-- logo -->
          <img class="bg-happy" src="../images/happy.png" alt>
          <img class="bg-logo" src="../images/logo.png" alt>
          <img class="bg-newyear" src="../images/newyear.png" alt>
          <!-- flower -->
          <img class="bg-flower bg-flower-l" src="../images/flower-l.gif" alt>
          <img class="bg-flower bg-flower-r" src="../images/flower-r.gif" alt>
          <!-- fish -->
          <img class="bg-fish bg-fish-l" src="../images/fish-l.gif" alt>
          <img class="bg-fish bg-fish-r" src="../images/fish-r.gif" alt>
          <!-- firecrackers -->
          <img class="firecrackers firecrackers-l" src="../images/firecrackers-l.gif" alt>
          <img class="firecrackers firecrackers-r" src="../images/firecrackers-r.gif" alt>
          <!-- 自恋框框 -->
          <div class="wh-100 absolute flex flex-direction justify-center align-center">
            <div class="frame-box">
              <img class="picture-frame" src="../images/pictureFrame.png">
              <div class="picture-box"></div>
            </div>
            <div class="frame-context">
              <div>福相检测系统运行中</div>
              <div>......</div>
              <div>正在定位你的五官</div>
              <div>......</div>
              <div>正在测算你的福气</div>
              <div>......</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bgBox",
  components: {},
  methods: {
    clickEvent() {
      console.log(232323);
    }
  }
};
</script>

 <style lang='scss' scoped>
.wrapper {
  overflow: hidden;
}
.bg-box {
  z-index: 0;
  padding: 0.1rem;
  font-size: 0.2rem;
}
.bg-border {
  border: 0.22rem solid rgba(226, 202, 0, 0.8);
}
.bg-border-t {
  border: 0.22rem solid rgba(226, 202, 0, 0);
}
.bg-border-green {
  border: 0.04rem solid rgba(0, 100, 0, 0.8);
}
.bg-border-green-t {
  border: 0.04rem solid rgba(0, 159, 71, 0);
}
.bg-happy {
  width: 0.8rem;
  position: absolute;
  top: 0.04rem;
  left: 0.04rem;
}
.bg-logo {
  width: 0.8rem;
  position: absolute;
  top: 0.05rem;
  left: 0;
  right: 0;
  margin: auto;
}
.bg-newyear {
  width: 0.8rem;
  position: absolute;
  top: 0.04rem;
  right: 0.04rem;
}
.bg-flower {
  width: 1rem;
  position: absolute;
  bottom: 0;
}
.bg-flower-l {
  left: 0;
}
.bg-flower-r {
  right: 0;
}
.bg-fish {
  width: 1.2rem;
  position: absolute;
  bottom: -0.2rem;
}
.bg-fish-l {
  left: -0.26rem;
}
.bg-fish-r {
  right: -0.26rem;
}
.firecrackers {
  width: 1.2rem;
  position: absolute;
  bottom: 1rem;
}
.firecrackers-l {
  left: -0.73rem;
}
.firecrackers-r {
  right: -0.8rem;
}
.picture-frame {
  width: 100%;
  height: 100%;
}
.frame-box {
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
  width: 2rem;
  height: 2rem / 0.78;
}
.picture-box {
  width: 2rem - 0.3rem;
  height: 2rem / 0.78 - 0.3rem;
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  margin: auto;
  z-index: -1;
  overflow: hidden;
  border-radius: 50%;
  background: url(http://pic1.nipic.com/2008-12-30/200812308231244_2.jpg)
    no-repeat center;
  background-size: auto 100%;
}
.frame-context {
  text-align: center;
  font-size: 0.1rem;
  margin-top: 0.1rem;
  color: #b31e23;
}
</style>

