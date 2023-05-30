import RETURN_LENGTH from "./config.js"

const concatenateTwoString = (firstStr, secondStr, returnLength = false) => {
	let concat = firstStr.concat(secondStr)
	return (!returnLength) ? concat : concat.length
}

export default concatenateTwoString