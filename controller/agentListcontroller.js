const agentList=require('../model/agentList')

const createAgentlist = async(req,res)=>{
    try {
     let {agentName,Mobile,Password,Collection,TotalDays,UserId,Commision,agentID,agentStatus}=req.body;
     let result = await agentList.create({agentName,Mobile,Password,Collection,TotalDays,UserId,Commision,agentID,agentStatus})
     res.status(200)
     res.json({
         massage:"data create succsessfully",
         data:result,
     })
     
    } catch (error) {
     console.log(error);
     
    }
 }
 const deleteAgentListId= async(req,res)=>{
    try {
        let id = req.params.id;
        let result = await agentList.findByIdAndDelete(id)
        res.status(200)
        res.json({
            meassage:"agent ID succsessfully delete"
        })
        
    } catch (error) {
        console.log(error);
        
    }
}
const getAllagentList= async(req,res)=>{
    try {
        let result= await agentList.find()
        res.status(200)
        res.json(result)
    } catch (error) {
        console.log(error);
        
    }
}


 module.exports={
    createAgentlist,
    getAllagentList,
    deleteAgentListId
 }