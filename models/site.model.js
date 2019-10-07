
const mongoose = require('mongoose');
const moment = require('moment')

const site = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
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

module.exports = mongoose.model('site', site);
