import {put, takeLatest, all, call } from 'redux-saga/effects';
import {
  fetchRatesSuccess,
  fetchRatesFailure
} from './rate.actions';
import RateActionTypes from './rate.types';

const BASED_URL = 'https://api.exchangeratesapi.io/latest'; // 'https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc'
function* fetchRatesStartAsyncSaga() {
  try {
    const json = yield fetch(BASED_URL).then(response => response.json());

    yield put(fetchRatesSuccess(json));
  } catch (error) {
    yield put(fetchRatesFailure(error.message));
  }


}
function* fetchRatesStartSaga() {
  yield takeLatest(RateActionTypes.FETCH_RATES_START, fetchRatesStartAsyncSaga);
}

export default function* rootSaga() {
  yield all([call(fetchRatesStartSaga)]);
}
