/**
 * [搜索功能测试]
 * 步骤：
 * 1. yarn chrome
 * 1. node ./e2e/startup.js -t ./e2e/tests/search.js -e chrome --verbose
 * @type {Object}
 */

module.exports = {
	before: function (client) {
		client.url('https://www.jumoresp.com').maximizeWindow()
	},

	'Jumoresp Search Test': function (client) {
		// 确保页面加载完成 并搜索按纽显示.
		client.expect.element('body').to.be.present
		client.expect.element('input.search-input').to.be.visible

		client.pause(3000)

		// 输入大米然后点击搜索.
		client.setValue('input.search-input', '大米')
		client.click('.search-btn')
		client.clearValue('input.search-input')

  	client.window_handles(function (result) {
     var handle = result.value[1]
     client.switchWindow(handle)
 		})

		client.pause(1000)
		client.click('.grid-product  a:first-child')

		client.pause(2000)
	  	client.window_handles(function (result) {
	     var handle = result.value[2]
	     client.switchWindow(handle)
   		})
	  	client.closeWindow()

		// 采购点击搜索.
		client.window_handles(function (result) {
	     var handle = result.value[1]
	     client.switchWindow(handle)
   		})

		client.click('.search-type>li:nth-of-type(2)')
		client.click('.search-btn')

		client.pause(1000)
		client.click('a.goshop')

		client.pause(2000)
	  	client.window_handles(function (result) {
	     var handle = result.value[2]
	     client.switchWindow(handle)
   		})
	  	client.closeWindow()

	    // 输入企业后点击搜索.
		client.window_handles(function (result) {
	     var handle = result.value[1]
	     client.switchWindow(handle)
   		})

	    client.click('.search-type>li:nth-of-type(3)')
	    client.click('.search-btn')
	    client.pause(1000)

	    client.click('.purchase:first-child>header>a')
	    client.pause(5000)

	    client.end()
	}
}
