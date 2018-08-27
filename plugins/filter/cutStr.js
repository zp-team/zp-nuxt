/**
 * 字符串截取
 * 使用方法：{{ str | cutstr(8) }}
 * @param {string} str  待处理字符串
 * @param {number} len  截取位数
 */
const cutstr = (str = '', len = 8) => {
	let result = ''
	let strlen = str.length
	let chrlen = str.replace(/[^\x00-\xff]/g, '**').length
	if (!((typeof str === 'string') && str.constructor === String)) {
		return ''
	}
	if (chrlen <= len) {
		return str
	}
	for (let i = 0, j = 0; i < strlen; i++) {
		let chr = str.charAt(i)
		if (/[\x00-\xff]/.test(chr)) {
			j++ // ascii码为0-255，一个字符就是一个字节的长度
		} else {
			j += 2 // ascii码为0-255 以外，一个字符就是两个字节的长度
		}
		if (j <= len) { // 当加上当前字符以后，如果总字节长度小于等于L，则将当前字符真实的+在result后
			result += chr
		} else { // 反之则说明result已经是不拆分字符的情况下最接近L的值了，直接返回
			return result + '...'
		}
	}
}

export default cutstr
