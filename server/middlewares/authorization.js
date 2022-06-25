const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = async(req,res,next)=>{
    try {
        const jwtToken = req.header("token");
        if(!jwtToken){
            return res.json('Not authorized')
        }
        const payload = jwt.verify(jwtToken,process.env.JWT_KEY)
        req.user = payload.user
    } catch (error) {
        console.log(error)
        
    }
    next()
}