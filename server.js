const express = require('express')
const connectDB = require('./config/db')

const app = express()

app.get('/', (req,res) => res.send('API running'))

const PORT = process.env.PORT || 5000 

const connectdb = require('./config/db')

connectDB()
app.listen(PORT , ()=> console.log(`server started on ${PORT}`))

