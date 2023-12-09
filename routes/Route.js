
const router = require('express').Router()
const { createAgent, getAllagentinfo, getagentbyId, deleteAgentId } = require('../controller/agentInfoController')
const { createAgentlist, deleteAgentListId, getAllagentList } = require('../controller/agentListcontroller')

    router
    .route("/agent")
    .post(createAgent)
    .get(getAllagentinfo)

    router
     .route("/agent/:id")
     .get(getagentbyId)
     .delete(deleteAgentId)
 
    router
    .route("/agentList")
    .post(createAgentlist)
    .get(getAllagentList)

    router
    .route("/agentList/:id")
    .delete(deleteAgentListId)


    module.exports=router