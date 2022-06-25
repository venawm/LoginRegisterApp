const express = require('express')
const router = express.Router()

// User Registration
const registerUser = require('../controllers/register.controller')


// registering
router.post('/auth/register',registerUser)
router.post('auth/login',loginUser)

module.exports = router