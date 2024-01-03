<!-- ChildComponent.vue -->
<template>
	<div>
		<h2>{{ title }}</h2>
		<!-- 使用默认插槽显示父组件的内容 -->
		<slot></slot>
		<!-- 使用属性传递其他数据 -->
		<p>{{ additionalData }}</p>
		<!-- 触发自定义事件，将数据传递给父组件 -->
		<button @click="triggerChildEvent">触发事件</button>
	</div>
</template>
  
<script>
export default {
	props: {
		title: {
			type: String,
			default: '子组件标题', // 设置默认值
		},
		additionalData: String, // 通过属性传递其他数据
	},
	methods: {
		triggerChildEvent() {
			// 触发自定义事件，并传递数据给父组件
			this.$emit('childEvent', '来自子组件的数据');
		},
	},
};
</script>
  