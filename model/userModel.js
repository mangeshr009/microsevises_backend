const mongoose = require('mongoose');
const userSchema =mongoose.Schema ({
    FirstName:{
        type:String
    },

    Email:{
        type:String
    },
    Password:{
        type:String
    },
    dob:{
        type:String
    },
    mobileno:{
        type:Number
    }
    
})


   

module.exports= mongoose.model("user",userSchema)