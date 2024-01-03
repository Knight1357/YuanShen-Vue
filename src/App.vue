<template>
  <ysheader></ysheader>
  <yscontent></yscontent>
</template>

<script>
import ysheader from './components/header.vue'
import yscontent from './components/content.vue'

export default {
  name: 'App',
  components: {
    /*
      3.使用组件进行页面部分控件的页面设计
      包含页头导航栏,页面内容
    */
    ysheader,
    yscontent
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

em,
i {
  font-style: normal;
}

li {
  list-style: none;
}

img {
  border: 0;
}

button {
  cursor: pointer;
}

a {
  color: #666;
  text-decoration: none;
}

button,
input {
  font-family: Microsoft YaHei, ”\5B8B\4F53”
}

.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
</style>
