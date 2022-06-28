const app = require('express')
const router  = app.Router() 
const pool = require('../model/db')
const authorization = require('../middlewares/authorization')
const dashboardHandler = require('../controllers/dashboard.controller')



router.get('/dashboard',authorization,dashboardHandler)
module.exports = router