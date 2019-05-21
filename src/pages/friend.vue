<template>
	<div class="friend">
		
		<van-nav-bar
		  title="好友"
		  fixed
		/>
		
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
		    <van-list
			  v-model="loading"
			  :finished="finished"
			  finished-text="没有更多了"
			  @load="onLoad"
			>
			  <van-cell
			    v-for="(item, index) in list"
			    :key="index"
			  >
			  
			  	<div>
			  		<h1>姓名</h1>
			  		{{item}}
			  	</div>
			  
			  </van-cell>
			</van-list>
		</van-pull-refresh>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	        count: 0,
	        isLoading: false,
	        list: [],
	        loading: false,
	        finished: false
	    }
	  },
	  methods: {
	    onRefresh() {
	      setTimeout(() => {
	        this.$toast('刷新成功');
	        this.isLoading = false;
	        this.count++;
	      }, 500);
	    },
	    onLoad() {
      	// 异步更新数据
	      setTimeout(() => {
	        for (let i = 0; i < 10; i++) {
	          this.list.push(this.list.length + 1);
	        }
	        // 加载状态结束
	        this.loading = false;
	
	        // 数据全部加载完成
	        if (this.list.length >= 40) {
	          this.finished = true;
	        }
	      }, 500);
	    }
	  }
	}
</script>

<style>
	.friend {
		width: 100%;
		height: 100%;
		background: deepskyblue;
		padding-top: 46px;
		box-sizing: border-box;
		overflow-y: scroll;
	}
</style>