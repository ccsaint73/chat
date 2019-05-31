import axios from 'axios'

export default {
		getFoodList({commit}){
			
			var url = 'http://localhost:8080/static/data.json';
			
			return new Promise((resolve, reject)=>{
				axios.get(url).then((res)=>{
					commit('getFoodList', res.data)
					
					localStorage.setItem('list', JSON.stringify(res.data));
					
					resolve();
				}, (err)=>{
					
					var list = JSON.parse(localStorage.getItem('list'));
					
					if(list == null){
						list = []
					}
					
					commit('getFoodList', list);
					
					reject();
				})
			})

//			console.log('1.actions', list);		
			
		}
	}