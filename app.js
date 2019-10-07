const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
// make enviroment variables accessible
require('dotenv').config()
// establish db connection
require('./database')
// routes
const EmployeeRoute = require('./routes/employee.route')
const SiteRoute = require('./routes/site.route')
const AttendanceRoute = require('./routes/attendance.route')

// auth
// const passport = require('passport')
/*const {
  FindById,
  JWT_OPTIONS,
  JwtStrategy
} = require('./middleware/check-auth')
*/
// body parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(morgan('dev'))
app.use(bodyParser.json())
// allowing CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  )
  next()
})

app.use('/api/employee', EmployeeRoute)
app.use('/api/site', SiteRoute)
app.use('/api/attendance', AttendanceRoute)

app.listen(4000, () => console.log('EAS up on 4000..'))