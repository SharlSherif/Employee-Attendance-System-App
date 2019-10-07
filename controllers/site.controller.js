const CRUD = require('../helpers/crud')
const Site = require('../models/Site.model')

class SiteController {
    static async getData(req, res) {
        await CRUD.getData(Site, false) // autopopulate off
            .then(async response => {
                res.status(201).send(response)
            })
            .catch(err => {
                res.status(400).send(err)
            })
    }
    
    static async getOne(site_id) {
        let result;
        try {
            result = await Site.findOne({ _id: site_id }).populate('current').exec() // autopopulate on
        } catch (e) {
            result = e
        }

        return result
    }

    static async create(req, res) {
        await CRUD.create(req.body, Site)
            .then(response => {
                res.status(201).send(response)
            })
            .catch(err => {
                res.status(400).send(err)
            })
    }

    static async update(_id, body) {
        let result;
        try {
            result = await CRUD.updateOne(Site, { _id }, body)
        } catch (e) {
            result = e
        }

        return result
    }

    static async updateRoute(req, res) {
        await CRUD.updateOne(Site, { _id: req.params._id }, { $set: req.body })
            .then(response => {
                res.status(201).send(response)
            })
            .catch(err => {
                res.status(400).send(err)
            })
    }

    static async delete(req, res) {
        await CRUD.delete(Site, { _id: req.params.id })
            .then(response => {
                res.status(201).send(response)
            })
            .catch(err => {
                res.status(400).send(err)
            })
    }
}

module.exports = SiteController