import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
})

const Task = new mongoose.model('Task' , taskSchema)
export default Task