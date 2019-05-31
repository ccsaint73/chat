export default {
		getFoodList(state, list){
			console.log('2.mutations', list)
			state.list = list;
		}
	}