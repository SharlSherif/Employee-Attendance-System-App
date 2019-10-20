const responseObject = require('../helpers/responseObject')
const { encode, decode } = require('../helpers/jwt')
const Emp = require('../models/employee.model')

class AuthController {
    static async login(req, res) {
        const { companyCode, employeeNumber } = req.body;

        const emp = await Emp.findOne({ companyCode, employeeNumber }).populate('companyID').exec()
        console.log(emp)
        if (emp !== null) {
            let token = encode(JSON.stringify(emp._id))
            res.setHeader('token', token) // set token in header
            res.status(200).send(responseObject(true, this.safeEmployeeObject(emp), 'Logged in')) // send a response
        } else {
            res.status(404).send(responseObject(false, null, 'Employee not found'))
        }
    }

    static safeEmployeeObject(emp) {
        return {
            name:emp.name,
            jobTitle: emp.jobTitle,
            company: {
                name: emp.companyID.name,
                location: emp.companyID.location,
            }
        }
    }
}

module.exports = AuthController