<template>
    <!-- 自恋框框 -->
    <div class="wh-100 absolute flex flex-direction justify-center align-center">
        <div class="frame-box">
            <img class="wh-100" src="../images/pictureFrame.png">
            <div class="picture-box wh-100">
                <div class="picture-box wh-100" :style="backObj"></div>
            </div>
        </div>
        <div class="frame-context">
            <div>福相检测系统运行中</div>
            <div>......</div>
            <div>正在定位你的五官</div>
            <div>......</div>
            <div>正在测算你的福气</div>
            <div>......</div>
        </div>
        <!-- <canvas id="cvs" style="display: none;"></canvas> -->
    </div>
</template>

<script>
/* eslint-disable */
// import EXIF from 'exif-js'
import request from "@/utils/request";
import { urlencoded } from "body-parser";
export default {
    data() {
        return {
            //imgSrc: sessionStorage.getItem('img64') || '../images/pictureFrame.png',
            backObj: {
                "background-image":
                    "url(" + sessionStorage.getItem("img64") ||
                    "../images/pictureFrame.png" + ")",
                transform:
                    sessionStorage.getItem("Orientation") == 1
                        ? "rotate(90deg) scale(1.1)"
                        : "rotate(0)"
            }
        };
    },
    created() {
        this.$store.commit("CHANGE_FLOWER", false);
        // request.post('UploadImg_' ,{postFile: sessionStorage.getItem('img64')}).then(res => {
        //     alert(JSON.stringify(res))
        //     if(res.Status == true){
        //         request.post('Testface' ,{imgpath: res.Results}).then(resp => {
        //             alert(JSON.stringify(resp))
        //         }).catch(err => {JSON.stringify(err)})
        //     }
        // }).catch(err => {alert(err)})

        // request.post("UploadImg" ,{postFile: 'iVBORw0KGgoAAAANSUhEUgAAAAsAAAALAQMAAACTYuVlAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURQAAAAAAAKVnuc8AAAABdFJOUwBA5thmAAAAE0lEQVQI12NgYWBARv8fMKCKAAAhuAII3zKSpgAAAABJRU5ErkJggg=='}).then(res => {
        //     alert(JSON.stringify(res))
        // }).catch(err => {alert(err)})
        //request.get('ConfigParams').then(res => {console.log(res)}).catch(err => {alert(err)})
        // request.get('ConfigParams').then(res => {
        //     console.log(res)
        // }).catch(err => {console.log('err' ,err)})
    },
    mounted() {
        // try{
        //     alert(sessionStorage.getItem('img64'))
        // }catch(err){
        //     alert('错误:'+err)
        // }

        request
            .post("UploadImg", {
                postFile: encodeURIComponent(sessionStorage.getItem("img64")),
                ImgType: sessionStorage.getItem("Orientation")
            })
            .then(res => {
                //alert(sessionStorage.getItem('Orientation'))
                if (res.Status == true) {
                    sessionStorage.removeItem("img64");
                    //sessionStorage.setItem('imgpath' ,res.Results)
                    //alert(JSON.stringify(res));
                    
                    let img = new Image();
                    //img.crossOrigin = ''
                    img.src = res.Results.ysimg;
                    // img.crossOrigin="anonymous";
                    img.onload = () => {
                        const canvas = document.createElement("canvas");
                        //alert(canvas)
                        canvas.width = img.width;
                        canvas.height = img.height;
                        canvas.getContext("2d").drawImage(img, 0, 0, img.width, img.height);
                        let dataUrl = canvas.toDataURL('image/png' ,0.8);
                        //alert(dataUrl);
                        sessionStorage.setItem("imgpath", dataUrl);
                        request.post('Testface' ,{imgpath: res.Results.ysimg}).then(resp => {
                            //alert(JSON.stringify(resp))
                            if(resp.res){
                                sessionStorage.setItem('NickName' ,resp.NickName)
                                this.$router.replace({
                                    path: '/result'
                                })
                            }else{
                                //alert('识别失败')
                                this.$router.replace({
                                    path: '/fail'
                                })
                            }
                        }).catch(err => {
                            //alert('Testface接口失败'+JSON.stringify(err))
                            this.$router.replace({
                                path: '/fail'
                            })
                        })
                    };
                } else {
                    //alert("上传resstatus不为true" + JSON.stringify(res));
                    this.$router.replace({
                        path: "/fail"
                    });
                }
            })
            .catch(err => {
                //console.log('err' ,err)
                //alert("上传:" + JSON.stringify(err));
                this.$router.replace({
                    path: "/fail"
                });
            });
    }
};
</script>

 <style lang='scss' scoped>
.frame-box {
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
    width: 6rem;
    height: 6rem / 0.78;
}
.picture-box {
    width: 6rem - 0.3rem;
    height: 6rem / 0.78 - 0.3rem;
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
.frame-context {
    text-align: center;
    font-size: 0.34rem;
    line-height: 0.36rem;
    margin-top: 0.1rem;
    color: #b31e23;
}
</style>