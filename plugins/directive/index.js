import Vue from 'vue'
import lazyload from './lazyload'

const directives = {
	lazyload,
}

// 注册指定
Object.keys(directives).forEach((key) => {
	Vue.directive(key, directives[key])
})
