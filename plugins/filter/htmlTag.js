const htmlTag = (val) => {
	if (typeof val === 'string') {
		return val.replace(/<[^>]+>/g, '')
	} else {
		return val
	}
}

export default htmlTag
