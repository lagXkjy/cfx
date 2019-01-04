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
      //alert(JSON.stringify(document.getElementById('bgsound')))
      document.getElementById('bgsound').play()

      try{
          document.body.removeChild(document.getElementById('LoadIng'))
      }catch(e){

      }
      


    let ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      this.isWX = true;
    }
  },
  mounted() {
    let wraper = document.getElementById("my-wraper");
    let height = wraper.clientHeight;
    let width = wraper.clientWidth;
    height = width / 0.616;
    height = height < document.body.clientHeight ? document.body.clientHeight : height
    document.getElementById("app").style.height = height + "px";
  },
  components: {
    bG
  }
};
</script>

<style>
</style>
