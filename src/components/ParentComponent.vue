<!-- ParentComponent.vue -->
<template>
	<div>
		<ChildComponent :additionalData="additionalData" @childEvent="handleChildEvent">
			<!-- 通过默认插槽传递父组件的内容 -->
			<p>{{ parentContent }}</p>
		</ChildComponent>
	</div>
</template>
  
<script>
import ChildComponent from './ChildComponent.vue';

export default {
	components: {
		ChildComponent,
	},
	data() {
		return {
			parentContent: '这是父组件的内容',
			additionalData: '其他数据',
		};
	},
	methods: {
		handleChildEvent(dataFromChild) {
			console.log('父组件收到子组件事件，数据为:', dataFromChild);
			// 在这里处理从子组件传递过来的数据
		},
	},
};
</script>
  