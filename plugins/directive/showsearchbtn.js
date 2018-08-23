/**
 * 定义图片加载监听事件
 * @param  {[type]} ele     [description]
 * @param  {[type]} binding [description]
 * @return {[type]}         [description]
 */

const SearchBtnMore = (ele) => {
	const btn = ele.querySelector('.btn-showmore')
	const lists = ele.querySelector('.r-lists')
	const li = lists.querySelector('li')
	const liHeight = li.offsetHeight

	if (lists.offsetHeight > liHeight) {
		btn.style.display = 'inline-block'
	} else {
		btn.style.display = 'none'
	}
}

export default {
	inserted: SearchBtnMore
}
