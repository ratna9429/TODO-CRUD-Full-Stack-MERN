import Task from '../models/TaskModel.js'

const createTask = async (req, res) => {
  try {
    const { title , name } = req.body

    const newTask = await new Task({ title , name })

    newTask.save()

    res.status(201).json({
      task: newTask.title,
      name: newTask.name,
    })
  } catch (error) {
    res.status(400).json({ Message: 'Something went wrong' })
  }
}

const editTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
   
    if (task) {
      task.title = req.body.title,
      task.name = req.body.name
    }

    const updatedTask = await task.save()

    res.json({
      id: updatedTask._id,
      title: updatedTask.title,
      name: updatedTask.name
    })
  } catch (error) {
    res.status(400).json({ Message: 'No Task Found' })
  }
}

const getTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({})

    if (allTasks.length === 0){
      res.status(404).json({ Message: 'No Tasks To Display' })
    } else {
      res.status(201).json(allTasks)
    }
  } catch (error) {
    res.status(400).json({ Message: 'Something went wrong' })
  }
}

const deleteTask = async (req , res) => {
  try {
    const task = await Task.findById(req.params.id)

    if(task){
      task.remove()
      res.status(201).json({task , Message: 'Above Task Deleted'})
    } else {
      res.status(404).json({ Message: 'No Task Found' })
    }
  } catch (error) {
    res.status(400).json({ Message: 'Something went wrong' })
  }
}

export { createTask , getTasks , deleteTask , editTask}
