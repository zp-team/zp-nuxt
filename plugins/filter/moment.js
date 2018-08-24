/**
 * 日期格式化
 * 使用方法：{{ val |　moment('YYYY-MM-DD hh:mm:ss') }}
 * 如需更多功能的时间库，请移步《http://momentjs.cn/》
 * @param {number, string} val  时间戳或者其它时间格式
 * @param {string} fmt  格式类型 
 */

const moment = (val, fmt) => {
	let date

	if (!val) {
		return val
	} else if (typeof val === 'number') {
		date = new Date(val)
	} else if (typeof val == 'string') {
		date = val.indexOf('-') > -1 ? new Date(val.replace(/-/g, '/')) :  new Date(parseInt(val, 10))
	} else if(typeof date === 'object' && typeof date.getDate !== 'function') {
		date = val
	} else {
		return val
	}

	let o = {
		'M+': date.getMonth() + 1,
		'D+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds(),
		'q+': Math.floor((date.getMonth() + 3) / 3),
		'S': date.getMilliseconds()
	}

	if (/(Y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length))
	}

	Object.keys(o).forEach((key) => {
		if (new RegExp(`(${key})`).test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[key]) : ((`00${o[key]}`).substr((`${o[key]}`).length)))
		}
	})

	return fmt
}

export default moment
