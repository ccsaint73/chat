
export default {
		list(state){
			
			state.list.forEach((item)=>{
				item.datainfo.forEach((subItem)=>{
					subItem.count = 0;
				})
			})
			
			console.log('3getters', state.list)
			
			return state.list;
		}
	}