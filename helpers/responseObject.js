const responseObject = (isSuccess, data = undefined, message) => ({ success: isSuccess, data, message })

module.exports = responseObject