/**
 * 城市选择插入省份
 * @param  {[type]} ele     [description]
 * @param  {[type]} binding [description]
 * @return {[type]}         [description]
 */

const move = (ele, binding, vnode, oldVnode) => {
	// 自定义函数向后插入
	function insertAfter (newElement, targetElement) {
		const parent = targetElement.parentNode

		// 如果最后的节点是目标元素，则直接添加。因为默认是最后
		// parent.appendChild( newElement );
		if (parent.lastChild != targetElement) {
			parent.insertBefore(newElement, targetElement.nextSibling)
		}
	}

	setTimeout(() => {
		const lis = [...ele.querySelectorAll('li')]
		const insterEl = ele.querySelector('.' + binding.arg)
		const lisLength = lis.length

		function instert ($index) {
			insterEl.style.display = 'block'

			if ($index === -1) {
				insterEl.style.display = 'none'
				return
			}
			let index = $index % 6
			if (lisLength - ($index - 1) < 5) {
				ele.appendChild(insterEl)
			} else if (index <= 5) {
				const li = lis[$index + (5 - index)]
				insertAfter(insterEl, li)
			}
		}

		function halder (e) {
			const target = e.target
			const tagName = e.target.tagName.toLowerCase()
			if (tagName === 'li' && target !== insterEl) {
				const $index = lis.indexOf(target)
				instert($index)
			}
		}

		instert(binding.value)

		ele.removeEventListener('click', halder)
		ele.addEventListener('click', halder)
	}, 100)
}

export default {
	inserted: move
}
