const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const StudentSchema = new Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    itnumber: {
        type: String
    },
    date: {
        type: Date,
        default:Date.now()
    },
    phone: {
        type: Number
    },
    isDeleted:{
        type:Boolean,
        default: false
    }
});

StudentSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSalt(6), null);
};
StudentSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = StudentModel = mongoose.model('student',StudentSchema);