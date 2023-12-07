const agent=require("../model/agentInfoModel")


const createAgent = async(req,res)=>{
   try {
    let {agentName,Mobile,Password,Collection,TotalDays,UserId,Commision,AgentId}=req.body;
    let result = await agent.create({agentName,Mobile,Password,Collection,TotalDays,UserId,Commision,AgentId})
    res.status(200)
    res.json({
        massage:"data create succsessfully",
        data:result,
    })
    
   } catch (error) {
    console.log(error);
    
   }
}

const getAllagentinfo= async(req,res)=>{
    try {
        let result= await agent.find()
        res.status(200)
        res.json(result)
    } catch (error) {
        console.log(error);
        
    }
}

const getagentbyId= async(req,res)=>{
    try {
        let id =req.params.id;
        let result= await agent.findById(id)
        res.json(result);
        console.log(id);
        
    } catch (error) {
        console.log(error);
        
    }
}


module.exports={
    createAgent,
    getAllagentinfo,
    getagentbyId
    
}