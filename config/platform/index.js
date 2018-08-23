/** 
 * 根据不同的环境替换平台配置文件 
 *  test 测试环境； pre 预发环境； prod 生产环境
 */
import platformTest from './platform.test'
import platformPre from './platform.pre'
import platformProd from './platform.prod'

const platforms = {
	dev: platformTest,
	test: platformTest,
	pre: platformPre,
	prod: platformProd
}

export default platforms[process.env.NODE_CONFIG]
