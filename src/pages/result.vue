<template>
  <!-- 测试结果页 -->
  <div class="wh-100 absolute">
    <div class="result-box width-100 absolute">
      <div class="result-score width-100">56.8</div>
      <div class="echarts-box relative">
        <div id="resultchart" class="wh-100"></div>
        <!-- 五福 -->
        <div class="echarts-f echarts-f-1">
          <div class="echarts-f-s"></div>
          <span>眼福</span>
          <div class="echarts-num">78</div>
        </div>
        <div class="echarts-f echarts-f-2">
          <div class="echarts-f-s"></div>
          <span>艳福</span>
          <div class="echarts-num">78</div>
        </div>
        <div class="echarts-f echarts-f-3">
          <div class="echarts-f-s"></div>
          <span>耳福</span>
          <div class="echarts-num">78</div>
        </div>
        <div class="echarts-f echarts-f-4">
          <div class="echarts-f-s"></div>
          <span>口福</span>
          <div class="echarts-num">78</div>
        </div>
        <div class="echarts-f echarts-f-5">
          <div class="echarts-f-s"></div>
          <span>清福</span>
          <div class="echarts-num">78</div>
        </div>
      </div>
      <div class="result-context">
        <div class="result-text">年度最旺福气</div>
        <div class="result-f">眼福</div>
      </div>
    </div>
    <!-- 横幅 -->
    <div class="banner-box absolute">
      <img class="wh-100" src="../images/banner.png" alt>
      <!-- 灯笼 -->
      <div class="wh-100 absolute">
        <img class="lantern lantern-l" src="../images/lantern-l.gif" alt>
        <img class="lantern lantern-r" src="../images/lantern-r.gif" alt>
      </div>
      <div class="banner-context width-100 absolute emblem">
        <span style="transform: rotateZ(-32deg) translate3d(0px, 0px, 0px);">已</span>
        <span style="transform: rotateZ(-24deg) translate3d(0px, 0px, 0px);">亥</span>
        <span style="transform: rotateZ(-16deg) translate3d(0px, 0px, 0px);">年</span>
        <span style="transform: rotateZ(-8deg) translate3d(0px, 0px, 0px);">您</span>
        <span style="transform: rotateZ(0deg) translate3d(0px, 0px, 0px);">的</span>
        <span style="transform: rotateZ(8deg) translate3d(0px, 0px, 0px);">福</span>
        <span style="transform: rotateZ(16deg) translate3d(0px, 0px, 0px);">气</span>
        <span style="transform: rotateZ(24deg) translate3d(0px, 0px, 0px);">指</span>
        <span style="transform: rotateZ(32deg) translate3d(0px, 0px, 0px);">数</span>
      </div>
    </div>
    <div class="f-code">
      <img src="../images/open.png" alt>
      <div>测一测你的福相</div>
    </div>
    <!-- 开福 -->
    <div class="fd-box">
      <img class="fd-open" src="../images/open.png" alt>
      <div>根据福气值</div>
      <div>为您送上五芳福袋一个</div>
      <img class="fd-save" src="../images/save.png" alt>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.drawEcharts();
  },
  methods: {
    drawEcharts() {
      //雷达图
      let myChart = this.$echarts.init(document.getElementById("resultchart"));
      myChart.setOption({
        color: "green",
        tooltip: {},
        radar: {
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { max: 100 },
            { max: 100 },
            { max: 100 },
            { max: 100 },
            { max: 100 }
          ],
          axisLine: {
            //坐标轴线相关设置
            show: true,
            lineStyle: {
              color: "#ddb828"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#ddb828" // 图表背景网格线的颜色
            }
          },
          splitArea: {
            // 图表背景网格的颜色
            show: false
          }
        },
        series: [
          {
            symbol: "none", //去掉拐点
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            data: [
              {
                value: [10, 20, 30, 40, 50]
              }
            ]
          }
        ]
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.result-box {
  top: 3rem;
}
.result-score {
  font-size: 0.84rem;
  text-align: center;
  color: #00587f;
  font-weight: bold;
  text-shadow: 0 0 0.1rem #e8c92d;
}
.echarts-box {
  width: 7rem;
  height: 7rem;
  margin: 0.2rem auto 0;
}
.echarts-f {
  position: absolute;
  width: 0.9rem;
  height: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pm";
  color: #e5d4bb;
  font-size: 0.34rem;
}
.echarts-f-s {
  width: 100%;
  height: 100%;
  background: #ce2420;
  transform: rotateZ(45deg);
  position: absolute;
  top: 0;
  left: 0;
  //   z-index: -1;
}
.echarts-f > .echarts-num {
  position: absolute;
  font-size: 0.24rem;
  color: #00587f;
  font-style: italic;
  font-family: "Microsoft YaHei";
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.echarts-f > span {
  position: relative;
  top: 0;
  left: 0;
}
.echarts-f-1 {
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.echarts-f-1 > .echarts-num {
  bottom: -0.9rem;
  left: 0;
  right: 0;
  margin: auto;
}
.echarts-f-2 {
  top: 2.1rem;
  left: 0.5rem;
}
.echarts-f-2 > .echarts-num {
  top: 0rem;
  left: 1rem;
}
.echarts-f-3 {
  bottom: 0.8rem;
  left: 1.5rem;
}
.echarts-f-3 > .echarts-num {
  bottom: 0.6rem;
  left: 0.6rem;
}
.echarts-f-4 {
  bottom: 0.8rem;
  right: 1.5rem;
}
.echarts-f-4 > .echarts-num {
  bottom: 0.6rem;
  right: 0.6rem;
}
.echarts-f-5 {
  top: 2.1rem;
  right: 0.5rem;
}
.echarts-f-5 > .echarts-num {
  top: 0;
  right: 0.9rem;
}
.result-context {
  width: 100%;
  position: absolute;
  top: 7.5rem;
  text-align: center;
}
.result-text {
  font-size: 0.36rem;
  color: #b31e23;
}
.result-f {
  font-size: 0.4rem;
  color: #00587f;
  margin: 0.18rem 0;
  font-family: "Pm";
}
.banner-box {
  top: 1.5rem;
  left: -0.5rem;
  width: 10rem;
  height: 9rem / 2.48;
}
.lantern {
  position: absolute;
  top: (9rem / 2.48 / 2) - 0.2rem;
  width: 2.9rem;
}

.lantern-l {
  left: 0.15rem;
}

.lantern-r {
  right: 0.1rem;
}

.banner-context {
  color: #ffffff;
  font-size: 0.66rem;
  font-family: "Pm";
  text-align: center;
  top: 0.4rem;
}

.emblem {
  position: absolute;
  height: 11rem;
}

.emblem span {
  position: absolute;
  display: inline-block;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.f-code {
  position: absolute;
  right: 0;
  bottom: 0.14rem;
  text-align: center;
}
.f-code > img {
  width: 2rem;
}
.f-code > div {
  font-size: 0.3rem;
  color: #000;
}
.fd-box {
  position: absolute;
  left: 0;
  bottom: -0.9rem;
  width: 100%;
  text-align: center;
}
.fd-open {
  width: 2.34rem;
}
.fd-box > div {
  font-size: 0.22rem;
  color: #00587f;
}
.fd-save {
  width: 4rem;
}
</style>