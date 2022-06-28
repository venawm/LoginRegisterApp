const express = require('express')
const router = express.Router()
const authorization = require('../middlewares/authorization')

// User Registration
const registerUser = require('../controllers/register.controller')
// User Login
const loginUser = require('../controllers/loginUser.controller')

router.get('/auth',(req,res)=>{
    res.send('Not A genuine route for now')
})
// registering
router.post('/auth/register',registerUser)
router.post('/auth/login',loginUser)
router.get('/verify',authorization,(req,res)=>{
    try {
        
        res.json(true)
        
    } catch (error) {
        console.log(error)
    }
})



module.exports = router