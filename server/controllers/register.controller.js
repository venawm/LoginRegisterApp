const pool = require('../model/db')
const bcrypt = require('bcrypt')
const jwtGenerator = require('../jwt.generator')

async function registerUser(req,res){
    try {
        const{name,email,password} = req.body
        
        const user = await pool.query('SELECT * FROM users WHERE user_email = $1',[email])
        if(user.rows.length != 0){
            return res.status(401).send('Users already exists')
        }
        else{
            // Decrypting Password
            const saltRound = 10;
            const salt = await bcrypt.genSalt(saltRound)
            const bcryptPassword =  await bcrypt.hash(password,salt)

            // Enter user in database
            const newUser = await pool.query("INSERT INTO users (user_name,user_email,user_password) VALUES ($1,$2,$3) RETURNING * ",[name,email,bcryptPassword])
            

                 // JWT TOKEN
            const token =  jwtGenerator(newUser.rows[0].user_id)
            console.log(token)
            await res.send({token})
            

        }

   
        
    } catch (error) {
        console.log(error)
        
    }
    
}

module.exports = registerUser