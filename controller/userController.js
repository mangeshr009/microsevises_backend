const user = require("../model/agentInfoModel");

const createUserData = async (req, res) => {
  try {
    let { FirstName, Email, Password, dob, mobileno } = req.body;
    let result = await user.create({ FirstName, Email, Password, dob, mobileno });
    res.status(200);
    res.json({
      massage: "user Create successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

const getallUserdata= async(req,res)=>{
  
  try {
    let result= await user.find()
    res.status(200)
    res.json(result)
  } catch (error) {
    console.log(error);
    
  }
}
const createUserLogCtrlr = async(req,res)=>{
  const { email, password } = req.body;
  try {
    const user = await user.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(200)
      .json({ message: 'Invalid credentials' });
    }
    return res.json({ message: 'Login successful' });

  } catch (error) {
    console.error('Error during login:', error);
    return res.status(200).json({ message: 'Internal server error' });

  }
}

module.exports = {
    createUserData,
    getallUserdata,
    createUserLogCtrlr
}