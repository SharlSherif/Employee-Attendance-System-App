const moment = require('moment')
const CRUD = require('../helpers/crud')
const { decode } = require('../helpers/jwt')
const Emp = require('../models/employee.model')
//
const AttendanceController = require('./attendance.controller')
const SiteController = require('./site.controller')

class EmployeeController {
    static async getData(req, res) {
        await CRUD.getData(Emp, false) // autopopulate off
            .then(async response => {
                res.status(201).send(response)
            })
            .catch(err => {
                res.status(400).send(err)
            })
    }

    static async create(req, res) {
        await CRUD.create(req.body, Emp)
            .then(response => {
                res.status(201).send(response)
            })
            .catch(err => {
                res.status(400).send(err)
            })
    }

    static async signInRoute(req, res) {
        // empID should be extracted from the AUTH token provided by the client-side
        const { site_token } = req.params
        const isObjectID = /^[0-9a-fA-F]{24}$/
        const site = decode(site_token);
        // if not a valid object id
        if (!isObjectID.test(site._id)) return res.status(400).send()

        const site_id = site._id;
        //! for testing
        req.body = { empID: '5d99b512cd08403c9446cf92', ...req.body }
        const { time, empID } = req.body

        try {
            const response = await CRUD.getOne(Emp, '', { _id: empID }) // autopopulate on
            // if the employee was not found
            if (!response) return res.status(403).send(response)

            const currentSession = await this.getCurrentSession(site_id, empID);

            if (!!currentSession) {
                console.log('Already Signed In', currentSession)
                return res.status(200).send({ message: 'Already Signed In', employee: currentSession, siteDetails: site })
            } else {
                console.log('Should Sign in')
                const { status, message } = await this.signIn(site_id, req.body)
                console.log(response)
                return res.status(status).send({ message, employee: response, siteDetails: site })
            }
        }
        catch (e) {
            console.log('error: ', e)
        }
    }

    static async signOutRoute(req, res) {
        // empID should be extracted from the AUTH token provided by the client-side
        const { site_token } = req.params
        const isObjectID = /^[0-9a-fA-F]{24}$/
        const site = decode(site_token);
        // if not a valid object id
        if (!isObjectID.test(site._id)) return res.status(400).send()

        const site_id = site._id;
        //! for testing
        req.body = { empID: '5d99b512cd08403c9446cf92', ...req.body }
        const { time, empID } = req.body

        try {
            const response = await CRUD.getOne(Emp, '', { _id: empID }) // autopopulate on
            // if the employee was not found
            if (!response) return res.status(403).send(response)

            const currentSession = await this.getCurrentSession(site_id, empID);

            if (!!currentSession) {
                console.log('Should Sign out..')
                const { status, message, data } = await this.signOut(currentSession, time)
                return res.status(status).send({ message })
            }else {
                return res.status(status).send({ message: 'no session found' })
            }
        }
        catch (e) {
            console.log('error: ', e)
        }
    }

    static async getCurrentSession(site_id, empID) {
        // check if theres an attendance record that's currently running for that specific site and employee ids
        const attendance = await AttendanceController.getOne({ siteFK: site_id, empFK: empID, completed: false })
        console.log('current attendance :', attendance)
        return attendance
    }

    static async signIn(site_id, body) {
        const { time, empID } = body
        const response = await SiteController.getOne(site_id);
        console.log(empID)
        if (response == null) {
            console.log('site doesnt exist');
            return { status: 400, message: 'Site doesnt exist' }
        }; // if the site doesn't exist

        try {
            await AttendanceController.create({
                empFK: empID,
                siteFK: site_id,
                signedIn: time
            })
            return { status: 201, message: 'Signed In Successfully' }
        }
        catch (e) {
            return { status: 400, message: e }
        }
    }

    static async signOut(currentSession, signOutTime) {
        try {
            await AttendanceController.update(currentSession._id, { signedOut: moment(Number(signOutTime)).format('DD-MM-YYYY hh:mm:ss A'), completed: true })
            console.log('Signed Out !')
            return { status: 200, message: 'Signed Out Successfully' }
        } catch (e) {
            console.log(e)
            return { status: 400, message: e }
        }
    }

    static async update(req, res) {
        await CRUD.updateOne(Emp, { _id: req.params.id }, { $set: req.body })
            .then(response => {
                res.status(201).send(response)
            })
            .catch(err => {
                res.status(400).send(err)
            })
    }

    static async delete(req, res) {
        await CRUD.delete(Emp, { _id: req.params.id })
            .then(response => {
                res.status(201).send(response)
            })
            .catch(err => {
                res.status(400).send(err)
            })
    }
}

module.exports = EmployeeController