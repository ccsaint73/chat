import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

import cart from './cart/index'
import home from './home/home'
import login from './login/login'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		cart: cart,
	
	}
})
