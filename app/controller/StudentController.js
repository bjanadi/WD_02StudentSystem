const express = require('express');
const router = express.Router();
const StudentRepository = require('../repository/StudentRepository');
const Student = require('../models/Student');
const StudentSession = require('../models/StudentSession');
const StudentCourse = require('../models/StudentCourse');
const CourseAssignmentStudentUpload = require('../models/CourseAssignmentStudentUpload');



//GETTING ALL THE STUDENTS
router.get('/get-students', (req, res, next) => {
    StudentRepository.getAllStudents().then((students) => {
        res.status(students.status).send(students.students)
    }).catch(err => {
        res.status(err.status).send(err.message)
    })
});

//REGISTER A STUDENT
router.post('/register-student', (req, res, next) => {
    const body = req.body;
    StudentRepository.insertStudent(body).then((data) => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send(err.message)
    })
});

//LOGGING INTO THE SYSTEM
router.post('/login-student' , (req,res,next) => {
    const{body} = req;
    const {
        password
    }= body;
    let {
        email
    } = body;
    email= email.toLowerCase();

    if(!email){
        return res.send({
            success:false,
            message: 'Error: Email cannot be blank'
        });
    }
    if(!password){
        return res.send({
            success:false,
            message:'Error: Password cannot be blank'
        })
    }
     Student.find({
         email:email
     },(err, students) => {
        if(err){
            return res.send({
                success:false,
                message: 'Error: server error'
            });
        }
        if(students.length !== 1 ){
            return res.send({
                success:false,
                message: 'Error: Invalid'
            });
        }
        const student = students[0];
        // if(!student.validPassword(password)){
        //     return res.send({
        //         success:false,
        //         message: 'Error: Invalid Password - passwords dont match'
        //     });
        // }
        const studentSession = new StudentSession();
        studentSession.studentId = student._id;
        studentSession.save((err,doc) => {
            if(err){
                return res.send({
                    success:false,
                    message:'Error:server Error in saving student session'
                });
            }
            return res.send({
                success:true,
                message:'Valid Login',
                token:doc._id
            })
        })
    })
 });

//VERIFYING ITS A STUDENT
router.get('/verify-student' , (req,res,next) => {
    //get the token
    const {query} = req;
    const {token} = query;
    //?token=test

    //verify token is one of a kind
    StudentSession.find({
        _id:token,
        isDeleted:false
    } , (err,sessions) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        if(sessions.length !== 1){
            return res.send({
                success:true,
                message:'Good'
            })
        }
    })
});

//LOGOUT
router.get('/logout-student' , (req,res,next) => {
    //get the token
    const {query} = req;
    const {token} = query;
    //?token=test

    //verify token is one of a kind
    StudentSession.findOneAndUpdate({
        _id : token,
        isDeleted : false
    } ,{
    $set:{
        isDeleted:true
    }
    }, null, (err,sessions) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        return res.send({
            success:true,
            message: 'Good'
        });
    });
});

//Registering a Student to a Course
router.post('/join-a-course', (req,res,next) =>{
  const newStudentCourse= new StudentCourse({
        studentId:req.body.studentId,
        courseId: req.body.courseId
    });
    newStudentCourse.save((err,doc) =>{
        if(err){
            return res.send({
                success:false,
                message:'Error:server Error in saving student session'
            });
        }
        return res.send({
            success:true,
            message:'Joined Successfully',
            token:doc._id
        })
    })
});

//Uploading an Assignment
router.post('/upload-assignment', (req,res) =>{
    const newUpload= new CourseAssignmentStudentUpload({
        courseId: req.body.courseId,
        assignmentId:req.body.assignmentId,
        studentId:req.body.studentId,
        upload:req.body.upload
    });
    newUpload.save()
        .then(upload => res.json(upload) )
});



//getting the students who joined a course
router.get('/studentcourses',(req,res) => {
    StudentCourse.find()
        .populate('studentId')
        .populate('courseId')
        .then(studentcourses => res.json(studentcourses))
});

//getting the courses a particular student has joined
router.get('/studentcourses/:student', (req,res) => {
    const SID= req.params.student;
    StudentCourse.find({studentId:SID})
        .populate('courseId')
        .select('courseId.name')
        .then(students => res.json(students))
});
module.exports = router;