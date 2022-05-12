import { fork } from 'redux-saga/effects';
import { tasksSaga } from './Tasks/saga';

export default function* rootSaga() {
  yield fork(tasksSaga)
}