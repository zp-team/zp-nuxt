export default function ({ app, res, req}) {
  // 为node请求添加cookie  浏览器自带不需要添加
  if (process.server) {
    app.$axios.defaults.headers.common.cookie = req.headers.cookie || ''
  }
}
