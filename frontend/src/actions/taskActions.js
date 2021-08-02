import {
  ADD_TASKS_FAIL,
  ADD_TASKS_REQUEST,
  ADD_TASKS_SUCCESS,
  CLEAR_CURRENT,
  DELETE_TASK_FAIL,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  GET_TASKS_FAIL,
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
  SET_CURRENT,
  UPDATE_TASK_FAIL,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
} from '../constants/taskConstants'
import axios from 'axios'

export const getTasks = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TASKS_REQUEST })

    const { data } = await axios.get('/api/task')

    dispatch({
      type: GET_TASKS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_TASKS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const addTask = (taskData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TASKS_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post('/api/task', taskData, config)

    dispatch({
      type: ADD_TASKS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ADD_TASKS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const setCurrent = (id , title , name) => async (dispatch) => {
  dispatch({type: SET_CURRENT , 
    payload: {
      id,
      title,
      name
    }
  })
}

export const clearCurrent = () => async (dispatch) => {
  dispatch({type: CLEAR_CURRENT})
}


export const updateTask = (id , title , name) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_TASK_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.put(`/api/task/${id}`, {title , name} , config)

    dispatch({
      type: UPDATE_TASK_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: UPDATE_TASK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


export const deleteTask = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_TASK_REQUEST })

    await axios.delete(`/api/task/${id}`)

    dispatch({
      type: DELETE_TASK_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: DELETE_TASK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
