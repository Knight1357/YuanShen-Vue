<template>
    <div class="fengmian">
        <img src="../assets/homepage/slts12.png" alt="12+提示" class="child12">
        <video src="../assets/video/backgroundvideo.mp4" id="backgroundvideo" autoplay="autoplay" loop="true">
        </video>
        <div class="DownloadMethod">
            <img src="../assets/homepage/home_kaishi.png" alt="start" class="homeStart">
            <div class="ksbutton">
                <img src="../assets/homepage/home_ks.png" alt="startbutton" class="homeks">
            </div>
            <img src="../assets/homepage/home_ewm.png" alt="ewm" class="homeewm">
            <img src="../assets/homepage/home_ewmlogo.png" alt="ewmlogo" class="homeewmlogo">
            <img src="../assets/homepage/home_pls4.png" alt="pls4" class="homepls4">
            <img src="../assets/homepage/home_taptap.png" alt="taptap" class="hometaptap">
            <img src="../assets/homepage/home_appstore.png" alt="appstore" class="homeappstore">
            <img src="../assets/homepage/home_anzhuo.png" alt="anzhuo" class="homeanzhuo">
            <img src="../assets/homepage/home_pc.png" alt="pc" class="homepc">
        </div>
    </div>
</template>

<script>

export default {

}
</script>

<style scope="css">
.fengmian {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 0;
    /* height: 720px;
        overflow: hidden; */
}

#backgroundvideo {
    position: absolute;
    top: -120px;
    left: 0;
    width: 100%;
    z-index: -1;
    overflow: hidden;
}

.child12 {
    position: absolute;
    left: 1.5%;
    top: 520px;
    width: 100px;
}

.DownloadMethod {
    position: relative;
    left: 50%;
    top: 500px;
    transform: translate(-50%, -50%);
    width: 540px;
    height: 220px;
}

.homeStart {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
}

.ksbutton {
    position: relative;
    float: left;
    left: 50%;
    top: 14px;
    transform: translate(-50%);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #fff;
    overflow: hidden;
    transition: background-color 0.3s ease 0s;
}

.ksbutton:hover {
    background-color: transparent;
}

.homeks {
    position: absolute;
    width: 20px;
    left: 55%;
    top: 90%;
    transform: translate(-50%, -50%);
    transition: top 0.3s ease 0s
}

.ksbutton:hover .homeks {
    top: 15%;
}

.homeewm {
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 103px;
}

.homeewmlogo {
    position: absolute;
    left: 36px;
    bottom: 43px;
    z-index: 1;
    width: 30px;
    height: 30px;
    border: 2px solid #475e7d;
    border-radius: 4px;
}

.homeappstore {
    position: absolute;
    bottom: 0;
    width: 160px;
    left: 105px;
}

.homeappstore:hover {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
}

.homeanzhuo {
    position: absolute;
    bottom: 0;
    width: 160px;
    left: 268px;
}

.homeanzhuo:hover {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
}

.homepls4 {
    position: absolute;
    bottom: 55px;
    width: 160px;
    left: 105px;
}

.homepls4:hover {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
}

.hometaptap {
    position: absolute;
    bottom: 55px;
    width: 160px;
    left: 268px;
}

.hometaptap:hover {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
}

.homepc {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 111px;
    height: 111px;
}

.homepc:hover {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
}
</style>