const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001

const routes = require('./routes/login.router')

app.use(express.json())
app.use(cors())

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use(routes)