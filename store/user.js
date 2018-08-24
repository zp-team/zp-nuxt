const user = {
	state: {
		user: {},
		userStatus: {}
	},

	mutations: {
		SET_USER (state, payload) {
			state.user = payload
		},

		SET_USERSTATUS (state, payload) {
			state.userStatus = payload
		}
	},

	actions: {
		/**
		 * 初始化数据
		 * @param {function} commit  更新状态
		 * @param {object} app  异步请求数据 
		 */
		async nuxtServerInit ({ commit }, { app }) {
			// todo...
		},

		/**
		 * 页面通过Store获取用户数据
		 * @param {function} commit  更新状态
		 */
		getAction ({commit}) {
			return new Promise((resolve, reject) => {
				// todo...
			})
		}
	}
}

export default user
