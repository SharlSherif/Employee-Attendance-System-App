const CRUD = require('../helpers/crud')
const Attendance = require('../models/Attendance.model')

class AttendanceController {
    static async getData(req, res) {
        await CRUD.getData(Attendance, false) // autopopulate off
            .then(async response => {
                res.status(201).send(response)
            })
            .catch(err => {
                res.status(400).send(err)
            })
    }

    static async create(body) {
        let result;

        try {
            result = await CRUD.create(body, Attendance)

        } catch (e) {
            result = e
        }

        return result
    }

    static async getOne(body) {
        let result;
        try {
            result = await Attendance.findOne(body).exec() // autopopulate on
        } catch (e) {
            result = e
        }

        return result
    }

    static async getEmpAttendance(req, res) {
        const { site_id } = req.params
        //! for testing
        const empID = '5d99b512cd08403c9446cf92' // this should be extracted from auth token

        await CRUD.getOne(Attendance, true, {siteFK:site_id, empFK: empID, completed:false})
        .then((response)=>{
            // if(response == null) return res.status(404).send()

            res.status(200).send(response)
        })
        .catch(e=> res.status(400).send(e))
    }

    static async update(_id, body) {
        let result;
        try {
            result = await CRUD.updateOne(Attendance, { _id }, body)
        } catch (e) {
            result = e
        }

        return result
    }

    static async updateRoute(req, res) {
        await CRUD.updateOne(Attendance, { _id: req.params._id }, { $set: req.body })
            .then(response => {
                res.status(201).send(response)
            })
            .catch(err => {
                res.status(400).send(err)
            })
    }


    static async delete(req, res) {
        await CRUD.delete(Attendance, { _id: req.params.id })
            .then(response => {
                res.status(201).send(response)
            })
            .catch(err => {
                res.status(400).send(err)
            })
    }
}

module.exports = AttendanceController