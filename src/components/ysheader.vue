<template>
  <div id="ysheader">
      <img class="yslogo" src="../assets/yslogo.png" alt="">
      <div class="ys-top-nav">
          <div class="ys-nav-ul">
            <div class="ys_nav_l1"><router-link to='/' @click="mm1" >首 页</router-link></div>
            <div class="ys_nav_l2"><router-link to='/xingwen' @click="mm2" >新 闻</router-link></div>
            <div class="ys_nav_l3"><router-link to='/jiaose/Mengde' @click="mm3" >角 色</router-link></div>
            <div class="ys_nav_l4"><router-link to='/shijie' @click="mm4" >世 界</router-link></div>
            <div class="ys_nav_l5"><router-link to='/manhua' @click="mm5" >漫 画</router-link></div>
            <div class="ys_nav_l6"><router-link to='/shequ' @click="mm6" >社 区</router-link></div>
            <div class="headerindex" :style="headnav"></div>
          </div>
      </div>
      <audio class="music1" autoplay="autoplay" loop="true" type="audio/mp3" src="../assets/music/video1.mp3"></audio>
      <audio class="music2" autoplay="autoplay" loop="true" type="audio/mp3" src="../assets/music/video2.mp3"></audio>
  </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name:"ysheader",
        data() {
            return {
                headnav:"left:20px"
            }
        },
        methods: {
            mm1(){this.headnav = "left:20px", console.log("!!!1")},
            mm2(){this.headnav = "left:122px", console.log("!!!2")},
            mm3(){this.headnav = "left:224px", console.log("!!!3")},
            mm4(){this.headnav = "left:326px", console.log("!!!4")},
            mm5(){this.headnav = "left:428px", console.log("!!!5")},
            mm6(){this.headnav = "left:530px", console.log("!!!6")},
        }
    }
</script>

<style scope="css">
    #ysheader{
        position: relative;
        left: 0;
        top: 0;
        z-index: 100;
        width: 100%;
        height: 66px;
        transform: translateX(0px);
        opacity: 1;
        box-shadow:0px 3px 7px 0px rgba(0,0,0,0.35);
        background-color:rgba(17,17,17,0.75);
        overflow: hidden;
    }
    .yslogo{
        position: absolute;
        left: 90px;
        top: -40px;
        height: 150px;
        text-align: center;
    }
    .music1,
    .music2{
        position: absolute;
        top: 100px;
    }
    .ys-top-nav{
        position: relative;
        top: 0;
        left: 280px;
        width: 45%;
        height: 66px;
    }
    .ys-nav-ul{
        height: 66px;
        position: absolute;
        font-family:"Microsoft YaHei", "微软雅黑", "MicrosoftJhengHei", "华文细黑", "STHeiti", "MingLiu";
        text-align: center;
    }
    .ys_nav_l1,
    .ys_nav_l2,
    .ys_nav_l3,
    .ys_nav_l4,
    .ys_nav_l5,
    .ys_nav_l6{
        display: block;
        position: relative;
        float: left;
        margin: 0px 5px !important;
        padding: 20px 25px;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        height: 66px;
        width: 92px;
        text-align: center;
    }
    .ys-nav-ul div a{
        color: #c7c7c7;
        cursor: pointer;
    }
    .ys-nav-ul div a:hover {
        text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
        color: #fff;
    }
    .headerindex{
        position: absolute;
        width: 60px;
        height: 5px;
        top: 0;
        /* left:20px; */
        background-color: #69e0ff;
        z-index: 10;
        transition: left 0.5s ease 0.1s;
    }
    .ys_nav_l1:hover~ .headerindex{ left:20px !important;}
    .ys_nav_l2:hover~ .headerindex{ left:122px !important; }
    .ys_nav_l3:hover~ .headerindex{ left:224px !important; }
    .ys_nav_l4:hover~ .headerindex{ left:326px !important; }
    .ys_nav_l5:hover~ .headerindex{ left:428px !important; }
    .ys_nav_l6:hover~ .headerindex{ left:530px !important; }
</style>