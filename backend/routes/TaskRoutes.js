import express from 'express'
const router = express.Router()
import { createTask , getTasks , deleteTask , editTask } from '../controllers/TaskController.js'

router.route('/').post(createTask).get(getTasks)
router.route('/:id').delete(deleteTask).put(editTask)


export default router
