import Vue from 'vue'
import lazyload from './lazyload'
import move from './move'
import showsearchbtn from './showsearchbtn'
import imgerror from './imagerror'

const directives = {
	showsearchbtn,
	lazyload,
	move,
	imgerror
}

Object.keys(directives).forEach((key) => {
	Vue.directive(key, directives[key])
})
