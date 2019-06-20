const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentCourseSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref:'student'
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref:'testcourse'
    }
});


module.exports = StudentCourseModel = mongoose.model('studentcourse',StudentCourseSchema);