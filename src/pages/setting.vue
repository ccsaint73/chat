<template>
	<div class="setting" >
		<van-tabs v-model="active" @change="handleChange">
		  <van-tab title="标签 1" >
		  	<Movie :list="list">
				<div class="out">
					这是内部传入的标签
				</div>		  		
		  	</Movie>
		  </van-tab>
		  <van-tab title="标签 2" >
		  	<Movie :list="list"/>
		  </van-tab>
		  <van-tab title="标签 3"><Movie /></van-tab>
		  <van-tab title="标签 4"><Movie /></van-tab>
		</van-tabs>
	</div>
</template>

<script>	
	import Movie from '@/components/Movie';
	
	export default {
	  data() {
	    return {
	      active: 0,
	      list: [],
	      navlist: ['首页',]
	    };
	  },
	  created(){
		
	  },
	  components: {
	  	Movie,
	  },
	  methods: {
	  	handleChange(){
	  		
	  		console.log(this.active)
	  		
		  	switch(this.active){
		  		case 0:
		  			// 请求接口
		  			this.list = ['哈利波特1', '哈利波特2']
		  		break;
		  		case 1:
		  			this.list = ['战争']
		  		break;
		  	}
	  	}
	  }
	}
</script>

<style>
	.setting {
		width: 100%;
	}
	
	.out {
		color: deeppink;
	}
</style>