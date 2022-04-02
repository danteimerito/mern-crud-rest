const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

// middleware allows us to pull in body data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// app.get('/api/goals', (req, res) => {
//     res.status(200).json({message: 'Get goals'})
// })

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))

