// 账户信息
const accountConfig = {
	username: '15268177065',
	password: 'z12345678'
}

module.exports = {
	'Jumoresp Login Test': function (client) {
		client.url('https://www.jumoresp.com').maximizeWindow()

		// 启动页面
		client.expect.element('body').to.be.present.before(3000)
		client.expect.element('.login-info').to.be.visible

		// 登录
		client.click('.login')
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

		// 移动头部显示用户信息.
		client.expect.element('i.user-name').to.be.visible
		client.moveToElement('i.user-name', 5, 5)
		client.pause(800)
		client.expect.element('.user-info>.content').to.be.visible

		// 退出登录.
		client.click('.actions>a.exit')
		client.expect.element('body').to.be.present.before(2000)

		// 跳到中台登录
		client.click('.nav>li>a')
		client.pause(1000)
  	client.window_handles(function (result) {
			var handle = result.value[1]
			client.switchWindow(handle)
 		})

  	client.pause(1000)
		client.setValue('input[name="username"]', accountConfig.username)
		client.setValue('input[name="password"]', accountConfig.password)
  	client.click('#loginBtn')

  	// 校验登录右侧信息
  	client.pause(1000)
  	client.click('.decoration-shop')
  	client.window_handles(function (result) {
  		var handle = result.value[2]
  		client.switchWindow(handle)
  	})

  	client.pause(2000)

  	client.closeWindow()

  	client.window_handles(function (result) {
  		var handle = result.value[1]
  		client.switchWindow(handle)
  	})

  	client.expect.element('body').to.be.present.before(3000)
  	client.click('.tab-title:first-of-type')
  	client.pause(1000)
  	client.click('.tab-title:nth-of-type(2)')
  	client.pause(1000)
  	client.click('.new-lists>ul>li:first-of-type>a')
  	client.window_handles(function (result) {
  		var handle = result.value[2]
  		client.switchWindow(handle)
  	})

  	client.pause(2000)
  	client.closeWindow()

  	client.window_handles(function (result) {
  		var handle = result.value[1]
  		client.switchWindow(handle)
  	})

	  // 移动头部显示用户信息.
	  client.pause(2000)
	  client.expect.element('i.user-name').to.be.visible
	  client.moveToElement('i.user-name', 5, 5)
	  client.pause(800)
	  client.expect.element('.user-info>.content').to.be.visible

	  // 退出登录.
	  client.click('.actions>a.exit')
	  client.pause(2000)

		client.end()
	}
}
