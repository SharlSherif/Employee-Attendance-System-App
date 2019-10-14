
const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId
const moment = require('moment')

const attendance = mongoose.Schema({
    empFK: {
        type: ObjectID,
        required: true,
        ref: 'employee'
    },
    siteFK: {
        type: ObjectID,
        required: true,
        ref: 'site'
    },
    signedIn: {// date with hour when employee signed in
        type: String,
        required: true
    },
    signedOut: { // date with hour when employee signed out
        type: String,
        default: null
    },

    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: String,
        default: moment(Date.now()).format('DD-MM-YYYY hh:mm:ss A')
    },
    isDeleted: { type: Boolean, default: false },
});

attendance.pre('save', function (next) {
    console.log(this._doc)
    this._doc.signedIn = moment(Number(this._doc.signedIn)).format('DD-MM-YYYY hh:mm:ss A');

    next();
});

module.exports = mongoose.model('attendance', attendance);
