<template>
    <!-- 测试结果页 -->
    <div class="wh-100 absolute">
        <createImage @successCreateImg="successCreateImg" 
        :radarOptions="radarOptions" 
        :nickName="nickName"
        :radarTitle="radarTitle"
        :radarText="radarText"
        :avage="avage"
        :backObj="backObj" ></createImage>
        <div class="result-box width-100 absolute">
            <div class="result-score width-100">{{avage}}</div>
            <div class="echarts-box relative">
                <div id="resultchart" class="wh-100"></div>

                <div class="frame-box">
                    <img class="wh-100" src="../images/pictureFrame.png">
                    <div class="picture-box wh-100">
                        <div class="picture-box wh-100" :style="backObj"></div>
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
                <div class="result-text">{{radarText}}</div>
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
        <!-- 开福 -->
        <div class="fd-box" style="transform: scale(1.1);">
            <div class="fd-open"></div>
            <div>开福袋</div>
            <div>精美好礼等你拿</div>
            <div class="fd-save"></div>
        </div>
        <!-- 长按保存图片 -->
        <img v-if="image" class="cImage" :src="image" alt>
        <div @click="kfd" class="fd-open fd-z-img opacity-0" style="transform: scale(1.1);"></div>
    </div>
</template>

<script>
/* eslint-disable */
import createImage from "../components/createImage";
import html2canvas from "html2canvas";
import request from '@/utils/request'
export default {
    components: {
        createImage
    },
    created(){
        this.$store.commit('CHANGE_FLOWER' ,false)
    },
    data() {
        function initData(){
            return (Math.random() * (100 - 70) + 70).toFixed(0)
        }
        function getName(){
            let str = sessionStorage.getItem('NickName')
            //let str = '哈哈hahahahahah'
            let nickname = str.substring(0,6).split('')
            let arr = ['' ,'' ,'' ,'' ,'' ,'']
            for(let i in nickname){
                arr[i] = nickname[i]
            }
            if(str.split('').length > 6){
                arr[5] = '...'
            }
            return arr
        }
        return {
            nickName: getName(),
            backObj: {
                'background-image': "url("+ sessionStorage.getItem('img64') || '../images/pictureFrame.png' +")",
                'transform': sessionStorage.getItem('Orientation') == 1 ? 'rotate(90deg) scale(1.2)' : 'rotate(0)'
            },

            radarTitle: '',
            radarText: '',
            radarData: [
                {
                    name: '眼福',
                    text: ['宝瓶座η流星雨不错过' ,'爱豆巡演前排票轻松get' ,'新同事颜值很能打' ,'《权游》第8季抢先看' ,'四大时装周随便进']
                },{
                    name: '艳福',
                    text: ['每逢天冷必有人暖床' ,'平均一周被告白3次' ,'健身教练颜值很能打' ,'每天都有草莓种' ,'街头邂逅男神/女神']
                },{
                    name: '耳福',
                    text: ['从此不被老板训' ,'新机不用煲音质满分' ,'享受祖传掏耳服务' ,'抖音刷到小众神曲' ,'周末不被加班电话打扰']
                },{
                    name: '口福',
                    text: ['网红店拔草从来不等位' ,'路边摊尝到隐藏米其林' ,'蹭饭成功率99%' ,'老板画的大饼都吃到嘴' ,'爱人吻技大飙升']
                },
                {
                    name: '清福',
                    text: ['上班摸鱼so easy' ,'人在床上躺，钱从天上来' ,'只能靠环游世界打发时间' ,'队友carry强，躺赢上王者' ,'逛街收房租，轻松过日子']
                },
            ],
            image: "",
            radarOptions:{
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
                                value: [initData(), initData(), initData(), initData(), initData()]
                            }
                        ]
                    }
                ]
            }
        };
    },
    computed: {
        avage(){
            let num = this.radarOptions.series[0].data[0].value
            let all = 0
            for(let i in num){
                all += Number(num[i])
            }
            return (all/5).toFixed(1)
        }
    },
    created(){

        
        //console.log(sessionStorage.getItem('NickName').substring(0,6))
    },
    mounted() {

        document.getElementById('resultSond').play()
        this.drawEcharts();

        function rangeWenan(){
            return (Math.random() * (4 - 0) + 0).toFixed(0)
        }
        function maxArr(arr){
            let temp = arr.concat().sort().reverse()[0]
            return arr.indexOf(temp)
        }
        this.radarTitle = this.radarData[maxArr(this.radarOptions.series[0].data[0].value)].name
        this.radarText = this.radarData[maxArr(this.radarOptions.series[0].data[0].value)].text[rangeWenan()]
    },
    methods: {
        kfd() {
            //开福袋点击事件
                // this.$router.push({
                //     path: '/congrats'
                // })
            document.getElementById('openFudaiSond').play()

            request.post('Addfu' ,{Goodvalue: this.avage}).then(res => {
                //alert(JSON.stringify(res))
                if(res.res){
                    request.post('GetResult').then(res => {
                        //alert(JSON.stringify(res))
                        if(res.res){
                            sessionStorage.setItem('result' ,res.result)
                            this.$router.push({
                                path: '/congrats'
                            })
                        }
                    }).catch(err => {alert(JSON.stringify(err))})
                }
                
            }).catch(err => {alert(err)})
        },
        successCreateImg(e) {
            //图片生成成功了
            this.image = e;
        },
        drawEcharts() {
            //雷达图
            let myChart = this.$echarts.init(
                document.getElementById("resultchart")
            );
            myChart.setOption(this.radarOptions);
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
// .frame-context {
//     text-align: center;
//     font-size: 0.34rem;
//     line-height: 0.36rem;
//     margin-top: 0.1rem;
//     color: #b31e23;
// }


.cImage {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -0.9rem;
    left: 0;
    z-index: 1;
    opacity: 0;
}
.opacity-0 {
    opacity: 0;
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
.fd-z-img {
    position: absolute;
    bottom: 1.44rem;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 2;
}
</style>