<template>
    <div v-if="showtmall" class="tmall">
        <div class="kuang-box">
            <img class="kuang" src="../images/kuang.jpg" alt>
            <div class="kuang-content flex justify-center align-center flex-direction">
                <div class="kl">淘口令</div>
                <div class="kl-border">
                    <div class="kl-b-g">{{text}}</div>
                </div>
                <div
                    class="copy"
                    style="cursor: pointer;"
                    onclick
                    :data-clipboard-text="textcopy"
                >一键复制</div>
                <div class="kuang-t">复制这条信息</div>
                <div class="kuang-t">打开淘宝/天猫App即可使用</div>
            </div>
        </div>
        <div @click="close" class="close"></div>


        <div class="copy-success" v-if="copySuccess">复制成功!</div>
    </div>
</template>
<script>
// import { mapGetters } from 'vuex'
import ClipboardJS from "clipboard";
import { clearTimeout, setTimeout } from "timers";
export default {
    props: ["showtmall", "money"],
    // computed: {
    //     ...mpGetters([
    //         'showtmall'
    //     ])
    // },
    data() {
        return {
            quan: {
                m100:
                    "【优惠券】https://m.tb.cn/h.3q7Jp7D?sm=4d6b65 点击链接，再选择浏览器咑閞；或復·制这段描述￥YGJybLd53mw￥后咑閞淘♂寳♀",
                m50:
                    "【优惠券】https://m.tb.cn/h.3qOhiBJ?sm=114b91 点击链接，再选择浏览器咑閞；或復·制这段描述￥PsxFbLdS3sD￥后咑閞淘♂寳♀",
                m20:
                    "【优惠券】https://m.tb.cn/h.3q15Atq?sm=28ccc2 点击链接，再选择浏览器咑閞；或復·制这段描述￥owoMbLdksSO￥后咑閞淘♂寳♀[来自超级会员的分享]",
                w199:
                    "【优惠券】https://m.tb.cn/h.3qsaiHW?sm=ca5ed8 点击链接，再选择浏览器咑閞；或復·制这段描述￥eZtkbLdPv99￥后咑閞淘♂寳♀[来自超级会员的分享]",
                w299:
                    "【优惠券】https://m.tb.cn/h.3qOjJD9?sm=baa500 点击链接，再选择浏览器咑閞；或復·制这段描述￥DuG1bLdlVPN￥后咑閞淘♂寳♀[来自超级会员的分享]",
                w20:
                    "【优惠券】https://m.tb.cn/h.3qO9m5x?sm=083f10 点击链接，再选择浏览器咑閞；或復·制这段描述￥9crMbLdlDIF￥后咑閞淘♂寳♀[来自超级会员的分享]"
            },
            text: "",
            textcopy: "",
            copySuccess: false
        };
    },
    mounted() {
        function cut(str) {
            return str.split("￥")[1];
        }

        //alert(this.money)
        if (this.money == "m100") {
            this.textcopy = this.quan.m100;
            this.text = "￥" + cut(this.quan.m100) + "￥";
        }
        if(this.money == "m50"){
            this.textcopy = this.quan.m50;
            this.text = "￥" + cut(this.quan.m50) + "￥";
        }
        if(this.money == "m20"){
            this.textcopy = this.quan.m20;
            this.text = "￥" + cut(this.quan.m20) + "￥";
        }
        if (this.money == "199-100") {
            this.textcopy = this.quan.w199;
            this.text = "￥" + cut(this.quan.w199) + "￥";
        }
        if (this.money == "299-50") {
            this.textcopy = this.quan.w299;
            this.text = "￥" + cut(this.quan.w299) + "￥";
        }
        if (this.money == "199-20") {
            this.textcopy = this.quan.w20;
            this.text = "￥" + cut(this.quan.w20) + "￥";
        }

        let clipboard = new ClipboardJS(".copy");
        let timer = null;
        clipboard.on("success", e => {
            // clearTimeout(timer);
            // timer = setTimeout(() => {
            //     alert("复制成功");
            // }, 500);
            this.copySuccess = true
            setTimeout(() => {
                this.copySuccess = false
            }, 2000);
        });
        clipboard.on("error", e => {
            alert("复制失败");
        });
    },
    methods: {
        close() {
            //this.$store.commit('CHANGE_TMALL' ,false)
            this.$emit("close");
        }
    }
};
</script>
<style lang='scss' scoped>
.copy-success{
    position: fixed;
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: rgba(0,0,0,0.5);
    color: #fff;
    font-size: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 9999;
}

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
    right: 0;
    bottom: 0;
    background: rgba($color: #000000, $alpha: 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 99999999;
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

