<template>
  <!-- <div class="back" :style="{'background-image':'url('+image.value+')'}"> -->
  <div class="back" :style="image.value">
    <img src="../assets/jiaosepage/ysyy.png" alt="" class="ysyy">

    <div class="js_nav">
      <div class="xian"></div>
      <div class="city_ul">
        <div class="city_li">
          <img src="../assets/jiaosepage/done.png" alt="" class="done">
          <img src="../assets/jiaosepage/xuanzhong.png" class="xuanzhong" v-if="citydd === 1" alt="">
          <router-link class="city_Mengde" to="/jiaose/Mengde" @click="di(1)" active-class="xuancity">蒙德城</router-link>
        </div>
        <div class="city_li">
          <img src="../assets/jiaosepage/done.png" alt="" class="done">
          <img src="../assets/jiaosepage/xuanzhong.png" class="xuanzhong" v-if="citydd === 2" alt="">
          <router-link class="city_Liyue" to="/jiaose/Liyue" @click="di(2)" active-class="xuancity">璃月港</router-link>
        </div>
        <div class="city_li">
          <img src="../assets/jiaosepage/done.png" alt="" class="done">
          <img src="../assets/jiaosepage/xuanzhong.png" class="xuanzhong" v-if="citydd === 3" alt="">
          <router-link class="city_Daoqi" to="/jiaose/Daoqi" @click="di(3)" active-class="xuancity">稻妻城</router-link>
        </div>
        <div class="city_li">
          <img src="../assets/jiaosepage/done.png" alt="" class="done">
          <a href="#" onclick="return false" style="cursor:default">敬请期待</a>
        </div>
      </div>
    </div>
    <router-view>
    </router-view>
  </div>
</template>

<script scope>
import TimerTpChange from '/src/TimerTpChange.js'
import { ref, computed, watch } from 'vue'
export default {
  name: 'jiaose',
  // image: require('../assets/jiaosepage/md001.jpg')
  data() {
    return {

    }
  },
  setup() {
    //点击进入哪个大陆
    let citydd = ref(1)
    function di(e) {
      citydd.value = e;
    }
    //大陆照片
    let imagesll = [
      { 'background-image': 'url(' + require('../assets/jiaosepage/md001.jpg') + ')' },
      { 'background-image': 'url(' + require('../assets/jiaosepage/md002.jpg') + ')' },
      { 'background-image': 'url(' + require('../assets/jiaosepage/ly001.jpg') + ')' },
      { 'background-image': 'url(' + require('../assets/jiaosepage/ly002.jpg') + ')' },
      { 'background-image': 'url(' + require('../assets/jiaosepage/dq001.jpg') + ')' },
      { 'background-image': 'url(' + require('../assets/jiaosepage/dq002.jpg') + ')' },
      // require('../assets/jiaosepage/md001.jpg'),
      // require('../assets/jiaosepage/md002.jpg'),
      // require('../assets/jiaosepage/ly001.jpg'),
      // require('../assets/jiaosepage/ly002.jpg'),
      // require('../assets/jiaosepage/dq001.jpg'),
      // require('../assets/jiaosepage/dq002.jpg'),
    ]
    //定时器
    let backtp = TimerTpChange()
    let k = computed(() => {
      // console.log("k值有变化！！")
      // console.log("k.value: ",k.value)
      // console.log("citydd.value:",citydd.value)
      // console.log("backtp.value:",backtp.value)
      // console.log("citydd.value*2+backtp.value-2: ",citydd.value*2+backtp.value-2)
      return citydd.value * 2 + backtp.value - 2
    })
    watch(k, (newValue) => {
      // console.log("变化image值",newValue,)
      image.value = ref(imagesll[newValue])
      // console.log("image",image)
      // console.log("image.value",image.value)
    })
    let image = ref(imagesll[parseInt(k.value)])
    return {
      citydd,
      backtp,
      image,
      di,
    }
  }
}
</script>

<style scope="css">
.back {
  position: absolute;
  display: block;
  /* width: 100%; */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-position: center;
  background-size: cover;
  transform-origin: center;
  /* background-color: aqua; */
  z-index: -100 !important;
  background-image: url(../assets/jiaosepage/md001.jpg);
  background-repeat: no-repeat;
  transition: background-image 1s ease;
  overflow: hidden;
}

.ysyy {
  position: absolute;
  width: 112%;
  top: 0;
  left: -90px;
  bottom: 0;
  right: 0;
  z-index: -25 !important;
}

.js_nav {
  position: absolute;
  top: 25%;
  left: 0;
  width: 370px;
  z-index: -5 !important;
  background-color: brown;
}

.xian {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10%;
  width: 2px;
  height: 100%;
  background-image: linear-gradient(to bottom right, #fff, rgba(255, 255, 255, 0.2), transparent);
}

.city_ul {
  position: absolute;
  top: 25%;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  /*大小肯定小了，但叠放次序难调 */
  z-index: -8 !important;
  /* background-color:aquamarine; */
}

.city_li {
  position: relative;
  float: left;
  width: 100%;
  height: 52.75px;
  /* background-color:blue; */
  overflow: hidden;
}

.done {
  position: absolute;
  left: 17.5px;
  top: 50%;
  width: 40px;
  transform: translate(0, -50%);
}

.city_li a {
  position: absolute;
  left: 0;
  width: 50%;
  margin-left: 30px;
  padding-left: 25px;
  top: 50%;
  transform: translate(0, -50%);
  color: #fff;
  font-size: 18px;
  z-index: 10 !important;
}

.xuancity {
  padding-left: 45px !important;
}

.xuanzhong {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
}
</style>