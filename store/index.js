import Vuex from 'vuex'
import user from './user'

const createStroe = () => {
	return new Vuex.Store({
		modules: {
			user
		}
	})
}

export default createStroe
