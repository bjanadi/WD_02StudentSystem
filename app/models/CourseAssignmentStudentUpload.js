const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseAssignmentStudentUploadSchema = new Schema({
    courseId: {
        type: String
    },
    assignmentId: {
        type: String
    },
    studentId: {
        type: String
    },
    upload: {
        type: String
    }
});

module.exports = CourseAssignmentStudentUploadModel = mongoose.model('courseassignmentstudentupload',CourseAssignmentStudentUploadSchema);