<template>
    <!-- 首页， 动态猪 -->
    <div class="wh-100 absolute overflow">
        <!-- 猪福 -->
        <div class="pig-box width-100 absolute">
            <img class="pig" src="../images/pig.gif" alt>
            <img class="bless" src="../images/bless.gif" alt>
        </div>
        <!-- 横幅 -->
        <div class="banner-box absolute">
            <img class="wh-100" src="../images/banner-home.png" alt>
            <div class="banner-context width-100 absolute emblem">
                <!-- <span style="transform: rotateZ(-32deg) translate3d(0px, 0px, 0px);">你</span>
        <span style="transform: rotateZ(-24deg) translate3d(0px, 0px, 0px);">是</span>
                <span style="transform: rotateZ(-16deg) translate3d(0px, 0px, 0px);">有</span>-->
                <!-- <span class="banner-scale" style="transform: rotateZ(-8deg) translate3d(0px, 0px, 0px);">福</span>
                <span class="banner-scale" style="transform: rotateZ(0deg) translate3d(0px, 0px, 0px);">相</span>-->
                <!-- <span style="transform: rotateZ(8deg) translate3d(0px, 0px, 0px);">的</span>
        <span style="transform: rotateZ(16deg) translate3d(0px, 0px, 0px);">人</span>
        <span style="transform: rotateZ(24deg) translate3d(0px, 0px, 0px);">吗</span>
                <span style="transform: rotateZ(32deg) translate3d(0px, 0px, 0px);">?</span>-->
                <img class="fx-img" src="../images/fx.gif" style="transform: scale(1.1)" alt>
            </div>
            <!-- 灯笼 -->
            <div class="wh-100 absolute">
                <img class="lantern lantern-l" src="../images/lantern-l.gif" alt>
                <img class="lantern lantern-r" src="../images/lantern-r.gif" alt>
            </div>
        </div>
        <!-- 刷脸开测 -->
        <div @click="toCamera" class="btn-box" style="transform: scale(1.1);">
            <img class="btn-img" src="../images/btn-home.png" alt>
            <!-- <div class="btn-context wh-100 absolute flex justify-center align-center">刷脸开测</div> -->
        </div>
    </div>
</template>

<script>
import wx from "weixin-js-sdk";
import $request from "@/utils/request";
export default {
    methods: {
        toCamera() {
            document.getElementById("startSond").play();
            this.$router.push("/camera");
        },
        toCongrats(id, scode) {
            sessionStorage.setItem("result", id);
            //sessionStorage.setItem("scode", scode);
            this.$store.commit("CHANGE_TMALL", scode ? false : true);
            this.$router.push("/congrats");
        },
        getawarddes() {
            $request.post("getawarddes").then(res => {
                //alert(JSON.stringify(res))
                let list = res.list;
                if (list.length === 0) {
                    //没有记录
                    //   this.toCamera();
                } else if (list.length === 1) {
                    //有一条领取记录
                    if (list[0].Scode) {
                        //已领取
                        if (res.result) {
                            return;
                            //true 有第二次机会 false 没有
                            //   this.toCamera();
                        }
                        this.toCongrats(list[0].PrizesId, list[0].Scode);
                    }
                } else if (list.length === 2) {
                    //有两条奖品记录
                    // Scode		 0未领取 1已领取
                    // PrizesId  奖品Id
                    this.toCongrats(list[1].PrizesId, list[1].Scode);
                }
            });
        },
        successShare() {
            //分享成功的接口
            $request.post("AddShare", {}).then(res => {
                //alert(JSON.stringify(res));
                location.href = "http://cx.shhuiya.com/CefuApi/BindUserPage";
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
                    //alert(JSON.stringify(res))
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
                .catch(res => {
                    //alert(JSON.stringify(res))
                });
        }
    },
    created() {
        this.getawarddes();
        this.$store.commit("CHANGE_FLOWER", false);
    },
    mounted() {
        wx.ready(() => {
            wx.onMenuShareAppMessage({
                title: "测福相", // 分享标题
                desc: "你是2019年最有福气的人吗？快来测一测吧！", // 分享描述
                link: "http://cx.shhuiya.com/CefuApi/BindUserPage", // 分享链接
                imgUrl: "https://cx.shhuiya.com/audio/sharepig.png", // 分享图标
                type: "", // 分享类型,music、video或link，不填默认为link
                dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
                success: this.successShare
            });
            wx.onMenuShareTimeline({
                title: "测福相", // 分享标题
                link: "http://cx.shhuiya.com/CefuApi/BindUserPage", // 分享链接
                imgUrl: "https://cx.shhuiya.com/audio/sharepig.png", // 分享图标
                success: this.successShare
            });
        });
        this.myShare();
    }
};
</script>

<style lang='scss' scoped>
.fx-img {
    width: 1.6rem;
    position: absolute;
    top: 0;
    left: 39%;
    // transform: rotateZ(0deg);
}
.banner-box {
    top: 1.5rem;
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
    // transform: rotateY(180deg) translateZ(1px);
    // transform-origin: center top;
}

.banner-context {
    color: #ffffff;
    font-size: 0.66rem;
    font-family: "Pm";
    text-align: center;
    top: 0.4rem;
}

.pig-box {
    top: 3.3rem;
}

.pig {
    width: 83%;
    margin: auto;
    display: block;
}

.bless {
    width: 5rem;
    margin: auto;
    display: block;
    position: absolute;
    bottom: -0.9rem;
    left: 0;
    right: 0;
}

.btn-box {
    position: absolute;
    bottom: 0.33rem;
    left: 0;
    right: 0;
    margin: auto;
    // width: 3.16rem;
    width: 4rem;
}

.btn-img {
    width: 3.16rem;
    border-radius: 0.2rem;
    // box-shadow: 0rem 0rem 0.12rem 0.1rem #f8f3f3;
    display: block;
    margin: auto;
}

.btn-context {
    color: #ffffff;
    font-size: 0.42rem;
    font-family: "Pm";
    letter-spacing: 0.04rem;
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
</style>