<template>
  <div class="background">
    <img :src="require('../../assets/element/' + lyheroxxs[dqzx].em + '.png')" alt="" class="element">
    <div class="namexian"></div>
    <img :src="require('../../assets/hero/ly' + lyheroxxs[dqzx].num + 'D' + lyheroxxs[dqzx].sx + '.png')" alt=""
      class="bighero">
    <img src="../../assets/jiaosepage/sanhua.png" alt="" class="sanhua">
    <div class="yxname">{{ lyheroxxs[dqzx].name }}</div>
    <img :src="require('../../assets/hero/ly' + lyheroxxs[dqzx].num + 'Z' + lyheroxxs[dqzx].sx + '.png')" alt=""
      class="Lines">
    <div class="yxyy">
      <img src="../../assets/jtleft.png" alt="" class="jtleft" @click="dianji(dqzx - 1)">
      <ul class="jskp">
        <li v-for="(p) in lyheroxxs.slice(arrow, arrow + 6)" :key="p.num" @click="dianji(p.num)"
          :class="{ xzjl1: (p.num === dqzx) }">
          <!-- <img :src="require('../../assets/hero/ly0Xq.png')" alt=""> -->
          <!-- <img :src="p.xtp" alt=""> -->
          <img :src="require('../../assets/hero/ly' + p.num + 'X' + p.sx + '.png')" alt="">
          <div class="wz" :class="{ xzjl2: (p.num === dqzx) }">{{ p.name }}</div>
        </li>
      </ul>
      <img src="../../assets/jtrigth.png" alt="" class="jtright" @click="dianji(dqzx + 1)">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Liyue',
  data() {
    return {
      //  : (p.num === dqzx)
      arrow: 0,
      dqzx: 0,
      lyheroxxs: [
        { num: 0, name: "魈", sex: "男", city: "璃月", starts: 5, element: "风", em: 'wind', arms: "枪", sx: 'x' },
        { num: 1, name: "北斗", sex: "女", city: "璃月", starts: 4, element: "雷", em: 'thunder', arms: "双手剑", sx: 'bd' },
        { num: 2, name: "凝光", sex: "女", city: "璃月", starts: 4, element: "岩", em: 'rock', arms: "法器", sx: 'ng' },
        { num: 3, name: "香菱", sex: "女", city: "璃月", starts: 4, element: "火", em: 'fire', arms: "枪", sx: 'xl' },
        { num: 4, name: "行秋", sex: "男", city: "璃月", starts: 4, element: "水", em: 'water', arms: "单手剑", sx: 'xq' },
        { num: 5, name: "重云", sex: "男", city: "璃月", starts: 4, element: "冰", em: 'ice', arms: "双手剑", sx: 'cy' },
        { num: 6, name: "刻晴", sex: "女", city: "璃月", starts: 5, element: "雷", em: 'thunder', arms: "单手剑", sx: 'kq' },
        { num: 7, name: "七七", sex: "女", city: "璃月", starts: 5, element: "冰", em: 'ice', arms: "单手剑", sx: 'qq' },
        { num: 8, name: "达达利亚", sex: "男", city: "璃月", starts: 5, element: "水", em: 'water', arms: "弓", sx: 'ddly' },
        { num: 9, name: "钟离", sex: "男", city: "璃月", starts: 5, element: "岩", em: 'rock', arms: "枪", sx: 'zl' },
        { num: 10, name: "辛焱", sex: "女", city: "璃月", starts: 4, element: "火", em: 'fire', arms: "双手剑", sx: 'xy' },
        { num: 11, name: "甘雨", sex: "女", city: "璃月", starts: 5, element: "冰", em: 'ice', arms: "弓", sx: 'gy' },
        { num: 12, name: "胡桃", sex: "女", city: "璃月", starts: 5, element: "火", em: 'fire', arms: "枪", sx: 'ht' },
        { num: 13, name: "烟绯", sex: "女", city: "璃月", starts: 4, element: "火", em: 'fire', arms: "法器", sx: 'yf' },
        { num: 14, name: "申鹤", sex: "女", city: "璃月", starts: 5, element: "冰", em: 'ice', arms: "枪", sx: 'sh' },
        { num: 15, name: "云堇", sex: "女", city: "璃月", starts: 4, element: "岩", em: 'rock', arms: "枪", sx: 'yj' },
      ],
    }
  },
  methods: {
    dianji(e) {
      this.dqzx = e;
      if (e >= this.lyheroxxs.length) this.dqzx = 0;
      else if (e < 0) this.dqzx = this.lyheroxxs.length - 1;
      console.log("点击了", e, this.dqzx);
      if (this.dqzx < 3) this.arrow = 0;
      else if (this.dqzx + 4 >= this.lyheroxxs.length) this.arrow = this.lyheroxxs.length - 6;
      else this.arrow = this.dqzx - 2;
    }
  }
}
</script>

<style scope>
.background {
  position: relative;
  display: block;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: brown; */
  z-index: -20 !important;
  overflow: hidden;
}

.element {
  position: absolute;
  width: 360px !important;
  height: 378px;
  top: 10%;
  left: 20%;
  opacity: 0.2;
}

.namexian {
  position: absolute;
  width: 180px !important;
  height: 4px;
  top: 20%;
  left: 24%;
  background-color: rgb(227, 188, 140);
}

.yxname {
  position: absolute;
  color: #fff;
  font-size: 65px;
  top: 23%;
  left: 24%;
}

.bighero {
  position: absolute;
  /* width: 32%; */
  height: 100%;
  width: 80% !important;
  top: 0;
  right: 2%;
  bottom: 0;
  z-index: -9;
}

.sanhua {
  position: absolute;
  width: 76%;
  left: 50%;
  bottom: 0;
  z-index: 1;
  transform: translate(-50%, -2%);
}

.Lines {
  position: absolute;
  width: 30% !important;
  top: 40%;
  left: 24%;
}

.yxyy {
  position: absolute;
  width: 100%;
  height: 190px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-image: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.5));
}

.jtleft,
.jtright {
  position: absolute;
  width: 45px !important;
  height: 64px;
  bottom: 65px;
  left: 50%;
  transform: translate(-1100%);
  z-index: 10 !important;
  cursor: pointer;
}

.jtright {
  right: 50%;
  transform: translate(1000%);
}

.jskp {
  position: absolute;
  width: 826px;
  height: 130px;
  left: 50%;
  bottom: 30px;
  transform: translate(-50%);
  /* background-color: blanchedalmond; */
}

.jskp li {
  position: relative;
  float: left;
  width: 106px;
  height: 128px;
  margin-right: 38px;
  background-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0.5));
  border-radius: 5px;
  cursor: pointer;
  /* border: 2px solid transparent; */
  /* overflow: hidden; */
  /* 这个会导致文字有黑边 */
}

.jskp li:last-of-type {
  margin-right: 0;
}

.jskp li:hover {
  border: 2px solid #fff;
  background-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.1));
}

.xzjl1 {
  border: 2px solid #fff;
  background-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.1));
}

.jskp li img {
  position: relative;
  float: left;
  width: 106px;
  height: 106px;
  z-index: 2;
}

.wz {
  position: relative;
  float: left;
  width: 106px;
  height: 22px;
  left: 50%;
  transform: translate(-50%);
  background-color: black;
  text-align: center;
  color: #fff;
  font-size: 16px;
  border-radius: 0 0 5px 5px;
}

.jskp li:hover .wz {
  color: #000 !important;
  background-color: #fff !important;
}

.xzjl2 {
  color: #000 !important;
  background-color: #fff !important;
}</style>