import address from '~/config/index'

const imgCdn = (val) => {
	if (val) {
		return address.IMG_ADDRESS + val
	} else {
		return val
	}
}

export default imgCdn
