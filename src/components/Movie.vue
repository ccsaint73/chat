<template>
	<div class="movie">
		<ul>
			<li v-for="item in list">
				{{item}}
			</li>
		</ul>
		
		<div>
			<p>外边传进来的标签在下面     通过slot插槽</p>
			
			<slot>
				
			</slot>
		</div>

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