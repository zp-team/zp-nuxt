// 账户信息
const accountConfig = {
	username: '15268177065',
	password: 'z12345678'
}

module.exports = {
	'Login Test': function (client) {
		client.url('http://127.0.0.1:1000').maximizeWindow()

		// 启动页面
		client.expect.element('body').to.be.present.before(3000)

		// 登录
		client.click('.el-button--primary')
		client.waitForElementVisible('.el-dialog__wrapper', 3000)
		client.frame(0)
		client.pause(1000)
		client.setValue('input[type="text"]', accountConfig.username)
		client.setValue('input[type="password"]', accountConfig.password)
		client.click('.login-btn')

		// 等待页面是否加载完成
		client.frameParent()
		client.expect.element('body').to.be.present.before(3000)

		// 登录完成后截图
		client.saveScreenshot('reports/login-success.png')

		client.pause(2000)

		client.end()
	}
}
