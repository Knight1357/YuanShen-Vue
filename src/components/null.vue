<template>
	<button @click="goToHomePage">回到首页</button>
</template>
  
<script>
/*
	5. 页面子组件使用自定义事件的方式调用父组件的事件处理
	返回主页
*/
export default {
	methods: {
		goToHomePage() {
			// 在子组件中通过自定义事件通知父组件回到首页
			this.$emit('go-to-home-page');
		}
	}
}
</script>
  
<style scope="css"></style>