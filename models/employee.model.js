
const mongoose = require('mongoose');
const moment = require('moment')
const ObjectID = mongoose.Schema.Types.ObjectId
const uuidv1 = require('uuid/v1');

const employee = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number
    },
    jobTitle: {
        type: String,
        required: true
    },
    companyID: {
        type: ObjectID,
        required: true,
        ref: 'company'
    },
    employeeNumber: {
        type: String,
        unique: true,
        default: function () {
            let code = uuidv1().split('-')[0]
            return code.toLowerCase()
        }
    },
    contract: {
        type: {
            type: String,
            enum: ['full-time', 'part-time', 'contractor'],
            required: true
        },
        hours: {
            rate: {
                amount: {
                    type: Number,
                    required: true
                },
                currency: {
                    type: String,
                    required: true
                }
            },
            dailyRequired: { // hours this employee has to finish working PER WEEK
                type: Number,
                required: true
            },
            from: {
                amount: {
                    type: Number,
                    required: true
                },
                period: { // AM or PM
                    type: String,
                    required: true
                }
            },
            to: {
                amount: {
                    type: Number,
                    required: true
                },
                period: { // AM or PM
                    type: String,
                    required: true
                }
            }
        }
    },
    joinDate: {
        type: String,
        required: true
    },

    createdAt: {
        type: String,
        default: moment(Date.now()).format('DD-MM-YYYY hh:mm:ss A')
    },
    isDeleted: { type: Boolean, default: false },
});

employee.pre('save', function (next) {
    this._doc.joinDate = moment(Number(this._doc.joinDate)).format('DD-MM-YYYY hh:mm:ss A');
    next();
});

module.exports = mongoose.model('employee', employee);
