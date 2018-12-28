<template>
  <div id="app" class="wh-100">
    <b-g></b-g>
  </div>
</template>

<script>
import bG from "./components/bg.vue";
export default {
  name: "app",
  data() {
    return {
      isWX: false
    };
  },
  created() {
    let ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      this.isWX = true;
    }
  },
  mounted() {
    let hrt = document.documentElement.clientHeight; //获取当前可视区域的高度存到hrt变量
    document.getElementById("app").style.height = hrt + "px"; //把获取到的高度赋值给根div
  },
  components: {
    bG
  }
};
</script>

<style>
</style>
