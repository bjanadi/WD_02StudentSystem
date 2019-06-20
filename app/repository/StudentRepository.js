const mongoose = require('../models/Student');
                 require('../models/StudentCourse');
const StudentModel = mongoose.model('student');
const StudentCourseModel = mongoose.model('student');


const StudentRepository = function () {
    //insert the new students
    this.insertStudent = (student) => {
        return new Promise((resolve, reject) => {
            const newStudent = new StudentModel({
                name: student.name,
                password: student.password,
                email: student.email,
                itnumber:student.itnumber,
                phone: student.phone
            });

            newStudent.save().then(() => {
                resolve({status: 200, message: "Student is successfully added"});
            }).catch(err => {
                reject({status: 500, message: "Error: " + err})
            })
        })
    };

    //get all the students
    this.getAllStudents = () => {
        return new Promise((resolve, reject) => {
            StudentModel.find().exec().then((student) => {
                resolve({status: 200, students: student})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    }
};

module.exports = new StudentRepository();