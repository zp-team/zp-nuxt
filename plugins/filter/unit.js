const unit = (val) => {
	const val2 = parseInt(val, 10)
	if (val && typeof val2 === 'number' && !Number.isNaN(val2)) {
		return ['', '吨', '千克'][val2]
	} else {
		return val
	}
}

export default unit
