const CRUD = require('../helpers/crud')
const Comp = require('../models/company.model')
//

class CompanyController {
    static async getData(req, res) {
        await CRUD.getData(Comp, false) // autopopulate off
            .then(async response => {
                res.status(201).send(response)
            })
            .catch(err => {
                res.status(400).send(err)
            })
    }

    static async getOne(req, res) {
        let compCode = req.params.code;
        if (!compCode) return res.status(400).send()
        
        await CRUD.getOne(Comp, false, { code: compCode.toLowerCase() }) // autopopulate off
            .then(async response => {
                if (!response.success) {
                    return res.status(404).send(response)
                }

                return res.status(200).send(response)
            })
            .catch(err => {
                res.status(400).send(err)
            })
    }

    static async create(req, res) {
        await CRUD.create(req.body, Comp)
            .then(response => {
                res.status(201).send(response)
            })
            .catch(err => {
                res.status(400).send(err)
            })
    }

    static async update(req, res) {
        await CRUD.updateOne(Comp, { _id: req.params.id }, { $set: req.body })
            .then(response => {
                res.status(201).send(response)
            })
            .catch(err => {
                res.status(400).send(err)
            })
    }

    static async delete(req, res) {
        await CRUD.delete(Comp, { _id: req.params.id })
            .then(response => {
                res.status(201).send(response)
            })
            .catch(err => {
                res.status(400).send(err)
            })
    }
}

module.exports = CompanyController