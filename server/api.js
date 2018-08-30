/**
 * Api 集合
 * 
 * 使用方法：
 * store, components --> this.$axios.$apis.method
 * asyncData --> { $axios } => $axios.$apis.method
 * middleWare --> { app } => app.$axios.$apis.method
 * 
 * @param  {[object]} params 传入的参数
 * 
 */

export default (ctx) => {
	const prefix = '/mock'
	const apis = {
		// 登录
		login: function (params) {
			return 	ctx.$axios.post(`${prefix}/user/login`, params)
		}

	}

	ctx.$axios.$apis = apis
}
