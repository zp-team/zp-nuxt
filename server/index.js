import Koa from 'koa'
// import bodyParser from 'body-parser'
import { Nuxt, Builder } from 'nuxt'

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 1000
const config = require('../nuxt.config.js') // 导入Nuxt.js选项
const nuxt = new Nuxt(config) // 初始化NUXT

// app.use(bodyParser.json()) // 用于NODE请求体解析application/json格式
// app.use(bodyParser.urlencoded({ extended: true })) // 用于NODE请求体解析application/x-www-form-urlencoded格式

// 只有在开发环境才会打包 生产环境参照服务器部署打包
if (process.env.NODE_CONFIG === 'dev') {
	const builder = new Builder(nuxt)
	builder.build()
}

app.use(async (ctx, next) => {
	await next()
	ctx.status = 200
	return new Promise((resolve, reject) => {
		ctx.res.on('close', resolve)
		ctx.res.on('finish', resolve)
		nuxt.render(ctx.req, ctx.res, promise => {
			promise.then(resolve).catch(reject)
		})
	})
})

// 监听端口
app.listen(port)
console.log('Server listening on ' + host + ':' + port)
