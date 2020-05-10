var mongoose = require('mongoose');

//Schema
var assignmentSchema = mongoose.Schema({
    courseName: {
        type: String,
    },
    assignmentName: {
    type: String,
    require: true
    },
    dueDate: {
        type: Date
    }
}, { versionKey: false })


//Export
var Assignment = module.exports = mongoose.model('assignment', assignmentSchema);

module.exports.get = function (callback, limit) {
    Assignment.find(callback).limit(limit);
}