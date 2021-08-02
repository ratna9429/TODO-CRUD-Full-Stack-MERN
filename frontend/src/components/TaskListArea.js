import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  getTasks,
  deleteTask,
  setCurrent,
  clearCurrent,
} from "../actions/taskActions"

const TaskListArea = () => {
  const dispatch = useDispatch()

  const getTask = useSelector((state) => state.getTask)
  const { loading, tasks } = getTask

  const addTaskReport = useSelector((state) => state.addTask)
  const { loading: addTaskLoading } = addTaskReport

  const updateStatus = useSelector(state => state.updateTask)
  const { loading : updateLoading } = updateStatus

  const deleteTaskReport = useSelector((state) => state.deleteTask)
  const { loading: deleteLoading } = deleteTaskReport

  const getTasksFunction = async () => 
    await dispatch(getTasks())

  useEffect(() => {
    !deleteLoading && !addTaskLoading && !updateLoading && getTasksFunction()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, deleteLoading, addTaskLoading , updateLoading])

  const deleteTaskHandler = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <>
      {!loading && <h1>List Of Tasks</h1>}
      {loading ? (
        <h2>Loading...</h2>
      ) : tasks ? (
        tasks.map((task) => (
          <div key={task._id}>
            <li>
              {task.title}{" "}
              <span>
                <strong>Created By: </strong>
                {task.name}
              </span>
            </li>
            <div>
              <button
                type='submit'
                onClick={(e) => {
                  e.preventDefault()
                  dispatch(setCurrent(task._id, task.title, task.name))
                }}
              >
                {" "}
                Edit{" "}
              </button>
              <button
                type='submit'
                onClick={() => {
                  deleteTaskHandler(task._id)
                  dispatch(clearCurrent())
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <h2>No Tasks To Display</h2>
      )}
    </>
  )
}

export default TaskListArea
