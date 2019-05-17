<template>
	<div class="root">
		
		<transition 
			enter-active-class="animated zoomIn"
    		leave-active-class="animated zoomOut mfix"
			>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
		
		<van-tabbar v-model="active">
		  <van-tabbar-item icon="home-o" to="/home">标签</van-tabbar-item>
		  <van-tabbar-item icon="search" dot to="/search">标签</van-tabbar-item>
		  <van-tabbar-item icon="friends-o" info="5" to="/friend">标签</van-tabbar-item>
		  <van-tabbar-item icon="setting-o" info="20" to="/setting">标签</van-tabbar-item>
		</van-tabbar>
		
	</div>
</template>

<script>
	
	export default {
	  data() {
	    return {
	      active: 0
	    }
	  }
	}
</script>

<style>
	
	.root {
		position: relative;
		padding-bottom: 50px;
		overflow: hidden;
		box-sizing: border-box;
	}
	
	.mfix {
		position: absolute;
	}
	
	/*.fade-enter-active, .fade-leave-active {
		transition: all 1s ease;
	}
	
	.fade-enter {
		transform: translateX(100%);
	}
	
	.fade-leave-to {
		transform: translateX(-100%);
		position: absolute;
	}*/
	
</style>