const express = require('express')
const app = express()
const task = require('./router/task')
const notFound = require('./notFound/notfound')
const connectDB = require('./connections/connectDB')
require('dotenv').config()


const PORT = 4040


// middleware to get the body sent to  the server
app.use(express.json())

// responding to the static pages
app.use(express.static('./public'))



//using the router middleware
app.use('/api/v1/tasks',task)

app.use(notFound)

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,()=>console.log(`server is listening to port ${PORT}`))
    } catch (error) {
        
    }
}

start()


