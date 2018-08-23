
/**
 * [根据]
 * @param  {[String]} val [传入的地址]
 * @return {[String]}     [输出添加路径后的地址]
 */

const getArrIndex = (val, index) => {
	if (!!val && val.length > 0) {
		var arr = val.split(',')
		return arr[index]
	} else {
		return ''
	}
}

export default getArrIndex
