/**
 * 根据不同的环境替换配置文件
 * dev 开发环境； dev 开发环境； test 测试环境； pre 预发环境； prod 生产环境
 */

const NODE_ENV = {
	dev: {
		// CDN 服务器
		CDN_ADDRESS: '/_nuxt/',
		// API 服务器
		SERVER_ADDRESS: 'http://127.0.0.1:3333', 
		// 认证中心
		USERCENTER_ADDRESS: 'https://passport.XXX.test', 
		// 中台地址
		CENTER_ADDRESS: 'https://ecenter.XXX.test',
		// 图片服务器
		IMG_ADDRESS: 'https://img.XXX.pre',
		// 图片上传服务器
		UPLOAD_ADDRESS: 'http://image5.XXX.com'
	},
	test: {
		// CDN 服务器
		CDN_ADDRESS: '/_nuxt/',
		// API 服务器
		SERVER_ADDRESS: 'http://127.0.0.1:3333', 
		// 认证中心
		USERCENTER_ADDRESS: 'https://passport.XXX.test',
		// 中台地址
		CENTER_ADDRESS: 'https://ecenter.XXX.test',
		// 上传地址
		UPLOAD_ADDRESS: 'http://image5.XXX.com',
		// 图片服务器
		IMG_ADDRESS: 'https://image.XXX.test'
	},
	pre: {
		// CDN 服务器
		CDN_ADDRESS: 'https://www.XXX.pre/_gull/',
		// API 服务器
		SERVER_ADDRESS: 'http://api.XXX.pre',
		// 认证中心
		USERCENTER_ADDRESS: 'https://prepassport.XXX.com/cas',
		// 中台地址
		CENTER_ADDRESS: 'https://ecenter.XXX.pre',
		// 上传地址
		UPLOAD_ADDRESS: 'https://uploadapi.XXX.pre',
		// 图片服务器
		IMG_ADDRESS: 'https://img.XXX.pre'
	},
	prod: {
		// CDN 服务器
		CDN_ADDRESS: 'https://www.XXX.com/_gull/',
		// API 服务器
		SERVER_ADDRESS: 'http://api.XXX.com',
		// 认证中心
		USERCENTER_ADDRESS: 'https://passport.XXX.com/cas',
		// 中台地址
		CENTER_ADDRESS: 'https://ecenter.XXX.com',
		// 上传地址
		UPLOAD_ADDRESS: 'https://uploadapi.XXX.com',
		// 图片服务器
		IMG_ADDRESS: 'https://img.XXX.com'
	}
}

module.exports = NODE_ENV[process.env.NODE_CONFIG]
