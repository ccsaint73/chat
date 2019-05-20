<template>
	<div class="movie">
		<ul>
			<li v-for="item in list">
				{{item}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: ()=>[]
			}
		},
		mounted(){
		
		}
	}
</script>

<style>
</style>