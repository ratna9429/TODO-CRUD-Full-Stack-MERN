import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask , updateTask , clearCurrent } from "../actions/taskActions"

const AddTaskArea = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("")
  const [name, setName] = useState("")

  const currentState = useSelector(state => state.editTasks)
  const { current } = currentState

  useEffect(() => {
    
    if (current !== null) {
      setTitle(current.title)
      setName(current.name)
    } else {
      setTitle('')
      setName('')
    }
  }, [dispatch , current])

  const submitHandler = async (e) => {
    e.preventDefault()
    
    if (current === null) {
      await dispatch(addTask({title, name}))
    } else {
      await dispatch(updateTask(current.id , title , name))
    }
    setTitle('')
    setName('')
    dispatch(clearCurrent())
  }

  return (
    <>
      {current == null ? <h1>Add Task</h1> : <h1>Update Task</h1>}
      <form onSubmit={submitHandler}>
        <div>
          <input
            className='taskInput'
            type='text'
            placeholder='Enter Your Task Here...'
            value={title || ''}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            className='taskInput'
            type='text'
            placeholder='Enter Your Name Here...'
            value={name || ''}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
        <button type='submit'>{current ? 'Update' : 'Add' }</button>
        </div>
      </form>
    </>
  )
}

export default AddTaskArea
