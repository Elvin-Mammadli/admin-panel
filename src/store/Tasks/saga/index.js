import { fork } from "redux-saga/effects";
import { watchFetchTasks } from "./fetch-tasks.saga";


function* tasksSaga() {
  yield fork(watchFetchTasks)
}

export { tasksSaga };