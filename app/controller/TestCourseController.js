const express = require('express');
const TestCourseRouter = express.Router();

const TestCourse = require('../models/TestCourse');

TestCourseRouter.get('/get-test-courses',(req,res) => {
   TestCourse.find()
       .then(testcourses => res.json(testcourses))
});

TestCourseRouter.post('/add-test-course', (req,res) => {
    const newTestCourse = new TestCourse({
        name:req.body.name,
        code:req.body.code,
        credits:req.body.credits,
    });
    newTestCourse.save()
        .then(testcourse => res.json(testcourse))
});

module.exports = TestCourseRouter;