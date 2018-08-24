/**
 * 根据不同的环境替换配置文件
 * dev 开发环境； dev 开发环境； test 测试环境； pre 预发环境； prod 生产环境
 */

const NODE_ENV = {
	dev: {
		// CDN 服务器
		CDN_ADDRESS: '/_nuxt/',
		// API 服务器
		SERVER_ADDRESS: 'http://api.jumoreys.com.pre', 
		// 认证中心
		USERCENTER_ADDRESS: 'https://passport.jumore.test', 
		// 中台地址
		CENTER_ADDRESS: 'https://ecenter.jumore.test',
		// 图片服务器
		IMG_ADDRESS: 'https://img.jumore.com.pre',
		// 图片上传服务器
		UPLOAD_ADDRESS: 'http://image5.jm.com'
	},
	test: {
		// CDN 服务器
		CDN_ADDRESS: '/_nuxt/',
		// API 服务器
		SERVER_ADDRESS: 'http://api.jumoreys.test',
		// 认证中心
		USERCENTER_ADDRESS: 'https://passport.jumore.test',
		// 中台地址
		CENTER_ADDRESS: 'https://ecenter.jumore.test',
		// 上传地址
		UPLOAD_ADDRESS: 'http://image5.jm.com',
		// 图片服务器
		IMG_ADDRESS: 'https://image.jumore.test'
	},
	pre: {
		// CDN 服务器
		CDN_ADDRESS: 'https://www.jumoresp.com.pre/_gull/',
		// API 服务器
		SERVER_ADDRESS: 'http://api.jumoreys.com.pre',
		// 认证中心
		USERCENTER_ADDRESS: 'https://prepassport.jumore.com/cas',
		// 中台地址
		CENTER_ADDRESS: 'https://ecenter.jumore.com.pre',
		// 上传地址
		UPLOAD_ADDRESS: 'https://uploadapi.jumore.com.pre',
		// 图片服务器
		IMG_ADDRESS: 'https://img.jumore.com.pre'
	},
	prod: {
		// CDN 服务器
		CDN_ADDRESS: 'https://www.jumoresp.com/_gull/',
		// API 服务器
		SERVER_ADDRESS: 'http://api.jumoreys.com',
		// 认证中心
		USERCENTER_ADDRESS: 'https://passport.jumore.com/cas',
		// 中台地址
		CENTER_ADDRESS: 'https://ecenter.jumore.com',
		// 上传地址
		UPLOAD_ADDRESS: 'https://uploadapi.jumore.com',
		// 图片服务器
		IMG_ADDRESS: 'https://img.jumore.com'
	}
}

module.exports = NODE_ENV[process.env.NODE_CONFIG]
