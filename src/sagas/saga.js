import { takeEvery, put, delay, all } from "redux-saga/effects";
import {
  incCountSuc,
  decCountSuc,
  decCountFail,
  resetCount,
} from "../redux/actions";

function* asyncIncCount() {
  yield delay(2000);
  yield put(incCountSuc(15));
}

function* asyncDecCount() {
  yield delay(2000);
  yield put(decCountSuc(10));
}

function* asyncCounterReset() {
  yield put(resetCount());
}

function* asyncCounterFailure() {
  yield put(decCountFail("Count went out off bound"));
}

export function* watchIncCount() {
  yield takeEvery("INC", asyncIncCount);
}
export function* watchDecCount() {
  yield takeEvery("DEC", asyncDecCount);
}
export function* watchCounterFailure() {
  yield takeEvery("FAIL", asyncCounterFailure);
}
export function* watchCounterReset() {
  yield takeEvery("RESET", asyncCounterReset);
}

export function* rootSaga() {
  yield all([
    watchDecCount(),
    watchIncCount(),
    watchCounterReset(),
    watchCounterFailure(),
  ]);
}
