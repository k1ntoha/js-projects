
// envoking sever 
require('./db/connect')
const express = require('express') 
const app = express( )
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not_found')
const errorHandaler = require('./middleware/error-handaler')

app.use(express.json())
app.use(express.static('./public'))
app.use(notFound)
app.use(errorHandaler)
app.use('/api/v1/tasks', tasks)



port = 3000 

const start= async ()=>{
    try { 
await connectDB(process.env.MONGO_URI)
app.listen(port , console.log ('Server and Database envoked...'))
}
catch(err){
    console.log(err)
}
}
start()