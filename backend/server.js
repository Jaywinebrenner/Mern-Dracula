const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware')

const app = express()

// This line enables middleware to be able to use Body Data from the API
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)


app.listen(port, () => console.log(`Server started on port ${port}`))
