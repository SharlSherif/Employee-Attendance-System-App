const jwt = require('jsonwebtoken')

module.exports.encode = payload => jwt.sign(payload, process.env.JWT_SECRET)
module.exports.decode = token => {
    let decoded = jwt.decode(token, process.env.JWT_SECRET)
    console.log('decoded : ', decoded)
    return decoded
}
