<template>
  <ysheader></ysheader>
  <router-view>
  </router-view>
</template>

<script>
import ysheader from './components/ysheader.vue'

export default {
  name: 'App',
  components: {
    ysheader
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
