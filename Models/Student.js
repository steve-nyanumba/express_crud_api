const mongo = require('mongoose')

const Student = mongo.Schema({
    studentId:{
        unique:true,
        required:true,
        type:Number
    },
    name:{
        required:true,
        type:String
    },
    email:{
        unique:true,
        required:true,
        type:String
    }
})

module.exports = mongo.model('students', Student)