const express = require('express');
const app = express();
const StudentController = require('../controller/StudentController');
const TestCourseController = require('../controller/TestCourseController');


app.use('/students', StudentController);
app.use('/testcourses', TestCourseController);


module.exports = app;