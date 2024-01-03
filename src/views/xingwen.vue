<template>
  <br>
  <br>
  <br>
  <h1>新闻内容...</h1>
  <h1>暂未开发，敬请期待</h1>
  <nullpage @go-to-home-page="navigateToHomePage">
    <router-link to='/' @click="mm1">首 页</router-link>
  </nullpage>
</template>

<script>
import nullpage from '../components/null.vue'
export default {
  components:{
    nullpage
  },
  methods: {
    // 父组件中的事件处理函数，用于路由导航到首页
    navigateToHomePage() {
      // 进行路由导航到首页
      this.$router.push('/');
    }
  }
  
}
</script>

<style scope="css"></style>