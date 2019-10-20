
const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId
const moment = require('moment')
const uuidv1 = require('uuid/v1');

const company = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    code: {
        type: String,
        unique: true,
        default: function () {
            let code = uuidv1().split('-')[0]
            return code.toLowerCase()
        }
    },
    icon: {
        type: String
    },
    employees: [{
        type: ObjectID,
        required: true,
        ref: 'employee'
    }],
    location: {
        lat: {
            type: String,
            required: true
        },
        lang: {
            type: String,
            required: true
        }
    },
    createdAt: {
        type: String,
        default: moment(Date.now()).format('DD-MM-YYYY hh:mm:ss A')
    },
    isDeleted: { type: Boolean, default: false },
});

module.exports = mongoose.model('company', company);