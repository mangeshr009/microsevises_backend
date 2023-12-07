const { createUserData, getUserdata, getallUserdata } = require('../controller/userController')

const router = require('express').Router()
const isLogin= require('../controller/auth/login')
const { createAgent, getAllagentinfo, getagentbyId } = require('../controller/agentInfoController')


router
    .route("/user")
    .post(createUserData)
    .get(getallUserdata)

 router
    .route('/user/login')
    .post(isLogin)

    router
    .route("/agent")
    .post(createAgent)
    .get(getAllagentinfo)

    router
     .route("/agent/:id")
     .get(getagentbyId)
 

    module.exports=router