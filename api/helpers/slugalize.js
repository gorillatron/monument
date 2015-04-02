
module.exports = function slugalize(string) {
	return string.toLowerCase().replace(/\s/g, '')
}
