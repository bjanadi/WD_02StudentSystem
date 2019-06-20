const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestCourseSchema = new Schema({
    name: {
        type: String
    },
    code: {
        type: String
    },
    credits: {
        type: Number
    },
    date: {
        type: Date,
        default:Date.now()
    },
});

module.exports = TestCourseModel = mongoose.model('testcourse',TestCourseSchema);