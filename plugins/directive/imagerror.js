/**
 * 图片加载出错
 * @param  {[type]} ele     [description]
 * @param  {[type]} binding [description]
 * @return {[type]}         [description]
 */
const imageError = (ele, binding) => {
	const photo = binding.modifiers.photo
	let errorDefault = require('~/assets/img/default.jpg')
	if (photo) {
		errorDefault = require('~/assets/img/default-photo.png')
	}

	const halder = () => {
		ele.src = errorDefault
		ele.removeEventListener('error', halder)
	}

	ele.addEventListener('error', halder)
}

export default {
	inserted: imageError
}
