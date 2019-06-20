const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSessionSchema = new Schema({
    studentID: {
        type: String,
        default: ''
    },
    timestamp: {
        type: Date,
        default:Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model('studentsession',StudentSessionSchema);