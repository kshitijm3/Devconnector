const express = require('express')
const connectDB = require('./config/db')

const app = express()

app.get('/', (req,res) => res.send('API running'))

const PORT = process.env.PORT || 5000 



connectDB()

app.use('/api/users' , require('./routes/apis/users'))
app.use('/api/auth' , require('./routes/apis/auth'))
app.use('/api/profiles' , require('./routes/apis/profiles'))
app.use('/api/posts' , require('./routes/apis/post'))

app.listen(PORT , ()=> console.log(`server started on ${PORT}`))

