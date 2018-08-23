const address = require('./config')

module.exports = {
	env: {
		NODE_CONFIG: process.env.NODE_CONFIG || 'dev'
	},
	// 设置缓存
	cache: {
	  max: 1000,       // 组件缓存数
	  maxAge: 900000   // 15分钟
	},
	cache: true,
	transition: 'page',
	/*
   ** Headers of the page
   */
	head: {
		title: '标题',
		meta: [{
			charset: 'utf-8'
		}, {
			hid: 'keyword',
			name: 'keyword',
			content: '关键词'
		}, {
			'http-equiv': 'X-UA-Compatible',
			content: 'IE=edge,chrome=1'
		}, {
			name: 'renderer',
			content: 'webkit'
		}, {
			hid: 'description',
			name: 'description',
			content: '描述'
		}],
		link: [{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico'
		}]
	},

	router: {
		middleware: ['ssr-cookie']
	},
	modules: [
		['@nuxtjs/axios', '@nuxtjs/proxy']
	],
	proxy: {
		'/api': {
			target: address.SERVER_ADDRESS,
			ws: false
		},
		'/sso': {
			target: address.SERVER_ADDRESS + '/api',
			ws: false
		}
	},

	/*
   ** Global CSS '~/node_modules/element-ui/lib/theme-default/index.css',
   * ~/theme/index.css
   */
	css: ['~/assets/scss/index.scss', '~plugins/swiper/swiper.css'],
	/*
   ** Add axios globally
   */
	plugins: [
		'~plugins/element-ui',
		'~/plugins/axios',
		'~plugins/filter/',
		'~plugins/directive/'
	],
  axios: {
    retry: { retries: 3 },
    browserBaseURL: '',
    proxy: true,
    headers: {
      post: {'Content-Type': 'application/json'} // 设置请求头
    }
  },
	build: {
		filenames: {
			css: 'styles.[chunkhash].css'
		},
		extractCSS: {
			allChunks: true
		},
		vendor: ['babel-polyfill', 'eventsource-polyfill', 'axios', 'element-ui'],
		babel: {
			plugins: [
				['component', [{
					libraryName: 'element-ui',
					styleLibraryName: 'theme-chalk'
				}]]
			]
		},
		// 添加浏览器前缀
		postcss: [
			require('autoprefixer')({
				browsers: ['last 3 versions']
			})
		],
		publicPath: address.CDN_ADDRESS,
		extend (config) {
		}
	},
	/*
   ** Run ESLINT on save
   */
	extend (config, ctx) {
		if (ctx.isClient) {
			config.module.rules.push({
				enforce: 'pre',
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				exclude: [/(node_modules)/, /e2e/]
			})
		}
	}
}
