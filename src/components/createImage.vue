<template>
    <!-- 测试结果页 -->
    <div class="create-image" ref="cutScreen">
        <div class="bg-box absolute">
            <div class="bg-border relative wh-100">
                <div class="bg-border-green absolute wh-100" style="overflow:hidden;">
                    <!-- <img class="bg-petal" src="../images/petal.gif" alt> -->
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
                    <img class="bg-flower bg-flower-r" src="../images/flower-l.gif" alt>
                    <!-- fish -->
                    <img class="bg-fish bg-fish-l" src="../images/fish-l.gif" alt>
                    <img class="bg-fish bg-fish-r" src="../images/fish-l.gif" alt>
                    <!-- firecrackers -->
                    <img class="firecrackers firecrackers-l" src="../images/firecrackers-l.gif" alt>
                    <img class="firecrackers firecrackers-r" src="../images/firecrackers-l.gif" alt>
                    <!-- 路由 -->
                    <div class="result-box width-100 absolute">
                        <div class="result-score width-100">{{avage}}</div>
                        <div class="echarts-box relative">
                            <div id="resultchart2" class="wh-100"></div>

                            <div class="frame-box">
                                <img class="wh-100" src="../images/pictureFrame.png">
                                <div class="picture-box wh-100">
                                    <div class="picture-box wh-100" :style="[backObj]"></div>
                                </div>
                            </div>


                            <!-- 五福 -->
                            <div class="echarts-f echarts-f-1">
                                <div class="echarts-f-s"></div>
                                <span>眼福</span>
                                <div class="echarts-num">{{radarOptions.series[0].data[0].value[0]}}</div>
                            </div>
                            <div class="echarts-f echarts-f-2">
                                <div class="echarts-f-s"></div>
                                <span>艳福</span>
                                <div class="echarts-num">{{radarOptions.series[0].data[0].value[1]}}</div>
                            </div>
                            <div class="echarts-f echarts-f-3">
                                <div class="echarts-f-s"></div>
                                <span>耳福</span>
                                <div class="echarts-num">{{radarOptions.series[0].data[0].value[2]}}</div>
                            </div>
                            <div class="echarts-f echarts-f-4">
                                <div class="echarts-f-s"></div>
                                <span>口福</span>
                                <div class="echarts-num">{{radarOptions.series[0].data[0].value[3]}}</div>
                            </div>
                            <div class="echarts-f echarts-f-5">
                                <div class="echarts-f-s"></div>
                                <span>清福</span>
                                <div class="echarts-num">{{radarOptions.series[0].data[0].value[4]}}</div>
                            </div>
                        </div>
                        <div class="result-context">
                            <div class="result-text">年度最旺福气</div>
                            <div class="result-f">{{radarTitle}}</div>
                            <div class="result-text" style="font-size: 0.4rem;">{{radarText}}</div>
                        </div>
                    </div>
                    <!-- 横幅 -->
                    <div class="banner-box absolute">
                        <img class="wh-100" src="../images/banner.png" alt>
                        <div class="banner-context width-100 absolute emblem">
                            <span style="transform: rotateZ(-33deg) translate3d(0px, 0px, 0px);">已</span>
                            <span style="transform: rotateZ(-27deg) translate3d(0px, 0px, 0px);">亥</span>
                            <span style="transform: rotateZ(-21deg) translate3d(0px, 0px, 0px);">年</span>
                            <span
                                class="banner-you"
                                style="transform: rotateZ(-15deg) translate3d(0px, 0px, 0px);"
                            >{{nickName[0]}}</span>
                            <span
                                class="banner-you"
                                style="transform: rotateZ(-11deg) translate3d(0px, 0px, 0px);"
                            >{{nickName[1]}}</span>
                            <span
                                class="banner-you"
                                style="transform: rotateZ(-7deg) translate3d(0px, 0px, 0px);"
                            >{{nickName[2]}}</span>
                            <span
                                class="banner-you"
                                style="transform: rotateZ(-3deg) translate3d(0px, 0px, 0px);"
                            >{{nickName[3]}}</span>
                            <span
                                class="banner-you"
                                style="transform: rotateZ(1deg) translate3d(0px, 0px, 0px);"
                            >{{nickName[4]}}</span>
                            <span
                                class="banner-you"
                                style="transform: rotateZ(4deg) translate3d(0px, 0px, 0px);"
                            >{{nickName[5]}}</span>
                            <span style="transform: rotateZ(9deg) translate3d(0px, 0px, 0px);">的</span>
                            <span style="transform: rotateZ(15deg) translate3d(0px, 0px, 0px);">福</span>
                            <span style="transform: rotateZ(21deg) translate3d(0px, 0px, 0px);">气</span>
                            <span style="transform: rotateZ(27deg) translate3d(0px, 0px, 0px);">指</span>
                            <span style="transform: rotateZ(33deg) translate3d(0px, 0px, 0px);">数</span>
                        </div>
                        <!-- 灯笼 -->
                        <div class="wh-100 absolute">
                            <img class="lantern lantern-l" src="../images/lantern-l.gif" alt>
                            <img class="lantern lantern-r" src="../images/lantern-r.gif" alt>
                        </div>
                    </div>
                    <div class="f-code is-save">
                        <img src="../images/qrcode.png" alt>
                        <div>测一测你的福相</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import html2canvas from "html2canvas";
import { setTimeout } from "timers";
export default {
    props: ['radarOptions' ,'nickName' ,'radarTitle' ,'radarText' ,'avage' ,'backObj'],
    data() {
        return {
            iphone: {
                //width: (sessionStorage.getItem('Orientation') == 0 ? '1.7rem' : '2.2641rem') + '!important',
                height: '1.7rem' + '!important',
                width: '2.2641rem' + '!important'
                // height: (sessionStorage.getItem('Orientation') == 0 ? '2.2641rem' : '1.7rem') + '!important',
            }
        };
    },
    created(){
        this.$store.commit('CHANGE_FLOWER' ,false)
    },
    mounted() {
        let bgBox = document.getElementsByClassName("bg-box")[0];
        let w = bgBox.clientWidth;
        let h = bgBox.clientHeight;
        let cI = document.getElementsByClassName("create-image")[0];
        cI.style.width = w + "px";
        cI.style.height = h + "px";
        this.drawEcharts();
    },
    methods: {
        doScreeenShots() {
            const _this = this;
            setTimeout(() => {
                // 创建一个新的canvas
                const _canvas = _this.$refs.cutScreen;
                // 此处用于解决截图不清晰问题，将生成的canvas放大，然后再填充到原有的容器中就会清晰
                const width = _canvas.offsetWidth;
                const height = _canvas.offsetHeight;
                const canvas2 = document.createElement("canvas");
                const scale = 2;
                canvas2.width = width * scale;
                canvas2.height = height * scale;
                const context1 = canvas2.getContext("2d");
                if (context1) {
                    context1.scale(scale, scale);
                }
                const opts = {
                    scale,
                    canvas: canvas2,
                    // logging: true, //日志开关，便于查看html2canvas的内部执行流程
                    width,
                    height,
                    // 【重要】开启跨域配置
                    useCORS: true
                };
                html2canvas(_canvas, opts).then(canvas => {
                    const context = canvas2.getContext("2d");
                    if (context) {
                        context.scale(2, 2);
                        context.mozImageSmoothingEnabled = false;
                        context.webkitImageSmoothingEnabled = false;
                        context.imageSmoothingEnabled = false;
                    }
                    // canvas转换成url，然后利用a标签的download属性，直接下载，绕过上传服务器再下载
                    //   a.href = canvas.toDataURL();
                    _this.$emit("successCreateImg", canvas.toDataURL());
                });
            }, 1000);
        },
        drawEcharts() {
            //雷达图
            let myChart = this.$echarts.init(
                document.getElementById("resultchart2")
            );
            myChart.setOption(this.radarOptions);
            setTimeout(() => {
                this.doScreeenShots();
            }, 1000);
        }
    }
};
</script>

<style lang='scss' scoped>
.frame-box {
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2rem;
    height: 2rem / 0.78;

    transform: translate(-50% ,-50%);
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
    //background: url(http://pic1.nipic.com/2008-12-30/200812308231244_2.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
}


.create-image {
    position: absolute;
    bottom: 300%;
    left: 0;
    z-index: 99999;
    background: url("../images/bg.png") no-repeat;
    background-size: 100%;
}

.result-box {
    top: 3rem;
}
.result-score {
    font-size: 0.7rem;
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
    top: 7rem;
    text-align: center;
}
.result-text {
    font-size: 0.36rem;
    line-height: 0.36rem;
    color: #b31e23;
}
.result-f {
    font-size: 0.4rem;
    line-height: 0.4rem;
    color: #00587f;
    margin: 0.18rem 0;
    font-family: "Pm";
}
.banner-box {
    top: 1.3rem;
    width: 110%;
    height: 9rem / 2.48;
    left: -5%;
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
    right: 0.15rem;
    // transform: rotateY(180deg);
    // transform-origin: center top;
}

.banner-context {
    color: #ffffff;
    font-size: 0.6rem;
    font-family: "Pm";
    text-align: center;
    top: 0.4rem;
}
.banner-you {
    font-size: 0.35rem;
    line-height: 0.6rem;
    color: #fff000;
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
    height: 2.34rem;
    background: url("../images/open.png") no-repeat;
    background-size: 100%;
    margin: auto;
}
.fd-box > div {
    font-size: 0.22rem;
    color: #00587f;
}
.fd-save {
    width: 4rem;
    height: 1.69rem;
    background: url("../images/save.png") no-repeat;
    background-size: 100%;
    margin: auto;
}
.is-save {
    left: 0;
    right: 0;
    margin: auto;
}
// 分界线
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
    transform: rotateY(180deg);
    transform-origin: center top;
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
    transform: rotateY(180deg);
    transform-origin: center top;
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