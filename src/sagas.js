import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("DOG_API_CALL_REQUEST", workerDogSaga);
  yield takeLatest("CAT_API_CALL_REQUEST", workerCatSaga);
}

// function that makes the api request and returns a Promise for response
function fetchDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breed/hound/images/random"
  });
}

// function that makes the api request and returns a Promise for response
function fetchCat() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breed/poodle/images/random"
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerDogSaga() {
  try {
    const response = yield call(fetchDog);
    console.log(response);
    const dog = response.data.message;

    // dispatch a success action to the store with the new dog
    yield put({ type: "DOG_API_CALL_SUCCESS", dog });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "DOG_API_CALL_FAILURE", error });
  }
}
function* workerCatSaga() {
  try {
    const response = yield call(fetchCat);
    console.log("response", response);
    const cat = response.data.message;

    // dispatch a success action to the store with the new dog
    yield put({ type: "CAT_API_CALL_SUCCESS", cat });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "CAT_API_CALL_FAILURE", error });
  }
}
