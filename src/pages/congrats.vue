<template>
    <div class="addinfo-box wh-100 absolute">
        <div class="addinfo-title">恭喜获得</div>
        <div class="info-box">
            <img class="info-bg wh-100" src="../images/info.png" alt>
            <congrats1 v-if="result == 3 || result == 4 || result == 5"></congrats1>
            <congrats2 v-else-if="result == 9 || result == 10"></congrats2>
            <congrats3 v-else-if="result == 6 || result == 7 || result == 8"></congrats3>
            <!-- <congrats4 v-else-if="result == 6 || result == 7 || result == 8"></congrats4> -->
            <congrats4 v-else-if="result == 1"></congrats4>
            <congrats5 v-else-if="result == 2"></congrats5>
            <!-- <congrats2></congrats2>
      <congrats3></congrats3>
      <congrats4></congrats4>
            <congrats5></congrats5>-->
        </div>
        <!-- 比拼福气 -->
        <div @click="showShareBG = true" class="btn-box-b">
            <img class="btn-img" src="../images/btn-green.png" alt>
            <div class="btn-context wh-100 absolute flex justify-center align-center">比拼福气</div>
        </div>
        <!-- 福气榜单 -->
        <div @click="toRanking" class="btn-box">
            <img class="btn-img" src="../images/btn-green.png" alt>
            <div class="btn-context wh-100 absolute flex justify-center align-center">福气榜单</div>
        </div>
        <!-- <tmall v-if="showtmall"></tmall> -->
        <div v-if="showShareBG" class="shareBG">
            <img class="shareImg" @click="showShareBG = false" width="90%" src="../images/fuceng.png" alt="">
        </div>
    </div>
</template>

<script>
import congrats1 from "../components/congrats1.vue";
import congrats2 from "../components/congrats2.vue";
import congrats3 from "../components/congrats3.vue";
import congrats4 from "../components/congrats4.vue";
import congrats5 from "../components/congrats5.vue";
import tmall from "../components/tmall.vue";
import wx from "weixin-js-sdk";
import $request from "@/utils/request";
export default {
    components: {
        congrats1,
        congrats2,
        congrats3,
        congrats4,
        congrats5,
        tmall
    },
    data() {
        return {
            result: sessionStorage.getItem("result"),
            showtmall: false,
            showShareBG: false,
        };
    },
    created(){
        this.$store.commit('CHANGE_FLOWER' ,true)
    },
    mounted() {
        wx.ready(() => {
            wx.onMenuShareAppMessage({
                title: "测福相", // 分享标题
                desc: "你是2019年最有福气的人吗？快来测一测吧！", // 分享描述
                link: "http://cx.shhuiya.com/CefuApi/BindUserPage", // 分享链接
                imgUrl: "", // 分享图标
                type: "", // 分享类型,music、video或link，不填默认为link
                dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
                success: this.successShare
            });
            wx.onMenuShareTimeline({
                title: "测福相", // 分享标题
                link: "http://cx.shhuiya.com/CefuApi/BindUserPage", // 分享链接
                imgUrl: "", // 分享图标
                success: this.successShare
            });
        });
        this.myShare();
    },
    methods: {

        successShare() {
            //分享成功的接口
            $request.post("AddShare", {}).then(res => {
                //alert(JSON.stringify(res));
                location.href = 'http://cx.shhuiya.com/CefuApi/BindUserPage'
            });
        },
        myShare() {
            const url = location.href.split("#")[0];
            $request
                .post(
                    "ConfigParams",
                    JSON.stringify({ url: location.href.split("#")[0] })
                )
                .then(res => {
                    const data = {
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。

                        appId: res.param.appId, // 必填，公众号的唯一标识
                        timestamp: res.param.timestamp, // 必填，生成签名的时间戳
                        nonceStr: res.param.nonceStr, // 必填，生成签名的随机串
                        signature: res.param.signature, // 必填，签名，见附录1
                        jsApiList: [
                            "onMenuShareAppMessage",
                            "onMenuShareTimeline"
                        ]
                        // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    };
                    //接口入住权限验证配置
                    wx.config(data);
                })
                .catch(res => {});
        },
        toRanking() {
            this.$router.push("/ranking");
        }
    }
};
</script>

<style lang='scss' scoped>
.addinfo-box {
    padding-top: 2rem;
}
.shareBG{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
    z-index: 99999;
    .shareImg{
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50% ,-50%);
    }
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

.btn-box-b {
    position: absolute;
    bottom: 1.8rem;
    left: 0;
    right: 0;
    margin: auto;
    width: 3.16rem;
    z-index: 99;
}
.btn-box {
    position: absolute;
    bottom: 0.33rem;
    left: 0;
    right: 0;
    margin: auto;
    width: 3.16rem;
    z-index: 99;
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