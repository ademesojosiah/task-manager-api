const getAllTask = (req,res)=>{
    res.status(200).send('all items here')
}

const createTask = (req,res)=>{
    res.status(200).send('create a new task')
}

const getTask = (req,res)=>{
    res.status(200).send('get single task')
}


const updateTask = (req,res)=>{
    res.status(200).send('update the task item')
}


const deleteTask = (req,res)=>{
    res.status(200).send('delete task')
}


module.exports = {getAllTask,createTask ,getTask,updateTask,deleteTask}