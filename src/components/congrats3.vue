<template>
    <div class="congrats2 wh-100 absolute">
        <tmall :showtmall="showtmall" :money="money" @close='close'></tmall>
        <img class="zhnl" src="../images/zhnl.png" alt>
        <div class="text-shadow pm">
            <div class="man">
                <span>满</span>
                <span class="p-num">{{money.split('-')[0]}}</span>
                <span>元</span>
            </div>
            <div class="jian">
                <span>减</span>
                <span class="p-num">{{money.split('-')[1]}}</span>
                <span>元</span>
            </div>
            <div class="yhq">优惠券</div>
        </div>
        <div class="quan pm">五芳斋天猫旗舰店全场通用</div>
        <!-- 马上使用 -->
        <div class="btn-box">
            <img class="btn-img" src="../images/btn-red.png" alt>
            <div @click="immediate" class="btn-context wh-100 absolute flex justify-center align-center">立即领取</div>
        </div>
    </div>
</template>

<script>
import tmall from "./tmall"
export default {
    components: {
        tmall
    },
    data(){

        function mmoney(){
            let num = ''
            switch(+sessionStorage.getItem('result')){
                case 6:
                num = '199-100';
                break;
                case 7:
                num = '299-50';
                break;
                case 8:
                num = '199-20';
                break;
                default:
                break;
            }
            return num
        }
        return {
            showtmall: false,
            money: mmoney()
        }
    },
    methods: {
        immediate(){
            //this.$store.commit('CHANGE_TMALL' ,true)

            this.showtmall = !this.showtmall
        },
        close(){
            this.showtmall = !this.showtmall
        }
    }
};
</script>

 <style lang='scss' scoped>
.pm {
    font-family: "Pm";
}
.text-shadow {
    text-shadow: 0 0 0.4rem #ffffff;
    color: #015883;
    font-style: italic;
    font-weight: bold;
}
.man {
    font-size: 0.8rem;
    // line-height: 0.8rem;
}
.man > .p-num {
    font-family: "Microsoft YaHei";
    font-weight: bold;
    // font-style: normal;
    font-size: 1rem;
}
.jian {
    font-size: 0.8rem;
    // line-height: 0.8rem;
}
.jian > .p-num {
    font-family: "Microsoft YaHei";
    font-weight: bold;
    // font-style: normal;
    color: #de0d0d;
    font-size: 1rem;
}
.zd {
    font-size: 0.5rem;
    margin-bottom: 0.3rem;
}
.congrats2 {
    padding-top: 0.8rem;
    text-align: center;
}
.zhnl {
    width: 4rem;
    margin: auto;
    font-weight: 0;
}
.yhq {
    font-size: 0.6rem;
    line-height: 0.6rem;
    margin-bottom: 0.2rem;
    margin-top: 0.1rem;
}
.quan {
    border: 0.09rem solid #00a64b;
    background: #eed900;
    color: #be1221;
    text-align: center;
    font-size: 0.32rem;
    line-height: 0.32rem;
    display: inline-block;
    padding: 0.1rem;
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

