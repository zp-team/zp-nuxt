import Vue from 'vue'

/**
 * [LazyLoadPic]
 * 为懒加载图片添加CND路径
 * @version [version]
 * @param   {String}  url [处理的Url]
 * @return 	{String}
 */

function LazyLoadPic (url = {}) {
	return Vue.filter('imgCdn')(url)
}

/**
 * [ObjectMap]
 * 将对象中那些值为undefined、null、NaN的属性删除掉
 * @version [version]
 * @param   {Object}  obj [处理的对象]
 * @return 	{Object}  newObject [处理后的新对象]
 */
function ObjectMap (obj = {}) {
	let newObject = {}

	for (let key of Object.keys(obj)) {
		const value = obj[key]
		if (typeof value !== 'undefined' && value !== '' && value !== null && !Number.isNaN(value) && value !== -1) {
			newObject[key] = value
		}
	}

	return newObject
}

/**
 * [ArrayFind]
 * 执行该方法让不支持数组find方法的浏览器支持
 * 当前版本的babel(v7.2.3)也不能转义
 * @version [version]
 */
function ArrayFind () {
	if (!Array.prototype.find) {
		Object.defineProperty(Array.prototype, 'find', {
			value: function (predicate) {
				// 1. Let O be ? ToObject(this value).
				if (this == null) {
					throw new TypeError('"this" is null or not defined')
				}

				var o = Object(this)

				// 2. Let len be ? ToLength(? Get(O, "length")).
				var len = o.length >>> 0

				// 3. If IsCallable(predicate) is false, throw a TypeError exception.
				if (typeof predicate !== 'function') {
					throw new TypeError('predicate must be a function')
				}

				// 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
				var thisArg = arguments[1]

				// 5. Let k be 0.
				var k = 0

				// 6. Repeat, while k < len
				while (k < len) {
					// a. Let Pk be ! ToString(k).
					// b. Let kValue be ? Get(O, Pk).
					// c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
					// d. If testResult is true, return kValue.
					var kValue = o[k]
					if (predicate.call(thisArg, kValue, k, o)) {
						return kValue
					}
					// e. Increase k by 1.
					k++
				}

				// 7. Return undefined.
				return undefined
			}
		})
	}
}

/**
 * [ArrayIncludes]
 * 执行该方法让不支持数组includes方法的浏览器支持
 * 当前版本的babel(v7.2.3)也不能转义
 * @version [version]
 */
function ArrayIncludes () {
	// https://tc39.github.io/ecma262/#sec-array.prototype.includes
	if (!Array.prototype.includes) {
		Object.defineProperty(Array.prototype, 'includes', {
			value: function (searchElement, fromIndex) {
				// 1. Let O be ? ToObject(this value).
				if (this == null) {
					throw new TypeError('"this" is null or not defined')
				}

				var o = Object(this)

				// 2. Let len be ? ToLength(? Get(O, "length")).
				var len = o.length >>> 0

				// 3. If len is 0, return false.
				if (len === 0) {
					return false
				}

				// 4. Let n be ? ToInteger(fromIndex).
				//    (If fromIndex is undefined, this step produces the value 0.)
				var n = fromIndex | 0

				// 5. If n ≥ 0, then
				//  a. Let k be n.
				// 6. Else n < 0,
				//  a. Let k be len + n.
				//  b. If k < 0, let k be 0.
				var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0)

				// 7. Repeat, while k < len
				while (k < len) {
					// a. Let elementK be the result of ? Get(O, ! ToString(k)).
					// b. If SameValueZero(searchElement, elementK) is true, return true.
					// c. Increase k by 1.
					// NOTE: === provides the correct "SameValueZero" comparison needed here.
					if (o[k] === searchElement) {
						return true
					}
					k++
				}

				// 8. Return false
				return false
			}
		})
	}
}

/**
 * 获取一个元素到指定元素的距离
 * @param el        获取距离的元素
 * @param target    目标元素
 * @return offset   距离json
 * @version [version]
 */
function offset (el, target) {
	let offset = {
		top: 0,
		left: 0
	}

	while (el && el !== target) {
		offset.top += el.offsetTop
		offset.left += el.offsetLeft

		el = el.offsetParent
	}

	return offset
}

/**
 * 绑定的对象值是否新旧相等
 */
function notChanged (binding) {
	if (binding.oldValue !== undefined) {
		if (typeof binding.value === 'object') {
			return binding.value.toString() === binding.oldValue.toString()
		} else {
			return binding.value === binding.oldValue
		}
	} else {
		return false
	}
}

/**
 * 对象是否为空
 */
function isEmpty (binding) {
	return binding.value === '' || binding.value === undefined || binding.value === null
}

export {
	LazyLoadPic,
	ObjectMap,
	ArrayFind,
	offset,
	ArrayIncludes,
	notChanged,
	isEmpty
}
