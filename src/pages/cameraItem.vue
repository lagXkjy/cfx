<template>
    <div class="container">
        <div class="camera-outter">
            <div class="camera-inner">
                <video id="cameraVideo" autoplay></video>
                <canvas id="cameraCanvas" style="display:none;"></canvas>
                <input id="cameraFile" type="file" accept="image/*" capture='user' style="display:none;" @change="fileChange" ref="imgFile">
            </div>
            <div class="camera-item item1"></div>    
            <div class="camera-item item2"></div>    
            <div class="camera-item item3"></div>    
            <div class="camera-item item4"></div>    
        </div>
        <p class="p-notice" style="text-align: center;">{{!notice ? '请点击下面按钮自拍照片' : '请将脸部对准扫描框并拍照'}}</p>
        <div class="camera-btn" @click="takePhoto">
            <div class="camera-btn-div"></div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */

export default {
    name: 'CameraItem',
    props: '',
    data(){
        return{
            video: '',
            showPhoto: !navigator.mediaDevices.getUserMedia ? false : true,
            //showPhoto: false,
            notice: navigator.mediaDevices && navigator.mediaDevices.getUserMedia 
        }
    },
    methods: {
        takePhoto(){
            //alert(this.showPhoto)
            if(this.showPhoto){
                let canvas = document.getElementById('cameraCanvas')
                let context = canvas.getContext('2d')
                canvas.width = this.video.videoWidth
                canvas.height = this.video.videoHeight
                context.drawImage(this.video ,0 ,0)
                sessionStorage.setItem('img64' ,canvas.toDataURL('image/png' ,0.6).replace(/\s+/g,""))
                //sessionStorage.setItem('img64' ,canvas.toDataURL('image/png' ,0.7).replace(/\s+/g,""))
                //sessionStorage.setItem('img64' ,canvas.toBlob())
                sessionStorage.setItem('Orientation' ,0)
                this.$router.push({
                    path: '/testing'
                })
            }else{
                this.$refs.imgFile.click()
            }
        },
        fileChange(){
            let self = this
            let fileData = this.$refs.imgFile.files[0]
            // sessionStorage,setItem('img64' ,fileData)
            // self.$router.push({
            //     path: '/testing'
            // })
            console.log(fileData)
            let reader = new FileReader()
            reader.readAsDataURL(fileData)
            reader.onload = (e) => {
                //console.log(e.target.result)

                try{
                    const img = new Image()
                    img.src = e.target.result
                    img.onload = () => {
                        const w = img.width
                        const h = img.height
                        const canvas = document.createElement('canvas')
                        const ctx = canvas.getContext('2d')

                        const anw = document.createAttribute("width")
                        anw.nodeValue = w /4
                        // anw.nodeValue = w
                        const anh = document.createAttribute("height")
                        anh.nodeValue = h /4
                        // anh.nodeValue = h
                        canvas.setAttributeNode(anw)
                        canvas.setAttributeNode(anh)

                        ctx.drawImage(img ,0 ,0 ,w ,h ,0 ,0 ,w /4 ,h / 4)
                        // ctx.drawImage(img ,0 ,0 ,w ,h)
                        sessionStorage.setItem('img64' ,canvas.toDataURL('image/png' ,0.3).replace(/\s+/g,""))
                        //alert(canvas.toDataURL('image/png' ,0.7))
                        sessionStorage.setItem('Orientation' ,1)
                        self.$router.push({
                            path: '/testing'
                        })
                    }
                }catch(err){
                    alert('错误:'+err)
                }

                

                // sessionStorage.setItem('Orientation' ,1)
                // sessionStorage.setItem('img64' ,e.target.result.replace(/\s+/g,""))
                // self.$router.push({
                //     path: '/testing'
                // })
            }
        }
    },
    created(){
        //console.log(navigator.mediaDevices.getUserMedia)
    },
    mounted(){
        const video = document.getElementById('cameraVideo')
        this.video = video
        const constraints = {
            video: {
                facingMode: 'user'
            },
            audio: false
        }
        // if (navigator.mediaDevices === undefined) {
        //     navigator.mediaDevices = {};
        // }
        // if(navigator.mediaDevices.getUserMedia === undefined){
        //     navigator.mediaDevices.getUserMedia = function(constraints){
        //         let getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        //         if (!getUserMedia) {
        //             return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
        //         }
        //         return new Promise(function(resolve, reject) {
        //             getUserMedia.call(navigator, constraints, resolve, reject);
        //         });
        //     }
        // }
        //alert(navigator.mediaDevices)
        navigator.mediaDevices.getUserMedia(constraints).then(stream => {
            //currentStream = stream
            this.video.srcObject = stream
        }).catch(err => {console.log(err)})
    },
    destroyed(){
        this.showPhoto = this.showPhoto
    }
}
</script>
<style lang="scss" scoped>
$browser-default-font-size: 108px !default; //变量的值可以根据自己需求定义 /10
@function pxTorem($px) {
    //$px为需要转换的字号
    @return $px/$browser-default-font-size*1rem;
}
@mixin centerAll{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% ,-50%);
}
.container{
    width: pxTorem(600px);
    height: pxTorem(1200px);
    //border: 1px solid #000;
    .p-notice{
        margin: pxTorem(40px) 0;
        color: #b31e23;
    }
    .camera-outter{
        position: relative;
        width: pxTorem(600px);
        height: pxTorem(600px);
        box-sizing: border-box;
        .camera-item{
            position: absolute;
            width: pxTorem(100px);
            height: pxTorem(100px);
            background-color: #fff;
            z-index: 333;
            &.item1{
                top: 0;
                left: 0;
            }
            &.item2{
                top: 0;
                right: 0;
            }
            &.item3{
                left: 0;
                bottom: 0;
            }
            &.item4{
                right: 0;
                bottom: 0;
            }
        }
        .camera-inner{
            width: pxTorem(570px);
            height: pxTorem(570px);
            @include centerAll;
            z-index: 666;
            background-color: #000;
            overflow: hidden;
            #cameraVideo{
                width: pxTorem(780px);
                height: pxTorem(780px);
                @include centerAll;
                background-color: #000;
            }
        }
    }
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


