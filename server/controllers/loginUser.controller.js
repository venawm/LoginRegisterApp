const pool = require('../model/db')
const bcrypt = require('bcrypt')
const jwtGenerator = require('../jwt.generator')

async function loginUser(req,res){
    try {
        const {email,password} = req.body

        const user = await pool.query('SELECT * FROM USERS WHERE user_email = $1',[email])
        if(user.rows.length ===0){
            return res.json("Email or password is incorrect")
        }

        const validPassword = await bcrypt.compare(password,user.rows[0].user_password)
       if(!validPassword){
        return res.json("Email or password is incorrect")

       }
       const token = jwtGenerator(user.rows[0].user_id)
       res.json({token})
       

    } catch (error) {
        console.log(error)
        
    }


}

module.exports = loginUser