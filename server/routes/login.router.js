const express = require('express')
const router = express.Router()


// registering
router.post('/',async (req,res)=>{
    try {
        const{name,email,password} = req.body
    } catch (error) {
        console.log(error)
        
    }
    
})

module.exports = router