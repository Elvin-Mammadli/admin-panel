import { TASKS_ACTION_TYPES } from "./tasks.action-types";


export const fetchTasks = (data) => (
  { type: TASKS_ACTION_TYPES.FETCH_TASKS, data }
)

export const setTasks = (data) => (
  { type: TASKS_ACTION_TYPES.SET_TASKS, data }
)

export const setTasksLoading = () => (
  { type: TASKS_ACTION_TYPES.SET_TASKS_LOADING }
)

export const setTasksError = () => (
  { type: TASKS_ACTION_TYPES.SET_TASKS_ERROR }
)