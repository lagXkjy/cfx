<template>
    <div class="container">
        <div class="camera-outter">
            <div class="camera-inner"></div>
            <div class="camera-item"></div>    
            <div class="camera-item"></div>    
            <div class="camera-item"></div>    
            <div class="camera-item"></div>    
        </div>
        <div class="camera-btn">
            <div class="camera-btn-div"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CameraItem',
    props: '',
    data(){
        return{

        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
$browser-default-font-size: 108px !default; //变量的值可以根据自己需求定义 /10
@function pxTorem($px) {
//$px为需要转换的字号
@return $px/$browser-default-font-size*1rem;
}
.container{
    width: pxTorem(600px);
    height: pxTorem(1200px);
    border: 1px solid #000;
    .camera-btn{
        position: absolute;
        width: pxTorem(240px);
        height: pxTorem(240px);
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        border: pxTorem(10px) solid #00587f;
        padding: pxTorem(15px);
        .camera-btn-div{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #00587f;
        }
    }
}
</style>


