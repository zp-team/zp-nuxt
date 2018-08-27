import { Message } from 'element-ui'
import address from '~/config'

const codeMessage = {
	200: '服务器成功返回请求的数据。',
	201: '新建或修改数据成功。',
	202: '一个请求已经进入后台排队（异步任务）。',
	204: '删除数据成功。',
	400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
	401: '用户没有权限（令牌、用户名、密码错误）。',
	403: '用户得到授权，但是访问是被禁止的。',
	404: '发出的请求是不存在的记录，服务器没有进行操作。',
	406: '请求的格式不可得。',
	410: '请求的资源被永久删除，且不会再得到的。',
	422: '当创建一个对象时，发生一个验证错误。',
	500: '服务器发生错误，请检查服务器。',
	502: '网关错误。',
	503: '服务不可用，服务器暂时过载或维护。',
	504: '网关超时。'
}

/**
 * 通过请求Url，返回Promise
 * 使用方法参照：https://axios.nuxtjs.org/usage.html
 * 
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

export default ({ $axios, redirect, app, store }) => {
	// 请求发送之前
	$axios.onRequest((config) => {
		// node环境中添加baseURL和替换proxy配置
		if (process.server) {
			config.baseURL = address.SERVER_ADDRESS + `/api/1014`
		} else {
			config.baseURL = `/api/1014`
		}
		// 解决GET请求缓存
		if (config.method === 'get') {
			config.params = Object.assign({t: +new Date()}, config.params)
		}
	})

	// 请求返回
	$axios.onResponse((response) => {
		// code为非0是抛错 可结合自己业务进行修改
		const res = response.data

		if (process.server) {
			// 服务端渲染就输出日志
			console.log(`\x1B[32m=====================> 响应开始 url:%s================\x1B[39m`, response.config.url)
			return response
		} else {
			if (res.code == 0) {
				// 成功返回
				return response
			} else if (res.code == 401 || res.code == 403) {
				// 未授权重定向至登录页
				return redirect(address.USERCENTER_ADDRESS + '/login')
			} else {
				// 弹出错误提示
				Message({
					message: res.desc,
					type: 'error',
					duration: 5 * 1000
				})
				return response
			}
		}
	})

	// 请求出错
	$axios.onResponseError((error) => {
		// 清空错误cookie 防止错误信息带给其它用户
		$axios.defaults.headers.common.cookie = ''

		// 服务端渲染就输出日志
		if (process.server) {
			console.log(`\x1B[31mError:======>${error.response.status}: ${error.response.config.url}, ${codeMessage[error.response.status]}\x1B[39m\n\n\n`)
		} else {
			Message({
				message: codeMessage[error.response.status],
				type: 'error',
				duration: 5 * 1000
			})
		}
	})
}
