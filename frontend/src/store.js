import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getTasksReducer , addTaskReducer , deleteTaskReducer , editTasksReducer , updateTaskReducer} from './reducers/taskReducers'


const reducer = combineReducers({
  getTask : getTasksReducer,
  addTask : addTaskReducer,
  deleteTask : deleteTaskReducer,
  editTasks: editTasksReducer,
  updateTask: updateTaskReducer
})

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
