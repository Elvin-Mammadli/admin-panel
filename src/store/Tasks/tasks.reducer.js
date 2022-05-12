import { TASKS_ACTION_TYPES } from "./tasks.action-types";


const tasksInit = {
  data: [],
  loading: false,
  error: ''
}

export const tasksReducer = (store = tasksInit, action) => {
  switch (action.type) {
    case TASKS_ACTION_TYPES.SET_TASKS:
      return {
        ...store,
        ...tasksInit,
        data: action.data
      };

    case TASKS_ACTION_TYPES.SET_TASKS_LOADING:
      return {
        ...store,
        ...tasksInit,
        loading: true
      }

    case TASKS_ACTION_TYPES.SET_TASKS_ERROR:
      return {
        ...store,
        ...tasksInit,
        error: action.data
      }

    default:
      return store;
  }
}