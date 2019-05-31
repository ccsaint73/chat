<template>
	<div class="search">
		{{this.$store.state.name}}
		
		<ul>
			<li v-for="(item, index) in getlist">
				{{item.tit}}
				<ul>
					<li v-for="(subItem, subIndex) in item.datainfo">
						{{subItem.name}}
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	
	import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
	
	export default {
		data(){
			return {

			}
		},
		created(){
//			this.getList();
//			this.$store.dispatch('getFoodList')
			this.getFoodList().then(()=>{
				console.log('网络请求成功')
			});
		},
		methods: {
			...mapMutations(['getFoodList']),
			...mapMutations({
				getGoodList:'getFoodList'
			}),
			...mapActions(['getFoodList'])
//			getList(){
//				var url = "http://localhost:8080/static/data.json"; 
//				
//				this.$axios.get(url).then((res)=>{
//					console.log(res);
					// 提交到mutations里面的getfoodlist
//					this.$store.commit('getFoodList', res.data)
//					this.getFoodList(res.data);
//					this.getGoodList(res.data);
//					this.$store.dispatch('getFoodList', res.data)
//				})
//			}
		},
		computed: {
			// 用辅助函数做一个映射   映射到state下面的list
//			...mapState(['list']),
//			...mapState({
//				stateList:'list'
//			}),
			// 用辅助函数做一个映射   映射到getters下面的list
//			...mapGetters(['list'])
			...mapGetters({
				getlist:'list'
			})
		}
	}
</script>

<style>
	.search {
		width: 100%;
		height: 100%;
	}
</style>