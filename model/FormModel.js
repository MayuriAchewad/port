const mongoose = require("mongoose")

const FormModel = mongoose.model("forms",{
    name : {type:String},
    email : {type:String},
    subject : {type:String},
    message : {type:String},
})

module.exports= FormModel;