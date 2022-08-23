const express = require('express')
const app = express()
const task = require('./router/task')


const PORT = 4040

app.use(express.static('./public'))

app.use('/api/v1/tasks',task)



app.listen(PORT,()=>console.log(`server is listening to port ${PORT}`))