const responseObject = require('./responseObject')
class CRUD {
    // Create
    static create(body, schema) {
        return new Promise((resolve, reject) => {
            let _schema = new schema(body)
            _schema
                .save()
                .then((data) => {
                    console.log(data)
                    resolve(responseObject(true, data, true, 'Added Successfully'))
                })
                .catch(error => {
                    console.log(error)
                    reject(responseObject(false, null, error))
                })
        })
    }
    // get data
    static getData(schema, autopopulate = false, where = {}, display = {}) {
        return new Promise((resolve, reject) => {
            // condition of find
            where = {
                ...where,
                ...active
            }

            // choose what to or not to display
            let _display = {
                isDeleted: 0,
                ...display
            }

            schema
                .find(where, _display, {
                    autopopulate
                })
                .then(data => {
                    resolve(
                        responseObject(
                            true,
                            data,
                            'Fetched Successfully'
                        )
                    )
                })
                .catch(error => {
                    reject(responseObject(false, null, error))
                })
        })
    }

    static getOne(schema, populate = '', where = {}, display = {}) {
        return new Promise((resolve, reject) => {
            // condition of find
            where = {
                ...where,
                ...active
            }

            // choose what to or not to display
            let _display = {
                isDeleted: 0,
                ...display
            }

            schema
                .findOne(where, _display)
                .populate(populate)
                .then(data => {
                    if (data == null) {
                        resolve(
                            responseObject(
                                false,
                                data,
                                'Not Found'
                            )
                        )
                    } else {
                        resolve(
                            responseObject(
                                true,
                                data,
                                'Fetched Successfully'
                            )
                        )
                    }
                })
                .catch(error => {
                    reject(responseObject(false, null, error))
                })
        })
    }

    static updateOne(schema, where, updates) {
        return new Promise((resolve, reject) => {
            schema
                .updateOne(where, updates)
                .then(data => {
                    if (data.n == 0) {
                        reject(responseObject(false, data, 'no such records'))
                    } else {
                        resolve(responseObject(true, data, 'Updated Successfully'))
                    }
                })
                .catch(error => {
                    reject(responseObject(false, null, error))
                })
        })
    }

    static delete(schema, where) {
        return new Promise((resolve, reject) => {
            this.update_one(schema, where, {
                $set: {
                    isDeleted: true
                }
            })
                .then(response => {
                    resolve(responseObject(true, response, 'Deleted Successfully'))
                })
                .catch(err => {
                    reject(responseObject(false, null, err))
                })
        })
    }
}

const active = {
    $or: [
        {
            isDeleted: {
                $exists: false
            }
        },
        {
            isDeleted: {
                $ne: true
            }
        }
    ]
}
module.exports = CRUD
