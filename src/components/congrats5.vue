<template>
    <div class="congrats2 wh-100 absolute">
        <img class="zhnl" src="../images/zhnl.png" alt>
        <div class="zd pm">携程礼品卡</div>
        <div class="price">
            <span>1000</span>
            <span class="yuan">元</span>
        </div>
        <img class="xc" src="../images/xc.png" alt>
        <div class="ck pm">图片仅供参考，具体以实物为准</div>

        <!-- 马上使用 -->
        <div class="btn-box" v-if="showtmall">
            <img class="btn-img" src="../images/btn-red.png" alt>
            <div @click="getImmediate" class="btn-context wh-100 absolute flex justify-center align-center">立即领取</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['showtmall'])
    },
    methods: {
        getImmediate(){
            this.$router.push({
                path: '/addInfo'
            })
        }
    }
};
</script>

 <style lang='scss' scoped>
.xc {
    width: 40%;
    display: inline-block;
    margin: 0 auto 0.4rem;
    box-shadow: 0 0 0.5rem #ffffff;
}
.ck {
    font-size: 0.26rem;
    color: #009942;
}
.price {
    color: #b31d23;
    margin: 0.3rem 0 0.2rem;
    font-size: 1rem;
    // font-family: "Pm";
    font-style: italic;
    font-weight: bold;
    line-height: 1rem;
}
.price > .yuan {
    font-size: 0.5rem;
    font-family: "Pm";
}
.pm {
    font-family: "Pm";
}
.zd {
    font-size: 0.5rem;
    line-height: 0.5rem;
    margin-bottom: 0.3rem;
    color: #015883;
    font-style: italic;
}
.congrats2 {
    padding-top: 1rem;
    text-align: center;
}
.zhnl {
    width: 4rem;
    position: absolute;
    top: -0.5rem;
    left: 0;
    right: 0;
    margin: auto;
}
.btn-box {
    position: absolute;
    bottom: 0.9rem;
    left: 0;
    right: 0;
    margin: auto;
    width: 3.16rem;
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

