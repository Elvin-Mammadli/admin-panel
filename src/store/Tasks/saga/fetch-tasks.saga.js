import { takeLatest, put, call } from 'redux-saga/effects';
import { TASKS_ACTIONS } from '..';
import { getTasksData } from '../../../api/tasks';
import { TASKS_ACTION_TYPES } from '../tasks.action-types';


function* fetchTasks() {
  yield put(TASKS_ACTIONS.setTasksLoading());
  try {
    const tasks = yield call(getTasksData)
    yield put(TASKS_ACTIONS.setTasks(tasks));
  } catch (error) {
    yield put(TASKS_ACTIONS.setTasksError(error.message))
  }
}


function* watchFetchTasks() {
  yield takeLatest(TASKS_ACTION_TYPES.FETCH_TASKS, fetchTasks)
}

export { watchFetchTasks };