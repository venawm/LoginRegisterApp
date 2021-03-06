const express = require('express')
const app = express()
const cors = require('cors')
const port = 9001

const routes = require('./routes/login.router')
const dashboardRoutes = require('./routes/dashboard')

app.use(express.json())
app.use(cors())


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use(routes)
app.use(dashboardRoutes)