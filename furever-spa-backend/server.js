// dependencies------------------------------
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.PORT || 3000
const fileUpload = require('express-fileupload')


// database connection ----------------------
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
  .then(() => console.log("db connected!"))
  .catch(err => console.error("db connection failed ", err))


// express app setup -----------------------
const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('*', cors())
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 }
}))

// routes ---------------------------------

// auth
const authRouter = require('./routes/auth')
app.use('/auth', authRouter)

// user
const userRouter = require('./routes/user')
app.use('/user', userRouter)


// run app listen on port --------------------
app.listen(port, () => {
  console.log("App running on port ", port)
})