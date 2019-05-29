import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		name:'周维',
		list:[]
	},
	mutations: {
		getFoodList(state, list){
//			console.log('mutations', list)
			state.list = list;
		}
	},
	getters: {
		list(state){
			
			state.list.forEach((item)=>{
				item.datainfo.forEach((subItem)=>{
					subItem.count = 0;
				})
			})
			
//			console.log(state.list)
			
			return state.list;
		}
	}
})
