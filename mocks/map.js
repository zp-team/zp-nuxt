const apis = require('./apis')
const prePath = '/mock'

module.exports = {
	// 通用接口
	[`${prePath}/fail`]: apis.fail,

	// 登录相关
	[`${prePath}/user/login`]: apis.user['login'],
	[`${prePath}/user/logout`]: apis.user['logout'],
	[`${prePath}/user/userInfo`]: apis.user['userInfo']

}
