<template>
  <div id="my-wraper" class="wraper fixed wh-100">
    <img class="wh-100" src="../images/bg.png">
    <div class="bg-box absolute">
      <div class="bg-border relative wh-100">
        <div class="bg-border-green absolute wh-100" style="overflow:hidden;">
          <img v-if="showFlower" class="bg-petal" src="../images/petal.gif" alt>
        </div>
      </div>
    </div>
    <div class="bg-box absolute">
      <img class="wh-100" src="../images/border.png" alt>
    </div>
    <div class="bg-box absolute">
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
          <img class="firecrackers firecrackers-r" src="../images/firecrackers-l.gif" alt>
          <!-- 路由 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {},
  computed: {
      ...mapGetters([
          'showFlower'
      ])
  },
  mounted() {
    let bgBox = document.getElementsByClassName("bg-box");
    let wraper = document.getElementById("my-wraper");
    let height = wraper.clientHeight;
    let width = wraper.clientWidth;
    width = height * 0.616;
    // if (width >= height) {
    //   //宽度大于高度，以高度为基准
    //   width = height * 0.63
    // } else {
    //   //高度大于宽度
    //   let h = width * 0.63;
    //   if (height <= h) {
    //     //高度小于应有比例高度，以高度为基准
    //     width = height * 0.63;
    //   } else {
    //     //高度超出，应有比例高度过多
    //     height = width / 0.63;
    //   }
    // }
    for (let i = 0, len = bgBox.length; i < len; i++) {
      bgBox[i].style.height = height + "px";
      bgBox[i].style.width = width + "px";
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
  padding: 0.2rem;
  height: 100vh;
  width: 61.6vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.bg-border {
  border: 0.58rem solid rgba(226, 202, 0, 0.8);
}
.bg-border-t {
  border: 0.58rem solid rgba(226, 202, 0, 0);
}
.bg-border-green {
  border: 0.1rem solid rgba(0, 100, 0, 0.8);
}
.bg-border-green-t {
  border: 0.1rem solid rgba(0, 159, 71, 0);
}
.bg-happy {
  width: 28%;
  position: absolute;
  top: 0.22rem;
  left: 0.18rem;
}
.bg-logo {
  width: 35%;
  position: absolute;
  top: 0.15rem;
  left: 0;
  right: 0;
  margin: auto;
}
.bg-newyear {
  width: 28%;
  position: absolute;
  top: 0.22rem;
  right: 0.18rem;
}
.bg-petal {
  width: 100%;
  position: absolute;
  top: 3rem;
  left: 0;
}
.bg-flower {
  width: 33%;
  position: absolute;
  bottom: 0;
}
.bg-flower-l {
  left: 0rem;
}
.bg-flower-r {
  right: 0rem;
  // transform: rotateY(180deg) translateZ(0px);;
  // transform-origin: center top;
}
.bg-fish {
  width: 33%;
  position: absolute;
  bottom: -0.34rem;
}
.bg-fish-l {
  left: -0.64rem;
}
.bg-fish-r {
  right: -0.64rem;
  // transform: rotateY(180deg) translateZ(100px);
  // transform-origin: center top;
}
.firecrackers {
  width: 3.5rem;
  position: absolute;
  bottom: 3.5rem;
}
.firecrackers-l {
  left: -(3.5rem / 2) - 0.3rem;
}
.firecrackers-r {
  right: -(3.5rem / 2) - 0.3rem;
  transform: rotateY(180deg);
  transform-origin: center top;
}
</style>

