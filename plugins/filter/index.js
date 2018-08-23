import Vue from 'vue'
import imgCdn from './imgCdn'
import timeFlier from './timeFlier'
import cutStr from './cutStr'
import getArrIndex from './getArrIndex'
import unit from './unit'
import htmlTag from './htmlTag'

const filters = {
	imgCdn,
	timeFlier,
	unit,
	htmlTag,
	getArrIndex,
	cutStr
}

// 注册filters到Vue
for (let key in filters) {
	Vue.filter(key, filters[key])
}
