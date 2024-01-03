<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="background">
    <img :src="require('../../assets/element/' + mdheroxxs[dqzx].em + '.png')" alt="" class="element">
    <div class="namexian"></div>
    <img :src="require('../../assets/hero/md' + mdheroxxs[dqzx].num + 'D' + mdheroxxs[dqzx].sx + '.png')" alt=""
      class="bighero">
    <img src="../../assets/jiaosepage/sanhua.png" alt="" class="sanhua">
    <div class="yxname">{{ mdheroxxs[dqzx].name }}</div>
    <img :src="require('../../assets/hero/md' + mdheroxxs[dqzx].num + 'Z' + mdheroxxs[dqzx].sx + '.png')" alt=""
      class="Lines">
    <div class="yxyy">
      <img src="../../assets/jtleft.png" alt="" class="jtleft" @click="dianji(dqzx - 1)">
      <ul class="jskp">
        <li v-for="(p) in mdheroxxs.slice(arrow, arrow + 6)" :key="p.num" @click="dianji(p.num)"
          :class="{ xzjl1: (p.num === dqzx) }">
          <img :src="require('../../assets/hero/md' + p.num + 'X' + p.sx + '.png')" alt="">
          <div class="wz" :class="{ xzjl2: (p.num === dqzx) }">{{ p.name }}</div>
        </li>
      </ul>
      <img src="../../assets/jtrigth.png" alt="" class="jtright" @click="dianji(dqzx + 1)">
    </div>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Mengde',
  data() {
    return {
      //  : (p.num === dqzx)
      arrow: 0,
      dqzx: 0,
      mdheroxxs: [
        { num: 0, name: "琴", sex: "女", city: "蒙德", starts: 5, element: "风", em: 'wind', arms: "单手剑", sx: 'q' },
        { num: 1, name: "安柏", sex: "女", city: "蒙德", starts: 4, element: "火", em: 'fire', arms: "弓", sx: 'ab' },
        { num: 2, name: "丽莎", sex: "女", city: "蒙德", starts: 4, element: "雷", em: 'thunder', arms: "法器", sx: 'ls' },
        { num: 3, name: "凯亚", sex: "男", city: "蒙德", starts: 4, element: "冰", em: 'ice', arms: "单手剑", sx: 'ky' },
        { num: 4, name: "芭芭拉", sex: "女", city: "蒙德", starts: 4, element: "水", em: 'water', arms: "法器", sx: 'bbl' },
        { num: 5, name: "迪卢克", sex: "男", city: "蒙德", starts: 5, element: "火", em: 'fire', arms: "双手剑", sx: 'dlk' },
        { num: 6, name: "雷泽", sex: "男", city: "蒙德", starts: 4, element: "雷", em: 'thunder', arms: "双手剑", sx: 'lz' },
        { num: 7, name: "温迪", sex: "男", city: "蒙德", starts: 5, element: "风", em: 'wind', arms: "弓", sx: 'wd' },
        { num: 8, name: "可莉", sex: "女", city: "蒙德", starts: 5, element: "火", em: 'fire', arms: "法器", sx: 'kl' },
        { num: 9, name: "班尼特", sex: "男", city: "蒙德", starts: 4, element: "火", em: 'fire', arms: "单手剑", sx: 'bnt' },
        { num: 10, name: "诺艾尔", sex: "女", city: "蒙德", starts: 4, element: "岩", em: 'rock', arms: "双手剑", sx: 'nae' },
        { num: 11, name: "菲谢尔", sex: "女", city: "蒙德", starts: 4, element: "雷", em: 'thunder', arms: "弓", sx: 'fxe' },
        { num: 12, name: "砂糖", sex: "女", city: "蒙德", starts: 4, element: "风", em: 'wind', arms: "法器", sx: 'st' },
        { num: 13, name: "莫娜", sex: "女", city: "蒙德", starts: 5, element: "水", em: 'water', arms: "法器", sx: 'mn' },
        { num: 14, name: "迪奥娜", sex: "女", city: "蒙德", starts: 4, element: "冰", em: 'ice', arms: "弓", sx: 'dan' },
        { num: 15, name: "阿贝多", sex: "男", city: "蒙德", starts: 5, element: "岩", em: 'rock', arms: "单手剑", sx: 'abd' },
        { num: 16, name: "罗莎莉亚", sex: "女", city: "蒙德", starts: 4, element: "冰", em: 'ice', arms: "枪", sx: 'lsly' },
        { num: 17, name: "优菈", sex: "女", city: "蒙德", starts: 5, element: "冰", em: 'ice', arms: "双手剑", sx: 'yl' },
        { num: 18, name: "埃洛伊", sex: "女", city: "蒙德", starts: 5, element: "冰", em: 'ice', arms: "弓", sx: 'aly' },
      ],
    }
  },
  methods: {
    dianji(e) {
      this.dqzx = e;
      if (e >= this.mdheroxxs.length) this.dqzx = 0;
      else if (e < 0) this.dqzx = this.mdheroxxs.length - 1;
      console.log("点击了", e, this.dqzx);
      if (this.dqzx < 3) this.arrow = 0;
      else if (this.dqzx + 4 >= this.mdheroxxs.length) this.arrow = this.mdheroxxs.length - 6;
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
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: rgba(30, 172, 11,.3); */
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
  z-index: 5;
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
  z-index: 10 !important;
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
  z-index: 10 !important;
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
  z-index: 11 !important;
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
  z-index: 11 !important;
}

.jskp li:hover .wz {
  color: #000 !important;
  background-color: #fff !important;
}

.xzjl2 {
  color: #000 !important;
  background-color: #fff !important;
}
</style>