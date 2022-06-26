const pool = require('../model/db')
const authorization = require('../middlewares/authorization')

async function dashboardController(req,res){
    // res.json(req.user)

    const user = await pool.query('SELECT * FROM users WHERE user_id = $1',[req.user])
    res.json(user.rows[0].user_name)

}

module.exports= dashboardController