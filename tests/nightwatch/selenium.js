/**
 * Selenium version configuration.
 * Selenium will read all of these and verify itself to make sure everything is installed.
 */

const process = require('process')

module.exports = {
	// Check latest version here: https://selenium-release.storage.googleapis.com/index.html
	selenium: {
		version: '3.4.0',
		baseURL: 'http://npm.taobao.org/mirrors/selenium/'
	},

	driver: {
		firefox: {
			version: '0.19.1',
			arch: process.arch,
			baseURL: 'https://npm.taobao.org/mirrors/geckodriver'
		},

		chrome: {
			// Check latest version here: https://chromedriver.storage.googleapis.com/index.html
			version: '2.35',
			arch: process.arch,
			baseURL: 'https://npm.taobao.org/mirrors/chromedriver'
		}

		// ie: {
		//   // Check latest version here: https://selenium-release.storage.googleapis.com/index.html
		//   version: '3.4.0',
		//   arch: process.arch,
		//   baseURL: 'https://www.nuget.org/packages/Selenium.WebDriver.IEDriver/'
		// },

		// edge: {
		//   version: '15063'
		// }
	}
}
