<template>
    <div class="wh-100 absolute">
        <!-- <video id="video"></video>
        {{stream}}-->
        <camera-item class="camera-container"></camera-item>
        <!-- <div class="camera-btn">
            <div class="camera-btn-div"></div>
        </div> -->
    </div>
</template>

<script>
/* eslint-disable */
import cameraItem from "./cameraItem"

export default {
    components: { cameraItem },
    data() {
        return {
            //stream: "1212"
        };
    },
    created() {
        //location.reload()
        this.$store.commit('CHANGE_FLOWER' ,false)
    },
    methods: {
        // liveVideo() {
        //     function getUserMedia(constrains, success, error) {
        //         if (navigator.mediaDevices.getUserMedia) {
        //             //最新标准API
        //             navigator.mediaDevices
        //                 .getUserMedia(constrains)
        //                 .then(success)
        //                 .catch(error);
        //         } else if (navigator.webkitGetUserMedia) {
        //             //webkit内核浏览器
        //             navigator
        //                 .webkitGetUserMedia(constrains)
        //                 .then(success)
        //                 .catch(error);
        //         } else if (navigator.mozGetUserMedia) {
        //             //Firefox浏览器
        //             navagator
        //                 .mozGetUserMedia(constrains)
        //                 .then(success)
        //                 .catch(error);
        //         } else if (navigator.getUserMedia) {
        //             //旧版API
        //             navigator
        //                 .getUserMedia(constrains)
        //                 .then(success)
        //                 .catch(error);
        //         }
        //     }

        //     getUserMedia(
        //         {
        //             video: { width: 480, height: 320 }
        //         },
        //         res => {
        //             console.log(res);
        //         },
        //         err => {
        //             console.log(err);
        //         }
        //     );
        // }
    }
};
</script>

 <style lang='scss' scoped>
 .camera-container{
     position: absolute;
     top: 20%;
     left: 50%;
     transform: translateX(-50%);
 }
// .camera-btn {
//     position: absolute;
//     bottom: 1.97rem;
//     left: 0;
//     right: 0;
//     margin: auto;
//     width: 2.15rem;
//     height: 2.15rem;
//     border-radius: 50%;
//     border: 0.1rem solid #00587f;
//     padding: 0.15rem;
// }
// .camera-btn-div {
//     width: 100%;
//     height: 100%;
//     background: #00587f;
//     border-radius: 50%;
// }
</style>

