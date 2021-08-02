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

export const getTasksReducer = (state = { tasks: [] }, action) => {
  switch (action.type) {
    case GET_TASKS_REQUEST:
      return {
        loading: true,
        tasks: [],
      }

    case GET_TASKS_SUCCESS:
      return {
        loading: false,
        tasks: action.payload,
      }

    case GET_TASKS_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export const addTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TASKS_REQUEST:
      return {
        loading: true,
      }

    case ADD_TASKS_SUCCESS:
      return {
        loading: false,
        task: action.payload,
      }

    case ADD_TASKS_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export const editTasksReducer = (state = { current: null } , action) => {
  switch(action.type) {
    case SET_CURRENT : 
    return { 
      current: {
        id: action.payload.id,
        title: action.payload.title,
        name: action.payload.name
      }
  }

    case CLEAR_CURRENT : 
    return { current: null  }

    default:
      return state
  }
}

export const updateTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TASK_REQUEST:
      return {
        loading: true,
      }

    case UPDATE_TASK_SUCCESS:
      return {
        loading: false,
        updatedTask: action.payload
      }

    case UPDATE_TASK_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export const deleteTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_TASK_REQUEST:
      return {
        loading: true,
      }

    case DELETE_TASK_SUCCESS:
      return {
        loading: false,
      }

    case DELETE_TASK_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}
