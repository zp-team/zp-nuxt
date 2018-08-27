const Koa = require('koa')
const _map = require('./map')
const Mock = require('mockjs')
const app = new Koa()

app.use(async (ctx, next) => {
	await next()
	ctx.res.writeHead(200, {
		'Content-Type': 'application/json;charset=utf-8',
		'Access-Control-Allow-Origin': ctx.req.headers.host,
		'Access-Control-Allow-Methods': '*',
		'Access-Control-Allow-Headers': '*',
		'Access-Control-Allow-Credentials': true
	})

	return new Promise((resolve, reject) => {
		ctx.req.addListener('data', resolve)
		ctx.req.addListener('end', () => {
			console.log('url=>', ctx.req.url)
			const data = _map[ctx.req.url]
				? Mock.mock(_map[ctx.req.url])
				: ''

			setTimeout(() => {
				console.log(data)
				ctx.res.end(JSON.stringify(data))
			}, parseInt(((Math.random() - 0.5) + 1) * 500), 10) // 0-2s的随机数
		})
	})
})

// 监听端口
app.listen(3333)
console.log('正在监听3333端口')
