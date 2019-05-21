<template>
	<div class="home">
		
		<ul>
			<li v-for="(item,index) in list">
				{{item}}
			</li>
		</ul>
		
		<van-cell-group>
		  <van-field
		    v-model="msg"
		    center
		    clearable
		    placeholder="请输入信息"
		  >
		    <van-button slot="button" size="small" type="primary" @click="handleClick">发送</van-button>
		  </van-field>
		</van-cell-group>
	</div>
</template>

<script>
	
	import io from 'socket.io-client';
	
	export default {
		data(){
			return {
				socket:{},
				msg:'',
				list: []
			}
		},
		created(){
			// 初始化
			this.socket = io('ws://47.95.110.109:8000/')
		},
		mounted(){
			// 监听收到的信息
			this.socket.on('res', (data)=>{
				this.list.push(data);
			})
		},
		methods: {
			handleClick(){
				// 发送
				this.socket.emit('all', this.msg)
				this.msg = ""
			}
		}
	}
</script>

<style lang="less">
	.home {
		width: 100%;
		height: 100%;
		position: relative;
		
		.van-cell-group{
			bottom: 0px;
			width: 100%;
			position: absolute;
		}
	}
</style>