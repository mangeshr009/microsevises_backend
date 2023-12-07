const jwt = require('jsonwebtoken')
const user = require('../../model/userModel')
const isLogin  = async(req,res,next)=>{
    const {username,password} = req.body;
    let userData = await user.findOne({username:username})
    console.log(userData);
    if (!userData) {
        return res.json({
            message:'user not exits'
        })
    }
    if(!password.includes(userData.password)){
        return res.json({
            message:'incorrect password !'
        })
    }

    let token_payload  = {
        username:userData.username,
        email:userData.email,
        phone:userData.phone
    }
    let token = await jwt.sign({token_payload},'SECRET123')

    res.json({
        status:200,
        message: 'you are login successfully',
        token:token
    })
   
}
module.exports = isLogin;