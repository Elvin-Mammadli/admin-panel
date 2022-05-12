import { combineReducers } from "redux";
import { tasksReducer } from "./Tasks/tasks.reducer";

export default combineReducers({
  tasks: tasksReducer
})