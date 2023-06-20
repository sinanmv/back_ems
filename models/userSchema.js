//import mongoose
const mongoose=require('mongoose')

//import validator for email
const validator=require('validator')

const userSchema=mongoose.Schema({

    fname:{
        type:String,
        required:true,
        trim:true
    },
    lname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw Error("Invalid Email");
            }
        }
    },
    mobile:{
        type:Number,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
    
    status:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
})

//create model
const users=mongoose.model('users',userSchema)

//export model
module.exports=users
