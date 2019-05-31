<template>
	<div>
		<ul>
			<li v-for="(item, index) in list">
				{{item.tit}}
			</li>
		</ul>
	</div>
</template>

<script>
	
	import {mapActions, mapGetters} from 'vuex';
	
	export default {
		created(){
			this.getFoodList();
		},
		methods: {
			...mapActions(['getFoodList'])
		},
		computed: {
			...mapGetters(['list'])
		}
	}
	
</script>

<style>
</style>