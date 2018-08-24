import Vue from 'vue'
import moment from './moment'
import cutstr from './cutstr'

const filters = {
	moment,
	cutstr
}

// 注册过滤器
for (let key in filters) {
	Vue.filter(key, filters[key])
}
